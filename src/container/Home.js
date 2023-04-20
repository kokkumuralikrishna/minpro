import { useState,useEffect } from "react";
import {db} from './firebaseConfig'

export default function Home(){
  const [list,setList]=useState([])
  useEffect(()=>{
  retrieve()
},[])
async function retrieve(){
  console.log("from home using useeffect")
  const dataRef=db.collection("time").orderBy("date","asc")
  const snapShot=await dataRef.get()
  console.log("snap data",snapShot)
  setList(snapShot.docs.map((doc)=>(
  {
    date:doc.data().date.toDate().toDateString(),
    messafe:doc.data().todoMsg
  }  
  )))
}
return(
  <div>

  </div>
)
}