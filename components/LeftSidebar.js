import React, {useState} from 'react'

import Items from './Items'
import Build from './Build'

const LeftSidebar = () => {

  const [build, setbuild] = useState("build")
  const [items, setitems] = useState("")

  const buildfunc =() =>{
    setbuild("build")
    setitems("")
  }

  const itemfunc =() =>{
    setitems("items")
    setbuild("")
  }


  return (
    <>

          <div className='flex  p-3 border-solid border-[#C0C0C0] border-b border-b-1'>
              <div className={`${build ==="build"?"text-blue-400 fill-blue-400":"text-[#787878] fill-gray-500"} flex px-3 font-[700]  cursor-pointer hover:text-blue-400 hover:fill-blue-400`}>
                <Build/><p className='ml-1' onClick={buildfunc}>Build</p></div>
              <div className={`${items ==="items"?"text-blue-400 fill-blue-400":"text-[#787878] fill-gray-500"} flex my-auto px-9 font-[700]  cursor-pointer hover:text-blue-400 hover:fill-blue-400`} >
                <Items/><p className='ml-2' onClick={itemfunc}>Items</p></div>
          </div>
           
          <div className='p-3'>
              <p className='font-[700] text-lg'>LAYERS</p>
              <p className='text-[#585858] text-sm mt-2'>Drag and drop elements you want to use</p>
          </div>
          {build === 'build'?
          <div className='p-3'>
              <div className='grid grid-cols-3 text-center cursor-pointer'>
                  <div className='h-[8rem] pt-7  border-solid border-black border-[0.5px]  hover:bg-gray-100'>
                      <h1  className=' font-[900] text-5xl'>H1</h1>
                      <p className='text-[#585858]  text-sm'>Heading 1</p>
                  </div>
                  <div className='h-[8rem] pt-8 border-solid border-black border-[0.5px] border-x-0  hover:bg-gray-100'><h2 className='font-[800] text-4xl'>H2</h2>
                  <p className='text-sm text-[#585858]'>Heading 2</p></div>
                  <div className='h-[8rem] pt-9 border-solid border-black border-[0.5px]  hover:bg-gray-100'><h3 className='font-[800] text-3xl'>H3</h3>
                  <p className='text-sm text-[#585858]'>Heading 3</p></div>
                  <div className='h-[8rem] pt-10 border-solid border-black border-[0.5px] border-t-0  hover:bg-gray-100'><h4 className='font-[800] text-2xl'>H4</h4>
                  <p className='text-sm text-[#585858]'>Heading 4</p></div>
                  <div className='h-[8rem] pt-11 border-solid border-black border-[0.5px] border-x-0 border-t-0 hover:bg-gray-100'><h5 className='font-[800] text-xl'>H5</h5>
                  <p className='text-sm text-[#585858]'>Heading 5</p></div>
                  <div className='h-[8rem] pt-12 border-solid border-black border-[0.5px] border-t-0  hover:bg-gray-100'><h6 className='font-[800] text-lg'>H6</h6>
                  <p className='text-sm text-[#585858]'>Heading 7</p></div>

              </div>
          </div>:<div></div>
          }{ items === 'items'?
          <div className='text-center'>
            this is items section
          </div>:<div></div>
          }
    </>
  )
}

export default LeftSidebar