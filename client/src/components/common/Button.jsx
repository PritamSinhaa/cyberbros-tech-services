const Button = ({ title }) => {
  return (
    <button className="text-[18px] text-white/60 cursor-pointer hover:text-white">
      {title}
    </button>
  );
};

export default Button;
