import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/roomController.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", createRoom);

//UPDATE

router.put("/:id", updateRoom);
//DELETE
router.delete("/:id/:hotelid",  deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;