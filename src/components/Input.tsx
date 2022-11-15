interface InputTypes {
    placeholder: string;
    type: string;
    onInput: () => ;
}

const Input = ({placeholder, type, onInput}: InputTypes) => {
  return (
    <input onInput={() => onInput} type={type} placeholder={placeholder} />
  )
}

export default Input