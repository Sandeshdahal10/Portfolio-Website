import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function AboutMe() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-10">
        <div className="flex items-center justify-center text-center ml-14 px-8">
          <img
            src="./profile.svg"
            alt="profile"
            className=" h-[20rem] w-[65rem]"
          />
        </div>
        <div className="flex items-center justify-center text-left ml-14 px-14">
          <p className="text-xl font-general-regular text-ternary-dark text-justify">
            I am a passionate web developer with experience in building dynamic
            and responsive web applications. My journey in web development
            started with a curiosity to understand how websites work, and it has
            evolved into a full-fledged career. I specialize in creating
            user-friendly interfaces and ensuring seamless user experiences. I
            am proficient in HTML, CSS, and JavaScript, and I have experience
            working with various frameworks and libraries. I am always eager to
            learn new technologies and improve my skills. In my free time, I
            enjoy exploring new web technologies, contributing to open-source
            projects, and building personal projects to further enhance my
            knowledge.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 mb-10 bg-gray-100 p-10 rounded-lg w-full h-[250px]">
        <div className="flex flex-col items-center justify-center text-center gap-y-4 mx-10 px-4">
          <h2 className="text-2xl font-bold text-gray-800">
            <span>12</span>
          </h2>
          <span className="text-gray-600 font-bold text-xl">
            Years of Experience
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-y-4 mx-10 px-4">
          <h2 className="text-2xl font-bold text-gray-800">
            <span>22K</span>+
          </h2>
          <span className="text-gray-600 font-bold text-xl">
            Stars on Github
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-y-4 mx-10 px-4">
          <h2 className="text-2xl font-bold text-gray-800">
            <span>92</span>%
          </h2>
          <span className="text-gray-600 font-bold text-xl">
            Positive Feedback
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-y-4 mx-10 px-4 ">
          <h2 className="text-2xl font-bold text-gray-800">
            <span>77</span>%
          </h2>
          <span className="text-gray-600 font-bold text-xl">
            Projects Completed
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 mb-10">
        <div className="flex items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-ternary-dark">
            Some of the brand that trust me.
          </h2>
        </div>
        <div>
          <div></div>
          <div>
            <img src="" alt="" />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutMe;
