import Image from "next/image";
import Logo from "../../../public/svglogo.svg";
import users from "../../../public/users.svg";
import lock from "../../../public/lock.svg";
import hide from "../../../public/i_hide.svg";
import bg from "../../../public/Group_12.png";

const Login = () => {
  return (
    <div className="centerDivs">
      <div className="absolute -ms-64 me-72 z-30">
        <div className="p-4 mb-4">
          <Image
            className="h-auto max-w-80 mb-5"
            src={Logo}
            alt="image description"
            width={292}
            height={58}
          />
        </div>

        <form>
          <div className="flex items-center mb-4">
            <div className="w-full bg-[#131313] flex justify-center items-center">
              <div className="bg-[#000000]">
                <Image src={users} alt="User logo" width={50} height={50} />
              </div>
              <input
                type="username"
                id="username"
                className="shadow-sm bg-[#131313] text-white placeholder:text-white rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Lietotājvārds"
                required
              />
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-full bg-[#131313] flex justify-center items-center">
              <div className="bg-[#000000]">
                <Image src={lock} alt="User logo" width={59} height={50} />
              </div>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-[#131313] text-white placeholder:text-white rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Parole"
                required
              />
              <button className="mr-3">
                <Image src={hide} alt="User logo" width={30} height={30} />
              </button>
            </div>
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="autologin"
                type="checkbox"
                value=""
                className="w-4 h-4 text-red-600 bg-gray-100 focus:ring-red-500"
              />
              <label htmlFor="autologin" className="ms-2 font-light text-white">
                Auto Login
              </label>
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <button
              type="submit"
              className="text-white flex align-center bg-[#6A7963] hover:bg-green-900 font-normal text-lg px-10 py-2.5 text-center"
            >
              Pievienoties
            </button>
            <button
              type="submit"
              className="text-white bg-[#796363] hover:bg-red-400 font-normal text-sm px-5 py-2.5 text-center"
            >
              +
            </button>
          </div>
        </form>
      </div>
      <div className="absolute my-auto ms-72">
        <Image src={bg} alt="bg" className="h-auto object-cover" />
      </div>
    </div>
  );
};

export default Login;
