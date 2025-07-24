import Navbar from "../components/NavBar.jsx";
import HeroContainer from "../components/HeroContainer.jsx";
import Footer from "../components/Footer.jsx";

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
              <img
                src="./profile.svg"
                alt="profile"
                className="h-[20rem] items-center justify-center"
              />
            </div>
          </div>
        </div>
      </div>
      <HeroContainer />
      <Footer />
    </>
  );
}

export default Homes;
