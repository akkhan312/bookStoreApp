import React from 'react'

export default function Cards({item}) {
  return (
    <>
    <div className='p-3'>
      <div className="card bg-base-100 w-92 shadow-xl mt-3 hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions md:justify-between justify-start">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer text-pink-500  hover:p-4 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}