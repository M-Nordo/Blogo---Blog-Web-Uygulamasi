import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {

    const [menu,setMenu] = useState("Tümü");
    const [blogs,setBlogs] = useState([]);

    const fetchBlogs = async () => {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
    }

    useEffect(()=>{
      fetchBlogs();
    },[])

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={()=>setMenu('Tümü')} className={menu==="Tümü" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Tümü</button>
        <button onClick={()=>setMenu('Teknoloji')} className={menu==="Teknoloji" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Teknoloji</button>
        <button onClick={()=>setMenu('Gündem')} className={menu==="Gündem" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Gündem</button>
        <button onClick={()=>setMenu('Haber')} className={menu==="Haber" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Haber</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blogs.filter((item)=> menu==="Tümü" ? true:item.category===menu).map((item,index)=>{
            return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
        })}
      </div>
    </div>
  )
}

export default BlogList
