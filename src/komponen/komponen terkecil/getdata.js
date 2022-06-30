import React, {useState, useEffect} from "react";
import axios from "axios";
export default function GetData(){
const [features, setFeatures]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:3333/datadiri").then(res=>setFeatures(res.data))
  }, [])
    return(
        <>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        {
        features.map(item=>{
          return(
            <>
            <tr>
            <td><b>{`${item.argument}`}</b></td>
            <td>{`${item.content}`}</td>
          </tr>
            </>
            )
        })
      }          
        </>
    )
}