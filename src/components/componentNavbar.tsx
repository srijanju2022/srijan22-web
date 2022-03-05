import JULogo from "./logos/juLogo";
import SrijanLogo from "./logos/srijanLogo";

export const NavBar = () => {
  return (
    <div className="backdrop-blur-xl z-20 fixed w-full top-0 px-5">
      <nav className="flex divide-x-2  divide-secondary-500 items-center mx-auto space-x-2 container py-5">
        <JULogo />
        <SrijanLogo className="pl-4" />
      </nav>
    </div>
  );
};
