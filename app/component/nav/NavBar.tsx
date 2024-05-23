import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";

const redressed =Redressed({subsets:['latin'],weight:['400']});

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
        
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
