import { useRef } from "react";

interface InputTypes {
  placeholder: string;
  type: string;
  name?: string;
  props(field: unknown): any
}

const Input = ({ placeholder, type, name, props }: InputTypes) => {
  const inputRef = useRef(null)

  const onInputChange = () => {
    if (inputRef !== null) {
      props(inputRef.current)
    }
  };

  return (
    <input
      ref={inputRef}
      name={name}
      onInput={onInputChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
