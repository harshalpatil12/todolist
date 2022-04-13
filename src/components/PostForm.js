import React, {useState} from 'react'
import Axios from 'axios';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const PostForm = () => {
  const url = "http://127.0.0.1:8000/to-do-list";
  const [data, setData] = useState({
    
    desc: "",

  })

  function submit(e){
    e.preventDefault();
    Axios.get(url, {

      desc: data.desc,

    })
    .then(res => {
      console.log(res.data)
    })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
    <div className=''>
    <h1 className='text-center py-4 text-white text-2xl bg-black font-bold'> To do app</h1>
    <div className='py-8 text-center bg-slate-200 h-screen ml-64 mr-64'>
    
      <form onSubmit={(e)=> submit(e)}>

        <input className='px-4 rounded-lg border-transparent' onChange={(e) => handle(e)} id="desc" value={data.desc} placeholder='add your task' type='text'></input>
      
        <button className='bg-indigo-900 color text-white rounded-lg text-xl ml-4'><AiOutlinePlusCircle /></button>
      </form>
    </div>
    </div>
  )
}

export default PostForm