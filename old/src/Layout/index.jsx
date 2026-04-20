import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;