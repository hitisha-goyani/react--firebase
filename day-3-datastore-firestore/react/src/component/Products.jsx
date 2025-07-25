
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../assets/sevices/Firebase'

const Products = () => {

  // const [data,setData] = useState(null)
  const[value,setValue] = useState([])


  const arr = Object.values(value)
  console.log(arr)



  function fetchData(){

  
    getDocs(collection(db,"products"))
    .then((res) =>{
      let filterData = res.docs.map((ele) =>({...ele.data(),id:ele.id}))
      console.log(filterData)
      setValue(filterData)
    })
    // axios.get('https://dummyjson.com/recipes')
    // .then((res) => setData(res.data))
    // .catch((err) => console.log(err))

    
  }



 

  useEffect(() =>{
    fetchData()
  },[])

  const handleDelete = async (id) => {
  try {
    await deleteDoc(doc(db, "products", id));
    setValue((prev) => prev.filter((item) => item.id !== id));
    console.log("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

  return (
    <div>
      <h1 className='text-2xl text-center font-bold'>products</h1>
        <div className='max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 my-5'>
    


{


  value.map((ele)=>(

    

  <div key={ele.id} class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
    <a href="#">
        <img class="rounded-t-lg" src={ele.image} alt="" />
    </a>
    <div class="p-3">
    
            <h5 class="mb-2 font-bold tracking-tight text-gray-900" >{ele.title}</h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">{ele.description}</p>

          </div>
          <div className='flex justify-between p-5'>
             <p className='text-gray-900 font-semibold text-2xl'>${ele.price}</p>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-6 py-1 rounded-lg dark:bg-blue-200 dark:text-blue-800 ">{ele.category}</span>
           
          </div>
           <button type="button" onClick={() => handleDelete(ele.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium  ms-6 my-3 text-sm px-25 rounded-full py-2.5 text-center ">Delete</button>
    </div>


  ))
}

</div>
    </div>
  )
}

export default Products
