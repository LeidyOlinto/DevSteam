import Styles from "./navbar.module.css";
import { BsCart4 } from "react-icons/bs";
import Logo from "@/components/logo/logo";
import Input from "../forms/input/input";

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <Logo />
      <div className={Styles.search}>
        <Input type="text" fullWidth placeholder="Buscar" />
      </div>
      <BsCart4 size={40} />
    </nav>
  );
}
