import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { db } from '../assets/sevices/Firebase';
import { useState } from 'react';

const AddProduct = () => {

    const initialState = {
            image : "",
            category : "",
            price : "",
            title : "",
            description : ""
        }
    
    
        const [data,setData] = useState(initialState)
    
        function handleSubmit(e)
        {
            e.preventDefault();
            addDoc(collection(db, "products"),data);
        }
    
    
        function handleChange(e)
        {
            setData({...data,[e.target.name]:e.target.value})
            
        }
    
        
  return (
    <div>

         <h1>Add Data</h1>

        <form onSubmit={handleSubmit}>
 
            <input type="text" name='image'   placeholder='Image URL' onChange={(e)=>handleChange(e)}/> <br /><br />
            <input type="text" name='category'  placeholder='category'  onChange={(e)=>handleChange(e)}/> <br /><br />
            <input type="text" name='price' placeholder='Price' onChange={(e)=>handleChange(e)} /> <br /><br />
            <input type="text" name='title'  placeholder='title' onChange={(e)=>handleChange(e)}/> <br /><br />
            <input type="text" name='description'  placeholder='description'  onChange={(e)=>handleChange(e)} /> <br /><br />
            <input type="submit" />


        </form>

      
    </div>
  )
}

export default AddProduct
