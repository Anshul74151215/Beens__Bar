const express = require('express')
const router = express.Router();
router.get('/foodData',(req,res)=>{
    try{
        req.send([global.foodData2,global.foodCategory])

    }catch(error){
        console.log(error,message);
        req.send("server err...")
    }
})
module.exports = router;