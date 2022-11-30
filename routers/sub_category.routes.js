import { Router } from "express";
const router = Router();

router.post("/add");
router.get("/");
router.put("/:id");
router.delete("/:id");

export { router };
