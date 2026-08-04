type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-green-500 text-black hover:bg-green-400"
      : "border border-slate-700 text-white hover:border-green-500 hover:text-green-400";

  return (
    <button
      className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${styles}`}
    >
      {children}
    </button>
  );
}