import React from 'react'
import Services from "../images/Services.jpg"
import Service1 from "../images/Service1.png"
import Service2 from "../images/Service2.png"

const database = [
  {
    id:1,
    title: "FREE AND FAST DELIVERY",
    img: {Service1},
    service: "Free delivery for all orders over $140"
  },
   {
    id:2,
    title: "24/7 CUSTOMER SERVICE",
    img:Service2,
    service: "Friendly 24/7 customer support"
  },
    {
    id:3,
    title: "MONEY BACK GUARANTEE",
    img: Services,
    service: "We reurn money within 30 days"
  }
]
export function Product({data}) {
  const { title, img, service } = data
  return (
    <div>
            <div  className='w-10 h-10 rounded-full'>
              <img src={img} alt="" />
            </div>
            <h1>{title}</h1>
            <p>{service}</p>
            </div>
  )
}

function LastArrival() {

  return (
    <div className='flex justify-center p-5 m-5'>
      {
        database && database.map((datas) => {
          return (           
            <Product  key={datas.id} data={datas} />
        )
      })
    }
    </div>
  )
}

export default LastArrival