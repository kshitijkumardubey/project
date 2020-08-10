const express = require("express")
const router = express.Router();

const{
    getCategoryById,
    createCategory,
    getCategory,
    getAllCategory,
    updateCategory,
    removeCategory
} = require("../controllers/category")
const{isSignedIn,isAdmin,isAthenticated}= require("../controllers/auth")
const{getUserById}= require("../controllers/user")

//params
router.param("userId",getUserById);
router.param("categoryId",getCategoryById)

//actual routes goes here


//create routes
router.post("/category/create/:userId",
isSignedIn,
isAthenticated,
isAdmin,
createCategory);

//read routes
router.get("/category/:categoryId",getCategory);
router.get("/categories",getAllCategory)

//update
router.put("/category/:categoryId/:userId",
isSignedIn,
isAthenticated,
isAdmin,
updateCategory);


//delete

router.delete("/category/:categoryId/:userId",
isSignedIn,
isAthenticated,
isAdmin,
removeCategory);



module.exports = router;