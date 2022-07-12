import Image from 'next/image'
import Layout from './components/Layout'
import Linkinbio from './components/Linkinbio'
export default function Home() {
  return (
    <Layout>

    
<div class="py-16">
        <div class="container m-auto px-6">
      
         <div class="lg:flex justify-between items-center">
             <div class="lg:w-6/12 lg:p-0 p-7">
                <h1 class="text-4xl font-medium leading-tight mb-5 capitalize">  Hey Yo ! </h1>
                <p class="text-xl">  Hi There, This Is Sahil </p>
      
                <div class="py-5 flex gap-x-4">
                  <a href="#" class="text-black border px-5 py-2 border-black rounded-lg border-t-2 border-l-2">Contact</a>
                  <a href="#" class="text-black border px-5 pt-2 border-black rounded-lg border-t-2 border-l-2">Blog Post</a>
             </div>             
              </div>
              <div class="lg:w-4/12 scale-100 rounded-lg -skew-x-2">
                <Image width="350" height="350" src="/sahilnetic.gif" />
              </div>
          </div>
      
        </div>
      </div>
      <Linkinbio />
    </Layout>
  )
}
