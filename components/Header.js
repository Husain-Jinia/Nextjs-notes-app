import React from 'react'
import Eye from './Eye'
import ArrowLeft from './ArrowLeft'
import Save from './Save'




const Header = () => {
  return (
    <>             
        <div className=' basis-[25rem] my-auto'> 
            <ArrowLeft/>
        </div>
        <div className='flex-1 my-auto'> 
            <h4 className='font-[700] text-[#585858] text-center '>Certificate Name</h4>    
        </div>
        <div className='flex justify-end basis-[25rem]'>
            <div className='flex px-9 text-[#787878] text-center cursor-pointer'>
                <Eye/>
                <h1 className='py-1'>Preview</h1>
            </div>
            <div>
                <button class="flex bg-blue-500 hover:bg-blue-700 text-white  py-1 px-4 rounded">
                    <span className='pt-1.5'><Save/></span><p className='ml-2'>Save</p>
                </button>
            </div>    
        </div>
    </>
  )
}

export default Header