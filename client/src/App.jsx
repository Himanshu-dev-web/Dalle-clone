import React from 'react'
import { BrowserRouter ,Link , Route, Routes } from 'react-router-dom'
import {logo} from "./assets"
import { Home,Createpost } from './pages'

const App = () => {
  return (

    <BrowserRouter>
      <header className=' w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e9eff8]'>
          <Link>
             <img src={logo} alt="logo" className='w-28 object-contain' />
          </Link>
          <Link to="./create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
              Create
          </Link>
      </header>
      
      <main className='sm:p-8 px-4 py-8 w-full bg-[#efeff1] min-h-[calc(100vh-74px)]'>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create-post' element={<Createpost />}></Route>
        </Routes>
      </main>

    </BrowserRouter>

    )
}

export default App