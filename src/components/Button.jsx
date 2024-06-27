const Button = ({ children, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={`font text-white bg-primary hover:primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${type}`}
    >
      {children}
    </button>
  );
};

export default Button;
