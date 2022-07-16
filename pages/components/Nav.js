import Image from "next/image";
import Link from "next/link";

const Nav = ()=>{
   return(
    <div className="bg-black">

         <div className="rounded-full flex justify-between">
            <div className="pl-4">
             <Image alt="logo" className="rounded-full py-5" width="60" height={60} src="/sahilnetic.png" />
            </div>
          <Link passHref href="https://github.com/sahilnetic/portfolio/fork"><a><h4 className="text-white pt-5 pr-5">
            <Image width={30} height={30} src="/fork.png" />
            </h4>
            </a>
            </Link>
          </div>
        <hr />
    </div>
   )
}

export default Nav;