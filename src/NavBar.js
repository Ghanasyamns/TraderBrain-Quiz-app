import './customCSS.css'
import logo from './Trade-Brains-Logo.png'
function NavBar() {
    return (
        <div className="navbar w-full  h-auto py-5 space-y-3  grid grid-row-3   items-center shadow-md md:flex ">
          {/* logo */}
          <img className="mx-auto  h-10 md:w-[20%] md:px-10 md:-mx-0 justify-self-auto "  src={logo} alt='logo'/>
   {/* searchbox */}
          <div className="flex items-center rounded-full md:w-[40%] md:ml-10 h-10 border-2 border-gray-300 mx-3">
            <input  type="text" placeholder="Search Company" className="outline-none flex-grow mx-3 " />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4  text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </div>
            {/* nav */}
           
                <ul className="flex justify-center md:justify-end md:w-[40%]  space-x-4 md:space-x-14 mr-4 text-gray-700">
                    <li>Products
                      <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg></span>

                    </li>
                    <li>Tools
                    <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg></span>
                    </li>
                    <li>Pricing</li>
                    <li>icon</li>
                </ul>
            
        </div>
    )
}

export default NavBar
