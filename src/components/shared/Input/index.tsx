import type { InputProps } from "./types";

export default function Input({ dark = false, error, ...rest }: InputProps) {
  return (
    <div className="w-full">
      <input
        className={`${
          dark ? "bg-secondary text-white" : "bg-white text-secondary"
        } w-full py-4 px-6 text-xl rounded-xl outline-none focus:ring-offset-1 focus:ring-4 focus:ring-primary transition-all ${
          error ? "border-2 border-red-500" : ""
        }`}
        {...rest}
      />
      {error && <p className="text-red-400 text-sm mt-1 px-2">{error}</p>}
    </div>
  );
}
