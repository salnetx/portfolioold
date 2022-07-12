import Link from "next/link";
const Footer =()=>{
  return(
    <div className="sm:mt-32 mt-20">
        <hr />
        <p className="text-center py-5">Crafted with ❤️ by <span className="font-black"><Link href="https://twitter.com/sahilnetic">@sahilnetic</Link></span></p>
    </div>
  )
}

export default Footer;