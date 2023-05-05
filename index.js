
const express = require("express")


const data=[
    {

        id:"1",
        numberOfSeats:100,
        amenities:["AC","Chairs","Discolights"],
        price:5000,
        ifBooked:"true",
        CustomerName:"Krish",
        date:"05-may-2022",
        startTime:"10-may-2022 at 12PM",
        endTime:"11-may-2022 at 11am",
        RoomId:201,
        RoomName:"Duplex",
    },
    {

        id:"2",
        numberOfSeats:100,
        amenities:["AC","Chairs","Discolights"],
        price:5000,
        ifBooked:"true",
        CustomerName:"harry",
        date:"05-may-2023",
        startTime:"10-may-2023 at 12PM",
        endTime:"11-may-2023 at 11am",
        RoomId:202,
        RoomName:"Duplex",
    },
    {

        id:"3",
        numberOfSeats:100,
        amenities:["AC","Chairs","Discolights"],
        price:5000,
        ifBooked:"true",
        CustomerName:"Swetha",
        date:"05-may-2024",
        startTime:"10-may-2024 at 12PM",
        endTime:"11-may-2024 at 11am",
        RoomId:203,
        RoomName:"Duplex",
    },
    {

        id:"4",
        numberOfSeats:100,
        amenities:["AC","Chairs","Discolights"],
        price:5000,
        ifBooked:"true",
        CustomerName:"jayasuriya",
        date:"05-may-2025",
        startTime:"10-may-2025 at 12PM",
        endTime:"11-may-2025 at 11am",
        RoomId:204,
        RoomName:"Duplex",
    },
    {

        id:"5",
        numberOfSeats:100,
        amenities:["AC","Chairs","Discolights"],
        price:5000,
        ifBooked:"",
        CustomerName:"",
        date:"",
        startTime:"",
        endTime:"",
        RoomId:205,
        RoomName:"Duplex",
    }
]


const app=express()
app.use(express.json())


app.get("/hall/details",(req,res)=>{
    if(req.query){
    const{ifBooked}=req.query;
    console.log(ifBooked)
    let filterHall = data;
    if(ifBooked){
        filterHall = filterHall.filter((halls)=>halls.ifBooked=== ifBooked)
    }
    res.send(filterHall)
}else{
    res.send(data)
}
})

app.get("/hall/details/:id",(req,res)=>{
    const{id}=req.params;
    console.log(id)
    const specificHall =data.find(hall=>hall.id===id);
    res.send(specificHall)
})


app.post("/hall/details",(req,res)=>{
    const newHall={
        id: data.length+1,
        numberOfSeats: req.body.numberOfSeats,
        amenities: req.body.amenities,
        price: req.body.price,
        ifBooked:req.body.ifBooked,
        RoomId:req.body.RoomId,
        CustomerName:req.body.CustomerName,
        date:req.body.date,
        startTime:req.body.startTime,
        endTime:req.body.endTime,
        RoomName:req.body.RoomName
    }
    console.log(req.body)
    data.push(newHall);
    res.send(data)
})



app.put("/hall/details/:id",(req,res)=>{
    const {id} =req.params;
    const halls = data.find(hall=>hall.id===id);

    if(halls.ifBooked==="true"){
        res.status(400).send("The hall is already booked")
    }
    halls.date=req.body.date;
    halls.startTime=req.body.startTime;
    halls.endTime=req.body.endTime ;
    halls.CustomerName=req.body.CustomerName;
    ifBooked="true"
    res.status(200).send(data)
    
})


app.listen(5000,()=> console.log(`server started in localhost:5000`))