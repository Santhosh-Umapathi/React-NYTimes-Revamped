//Layout Components
import Footer from "./footer";
import Navbar from "./navbar";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Hooks
import useLang from "../hooks/useLang";

const Layout = ({ children }) => {
  const {
    state: { darkMode },
  } = useAtoms();

  useLang();

  return (
    <div
      className={`flex w-full flex-col ${
        darkMode ? "bg-bgDark" : "bg-bgLight"
      } transition-all overflow-y-clip`}
    >
      <Navbar />
      <div className="flex mb-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
