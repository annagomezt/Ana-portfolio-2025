import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/ana-gomes-6954562a5" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/annagomezt" Icon={FiGithub} />
      <SingleContactSocial link="https://instagram.com/annagomezt_" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
