import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Institucional", href: "/institucional" },
    { name: "Gradiente", href: "/gradiente" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-40">
      {/* Top bar with contact info */}
      <div className="bg-gradient-primary text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Atendimento 24h</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Entrega rápida e segura em toda a cidade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Gás Ideal</h1>
                <p className="text-xs text-muted-foreground">Qualidade e agilidade</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) 
                      ? "text-primary border-b-2 border-primary pb-1" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-gradient-primary hover:shadow-lg transition-all duration-300"
              >
                <a href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido.">
                  Peça Agora
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-md ${
                      isActive(item.href) 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4">
                  <Button 
                    asChild
                    className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300"
                  >
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido.">
                      Peça Agora
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};