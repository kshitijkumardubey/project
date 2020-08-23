const express = require("express");
const router = express.Router();

const{isSignedIn,isAthenticated,isAdmin} = require("../controllers/auth")
const{getUserById,pushOrderInPurchaseList}= require("../controllers/user")
const{updateStock}=require("../controllers/product")

const {getOrderById,createOrder} = require("../controllers/category")

//params
router.param("userId",getUserById)
router.param("orderId",getOrderById)


//actual routes



//create
router.post("/order/create/:userId",isSignedIn,
isAthenticated,
pushOrderInPurchaseList,
updateStock,
createOrder)

//read

module.exports = router;