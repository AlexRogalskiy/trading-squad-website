import Brand from "./Brand";
import NavBarItem from "./NavBarItem";

const discordLink = "https://discord.gg/mFjWM8xk";
const whatsappLink = "https://wa.link/9bf2u8";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-evenly items-center">
        <Brand />
        <NavBarItem name="Reviews" link="#review" />
        <NavBarItem name="Discord" link={discordLink} />
        <NavBarItem name="Whatsapp" link={whatsappLink} />
      </div>
    </>
  );
}
