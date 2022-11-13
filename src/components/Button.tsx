import { Record } from "../data/constants";

interface ButtonTypes {
  title: string;
  onClick?: () => void;
}

const Button = ({ title, onClick }: ButtonTypes) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
