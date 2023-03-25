import './App.css'; 

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Page from './Page';
import Add from './Add';
import {   Routes, Route } from 'react-router-dom'; 
import Save from './Save'; 
import { useState } from 'react';
//import Data from '../data/newdata.js';
import View from './View'; 
import { useNavigate } from 'react-router-dom'; 
import Edit from './Edit';
function App() {  
 const [point,setPoint]=useState([]); 
 const [view,setView]=useState([]);  
 const [email,setEmail]=useState('');
 const history=useNavigate()
  const adduser=(user)=>{   
    
    setPoint([...point,user])
    
  }  
  const edit=(el)=>{  
    setEmail(el)

  } 
  const update=(index,jai)=>{   
    
    setPoint(point[index]=jai)
    setPoint([...point])

  }
  
  const deletes=(email)=>{   
    //console.log(email)
    const afterremove= point.filter((point,index)=>{ return(point.email!==email)});
    setPoint(afterremove);
}   
const Views=(el)=>{  

setView(el) 
 
history('/View')
}  




  
  return ( 
    <div>  
      
    
    
      
      
      
      <Routes>  

        <Route exact path='/'  element={<Page/>}/>                                                       
        <Route exact  path='/Add' element={<Add point={point} adduser={adduser}/>}/>
         
         <Route  exact path='/Save' element={<Save Spoint={point} deletes={deletes} Views={Views} edit={edit} />}/> 
         <Route exact path='/Edit' element={<Edit point={point} emai={email} update={update}/>}/>
         
        <Route exact path='/View' element={<View view={view}/>}/>
      </Routes>
      
      
        
      
      
      
      
      
     
    </div>
     
  );
}

export default App; 


