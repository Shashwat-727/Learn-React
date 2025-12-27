import React, { useEffect } from 'react'

import axios from 'axios'
import { useState } from 'react'


const App = () => {

  // async function getData() {
  //     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     console.log(data)
  // }
  const [details, setdetails] = useState([])
  const [index, setindex] = useState(1)


  async function getData() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users') //asynchornous use async await
    // console.log(response)

    // const data = await response.json()
    // console.log(data);
    //axios is easier to use and handles error efficiently
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setdetails(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    getData()
  }, [index])
  

  function previouspage(){
    if(index>=1){
      let updated_index = index - 1;
      setindex(updated_index)
    }
  }
  function nextpage(){
    if(index>=1){
      let updated_index = index + 1;
      setindex(updated_index)
    }
  }


  let printdata = "No user DATA";
  if (details.length > 0) {
    printdata = details.map(function (data, index) {
      return (<div key={index} className='bg-blue rounded-2xl h-fit w-full'>
        <a href={data.download_url}>
          <img src={data.download_url} className='h-50 w-60' alt="img" />
        </a>
        {data.author}
      </div>
      )
    })
  }

  return (
    <>
      <div>
        <div className='p-2'>
          <button className='active:scale-95 bg-blue-400 p-2 rounded-2xlte'>GetData</button>
        </div>
        <div className='p-2 grid grid-cols-6'>
          {printdata}
        </div>
        <div className='flex flex-row justify-between mx-150'>
          <button className='bg-orange-300 p-2 rounded-2xl px-3' onClick={previouspage}>Prev</button>
          <button className='bg-orange-300 p-2 rounded-2xl px-3' onClick={nextpage}>Next</button>
        </div>
      </div>
    </>

  )
}

export default App