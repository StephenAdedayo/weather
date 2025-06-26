import React from 'react'
import Navbar from './components/Navbar'
import BelowNav from './components/BelowNav'
import Detail from './components/Detail'

const App = () => {
  return (
    <>
      <main className='bg-[#111015] min-h-screen p-5'>
        <Navbar />
         <BelowNav />
         <Detail />
        <div>


        </div>
      </main>
    </>
  )
}

export default App
