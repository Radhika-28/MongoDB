const dbConnect = require('./mongodb')

dbConnect().then((resp)=>{
    resp.find({completed:true}).toArray().then((data)=>{
        console.warn(data)
    })
})

