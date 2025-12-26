import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/theme/themeSlice";
import { setSearchTitle } from "../../../redux/filter/filterSlice";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
const Header = () => {
  const disptach = useDispatch();
  const filters = useSelector((state) => state.filters);
  const { theme } = useSelector((state) => state.theme);
  const handleSearchTitleChange = (e) =>
    disptach(setSearchTitle(e.target.value));
  return (
    <Navbar id="nav" className="border-b-2 fixed z-[200] top-0 w-full">
      <RouterLink
        to="/"
        className=" self-center whitespace-nowrap text-[0.5rem] mbXSmall:text-xs mbSmall:text-sm mbMedium:text-lg laptop:text-xl font-semibold dark:text-white"
      >
        <span className=" px-1 mbSmall:px-3 tbPortrait:px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Transaction
        </span>{" "}
        Manager
      </RouterLink>

      <div className=" flex items-center justify-center  gap-4 md:order-2">
        <TextInput
          type="text"
          name="title"
          placeholder="Enter transaction title"
          className=" w-[30%] mbXSmall:w-[70%] laptop:w-full"
          icon={AiOutlineSearch}
          value={filters.searchTitle}
          onChange={handleSearchTitleChange}
        />
        <Button
          className=" hidden sm:inline"
          color="gray"
          pill
          onClick={() => disptach(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun size={20} />}
        </Button>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className=" text-sm laptop:text-base cursor-pointer" as={"div"}>
          <RouterLink to="/">
            Home
          </RouterLink>
        </Navbar.Link>
        <Navbar.Link className=" text-sm laptop:text-base cursor-pointer" as={"div"}>
          <Link to="AllTransactions" spy={true} smooth={true} offset={-100} duration={500}>Transactions</Link>
        </Navbar.Link>
        <Navbar.Link className=" text-sm laptop:text-base cursor-pointer" as={"div"}>
          <RouterLink to="/visualizations">Visualizations</RouterLink>
        </Navbar.Link>
        <Navbar.Link className=" text-sm laptop:text-base cursor-pointer" as={"div"}>
        <Button
          className=" inline sm:hidden"
          color="gray"
          pill
          onClick={() => disptach(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun size={20} />}
        </Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
