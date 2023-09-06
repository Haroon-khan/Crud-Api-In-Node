const dbConnection= require ('../mongodb')

const deleteUpdate=async ()=>{
    const db=await dbConnection();
    const result = await db.deleteOne(
        {name:'Max 5'}
    )
    console.log(result)
}

deleteUpdate()

