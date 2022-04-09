import React from 'react'
import {FaCocktail} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
export default function Header(){


    return (
        <header className='bg-gray-200 shadow-md p-5 rounded-b-md text-gray-50 font-semibold'>
            
            <Link className='bg-slate-100' to="/">
                <span className='text-4xl bg-slate-100 text-gray-600 '><FaCocktail/></span>
            </Link>

            
            
            
            
        </header>
    )
}