const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;
  return (
    <li
      className="text-zinc-300 font cursor-pointer  py-4 px-3 rounded-md flex justify-between gap-4 mb-2 
	border border-l-4 border-l-primary border-t-[#2C3747] border-b-[#2C3747] border-r-[#2C3747] hover:bg-[#2C3747]"
    >
      <div className="flex gap-4 items-center">
        <span className="">{emoji}</span>
        <h3 className="">{cityName}</h3>
      </div>
      <div className="flex gap-4 items-center">
        <time className="">({formatDate(date)})</time>
        <button className="cursor-pointer">&times;</button>
      </div>
    </li>
  );
};

export default CityItem;
