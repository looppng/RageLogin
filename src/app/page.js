import Link from "next/link";

const Home = () => {
  return (
    <div className="centerDivs ">
      <div className="flex gap-2 text-white bg-black p-5">
        <Link href="/Login">Login</Link>
        <Link href="/Register">Register</Link>
        <Link href="/Users">Users</Link>
      </div>
    </div>
  );
};

export default Home;
