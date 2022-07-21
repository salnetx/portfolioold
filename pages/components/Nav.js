import Image from "next/image";
import Link from "next/link";

const Nav = ()=>{
   return(
    <div className="bg-black">

         <div className="rounded-full flex justify-between">
            <div className="pl-4">
               <h1 className="text-white translate-y-4 font-medium text-xl">Sahilnetic</h1>
            </div>
          <Link passHref href="https://github.com/sahilnetic/portfolio/fork">
            <a><h4 className="text-white -translate-y-2 pt-5 pr-5">
            <Image alt="github fork" width={30} height={30} src="/fork.png" />
            </h4>
            </a>
            </Link>
          </div>
        <hr />
    </div>
   )
}

export default Nav;