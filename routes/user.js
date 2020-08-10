const express = require("express")
const router = express.Router()

const {getUserById,getUser,updateUser,userPurchaseList} = require("../controllers/user")
const {isSignedIn,isAthenticated,isAdmin} = require("../controllers/auth");
const { update } = require("../models/user");

router.param("userId",getUserById);

router.get("/user/:userId",isSignedIn,isAthenticated,getUser);
router.put("/user/:userId",isSignedIn,isAthenticated,updateUser);
router.get("/orders/user/:userId",isSignedIn,isAthenticated,userPurchaseList);


module.exports= router;