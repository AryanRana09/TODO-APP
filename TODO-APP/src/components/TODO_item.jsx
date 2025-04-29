import React from 'react'
import Tick from "../assets/tick.png"


import Non_Tick from "../assets/non_tick.png"

import Sta_Delete from "../assets/delete_2.png"


function TODO_item({Text, id , IsComplete , deltodo , toggle }) {
  return (
    <div className='flex items-center my-3 gap-2'>


        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={IsComplete ? Tick : Non_Tick} alt="" className='w-7' />
            <p className={`text-purple-700 ml-4 text-[17px] decoration-slate-500 ${IsComplete ? "line-through" : ""} ${IsComplete ? "text-slate-600" : ""}`} >
              {Text}
            </p>
        </div>
      
      <img onClick={()=>{deltodo(id)}} src={Sta_Delete} alt="" className='w-5 h-5 cursor-pointer' />


    </div>
  )
}

export default TODO_item