import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="space-x-4">
          <Link to="/">
            <Button variant="ghost" className="text-white">Home</Button>
          </Link>
          {/* Add more links here as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;