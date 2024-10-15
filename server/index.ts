import { PrismaClient } from "@prisma/client";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { loginRoute, registerRoute } from "./src/routes/authRoutes";
import bcrypt from "bcrypt";

import {
  getUserProfileRoute,
  updateUserProfileRoute,
} from "./src/routes/userRoutes";

const prisma = new PrismaClient();
const app = express();
dotenv.config();

app.use(cors());
// Middleware utk parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Define types for Cloudinary storage parameters
interface CloudinaryParams {
  folder?: string;
  allowed_formats?: string[];
  public_id?: (req: express.Request, file: Express.Multer.File) => string;
}

// Configure Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: 'uploads', // Folder where the files will be uploaded
    allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed formats
    public_id: (req, file) => `${Date.now()}_${file.originalname}`, // Custom filename
  } as CloudinaryParams,
});

// Create multer instance with Cloudinary storage
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
});

// Upload route
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Cloudinary will provide the file URL
  res.json({
    message: 'File uploaded successfully!',
    filePath: req.file.path, // Cloudinary URL of the uploaded file
  });
});

*/

// ROUTES
app.use("/auth", registerRoute);
app.use("/auth", loginRoute);

app.use("/user", updateUserProfileRoute);
app.use("/user", getUserProfileRoute);

app.post("/admin/bakery/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { name, price, description } = req.body;
    const bakery = await prisma.bakery.findUnique({
      where: { adminId: parseInt(id) },
    });

    if (!bakery) {
      return res.status(400).json({ message: "You do not own a bakery yet." });
    }

    const product = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        description,
        bakeryId: bakery.id,
      },
    });

    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
});

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
