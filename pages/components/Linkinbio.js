import Image from "next/image";
import Link from "next/link";
const Linkinbio = ()=>{
   return(
    <div className="space-y-4 sm:mx-72 mx-8">
    <div className="border flex grid grid-cols-5 rounded-lg shadow border-black border-t-2 border-l-2 hover:rounded">
          <div className="translate-y-4 pl-8"> <Image alt="twitter logo" width="30" height="30" src="/twitter.png" /></div>
        <h3 className="text-center py-5 col-end-4 pl-2">Twitter</h3>
    </div>

    <div className="border flex grid grid-cols-5 rounded-lg shadow border-black border-t-2 border-l-2 hover:rounded">
          <div className="translate-y-4 pl-8"> <Image alt="instagram logo" width="30" height="30" src="/instagram.png" /></div>
        <h3 className="text-center py-5 col-end-4 pl-2">Instagram</h3>
    </div>

    <div className="border flex grid grid-cols-5 rounded-lg shadow border-black border-t-2 border-l-2 hover:rounded">
          <div className="translate-y-4 pl-8"> <Image alt="Addify Logo" width="30" height="30" src="/twitter.png" /></div>
        <h3 className="text-center py-5 col-end-4 pl-2">Addify</h3>
    </div>

    <div className="border flex grid grid-cols-5 rounded-lg shadow border-black border-t-2 border-l-2 hover:rounded">
          <div className="translate-y-4 pl-8"> <Image alt="github logo" width="30" height="30" src="/github.png" /></div>
        <h3 className="text-center py-5 col-end-4 pl-2">Github</h3>
    </div>

    <div className="border flex grid grid-cols-5 rounded-lg shadow border-black border-t-2 border-l-2 hover:rounded">
          <div className="translate-y-4 pl-8"> <Image alt="tailwindcomponent" width="30" height="30" src="/css.png" /></div>
        <h3 className="text-center py-5 col-end-4 pl-2">TC</h3>
    </div>

    </div>
   )
}

export default Linkinbio;