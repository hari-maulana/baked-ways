interface FormInputProps {
  type: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  autoComplete?: string; // Added autoComplete prop
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  required,
  onChange,
  id,
  name,
  value,
  autoComplete, // Destructure the autoComplete prop
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="py-1 px-2 rounded-sm border border-gray-400 focus:border-gray-700 focus:outline-none"
      required={required}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete} // Pass the autoComplete prop to the input
    />
  );
};
