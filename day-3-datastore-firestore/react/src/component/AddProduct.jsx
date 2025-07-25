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
    <div className='border max-w-5xl mx-auto py-3 rounded-2xl shadow-2xl mt-5'>

         <h1 className='font-semibold text-center my-5 text-2xl'>Add Data</h1>

         <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div class="mb-5">
    <label for="image" class="block mb-2 text-sm font-medium text-gray-900 " > Image url</label>
    <input type="title" name='image'   placeholder='Enter Image URL' onChange={(e)=>handleChange(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-5">
    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
    <input type="text" name='title'  placeholder='Enter title' onChange={(e)=>handleChange(e)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
   <div class="mb-5">
    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
    <input type="number" name='price'  placeholder='Enter price' onChange={(e)=>handleChange(e)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
    <input type="text" name='category'  placeholder='Enter Category' onChange={(e)=>handleChange(e)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
    <input type="text" name='description'  placeholder='Enter Description' onChange={(e)=>handleChange(e)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


      
    </div>
  )
}

export default AddProduct
