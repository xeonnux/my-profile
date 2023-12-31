import React from 'react'
import Image from 'next/image'

const index = ({image}) => {
  return (
    <div className='py-10'>
      <Image
        src={image}
        alt={""}
        className="w-[300px] h-[300px] object-right bg-lime-300 border-white border-8 object-cover rounded-[60%]"
      />
    </div>
  )
}

export default index