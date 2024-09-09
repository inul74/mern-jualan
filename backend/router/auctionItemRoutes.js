import { addNewAuctionItem } from "../controllers/auctionItemController.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import express from "express";

const router = express.Router();

router.post("/create", isAuthenticated, isAuthorized("Auctioner"), addNewAuctionItem);

export default router;
