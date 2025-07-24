import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center   p-6 mt-44 ">
        <div className="flex flex-col items-center justify-center mb-12">
          <h3 className="text-center font-bold text-ternary-dark text-2xl">
            Follow Me
          </h3>
          <div className="flex items-center justify-between mt-10 px-4 gap-x-16 text-3xl text-ternary-dark">
            <AiOutlineGlobal />
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
        <div className="flex items-center justify-center text-ternary-dark text-2xl font-general-regular">
          <p>© 2025 React & Tailwind CSS Portfolio. SANDESH</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
