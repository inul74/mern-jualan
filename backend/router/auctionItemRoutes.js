import {
  addNewAuctionItem,
  getAllItems,
  getAuctionDetails,
  getMyAuctionItems,
  removeFromAuction,
  republishItem,
} from "../controllers/auctionItemController.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import express from "express";

const router = express.Router();

router.post(
  "/create",
  isAuthenticated,
  isAuthorized("Auctioner"),
  addNewAuctionItem
);
router.get("/allitems", getAllItems);
router.get("/auction/:id", isAuthenticated, getAuctionDetails);
router.get(
  "/myitems",
  isAuthenticated,
  isAuthorized("Auctioner"),
  getMyAuctionItems
);
router.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized("Auctioner"),
  removeFromAuction
);
router.put(
  "/item/republish/:id",
  isAuthenticated,
  isAuthorized("Auctioner"),
  republishItem
);

export default router;
