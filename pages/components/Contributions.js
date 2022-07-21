
import Link from "next/link";
const Contributions = ()=>{

    return(
  <div>
  <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 mb-28">
    
    <Link passHref href="https://tailwindcomponents.com/u/sahilnetic">
    <a>
    <div className="bg-zinc-700 backdrop-blur-md px-3 py-3 rounded-lg shadow-lg shadow-lg ">
        <img className="w-full h-32 blur-3xl hover:animate-pulse hover:blur-xl rounded-xl" src="https://picsum.photos/200/300?random=1" alt="image" />
        <div className="text-left">
        <h3>Tailwind Components</h3>
        <p className="text-xs">6 components</p>
        </div>
      </div>
    </a>
    </Link>

  </div>

       

  
      </div>
    )
  }
  
  export default Contributions;