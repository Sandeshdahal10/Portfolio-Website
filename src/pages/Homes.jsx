import Navbar from "../components/navBar.jsx";
import { IoIosSearch } from "react-icons/io";
function Homes() {
  return (
    <>
      <div className="w-[100%] bg-orange flex items-center justify-center">
        <div className="w-[80%]">
          <Navbar />
          {/* content */}
          <div className="flex w-full gap-x-20 mt-20">
            {/* text */}
            <div className="flex  h-[30rem] p-10 w-[50%] items-center justify-center">
              <div className="flex flex-col gap-y-8">
                <span className="text-3xl">Hi, I am Sandesh</span>
                <span className="text-3xl">
                  A Full-stack Developer & Design Enthusiast
                </span>
                <span className="px-7 py-5 shadow-xl cursor-pointer text-white bg-primary text-center  rounded-md">
                  Download CV
                </span>
              </div>
            </div>
            {/* svg */}
            <div className="flex items-center justify-center">
              <img src="./profile.svg" alt="profile" className="h-[20rem] items-center justify-center" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <p className="text-2xl font-general-medium text-ternary-dark mb-1  ">Projects Portfolio</p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-6">
        <h3 className="text-2xl text-center text-md mb-3 font-general-regular">Search projects by title or filter by category</h3>
      </div>
      <div className="flex items-center justify-center  border-primary-light gap-3 pb-3 pt-3 w-[100%]  ">
        {/* search project */}
        <div className="flex  justify-center items-center gap-4 border-md width-[20%] pr-10 mr-20">
          <span className="hidden sm:block rouded-xl cursor-pointer border-md  shadow-sm pt-2 width-[30%]justify-between items-center"><IoIosSearch  /></span>
          <input type="text" placeholder="Search Projects" className=" border-gray-200 rounded-md justify-between pl-3 font-general-bold   py-2  text-sm sm:text-medium sm:px-4 width-[90%] bg-primary-light" />
        </div>
        {/* filter project */}
        <div className="flex justify-between gap-4 ml-20">
          <select name="selectoption" id="" className="font-general-medium text-sm sm:text-md border-light border-gray-200 rounded-lg bg-primary-light px-4 py-2 sm:px-6">
            <option value="" className="text-sm sm:text-md">All projects</option>
            <option value="" className="text-sm sm:text-normal">Web Application</option>
            <option value=""className="text-sm sm:text-normal">Mobile Application</option>
            <option value=""className="text-sm sm:text-normal">UI/UX Design</option>
            <option value=""className="text-sm sm:text-normal">Branding</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Homes;
