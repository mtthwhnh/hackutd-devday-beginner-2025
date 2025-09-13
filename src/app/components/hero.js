import React from 'react'

function Hero() {
  return (
    <div>
      <div className='flex bg-blue-200 justify-center place-content-evenly text-black py-12 px-1'>
          <div className="max-w-4xl mx-auto flex justify-center"> 
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight" >
              Maxing our <span className="text-black font-bold">GPA</span>,
              </h1>
               <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-600 mt-2">
               One <span className='text-black font-bold'>Class</span> at a Time
               </h2>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Hero