import { navItems } from "@/lib/constants";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";

interface NavigationProps {
  isLogo: boolean;
}

function Navigation({ isLogo }: NavigationProps) {
  return (
    <nav className="sticky top-0 bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            {isLogo && (
              <Link to={"/"}>
                <h1 className="text-xl uppercase font-bold text-foreground">
                  Umar Jimoh
                </h1>
              </Link>
            )}
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({
                  isActive,
                }) => `p-2 text-sm font-medium transition-colors duration-200
                ${
                  !isActive && "text-muted-foreground hover:text-foreground"
                }`}>
                {item.name}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
