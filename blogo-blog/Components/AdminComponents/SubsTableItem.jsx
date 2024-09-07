import React from 'react'

const SubsTableItem = ({email,mongoId,deleteEmail,date}) => {
    
    const emailDate = new Date(date);
  
     // Tarihi Türkçe almak için
     const formattedDate = emailDate.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

  return (
    <tr className='bg-white border-b text-left'>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        {email ? email : "No Email"}
      </th>
      <td className='px-6 py-4 hidden sm:block'>{formattedDate}</td>
      <td className='px-6 py-4 cursor-pointer' onClick={()=>deleteEmail(mongoId)}>x</td>
    </tr>
  )
}

export default SubsTableItem
