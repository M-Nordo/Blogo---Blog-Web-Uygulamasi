import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({authorImg,title,author,date,deleteBlog,mongoId}) => {
    const BlogDate = new Date(date);

    // Türkçe tarih formatı
    const formattedDate = BlogDate.toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

  return (
    <tr className='bg-white border-b'>
      <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image width={40} height={40} src={authorImg ? authorImg : assets.profile_icon}/>
            <p>{author ? author : "İsim Yok"}</p>
      </th>
      <td className='px-6 py-4'>
            {title ? title : "Başlık Yok"}
      </td>
      <td className='px-6 py-4'>
            {formattedDate}
      </td>
      <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
            x
      </td>
    </tr>
  )
}

export default BlogTableItem
