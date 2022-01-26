import Brand from "./Brand";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-evenly items-center">
        <Brand />
        <NavBarItem />
        <NavBarItem />
        <NavBarItem />
        <NavBarItem />
      </div>
    </>
  );
}
