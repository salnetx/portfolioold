import Image from 'next/image'
import Layout from './components/Layout'
import Linkinbio from './components/Linkinbio'
export default function Home() {
  return (
    <Layout>

    
<div className="py-16">
        <div className="container m-auto px-6">
      
         <div className="lg:flex justify-between items-center">
             <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="text-4xl font-medium leading-tight mb-5 capitalize">  Hey Yo ! </h1>
                <p className="text-xl">  Hi There, This Is Sahil </p>
      
                <div className="py-5 flex gap-x-4">
                  <a href="#" className="text-black border px-5 py-2 border-black rounded-lg border-t-2 border-l-2">Contact</a>
                  <a href="#" className="text-black border px-5 pt-2 border-black rounded-lg border-t-2 border-l-2">Blog Post</a>
             </div>             
              </div>
              <div className="lg:w-4/12 scale-100 rounded-lg -skew-x-2">
                <Image alt="sahil gif" width="350" height="350" src="/sahilnetic.gif" />
              </div>
          </div>
      
        </div>
      </div>
      <Linkinbio />
    </Layout>
  )
}
