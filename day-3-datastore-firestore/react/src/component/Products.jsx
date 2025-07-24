
import { collection, getDoc, getDocs } from 'firebase/firestore'
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
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 font-bold tracking-tight text-gray-900" >{ele.title}</h5>
            <p className='text-gray-900'>${ele.price}</p>
        </a>

        
    </div>
</div>




  ))
}

</div>
    </div>
  )
}

export default Products
