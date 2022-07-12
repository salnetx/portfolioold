import Image from "next/image";

const Nav = ()=>{
   return(
    <div>

         <div className="rounded-full px-5">
          <Image alt="logo" className="rounded-full" width="60" height={60} src="/sahilnetic.png" />
          </div>
        <hr />
    </div>
   )
}

export default Nav;