interface FormInputProps {
  type: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  required,
  onChange,
  id,
  name,
  value,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="py-1 px-2 rounded-sm border border-gray-400 focus:border-gray-700 focus:outline-none"
        required={required}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
