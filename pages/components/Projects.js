import Link from "next/link";
const Projects = ()=>{

  return(
<div>
<div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 mb-28">
  
  <Link passHref href="https://appmojo.site">
  <a>
  <div className="bg-zinc-700 backdrop-blur-md px-3 py-3 rounded-lg shadow-lg shadow-lg ">
        <img className="w-full h-32 blur-3xl hover:animate-pulse hover:blur-xl rounded-xl" src="https://picsum.photos/200/300?random=1" alt="image" />
        <div className="text-left">
        <h3 className="text-xl text-white">App Mojo</h3>
        <p className="text-xs text-gray-400">appmojo.site</p>
        </div>
      </div>
  </a>
  </Link>
  <Link passHref href="https://findvc.vercel.app">
  <a>
  <div className="bg-zinc-700 backdrop-blur-md px-3 py-3 rounded-lg shadow-lg shadow-lg ">
        <img className="w-full h-32 blur-3xl hover:animate-pulse hover:blur-xl rounded-xl" src="https://picsum.photos/200/300?random=1" alt="image" />
        <div className="text-left">
        <h3 className="text-xl text-white">Findvc</h3>
        <p className="text-xs text-gray-400">Findvc.vercel.app</p>
        </div>
      </div>  </a>
  </Link>
  <div className="bg-zinc-700 backdrop-blur-md px-3 py-3 rounded-lg shadow-lg shadow-lg ">
        <img className="w-full h-32 blur-3xl hover:animate-pulse hover:blur-xl rounded-xl" src="https://picsum.photos/200/300?random=1" alt="image" />
        <div className="text-left">
        <h3 className="text-xl text-white">Addify</h3>
        <p className="text-xs text-gray-400">addify.us</p>
        </div>
      </div>  

      <div className="bg-zinc-700 backdrop-blur-md px-3 py-3 rounded-lg shadow-lg shadow-lg ">
        <img className="w-full h-32 blur-3xl hover:animate-pulse hover:blur-xl rounded-xl" src="https://picsum.photos/200/300?random=1" alt="image" />
        <div className="text-left">
        <h3 className="text-xl text-white">Addify local</h3>
        <p className="text-xs text-gray-400">local.addify.us</p>
        </div>
      </div>


      <div className="bg-zinc-700 backdrop-blur-md px-3 py-3 rounded-lg shadow-lg shadow-lg ">
        <img className="w-full h-32 blur-3xl hover:animate-pulse hover:blur-xl rounded-xl" src="https://picsum.photos/200/300?random=1" alt="image" />
        <div className="text-left">
        <h3 className="text-xl text-white">Unipod</h3>
        <p className="text-xs text-gray-400">unipod.space</p>
        </div>
      </div>

</div>


    </div>
  )
}

export default Projects;