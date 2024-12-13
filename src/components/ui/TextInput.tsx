import { Input } from "./input";
import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput: React.FC<TextInputProps> = ({ ...props }) => {
  return (
    <Input
      className={`border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-20`}
      {...props}
    />
  );
};

export default TextInput;
