import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
function HeroContainer() {
  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <p className="text-2xl font-general-medium text-ternary-dark mb-1  ">
          Projects Portfolio
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-6">
        <h3 className="text-2xl text-center text-md mb-3 font-general-regular">
          Search projects by title or filter by category
        </h3>
      </div>
      <div className="flex items-center justify-center  border-primary-light gap-3 pb-3 pt-3 w-[100%]  ">
        {/* search project */}
        <div className="flex  justify-center items-center gap-4 border-md width-[20%] pr-10 mr-20">
          <span className="hidden sm:block rouded-xl cursor-pointer border-md  shadow-sm pt-2 width-[30%]justify-between items-center">
            <IoIosSearch />
          </span>
          <input
            type="text"
            placeholder="Search Projects"
            className=" border-gray-200 rounded-md justify-between pl-3 font-general-bold   py-2  text-sm sm:text-medium sm:px-4 width-[90%] bg-primary-light"
          />
        </div>
        {/* filter project */}
        <div className="flex justify-between gap-4 ml-20">
          <select
            name="selectoption"
            id=""
            className="font-general-medium text-sm sm:text-md border-light border-gray-200 rounded-lg bg-primary-light px-4 py-2 sm:px-6"
          >
            <option value="" className="text-sm sm:text-md">
              All projects
            </option>
            <option value="" className="text-sm sm:text-normal">
              Web Application
            </option>
            <option value="" className="text-sm sm:text-normal">
              Mobile Application
            </option>
            <option value="" className="text-sm sm:text-normal">
              UI/UX Design
            </option>
            <option value="" className="text-sm sm:text-normal">
              Branding
            </option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-evenly mt-10 mb-10 w-[100%] h-[650px] flex-wrap gap-y-20">
        <div className="flex flex-col items-center justify-center w-[25%] px-2 rounded-lg">
          {/* image */}
          <div className="flex flex-col items-center justify-center w-[100%] mb-3 h-[200px]  rounded-lg shadow-md">
            <img
              src="./webapplication.svg"
              alt="photo"
              className="h-[200px] w-[350px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] mt-1 ">
            <h2 className="text-2xl font-general-bold text-gray-800  justify-center items-center">
              Google Health Platform
            </h2>
            <h3 className="text-xl font-general-semibold text-gray-600  justify-center items-center">
              Web Application
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[25%] px-2 rounded-lg">
          {/* image */}
          <div className="flex flex-col items-center justify-center w-[100%] mb-3 h-[200px]  rounded-lg shadow-md">
            <img
              src="./webapplication.svg"
              alt="photo"
              className="h-[200px] w-[350px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] mt-1 ">
            <h2 className="text-2xl font-general-bold text-gray-800    justify-center items-center">
              Google Health Platform
            </h2>
            <h3 className="text-xl font-general-semibold text-gray-600  justify-center items-center">
              Web Application
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          {/* image */}
          <div className="flex flex-col items-center justify-center w-[100%] mb-3 h-[200px]  rounded-lg shadow-md">
            <img
              src="./webapplication.svg"
              alt="photo"
              className="h-[200px] w-[350px]"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-[100%] mt-1 ">
            <h2 className="text-2xl font-general-bold text-gray-800  justify-center items-center">
              Google Health Platform
            </h2>
            <h3 className="text-xl font-general-semibold text-gray-600  justify-center items-center">
              Web Application
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          {/* image */}
          <div className="flex flex-col items-center justify-center w-[100%] mb-3 h-[200px]  rounded-lg shadow-md">
            <img
              src="./webapplication.svg"
              alt="photo"
              className="h-[200px] w-[350px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] mt-1 ">
            <h2 className="text-2xl font-general-bold text-gray-800  justify-center items-center">
              Google Health Platform
            </h2>
            <h3 className="text-xl font-general-semibold text-gray-600  justify-center items-center">
              Web Application
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          {/* image */}
          <div className="flex flex-col items-center justify-center w-[100%] mb-3 h-[200px]  rounded-lg shadow-md">
            <img
              src="./webapplication.svg"
              alt="photo"
              className="h-[200px] w-[350px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] mt-1 ">
            <h2 className="text-2xl font-general-bold text-gray-800  justify-center items-center">
              Google Health Platform
            </h2>
            <h3 className="text-xl font-general-semibold text-gray-600  justify-center items-center">
              Web Application
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center w-[100%] mb-3 h-[200px]  rounded-lg shadow-md">
            <img
              src="./webapplication.svg"
              alt="photo"
              className="h-[200px] w-[350px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] mt-1 ">
            <h2 className="text-2xl font-general-bold text-gray-800  justify-center items-center">
              Google Health Platform
            </h2>
            <h3 className="text-xl font-general-semibold text-gray-600  justify-center items-center">
              Web Application
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%] h-[50px] ">
          <Link to="/projects">
            <button className="bg-primary py-2 px-6 rounded-lg ">
              <span className="font-medium text-white">More Projects</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroContainer;
