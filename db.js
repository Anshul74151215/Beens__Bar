require("dotenv").config();
const mongoose = require('mongoose')

const mongdb = async () => {
    mongoose.connect("mongodb+srv://Anshul_ojha:Luhsna@atlascluster.ekt7t1o.mongodb.net/mern_db", { useNewUrlParser: true }).then(async (result) => {
        console.log('Mongo connected');
        const fetched_data = await result.connection.db.collection("foodData2");

        fetched_data.find({}).toArray().then(async (data) => {
            const foodCategory = await result.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray().then((catData)=>{
                global.foodData2 = data;
                global.foodCategory = catData;
            })
        })
    })
}

module.exports = mongdb
