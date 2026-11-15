// Secure backend starter. Never put provider API keys in public/ or frontend JavaScript.
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json({limit:"20mb"}));
app.use(express.static(path.join(__dirname,"public")));
app.get("/api/health",(_req,res)=>res.json({ok:true,service:"jalayajay-ai-studio",generationConfigured:Boolean(process.env.VIDEO_PROVIDER_API_KEY)}));
app.post("/api/generations",async(req,res)=>{
  const {prompt,mode,duration,aspectRatio,quality,referenceImage}=req.body||{};
  if(!prompt || typeof prompt!=="string") return res.status(400).json({error:"A prompt is required."});
  if(!process.env.VIDEO_PROVIDER_API_KEY) return res.status(503).json({error:"Video provider is not configured yet. Add credentials on the server, never in frontend code."});
  // TODO: Add a provider-specific adapter here (fal.ai, Replicate, or a self-hosted model).
  // Provider APIs differ in input format, image upload, job polling, cost and output URL handling.
  return res.status(501).json({error:"Provider adapter not implemented yet.",received:{mode,duration,aspectRatio,quality,hasReference:Boolean(referenceImage)}});
});
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Studio running on port ${port}`));
