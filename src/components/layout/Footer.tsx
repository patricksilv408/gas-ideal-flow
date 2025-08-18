import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Truck } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-preto text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Gás Ideal</h3>
                <p className="text-sm text-gray-400">Qualidade e agilidade</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Há mais de 10 anos oferecendo gás de qualidade com entrega rápida e segura 
              para residências e empresas em toda a região.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-azul transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-azul transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-azul transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-400 hover:text-azul transition-colors text-sm">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/institucional" className="text-gray-400 hover:text-azul transition-colors text-sm">
                  Institucional
                </Link>
              </li>
              <li>
                <Link to="/gradiente" className="text-gray-400 hover:text-azul transition-colors text-sm">
                  Gradiente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-azul" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-azul" />
                <span className="text-gray-400">contato@gasideal.com.br</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-azul mt-0.5" />
                <span className="text-gray-400">Rua das Empresas, 123<br />Centro - São Paulo/SP</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-azul" />
                <span className="text-gray-400">Atendimento 24h</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm">
                <Truck className="w-4 h-4 text-verde" />
                <span className="text-gray-400">Entrega Expressa</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Truck className="w-4 h-4 text-verde" />
                <span className="text-gray-400">Gás Residencial</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Truck className="w-4 h-4 text-verde" />
                <span className="text-gray-400">Gás Comercial</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Truck className="w-4 h-4 text-verde" />
                <span className="text-gray-400">Gás Industrial</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Gás Ideal. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-azul transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-azul transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};