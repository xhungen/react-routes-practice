import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Post = () => {

    const params = useParams();

    const {data,error,loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(loading){
        return <div>Cargando...</div>
    }


  return (
    <div>
        
        <div className='p-5 w-4/6 mx-auto'>
        <h1 className='font-bold'>{data.id} - {data.title}</h1>
        <p>{data.body}</p>
        </div>

        <div  className='text-white bg-blue-700 rounded-xl p-1 hover:bg-blue-800 transition-colors duration-150 block  w-20 mx-auto text-center'>
        <Link to={"/blog"}>Volver</Link>
        </div>
    </div>
  )
}

export default Post