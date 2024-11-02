import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from 'react-redux';

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
    const location = useLocation();
    const navigate = useNavigate();

    function pathMatchRoute(route) {
        return route === location.pathname;
    }

    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-50">
            <header className="grid grid-cols-12 items-center max-w-6xl mx-auto px-4 h-14">
                {/* Logo Section */}
                <div className="col-span-2 flex justify-start">
                    <img
                        src="./images/logo.png"
                        alt="logo"
                        className="h-12 cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                </div>

                {/* Search Bar Section */}
                <div className="col-span-4 flex justify-center ml-14"> {/* Added margin-left */}
                    <form className="flex items-center bg-white border-2 border-gray-300 rounded-full shadow-md w-8/9">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent px-4 py-2 w-full text-sm text-gray-700 focus:outline-none rounded-l-full"
                        />
                        <button type="submit" className="flex items-center px-3 py-2 bg-transparent text-gray-700 rounded-r-full">
                            <AiOutlineSearch size={14} />
                        </button>
                    </form>
                </div>

                {/* Navigation Links Section */}
                <div className="col-span-4 flex justify-start space-x-4 mr-3 ml-20"> {/* Added margin-left */}
                    <ul className="flex space-x-5">
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold  hover:text-orange-400 transition duration-300 text-gray-400 border-b-[3px] border-b-transparent
                                ${pathMatchRoute("/") && "text-gray-950 border-b-orange-300"}`}
                            onClick={() => navigate("/")}
                        >
                            Home
                        </li>
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold hover:text-orange-400 transition duration-300 text-gray-400 border-b-[3px] border-b-transparent
                                ${pathMatchRoute("/about") && "border-b-orange-300 text-gray-950"}`}
                            onClick={() => navigate("/about")}
                        >
                            About
                        </li>
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold hover:text-orange-400 transition duration-300 text-gray-400 border-b-[3px] border-b-transparent
                                ${pathMatchRoute("/listings") && "border-b-orange-300 text-gray-950"}`}
                            onClick={() => navigate("/listings")}
                        >
                            Listings
                        </li>
                    </ul>
                </div>

                {/* Auth Buttons Section */}
                <div className="col-span-2 flex justify-start space-x-4 mr-3"> {/* Added margin-right */}
                    <button
                        className="text-sm font-semibold text-gray-400  hover:text-orange-400 transition duration-300"
                        onClick={() => navigate("/log-in")}
                    >
                        Log in
                    </button>
                    <button
                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-semibold transition duration-300 ${
                            currentUser
                                ? "bg-transparent text-gray-700 hover:bg-gray-200"
                                : "bg-orange-400 text-white hover:bg-gray-600 hover:text-orange-400"
                        }`}
                         onClick={() => navigate(currentUser ? "/profile" : "/sign-up")}
                    >
                         {currentUser ? (
                            <img
                              className="rounded-full h-7 w-7 object-cover"
                              src={currentUser.avatar}
                              alt="profile"
                             /> ) : (
                                <span className="text-white hover:underline">Sign up</span>
                            )}
                    </button>
                </div>
            </header>
        </div>
    );
}
