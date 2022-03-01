import React, {useState} from 'react';
import './App.css';
import Image1 from "./Images/Image1.jpg"
import Image2 from "./Images/Image2.jpg"
import Image3 from "./Images/Image3.jpg"
import Image4 from "./Images/Image4.jpg"
import Image5 from "./Images/Image5.jpg"
import Image6 from "./Images/Image6.jpg"
import Image7 from "./Images/Image7.jpg"
import Image8 from "./Images/Image8.jpg"
import Image9 from "./Images/Image9.jpg"
import Image10 from "./Images/Image10.jpg"


function App(){
  //State for holding Names
  const[text,setText] = useState("");
  const[gender, setGender] = useState("");
  //State for holiding the dataBase
   const [lsetf, setLsetf] = useState([
     {
       id:1,
       name:"Aki",
       age: 13,
       sex: "Male",
       image: <div><img src={Image1} className="Passport"/> </div>
     },
     {
       id:2,
       name: "Pawpaw",
       age: 12,
       sex: "Male",
       image: <div><img src={Image2} className="Passport"/> </div>
     },
     {
       id:3,
       name: "Naruto",
       age: 30,
       sex:"Male",
       image: <div><img src={Image3} className="Passport"/> </div>
     },
     {
       id:4,
       name: "Saskay",
       age: 24,
       sex: "Female",
       image: <div><img src={Image4} className="Passport"/> </div>
     },
     {
       id:5,
       name: "Sakura",
       age: 23,
       sex: "Female",
       image: <div><img src={Image5} className="Passport"/> </div>
     },
     {
       id:6,
       name:"Hianata",
       age: 13,
       sex: "Female",
       image: <div><img src={Image6} className="Passport"/> </div>
     },
     {
       id:7,
       name: "Kakshi",
       age: 12,
       sex: "Male",
       image: <div><img src={Image7} className="Passport"/> </div>

     },
     {
       id:8,
       name: "Itachi",
       age: 30,
       sex:"Male",
       image: <div><img src={Image8} className="Passport"/> </div>
     },
     {
       id:9,
       name: "Jiyara",
       age: 24,
       sex: "Male",
       image: <div><img src={Image9} className="Passport"/> </div>
     },
     {
       id:10,
       name: "Mimato",
       age: 23,
       sex: "Male",
       image: <div><img src={Image10} className="Passport"/> </div>
     },
    {
      id:11,
       name:"Aki",
       age: 13,
       sex: "Male",
       image: <div><img src={Image1} className="Passport"/> </div>
     },
     {
       id:12,
       name: "Pawpaw",
       age: 12,
       sex: "Male",
       image: <div><img src={Image2} className="Passport"/> </div>
     },
     {
       id:13,
       name: "Naruto",
       age: 30,
       sex:"Male",
       image: <div><img src={Image3} className="Passport"/> </div>
     },
     {
       id:14,
       name: "Saskay",
       age: 24,
       sex: "Male",
       image: <div><img src={Image4} className="Passport"/> </div>
     },
     {
       id:15,
       name: "Sakura",
       age: 23,
       sex: "Female",
       image: <div><img src={Image5} className="Passport"/> </div>
     },
     {
       id:16,
       name:"Hianata",
       age: 13,
       sex: "Female",
       image: <div><img src={Image6} className="Passport"/> </div>
     },
     {
       id:17,
       name: "Kakshi",
       age: 12,
       sex: "Male",
       image: <div><img src={Image7} className="Passport"/> </div>

     },
     {
       id:18,
       name: "Itachi",
       age: 30,
       sex:"Male",
       image: <div><img src={Image8} className="Passport"/> </div>
     },
     {
       id:19,
       name: "Jiyara",
       age: 24,
       sex: "Male",
       image: <div><img src={Image9} className="Passport"/> </div>
     },
     {
       id:20,
       name: "Mimato",
       age: 23,
       sex: "Male",
       image: <div><img src={Image10} className="Passport"/> </div>
     },
   ])

   //Function for Posting
   const Post = () =>{
     const items = {
       id: lsetf.length + 1,
       name: text,
       sex: gender, 
     };

     setLsetf([...lsetf, items]);
     setText("");
   }

   return(
     <div className="CardHolder">

       <br/>
       <input value={text} onChange={(e)=>(setText(e.target.value))} placeholder="Input Name" />
       
       <br/>
       <button onClick={()=>{
         Post()
         console.log("Have pOsted");

         
       }}>Post</button>
       <br/>

       { lsetf.map((props)=>(
         <div className="Card">
           <div>{props.id}.</div>
           <div>Name:{props.name}</div>
           <div>Age:{props.age}</div>
           <div>Sex:{props.sex}</div>
           <div className='Picture'>Passport:{props.image}</div>
         </div>
       ))

       }
     </div>
   )
}

export default App;