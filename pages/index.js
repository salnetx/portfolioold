import Image from 'next/image'
import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Linkinbio from './components/Linkinbio'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
export default function Home() {

  const [blocker,setBlocker] = useState('')
  const [blocker1,setBlocker1] = useState('none')
	const hiddenDisplay = ()=>{
     setBlocker('block')
     setBlocker1('none')
  }
  const hiddenDisplay2 = ()=>{
    setBlocker('none')
    setBlocker1('block')
  }

  return (
    <Layout>

    
<div className="py-16 bg-black">
        <div className="container m-auto px-6">
      
         <div className="lg:flex justify-between items-center">
             <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="text-4xl text-white font-medium leading-tight mb-5 capitalize">  Hey Yo ! </h1>
                <p className="text-xl text-white">  Hi There, This Is Sahil </p>
      
                <div className="py-5 flex gap-x-4">
                  <a href="#" className="text-white border px-5 py-2 border-white rounded-lg border-t-2 border-l-2">Projects</a>
                  <a href="https://ngl.link/sahilnetic" className="text-white border px-5 pt-2 border-white rounded-lg border-t-2 border-l-2">Confess Out</a>
             </div>             
              </div>
              <div className="lg:w-4/12 scale-100 rounded-lg -skew-x-2">
                <Image alt="sahil gif" width="350" height="350" src="/sahilnetic.gif" />
              </div>
          </div>
      
        </div>
      </div>


      
      <div style={{display : `${blocker}`}}>
      <h1 className="text-center text-white text-2xl sm:text-5xl pb-10 font-medium">Recent Projects</h1>
      <h2 className="sm:mx-48 mx-6 text-white text-lg sm:text-2xl pb-10 font-light"><span className='font-medium text-pink-100 underline decoration-wavy decoration-2 decoration-pink-500 underline-offset-8' onClick={hiddenDisplay} >Projects</span> : <span className='animate-pulse' onClick={hiddenDisplay2}>Links</span></h2>

      <Blogs />
      </div>

      <div style={{display : `${blocker1}`}}>
      <h1 className="text-center text-white text-2xl sm:text-5xl pb-10 font-medium">Sweet Links</h1>
      <h2 className="sm:mx-48 mx-6 text-white text-lg sm:text-2xl pb-10 font-light"><span className='animate-pulse' onClick={hiddenDisplay} >Projects</span> : <span className='font-medium text-pink-100 underline decoration-2 decoration-wavy decoration-pink-500 underline-offset-8' onClick={hiddenDisplay2}>Links</span></h2>

      <Linkinbio />
      </div>

      
      <div>
      <Footer />
      </div>
      
    </Layout>
  )
}
