import Image from 'next/image'
import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Linkinbio from './components/Linkinbio'
import Contributions from './components/Contributions'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Domain from './components/Domain'
import Certification from './components/Certification'
// Images
import addify from '../public/addify.png'
import github from '../public/github.png'
import twitter from '../public/twitter.png'
import instagram from '../public/instagram.png'
import facebook from '../public/facebook.png'
import pinterest from '../public/pinterest.png'
import profilImage from "../public/evilcat.png"



export default function Home() {

  const [blocker,setBlocker] = useState('')
  const [blocker1,setBlocker1] = useState('none')
  const [social, setSocial] = useState('none')
  
  const socialDisplay = ()=>{
   if(social=="none"){
    setSocial('')
   }else{
    setSocial('none')
   }
  }
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

    
<div className="py-16 bg-zinc-900">
        <div className="container m-auto px-6">

          
      
         <div className="lg:flex justify-between items-center">
             <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="sm:text-5xl text-4xl text-white font-medium leading-tight mb-5 capitalize">Hi, I'm Sahil </h1>
                <p className="text-xl text-zinc-200"> 
                I'm a full stack developer, and a cloud professional.
                I like contributing to open source projects. Look at some projects I've been working on.
                </p>
    
                <div className="py-5 flex gap-x-4">
                  <a href="https://calendly.com/sahilnetic/meeting" className="text-white border px-5 py-2 border-white rounded-lg border-t-2 border-l-2">Contact</a>
                  <a onClick={socialDisplay} className="text-white border px-5 pt-2 border-white rounded-lg border-t-2 border-l-2">Social Links</a>
             </div>  
             <div style={{display :social}} className='flex gap-x-4'>
                <a href='https://addify.us'><Image width="20" height="20" src={addify} /></a>
                <a href='https://twitter.com/sahilnetic'><Image width="20" height="20" src={twitter} /></a>
                <a href='https://instagram.com/sahilnetic'><Image width="20" height="20" src={instagram} /></a>
              </div>           
              </div>
              <div className="lg:w-4/12 rounded-full scale-100 rounded-lg -translate-y-4">
                <Image alt="sahil logo" width="350" height="350" src={profilImage} />
              </div>
          </div>
      
        </div>
      </div>



     
      <div className='bg-zinc-900'> 
        
      <div style={{display : `${blocker}`}}>
      <h1 className="sm:mx-8 text-center mx-6 text-white text-2xl sm:text-5xl pb-10 font-light">Recent Projects</h1>
      <h2 className="sm:mx-8 mx-6 text-white text-lg sm:text-2xl pb-10 font-light"><span className='font-medium text-emerald-400 underline decoration-2 decoration-emerald-500 underline-offset-8' onClick={hiddenDisplay} >Projects</span> | <span className='hover:animate-pulse' onClick={hiddenDisplay2}>Contributions</span></h2>

      <Projects />
      </div>

      <div style={{display : `${blocker1}`}}>
      <h1 className="sm:mx-8 mx-6 text-white text-center text-2xl sm:text-5xl pb-10 font-light">Open Source Contributions</h1>
      <h2 className="sm:mx-8 mx-6 text-white text-lg sm:text-2xl pb-10 font-light"><span className='hover:animate-pulse' onClick={hiddenDisplay} >Projects</span> | <span className='font-medium text-emerald-400 underline decoration-2 decoration-emerald-500 underline-offset-8' onClick={hiddenDisplay2}>Contributions</span></h2>

      <Contributions />
      </div>


      <div className="py-16 bg-zinc-900">
        <div className="container m-auto px-6">
        <h2 className="sm:mx-24 text-white text-lg sm:text-2xl pb-10 font-light">Working Domain</h2>
          <Domain />
        </div></div>

      <Footer />
      
      </div>

    </Layout>
  )
}
