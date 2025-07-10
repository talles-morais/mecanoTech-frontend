import type { InputProps } from "./types";

export default function Input({ dark = false, ...rest }: InputProps) {
  return (
    <input
      className={`${
        dark ? "bg-secondary text-white" : "bg-white text-secondary"
      } py-4 px-6 text-xl rounded-xl outline-none focus:ring-offset-1 focus:ring-4 focus:ring-primary transition-all`}
      {...rest}
    />
  );
}
