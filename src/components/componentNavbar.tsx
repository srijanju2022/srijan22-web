import JULogo from "./logos/juLogo";
import SrijanLogo from "./logos/srijanLogo";

export const NavBar = () => {
  return (
    <div className="backdrop-blur-xl sticky top-0">
      <nav className="flex divide-x-2 sticky z-20  top-0 divide-secondary-500 items-center mx-auto space-x-2 container py-5">
        <JULogo />
        <SrijanLogo className="pl-4" />
      </nav>
    </div>
  );
};
