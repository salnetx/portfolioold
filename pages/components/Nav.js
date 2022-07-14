import Image from "next/image";

const Nav = ()=>{
   return(
    <div className="bg-black">

         <div className="rounded-full flex justify-between">
            <div className="pl-4">
             <Image alt="logo" className="rounded-full py-5" width="60" height={60} src="/sahilnetic.png" />
            </div>
          <h4 className="text-white pt-5 pr-5">
            <Image width={30} height={30} src="/fork.png" />
            </h4>
          </div>
        <hr />
    </div>
   )
}

export default Nav;