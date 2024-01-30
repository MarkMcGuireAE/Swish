import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RegForm from '../components/regForm'

import axios from "axios"



const Registration = () => {
  let [regs, setRegs] = useState([]);
   let [firstName, setFirstName] = useState ("");
     let [lastName, setLastName] = useState ("");
     let [dob, setDob] = useState ("");
     let [skillLevel, setSkillLevel] = useState ("");
     let [cell, setCell] = useState ("");
     let [email, setEmail] = useState ("");
     let [eContactCell, setEContactCell] = useState ("");
     let [eContactName, setEContactName] = useState ("");
     let [release, setRelease] = useState (false);

     useEffect(() => {

      const getData = async () => {

      try {
        const response = await axios.get("/api/regs")
        console.log(response)
        setRegs(response.data)

      } catch (err) {
        console.error(err)
      }
    }
    getData()

     }, [] )

     async function addToList() {
      try {
  
        let reg = {
          firstName: firstName, 
          lastName: lastName, 
          dob: dob,
          skillLevel: skillLevel, 
          cell: cell,
          email: email, 
          eContactCell: eContactCell, 
          eContactName: eContactName,
          release : release
        };
    
        // OPTION 1: use fetch for "create" route
  
        // const response = await fetch('/api/todos', {
        //   method: 'POST',
        //   body: JSON.stringify(todo),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // })
    
        // const newTodo = await response.json()
  
        // OPTION 2: use axios
  
        const response = await axios.post("/api/regs", regs)
  
        setRegs([...regs, response.data]);

        setFirstName("")
        setLastName("")
        setDob("")
        setSkillLevel("")
        setCell("")
        setEmail("")
        setEContactName("")
        setEContactCell("")
        setRelease(false)
  
      } catch(err) {
        console.log(err)
      }
    }
  
   
  
    async function deleteTodo(id) {
  
      try {
  
         // OPTION 1: use fetch for "delete" route
  
        // await fetch(`/api/todos/${id}`, {
        //   method: 'DELETE'
        // })
  
         // OPTION 2: use axios
  
         await axios.delete(`/api/todos/${id}`)
  
        let newTodos = todos.filter((todo) => todo._id !== id);
        setTodos(newTodos);
  
      } catch(err) {
        console.log(err)
      }
      
    }
    function handleChangeF (event) {
      setFirstName(event.target.value)
    }
    function handleChangeL (event) {
      setLastName(event.target.value)
    }
  
    async function completeTodo(id) {
  
      try {
  
        let newTodos = [...todos]
        let todo = newTodos.find(t => t._id === id)
        todo.completed = !todo.completed
      
          // OPTION 1: use fetch for "update" route
  
        // await fetch(`/api/todos/${id}`, {
        //   method: 'PUT',
        //   body: JSON.stringify(todo),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // })
  
        // OPTION 2: use axios
  
        await axios.put(`/api/todos/${id}`, todo)
  
        setTodos(newTodos);
        
      } catch(err) {
        console.log(err)
      }
    }



  return (
    
      <div className='max-w-screen-2xl mx-auto'> 
        <Nav/>
        
        <img src="/src/img/logo.JPG" className='h-auto max-w-[200px] mx-auto'/>
        <br></br>
        <h1 className='font-bebas text-blue-300 text-8xl text-center'> Registration Form </h1>
        <br></br>
        <br></br>
        <form>
          <div className='font-bebas text-blue-950 text-2xl text-center'>
          <h3 className='text-5xl'>Player Information</h3>
            <br></br>
            <br></br>
        First Name : 
          <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={firstName} onChange={handleChangeF}/>
            <br></br>
            <br></br>
        Last Name :
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={lastName} onChange={handleChangeL}/>
            <br></br>
            <br></br>
        Date of Birth :
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={lastName} onChange={handleChangeL}/>
            <br></br>
            <br></br>
        Skill Level :  
          <select id="skills" name="skills">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
          </select>
          <br></br>
          <br></br>

          <h3 className='text-5xl'>Parent Information</h3>
            <br></br>
            <br></br>
            <label for="pname">Parent Name :</label>
            <input id="pname"className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={lastName} onChange={handleChangeL}/>
            <br></br>
            <br></br>

          Phone Number :
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={lastName} onChange={handleChangeL}/>
            <br></br>
            <br></br>
          Email :
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={lastName} onChange={handleChangeL}/>
            <br></br>
            <br></br>
          Interested in Volunteering?
            <input className="w-4 h-4"type="checkbox"></input>
            <br></br>
            <br></br>

            <h3 className='text-5xl'>Emergency Contact Information</h3>
            <br></br>
            <br></br>
          Name:
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={lastName} onChange={handleChangeL}/>
            <br></br>
            <br></br>
          Relationship:
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={lastName} onChange={handleChangeL}/>
            <br></br>
            <br></br>
          Phone Number:
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={lastName} onChange={handleChangeL}/>
            <br></br>
            <br></br>
          <h3 className='text-5xl'>Release of Liability</h3>
          <input className="w-4 h-4"type="checkbox"></input>
          <label>I agree with the terms and conditions</label>
          <br></br>


          


            <button className="rounded bg-blue-950 text-blue-300 px-7 py-1 "onClick={addToList}>Submit</button>
            </div>
        </form>
{/* 
        <ul>
          <li>
          {regs.map((person) => {

            <h3 key={person.id}>{person.firstName}{person.lastName}</h3>

          })}
          </li>
        </ul> */}
        <Footer/>
    </div>
  )
}

export default Registration