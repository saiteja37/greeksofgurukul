import logo from './logo.svg';
import './App.css';
import Papa from 'papaparse'
import { useEffect, useState } from 'react';
function App() {
  const [data,setData]=useState([])
  const[columnArray,setColum]=useState([])
  const[values,setValues]=useState([])
  const handleFile=(event)=>{
    Papa.parse(event.target.files[0],{
      header:true,
      skipEmptyLines:true,
      complete:function(result){
        const columnArray=[];
        const valuesArray=[];
        result.data.map((d)=>{
          columnArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setData(result.data);
        setColum(columnArray[0]);
        setValues(valuesArray)

      }
    })
  }

  return (
    <div className="App">
<center>
  <h1 className='mt-4 text-success'>Greeks of Gurukul</h1>
  <div className='my-5'>
    <input
    type='file'
    name='file'
    accept='.csv'
    onChange={handleFile}
    style={{display:"block",margin:"10px aurto"}}
    ></input>
    <br/>
    <table style={{borderCollapse:"collapse",border:"2px solid black", margin:"5px auto"}} className=' mx-3'>
      <thead>
        <tr>
          {columnArray.map((col,i)=>(
            <th style={{border:"1px solid black"}} key={i}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody className='mx-1'>
        {values.map((v,i)=>(
          <tr key={i}>
            {v.map((value,i)=>(
              <div>
              <td style={{border:"1px solid black"}} className='mx-1' key={i}>{value}</td>
              
              </div>
            ))}
          </tr>
        ))}
        {data.map((v,i)=>(
          <div key={i}>
            {console.log({v})}
          </div>
        ))}
      </tbody>
    </table>
  </div>
</center>
    </div>
  );
}

export default App;
