import React from 'react';

interface Props {
  value: any;
  onChange: React.SetStateAction<any>;

  type : "button" | "text" | "password" | "email";
  placeholder: string;
}

const GenericInput: React.FC<Props> = ({value, onChange, type, placeholder}) => {
  
  const focusInput = () => {
    const input = document.getElementById(`input_${value}_${placeholder}`);
    input?.focus();
  }
  
  return (
  <div className="relative">
    <input 
      id={`input_${value}_${placeholder}`}
      name="email" 
      type="" 
      className="peer h-10 w-full border-b-2 border-gray-300 text-white placeholder-transparent focus:outline-none 
      focus:border-cyan-500 transition duration-500 ease-in-out" 
      placeholder="example@mail.com" 
      />
    <label className="cursor-pointer absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-500 duration-500 peer-focus:text-sm"
      onClick={focusInput}
    >
      {placeholder}
    </label>
  </div>
);
};

export default GenericInput;