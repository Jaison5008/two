import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Base from './Base';
import './App.css'  
//import { useParams } from 'react-router-dom'; 

 
function Edit({point ,update,emai}) {   
  const history=useNavigate()
  const [emails, setEmail]=useState(''); 
  const[TicketCount,setTictet]=useState('');
   
  const ss=point.find((e)=> {return (e.email===emai)});
   const index=point.findIndex((e)=>e.email===emai)

useEffect(()=>{ 
  setEmail(ss.email); 

  setTictet(ss.password); 
  
},[ss.email, ss.password]) 

const jai2={ 
  email:emails,
  password:TicketCount
}  
 
 

  return (  
    
     
     
     
     
    <Base thead='EDIT CONTECTS' tstyle='headstyle'footer='foot' children={
    <div className='Home2'>  
    <div className='bh' style={{gap:'20px'}}>
    <Button   onClick={()=>history('/Save1')} >SAVE</Button>  
    <Button   onClick={()=>history('/')} >Home</Button> 
    </div>
    <Form > 
      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' value={emails} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Ticket Count</Form.Label>
          <Form.Control type="text" placeholder="TicketCount" name='TicketCount'value={TicketCount} onChange={(e)=>setTictet(e.target.value)}/>
        </Form.Group>
      </Row> 
      

      <Button variant="primary" type="submit" onClick={()=>{history('/Save1');update(index,jai2)}}  >
        UPDATE
      </Button></Form> 
      </div>}>
      </Base>
   
  );
}

export default Edit;