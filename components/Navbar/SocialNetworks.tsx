import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialNetworks = () => {
  return (
    <div className="flex gap-x-4">
      <FaSquareInstagram />
      <FaFacebookSquare />
      <FaSquareXTwitter />
    </div>
  );
};

export default SocialNetworks;
