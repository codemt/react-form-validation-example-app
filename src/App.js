import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import { useForm } from 'react-hook-form'
import './App.css';

function App() {

  const [income_head,setIncome] = useState(null)
  const [amount,setAmount] = useState(null)
  const [date,setDate] = useState(null)
  const { register,handleSubmit,watch,errors } = useForm();

  const handleInputChange = (e) =>{

    e.preventDefault();
    const target = e.target
    const name = target.name

    if(name == 'income_head'){
        setIncome(target.value)
    }
    if(name == 'amount'){
      setAmount(target.value)
    }
    if(name == 'date'){
      setDate(target.value)
    }


        
  }
  
  const onSubmit = (data) => {
   
    setDate(true)
    console.log(data)
    console.log(income_head)
    console.log(amount)
    console.log(date)

  }
  return (
    <div className="App">    
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <input ref={register({required:true})}  name="income_head" type="text" onChange={handleInputChange} placeholder="Enter Income Head" /><br />
        <p style={{color:'red'}}>{errors.income_head && "Income Head is required"}</p>
        <input ref={register({required:true})}  name="amount" type="text"  onChange={handleInputChange} placeholder="Amount" /><br />
        <p style={{color:'red'}}>{errors.amount && "Amount  is required"}</p>
        <input ref={register({required:true})}  name="date"  onChange={handleInputChange} type="date" /><br />
        <p style={{color:'red'}}>{errors.date && "Date  is required"}</p>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}

export default App;
