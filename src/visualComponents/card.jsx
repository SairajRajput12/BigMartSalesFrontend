import React from 'react'; 

export default function Card({title,value,className}) {
  return (
    <div className={className}>
        <label className='title'>{title}</label>
        <label className='value'>{value}</label>
    </div>
  )
}
 