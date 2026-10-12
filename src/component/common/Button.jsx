import { Link } from "react-router-dom";

const Button = ({ Button, link }) => {
  return (
    <Link to={link} className="bg-white/6 text-white py-4 px-31.5 text-base rounded-[114px]">
      {Button}
    </Link>
  );
};

export default Button;
