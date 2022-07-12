import Image from "next/image";
const Blogs = ()=>{
  return(
    <div className="bg-black">

<h1 class="text-center text-white text-2xl sm:text-5xl pb-10 font-medium">Recent Projects</h1>
<h2 class="sm:mx-48 mx-6 text-white text-lg sm:text-2xl pb-10 font-light"><span className="text-pink-100 font-black animate-pulse underline  underline-offset-8">Projects</span> : Links</h2>

<div class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 mb-28">
  
  <div class="border border-2 shadow-lg rounded-lg py-20 text-white">Appmojo</div>
  <div class="border border-2 shadow-lg rounded-lg py-20 text-white">{"{Findvc}"}</div>
  <div class="border border-2 shadow-lg rounded-lg py-20 text-white">addify</div>
  <div class="border border-2 shadow-lg rounded-lg py-20 text-white">addbyme</div>
  <div class="border border-2 shadow-lg rounded-lg py-20 text-white">unipod</div>

</div>


    </div>
  )
}

export default Blogs;