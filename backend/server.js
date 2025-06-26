import express from "express";
import app from "./app.js";
import cloudinary from "cloudinary";
import path from "path";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // CLOUDINARY_CLIENT_NAME
  api_key: process.env.CLOUDINARY_API_KEY,       // CLOUDINARY_CLIENT_API
  api_secret: process.env.CLOUDINARY_API_SECRET, // CLOUDINARY_CLIENT_SECRET
});

const _dirname=path.resolve();
app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(_,res)=>{
  res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
 