import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-cinza-claro">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-azul">404</div>
        <h1 className="text-3xl font-bold text-preto">Página não encontrada</h1>
        <p className="text-lg text-cinza">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-primary">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/produtos">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver Produtos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
