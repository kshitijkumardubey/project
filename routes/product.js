const express = require("express");
const router = express.Router();

const{getProductById,createProduct}=require("../controllers/product")
const{isSignedIn,isAthenticated,isAdmin} = require("../controllers/auth")
const{getUserById}= require("../controllers/user")

//all of params
router.param("userId",getUserById);
router.param("productId",getProductById);

//all of actual routes
router.post("/product/create/:userId",isSignedIn,isAthenticated,isAdmin,createProduct)

module.exports = router;