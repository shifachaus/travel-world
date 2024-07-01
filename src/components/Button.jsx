const Button = ({ children, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={`font text-white  font-medium text-sm  sm:w-auto  text-center ${type}`}
    >
      {children}
    </button>
  );
};

export default Button;
