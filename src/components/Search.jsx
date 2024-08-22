import React from 'react'
import { assets } from '../assets/assets'
const Search = ({setShowSearch}) => {
  return (
    <div className=' h-12 sm:h-16 bg-slate-200 flex items-center justify-center border-b-2'>
        <input className='py-2  w-[210px] sm:w-[300px] md:w-[400px] lg:w-[600px] outline-none  rounded-xl px-3 border border-slate-400'  placeholder='Search here' type="text" />
        <img onClick={() => setShowSearch(false)} className='w-4 mx-4 text-slate-500 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  )
}

export default Search