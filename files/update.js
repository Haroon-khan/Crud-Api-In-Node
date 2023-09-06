const dbConnection = require("../mongodb")

const updateData = async () => {
    let data = await dbConnection();
    let result= await data.updateMany(
        { name: 'Max 5' } , {
            $set: { name: 'max-pro-15', price:550 } 
        }
    );
    console.log(result)
}

updateData()