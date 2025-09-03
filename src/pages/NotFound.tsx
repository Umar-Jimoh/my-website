import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 h-dvh">
      <h1 className="text-9xl font-extrabold text-muted-foreground">404</h1>
      <p className="text-lg text-foreground font-bold">Page Not Found</p>
      <p className="text-muted-foreground max-w-80 md:max-w-96 text-center">
        Sorry, the page you are looking for doesn't exist or has been removed.
      </p>
      <Link
        to="/"
        className="flex justify-center items-center mt-8 px-4 py-2 gap-2 rounded-sm text-foreground border in-dark:bg-[#1F2124] hover:bg-foreground hover:text-background transition-colors duration-200">
        <IoHomeOutline size="16" /> Go to Homepage
      </Link>
    </main>
  );
}

export default NotFound;
