import { InputHTMLAttributes } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const TextField = ({ errorMessage }: TextFieldProps) => {
  return (
    <>
      <input />
      {errorMessage && <div>{errorMessage}</div>}
    </>
  );
};

export default TextField;
