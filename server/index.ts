import { PrismaClient } from "@prisma/client";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
//import path from 'path';
//import multer, { diskStorage } from 'multer';
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { loginRoute, registerRoute } from "./src/routes/authRoutes";

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

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/profile/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const profile = await prisma.userProfile.findUnique({
      where: { userId: parseInt(userId) },
      include: {
        user: true,
      },
    });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/profile/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const { profilePict, address, fullname } = req.body;
    const profile = await prisma.userProfile.update({
      where: { userId: parseInt(userId) },
      data: {
        address,
        profilePict,
        user: {
          update: {
            fullname,
          },
        },
      },
    });
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is workinggg!");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
