import React from 'react';

const Input = ({ label, name, value, onChange, error }) => {
  return (
    <div className="w-full h-11 relative flex rounded-xl">
      <input
        required
        className={`peer w-full outline-none px-4 text-base rounded-lg border ${error ? 'border-red-500 bg-red-50' : 'border-gray-400'} focus:shadow-lg focus:bg-transparent`}
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={name}
        className={`absolute top-1/2 translate-y-[-50%] bg-transparent left-4 px-2 font-light text-base duration-150
          peer-focus:top-0 peer-focus:left-3 peer-focus:text-sm peer-focus:text-black 
          peer-valid:top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-black 
          peer-focus:border-[#828282] peer-valid:border-[#828282] peer-focus:bg-white peer-valid:bg-white
          ${error ? 'text-red-500' : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
