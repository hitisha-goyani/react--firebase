import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {

  const [data,setData] = useState(null)



  function fetchData(){

    axios.get('https://dummyjson.com/recipes')
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }

  console.log(data)

  useEffect(() =>{
    fetchData()
  },[])

  return (
    <div>
      <h1 className='text-2xl text-center font-bold'>products</h1>
        <div className='max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 my-5'>
    


{


  data?.recipes.map((ele)=>(

    

  <div key={ele.id} class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
    <a href="#">
        <img class="rounded-t-lg" src={ele.image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 font-bold tracking-tight text-gray-900" >{ele.name}</h5>
            <p className='text-gray-900'>{ele.ingredients}</p>
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
