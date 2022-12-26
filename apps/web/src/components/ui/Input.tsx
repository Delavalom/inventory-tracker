import { useRef } from "react";

interface InputTypes {
  placeholder: string;
  type: string;
  name?: string;
  props(field: HTMLInputElement | null): void;
}

export const Input = ({ placeholder, type, name, props }: InputTypes) => {
  const inputRef = useRef<Parameters<InputTypes["props"]>[0]>(null);

  const onInputChange = () => {
    if (inputRef !== null) {
      props(inputRef.current);
    }
  };

  return (
    <input
      className="text-white rounded-lg w-24 px-5 py-2 text-4 bg-indigo-900 transition-colors focus:outline-indigo-500 focus:ring-indigo-500"
      ref={inputRef}
      name={name}
      onInput={onInputChange}
      type={type}
      placeholder={placeholder}
    />
  );
};
