import { Router } from "express";
import hospital from "../controllers/hospitalProfile.controller.js";

const router = Router();

router.get("/profile/:id" , hospital.profile);
router.put("/update-profile/:id", hospital.updateProfile);
router.delete("/delete-profile/:id", hospital.deleteProfile);

export default router;