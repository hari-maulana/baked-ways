import { PrismaClient } from "@prisma/client";
import multer from "multer";
import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { loginRoute, registerRoute } from "./src/routes/authRoutes";
import {
  getUserProfileRoute,
  updateUserProfileRoute,
} from "./src/routes/userRoutes";
import { bakeries, getProducts } from "./src/controllers/partnerController";
import { get } from "http";

const prisma = new PrismaClient();
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** file uploads */
cloudinary.v2.config({
  cloud_name: "circlehmhm",
  api_key: "792244431418968",
  api_secret: "BWgcF_czl3IYzIn6t6Tl1sZkIXY",
});

interface CloudinaryParams {
  folder?: string;
  allowed_formats?: string[];
  public_id?: (req: express.Request, file: Express.Multer.File) => string;
}

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "bw-products",
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) => `products/${Date.now()}_${file.originalname}`,
  } as CloudinaryParams,
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

/** file uploads */

// ROUTES
app.use("/auth", registerRoute);
app.use("/auth", loginRoute);
// USER ROUTES
app.use("/user", updateUserProfileRoute);
app.use("/user", getUserProfileRoute);
// PARTNER ROUTES
app.get("/bakeries", bakeries);
app.get("/bakery/:id/products", getProducts);

// Your existing route
app.post(
  "/admin/bakery/product/:id",
  upload.single("image"),
  async (req, res) => {
    const { id } = req.params;

    try {
      if (!req.file) {
        return res.status(400).json({ message: "Image file is required." });
      }

      const { name, price, description } = req.body;

      const bakery = await prisma.bakery.findUnique({
        where: { adminId: parseInt(id) },
      });

      if (!bakery) {
        return res
          .status(400)
          .json({ message: "You do not own a bakery yet." });
      }

      const parsedPrice = parseFloat(price);
      if (isNaN(parsedPrice) || parsedPrice < 0) {
        return res.status(400).json({ message: "Invalid price." });
      }

      const product = await prisma.product.create({
        data: {
          name,
          price: parsedPrice,
          description,
          image: req.file.path,
          bakeryId: bakery.id,
        },
      });

      res.status(201).json({ product });
    } catch (error) {
      res.status(500).json({ message: "Error adding product", error });
    }
  }
);

/** get user */
app.get("/bakeries", async (req, res) => {
  try {
    const bakeries = await prisma.bakery.findMany({
      include: {
        products: true,
      },
    });

    res.status(200).json({ bakeries });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
/** get user */

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
        bakery: true,
      },
    });

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
