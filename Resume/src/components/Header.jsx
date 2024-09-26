import { Link } from "react-router-dom";
import ScrollToTop from "./Scrolltotop";

export default function Header() {
  return (
    <div className="relative my-20 text-black font-semibold">
      <div className="fixed z-10 top-0 left-0 right-0 font-work bg-orange-300 p-3.5 flex justify-evenly mb-5">
        <ScrollToTop />
        <Link
          className="top-0 transition ease-in-out hover:text-amber-200"
          to="/"
        >
          HOME
        </Link>
        <Link
          className="transition ease-in-out hover:text-amber-200"
          to="/skills"
        >
          SKILLS
        </Link>
        <Link
          className="transition ease-in-out hover:text-amber-200"
          to="/projects"
        >
          PROJECTS
        </Link>
        <Link
          className="transition ease-in-out hover:text-amber-200"
          to="/education"
        >
          EDUCATION
        </Link>
        <Link
          className="transition ease-in-out hover:text-amber-200"
          to="/references"
        >
          REFERENCES
        </Link>
      </div>
    </div>
  );
}
