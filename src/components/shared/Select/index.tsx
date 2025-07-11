import { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  dark?: boolean;
  error?: string;
  children: React.ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ dark = false, error, children, ...rest }, ref) => {
    return (
      <div className="w-full">
        <select
          ref={ref}
          className={`${
            dark ? "bg-secondary text-white" : "bg-white text-secondary"
          } w-full py-4 px-6 text-xl rounded-xl outline-none focus:ring-4 focus:ring-primary transition-all appearance-none ${
            error ? "border-2 border-red-500" : "border-2 border-transparent"
          }`}
          {...rest}
        >
          {children}
        </select>
        {error && <p className="text-red-400 text-sm mt-1 px-2">{error}</p>}
      </div>
    );
  }
);

export default Select;
