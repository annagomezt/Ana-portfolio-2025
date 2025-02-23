import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="annagomezt4@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+55 (24) 99948-4601" Image={FiPhone} />
      <SingleInfo text="Rio de Janeiro, Brasil" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
