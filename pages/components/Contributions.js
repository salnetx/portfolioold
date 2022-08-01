
import Link from "next/link";
const Contributions = ()=>{

    return(
  <div>
      <div className="grid sm:grid-cols-3 px-8 bg-transparent gap-y-8 sm:gap-x-8">
          
      <div className="bg-white/30 px-3 py-3 rounded-lg shadow-lg shadow-lg opacity-90">
                <p className="py-20" />
                <h3>Tailwind Components</h3>
                <p className="text-xs">Visit {">>"}</p>
              </div>
    
              <div className="bg-white/30 px-3 py-3 rounded-lg shadow-lg shadow-lg opacity-90">
                <p className="py-20" />
                <h3>Stack Overflow</h3>
                <p className="text-xs">Visit {">>"}</p>
              </div>     
    
              
    
          </div>
  
      </div>
    )
  }
  
  export default Contributions;