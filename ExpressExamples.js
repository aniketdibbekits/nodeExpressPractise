const express = require ('express');
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded())
// const phone=require("./Data");

// const customMiddleware = (req,res,next)=>{
//     console.log("Entered middleware");
//     next()

// }

const isLoggedin=(req,res,next)=>{
    let isuserloggedin = false;
    if(!isuserloggedin){
        res.send("you are not looged in!");
        return;
    }
    next();
}
app.use(isLoggedin);
// app.use(express.static('public'));
// app.use(customMiddleware)
app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>, "<a href="/api/phone">Phone</a>"')
})


app.get('/api/phone',customMiddleware,(req,res)=>{
    // const newItem=phone.map((product)=>{
    //     const {id,name,image}=product;
    //     return {id,name,image}
    // })
    res.json(phone)
})

// app.get('/jsonexample',(req,res)=>{
//     res.json([
//         {
//             firstName:"aniket",
//             lastName:"Dibbe"
//         },
//         {
//             fiestName:"amit",
//             lastName:"Hadge"
//         }
//     ])
// })


app.get('/file',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

//query
app.get("/shop",(req,res)=>{
    console.log(req.query)
    res.send("hello");
})

//params
app.get("/users/:username",(req,res)=>{
    console.log(req.params)
    res.send("Welcome dost");
})


const phone=[
    {
        id:1,
        name:"Apple",
        image:"https://tse1.mm.bing.net/th?id=OIP.mNY9Q6PnZ1AlKk4ZLp3KVQHaKm&pid=Api&P=0&h=180",
        price:60000
    },
    {
        id:2,
        name:"Vivo",
        image:"https://tse1.mm.bing.net/th?id=OIP.mNY9Q6PnZ1AlKk4ZLp3KVQHaKm&pid=Api&P=0&h=180",
        price:60000
    },
    {
        id:3,
        name:"Samsung",
        image:"https://tse1.mm.bing.net/th?id=OIP.mNY9Q6PnZ1AlKk4ZLp3KVQHaKm&pid=Api&P=0&h=180",
        price:60000
    },
    {
        id:5,
        name:"Karbonn",
        image:"https://tse1.mm.bing.net/th?id=OIP.mNY9Q6PnZ1AlKk4ZLp3KVQHaKm&pid=Api&P=0&h=180",
        price:60000
    },
    {
        id:6,
        name:"OnePlus",
        image:"https://tse1.mm.bing.net/th?id=OIP.mNY9Q6PnZ1AlKk4ZLp3KVQHaKm&pid=Api&P=0&h=180",
        price:60000
    },
    {
        id:7,
        name:"Nothing",
        image:"https://tse1.mm.bing.net/th?id=OIP.mNY9Q6PnZ1AlKk4ZLp3KVQHaKm&pid=Api&P=0&h=180",
        price:60000
    },
    {
        id:8,
        name:"JioPhone",
        image:"https://tse1.mm.bing.net/th?id=OIP.mNY9Q6PnZ1AlKk4ZLp3KVQHaKm&pid=Api&P=0&h=180",
        price:60000
    },
    
];
app.get("/data",(req,res)=>{
    res.send(phone);
})

app.get("/data/even",(req,res)=>{
    res.send(phone.filter(phonedata=>phonedata.id % 2==0));
})
app.get("/data/name",(req,res)=>{
    res.send(phone.filter(phonedata=>phonedata.name.length==4));
})

app.get("/about",(req,res)=>{
    res.sendFile(__dirname+'/About.html');
})
//there i also another method res.redirect which is used to redirect to another route or page.

app.get("/download",(req,res)=>{
    res.download(__dirname+'/About.html');
})

//form
//we are using middleware body-parser
app.get("/register",(req,res)=>{
    res.sendFile(__dirname+'/Register.html');
})
//middleware is something in between client and the server which has access to all the request coming from client.
app.post("/formdata",(req,res)=>{
    // console.log(req.body)
    res.send("Registration successfully Welcome"+ res.body.firstName + ' '+ res.body.lastName)
})


app.get("/registration",(req,res)=>{
    res.download(__dirname+'/About.html');
})



app.listen(3000,()=>{
    console.log("server is running")
})