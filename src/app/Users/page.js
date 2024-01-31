import Image from "next/image";
import Logo from "../../../public/svglogo.svg";

const Users = () => {
  const UsersList = [
    {
      id: 1,
      username: "Ash Hujash",
      hours: "13",
      ping: "21",
    },
    {
      id: 2,
      username: "Liam Bennett",
      hours: "1",
      ping: "21",
    },
    {
      id: 3,
      username: "Maya Rodriguez",
      hours: "0",
      ping: "43",
    },
    {
      id: 4,
      username: "Oliver Harper",
      hours: "54",
      ping: "65",
    },
    {
      id: 5,
      username: "Emily Chang",
      hours: "2",
      ping: "87",
    },
    {
      id: 6,
      username: "Noah Parker",
      hours: "32",
      ping: "22",
    },
  ];

  return (
    <div className="centerDivs flex flex-col">
      <div className="w-1/2">
        <div className="p-4 bg-neutral-800 panel">
          <Image src={Logo} alt="Rage logo" width={150} height={100} />
        </div>
        <table className="text-xl">
          <thead className="bg-[#1A1A1A] text-[#FFEB3B]">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">LIETOTĀJS</th>
              <th className="py-2 px-4">STUNDAS</th>
              <th className="py-2 px-4">PING</th>
            </tr>
          </thead>
          <tbody>
            {UsersList.map((user) => (
              <tr key={user.id} className="bg-[#1A1A1A] opacity-80 text-white">
                <td className="py-2 px-5 w-1/6">{user.id}</td>
                <td className="py-2 px-4 w-4/6">{user.username}</td>
                <td className="py-2 px-4 w-1/6">{user.hours}</td>
                <td className="py-2 px-4">{user.ping}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
