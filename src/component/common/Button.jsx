
import { Link } from "react-router-dom";

const Button = ({ variant = "default", Button, link = "/" }) => {
  const variants = {
    default: "bg-white/10 text-white",
    primary: "bg-red-500 text-white",
  };

  return (
    <Link
      to={link}
      className={`py-4 px-8 text-base rounded-full ${
        variants[variant] || variants.default
      }`}
    >
      {Button}
    </Link>
  );
};

export default Button;
