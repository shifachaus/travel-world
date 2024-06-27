const CountryItem = ({ country }) => {
  return (
    <li
      className="text-zinc-300 font py-4 px-3 rounded-md flex items-center gap-4 mb-2 
	border border-l-4 border-l-[#FFCF4A] border-t-[#2C3747] border-b-[#2C3747] border-r-[#2C3747] "
    >
      <span className="text-md">{country.emoji}</span>
      <span className="font__CrimsonText text-lg">{country.country}</span>
    </li>
  );
};

export default CountryItem;
