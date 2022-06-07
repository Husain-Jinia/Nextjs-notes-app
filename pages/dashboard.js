import React from 'react'
import Header from '../components/Header'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'

const dashboard = () => {

  return (
    <>
    <div className='flex flex-col h-screen '>
            <Header/>
            <div  className=' flex-1 flex-shrink-0'>                
                <div className='hidden sm:flex h-full w-full bg-gray-300 gap-2'>
                    <LeftSidebar/>
                    <div className='bg-white flex-1'>
                    </div>
                    <RightSidebar/>
                </div>
            </div>
            <div className="sm:hidden p-5 text-center">
                Mobile view 
            </div>
    </div>


    </>
  )
}

export default dashboard