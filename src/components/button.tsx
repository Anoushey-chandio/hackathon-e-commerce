const Button = ({ label = "Shop Now", outline = false, underline = false }) => {
  return (
    <button
      className={`mt-6 w-[121px] h-[36px] text-lg font-semibold ${
        outline
          ? "border-2 border-gray-500 rounded-lg"
          : ""
      } ${
        underline
          ? "border-b-2 border-gray-500"
          : ""
      } hover:bg-gray-500 hover:text-white transition duration-300`}
    >
      {label}
    </button>
  );
};

export default Button;

  
  