import React,{useState} from 'react'
import DownArrow from './DownArrow'

const RightSidebar = () => {

    const [general, setgeneral] = useState("show")

    const [text, settext] = useState("show")

    const [constraints, setconstraints] = useState("show")

    const hideGeneral = () =>{
        if(general === "show"){
            setgeneral("")
        }
        else{
            setgeneral("show")
        }
    }

    const hideText = () =>{
        if(text === "show"){
            settext("")
        }
        else{
            settext("show")
        }
    }

    const hideConstraints = () =>{
        if(constraints === "show"){
            setconstraints("")
        }
        else{
            setconstraints("show")
        }
    }


    return (
        <>
            
                <div className='flex flex-col '>
                    <div className='p-3 px-5 text-sm font-semibold text-blue-500 hover:text-blue-700 cursor-pointer' >Property Settings</div>
                </div>
                <div>
                        <div className={`${general===""?"border-b-0 border-t":"border-0 border-y border-solid"} border-gray-300 py-2 px-5 flex gap-2 items-center cursor-pointer`} onClick={hideGeneral}>
                            <span  className={`${general==="show"?"rotate-180":""} transition-all duration-500 `}> <DownArrow /></span><h4 className='m-0 text-m font-bold ' >General</h4>
                           
                        </div>
                        {general === "show"?
                        <form>
                        <div className='bg-gray-50 py-3 px-5 flex flex-col gap-5'>
                            <div className='flex items-center gap-4  text-gray-600 '>
                                <p className='m-0 text-sm basis-1/3'>Label</p>
                                <input type="text" className='px-2 flex-1 border-solid border-2 border-gray-200 rounded w-full'/>
                            </div>
                            <div className='flex items-center gap-4 text-gray-600'>
                                <p className='m-0 text-sm basis-1/3'>Text</p>
                                <input type="text" className='px-2 flex-1 border-solid border-2 border-gray-200  rounded w-full'/>
                            </div>
                        </div>
                        </form>:<div></div>
                        }
                </div>
                <div>
                    <div className={`${text===""?"border-b-0 border-t":"border-0 border-y border-solid"} border-gray-300 py-2 px-5 flex gap-2 items-center cursor-pointer`} onClick={hideText}>
                        <span  className={`${text==="show"?"rotate-180":""} transition-all duration-500 `}><DownArrow/></span><h4 className='m-0 text-m font-bold ' >Text</h4>
                        </div>
                        {text === "show"?
                        <form>
                        <div className='bg-gray-50 py-3 px-5 flex flex-col gap-5'>
                            <div className='flex items-center gap-4 text-gray-600 '>
                                <p className='m-0 text-sm basis-1/3'>Font Style</p>
                                <input type="text" className='px-2 flex-1 border-solid border-2 border-gray-200  rounded w-full'/>
                            </div>
                            <div className='flex items-center gap-4 text-gray-600 '>
                                <p className='m-0 text-sm basis-1/3'>Font Family</p>
                                <input type="text" className='px-2 flex-1 border-solid border-2 border-gray-200 rounded w-full'/>
                            </div>
                            <div className='flex items-center gap-4 text-gray-600 '>
                                <p className='m-0 text-sm basis-1/3'>Font Size</p>
                                <input type="text" className='px-2 flex-1 border-solid border-2 border-gray-200 rounded w-full'/>
                            </div>
                            <div className='flex items-center gap-4 text-gray-600 '>
                                <p className='m-0 text-sm basis-1/3'>Font Weight</p>
                                <input type="text" className='px-2 flex-1 border-solid border-2 border-gray-200 rounded w-full'/>
                            </div>
                        </div>
                        </form>:<div></div>}
                </div>
                <div>
                    <div className={`${constraints===""?"border-b-none":""}border-0 border-y border-solid border-gray-300 py-2 px-5 flex gap-2 items-center cursor-pointer`} onClick={hideConstraints}>
                    <span   className={`${constraints==="show"?"rotate-180":""} transition-all duration-500 `}><DownArrow/></span><h4 className='m-0 text-m font-bold ' >Constraints </h4>
                        </div>
                        {constraints === "show"?
                        <form>
                        <div className='bg-gray-50 py-3 px-5 flex flex-col gap-5'>
                            <div className='flex items-center gap-4 text-gray-600 '>
                                <p className='m-0 text-sm basis-1/3'>Padding</p>
                                <input type="text" className='px-2 flex-1 border-solid border-2 border-gray-200 rounded w-full'/>
                            </div>
                            <div className='flex items-center gap-4 text-gray-600 '>
                                <p className='m-0 text-sm basis-1/3'>Width</p>
                                <input type="text" className='px-2 flex-1 border-solid border-2 border-gray-200 rounded w-full'/>
                            </div>
                            <div className='flex items-center gap-4 text-gray-600 '>
                                <p className='m-0 text-sm basis-1/3'>Height</p>
                                <input type="text" className='px-2 flex-1 border-solid border-2 border-gray-200 rounded w-full'/>
                            </div>
                        </div>
                        </form>:<div></div>}
                </div>
        </>
    )
}

export default RightSidebar