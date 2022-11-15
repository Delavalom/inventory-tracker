import { SetStateAction } from "react";

interface InputTypes {
    placeholder: string;
    type: string;
    onInput: (e: any) => void;
}

const Input = ({placeholder, type, onInput}: InputTypes) => {
  return (
    <input onInput={() => onInput} type={type} placeholder={placeholder} />
  )
}

export default Input