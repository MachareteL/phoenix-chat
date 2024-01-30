import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex flex-col">
      <Link
        href={"/m/create"}
        className="bg-[#1e1e1e] text-[#DDDDDD] px-24 py-4 scale-95 hover:scale-100 transition rounded-t-lg"
      >
        Create room
      </Link>
      <Link
        href={"/m/join"}
        className="bg-[#1e1e1e] text-[#DDDDDD] px-24 py-4 scale-95 hover:scale-100 transition rounded-b-lg"
      >
        Join room
      </Link>
    </div>
  );
};

export default Menu;
