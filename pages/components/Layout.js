import Image from "next/image";
import Header from "./Header";

const Layout = ({children})=>{
  return(
 
<div>
    <Header />
<div className="mx-auto bg-black flex justify-center items-center filter blur-3xl animate-pulse duration-500 transition w-full">
	<div className="mr-10 flex relative">
		<div className="p-44 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 absolute top-20 right-0">

		</div>
		<div className="p-44 rounded-full bg-gradient-to-r from-rose-500 via-amber-500 to-pink-500 absolute md:flex hidden">

		</div>
		
	</div>
	<div className="flex flex-col absolute top-8 right-10 space-y-4">

		<div className="p-5 rounded-full bg-gradient-to-r to-pink-700 via-red-500 from-indigo-900 absolute right-16 top-10">

		</div>
	</div>
	<div className="flex flex-col absolute bottom-8 right-10 space-y-4">

		<div className="p-10 rounded-full bg-gradient-to-r to-pink-700 from-indigo-900 absolute right-16 bottom-10">

		</div>
	</div>
	<div className="flex flex-col space-y-4 filter animate-pulse duration-500">
		<div className="p-10 bg-gradient-to-r to-indigo-700 from-blue-900 absolute top-20 left-20">

		</div>
		<div className="p-10 bg-gradient-to-r to-indigo-700 from-blue-900 absolute bottom-20 right-20">

		</div>
	</div>
</div>

<div className=" bg-black opacity-80 rounded-lg items-center"
>

<div className="h-screen">

<main>{children}</main>

 </div>
</div>
          </div>
  )
}

export default Layout;