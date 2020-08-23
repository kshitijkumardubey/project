const express = require("express");
const router = express.Router();

const{getProductById,createProduct,getProduct, photo,updateProduct,deleteProduct,getallProducts,getAllUniqueCategories}=require("../controllers/product")
const{isSignedIn,isAthenticated,isAdmin} = require("../controllers/auth")
const{getUserById}= require("../controllers/user")

//all of params
router.param("userId",getUserById);
router.param("productId",getProductById);

//all of actual routes
//create route
router.post("/product/create/:userId",isSignedIn,isAthenticated,isAdmin,createProduct)

//read routes
router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId",photo)

//delete route
router.delete("/product/:productId/:userId",isSignedIn,isAthenticated,isAdmin,deleteProduct);

//update route
router.put("/product/:productId/:userId",isSignedIn,isAthenticated,isAdmin,updateProduct);

//listing route

router.get("/products",getallProducts);

router.get("/products/categories",getAllUniqueCategories);

module.exports = router;