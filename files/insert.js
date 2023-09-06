const dbConnection= require ('../mongodb')

const insert=async ()=>{
    const db=await dbConnection();
    const result = await db.insertMany([
        {name:'Note1 ', brand:'Vivo' , Price:'320', Category:'Mobile'},
        {name:'Max5 ', brand:'Vivo' , Price:'320', Category:'Mobile'},
        {name:'Max4 ', brand:'Vivo' , Price:'320', Category:'Mobile'},
        {name:'Max5 ', brand:'Vivo' , Price:'320', Category:'Mobile'},
        {name:'Max5 ', brand:'Vivo' , Price:'320', Category:'Mobile'},
    ])
    console.log(result)
}

insert()
