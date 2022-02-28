import React from 'react';
import './App.css'
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
   const lsetf =[
     {
       name:"Aki",
       age: 13,
       sex: "Male",
       image: <div><img src={Image1} className="Passport"/> </div>
     },
     {
       name: "Pawpaw",
       age: 12,
       sex: "Male",
       image: <div><img src={Image2} className="Passport"/> </div>
     },
     {
       name: "Naruto",
       age: 30,
       sex:"Male",
       image: <div><img src={Image3} className="Passport"/> </div>
     },
     {
       name: "Saskay",
       age: 24,
       sex: "Female",
       image: <div><img src={Image4} className="Passport"/> </div>
     },
     {
       name: "Sakura",
       age: 23,
       sex: "Female",
       image: <div><img src={Image5} className="Passport"/> </div>
     },
     {
       name:"Hianata",
       age: 13,
       sex: "Female",
       image: <div><img src={Image6} className="Passport"/> </div>
     },
     {
       name: "Kakshi",
       age: 12,
       sex: "Male",
       image: <div><img src={Image7} className="Passport"/> </div>

     },
     {
       name: "Itachi",
       age: 30,
       sex:"Male",
       image: <div><img src={Image8} className="Passport"/> </div>
     },
     {
       name: "Jiyara",
       age: 24,
       sex: "Male",
       image: <div><img src={Image9} className="Passport"/> </div>
     },
     {
       name: "Mimato",
       age: 23,
       sex: "Male",
       image: <div><img src={Image10} className="Passport"/> </div>
     },
    {
       name:"Aki",
       age: 13,
       sex: "Male",
       image: <div><img src={Image1} className="Passport"/> </div>
     },
     {
       name: "Pawpaw",
       age: 12,
       sex: "Male",
       image: <div><img src={Image2} className="Passport"/> </div>
     },
     {
       name: "Naruto",
       age: 30,
       sex:"Male",
       image: <div><img src={Image3} className="Passport"/> </div>
     },
     {
       name: "Saskay",
       age: 24,
       sex: "Male",
       image: <div><img src={Image4} className="Passport"/> </div>
     },
     {
       name: "Sakura",
       age: 23,
       sex: "Female",
       image: <div><img src={Image5} className="Passport"/> </div>
     },
     {
       name:"Hianata",
       age: 13,
       sex: "Female",
       image: <div><img src={Image6} className="Passport"/> </div>
     },
     {
       name: "Kakshi",
       age: 12,
       sex: "Male",
       image: <div><img src={Image7} className="Passport"/> </div>

     },
     {
       name: "Itachi",
       age: 30,
       sex:"Male",
       image: <div><img src={Image8} className="Passport"/> </div>
     },
     {
       name: "Jiyara",
       age: 24,
       sex: "Male",
       image: <div><img src={Image9} className="Passport"/> </div>
     },
     {
       name: "Mimato",
       age: 23,
       sex: "Male",
       image: <div><img src={Image10} className="Passport"/> </div>
     },
   ]

   return(
     <div className="CardHolder">
       { lsetf.map((props)=>(
         <div className="Card">
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

export default App