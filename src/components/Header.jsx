import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {

    /* creating a constant location*/
    const location=useLocation()
    const navigate = useNavigate();
    function pathMatchRoute(route){
        if (route===location.pathname){
            return true
        }
        
    }


  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
       <header className="flex justify-between items-center px-5 max-w-5xl mx-auto">
            <div>
                <img src="./images/logo.png" alt="logo" className="h-12 cursor-pointer"  onClick={() => navigate("/")}/>  
            </div>
                <div>
                    <ul className="flex space-x-12">
                         <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                          ${pathMatchRoute("/") && "text-gray-950  border-b-orange-500"}`}  onClick={() => navigate("/")}> Home</li>
                         <li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                          ${pathMatchRoute("/Offers") && " border-b-orange-500 text-gray-950"}`} onClick={() => navigate("/Offers")}>Offers</li>
                         <li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                          ${pathMatchRoute("/sign-in") && " border-b-orange-500 text-gray-950"}`} onClick={() => navigate("/sign-in")}>Sign in</li>
                    </ul>
                </div>
 
       </header>
    </div>
  )
}
