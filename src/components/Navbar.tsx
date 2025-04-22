
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-secondary py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          ЦифроМаркет
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/catalog" className="text-foreground hover:text-primary transition-colors">
            Каталог
          </Link>
          <Link to="/services" className="text-foreground hover:text-primary transition-colors">
            Услуги
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            О нас
          </Link>
        </div>
        <div className="flex gap-3">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart />
              <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="flex items-center gap-2">
              <User size={18} />
              Войти
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
