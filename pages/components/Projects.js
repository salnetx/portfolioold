import Link from "next/link";
const Projects = ()=>{

  return(
<div>
<div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 mb-28">
  
  <Link passHref href="https://appmojo.site">
  <a>
  <div className="border border-2 shadow-lg rounded-lg py-20 text-white">Appmojo</div>
  </a>
  </Link>
  <Link passHref href="https://findvc.vercel.app">
  <a>
  <div className="border border-2 shadow-lg rounded-lg py-20 text-white">{"{Findvc}"}</div>
  </a>
  </Link>
  <div className="border border-2 shadow-lg rounded-lg py-20 text-white">addify</div>
  <div className="border border-2 shadow-lg rounded-lg py-20 text-white">addifylocal</div>
  <div className="border border-2 shadow-lg rounded-lg py-20 text-white">unipod</div>

</div>


    </div>
  )
}

export default Projects;