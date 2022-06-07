import React from 'react'
import Header from '../components/Header'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'

const Dashboard = () => {

  return (
    <>
    <div className='flex flex-col h-screen w-screen'>
            <div className='hidden sm:flex  justify-between  p-3 bg-[#F8F8F8] border-solid border-[#C0C0C0] border-[0.5px]'>
                <Header/>
            </div>
            <div  className=' flex-1 flex-shrink-0'>                
                <div className='hidden sm:flex h-full w-full bg-gray-300 gap-2'>
                    <div className='bg-white  basis-[25rem]'>
                        <LeftSidebar/>
                    </div>
                    <div className='bg-white flex-1'>
                    </div>
                    <div className='bg-white basis-[25rem]'>
                        <RightSidebar/>
                    </div>
                        
                </div>
            </div>
            <div className="sm:hidden p-5 text-center">
                Mobile view 
            </div>
    </div>


    </>
  )
}

export default Dashboard