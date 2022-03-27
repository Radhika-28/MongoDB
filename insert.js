const dbConnect = require('./mongodb');

const insertData=async ()=>{
   let data = await dbConnect();
  let result = await data.insert(
      [
          {description:'task5',completed:'true'}
      ]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();