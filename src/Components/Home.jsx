import React from 'react'

const Home = () => {
  return (
    <>
    
    <div className="w-10 ml-[1100px] mt-[-1px]">
    <img src="https://static.vecteezy.com/system/resources/previews/001/504/962/non_2x/shopping-cart-icon-free-vector.jpg" alt="" />
    </div>
    <div className="border border-black flex items-center gap-10">
        <div className="w-20 mb-2">
            <img className='mt-8' src="https://khareedomobile.pk/wp-content/uploads/2023/10/14-plus.webp" alt="" />
        </div>
        <div className="">
            <h4>
                I.Phone
            </h4>
            <h4>
                Price: $1000
            </h4>
            <div className="border border-black bg-zinc-600 rounded-2xl text-white">
                <button>Add to cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home