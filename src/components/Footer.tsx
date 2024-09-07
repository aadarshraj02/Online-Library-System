import { GrGithub } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";

const Footer = (): JSX.Element => {
  return (
    <div className="bg-zinc-900 text-white w-full p-[19px] flex items-center justify-between">
      <p>Online Library &#169; &#8482;</p>
      <div className="flex gap-5">
        <a href="https://github.com/aadarshraj02" target="_blank">
          <GrGithub className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
        <a
          href="https://www.linkedin.com/in/adarsh-raj-a5bab2234/"
          target="_blank"
        >
          <IoLogoLinkedin className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
        <a href="https://leetcode.com/u/adarsh02/" target="_blank">
          <SiLeetcode className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
