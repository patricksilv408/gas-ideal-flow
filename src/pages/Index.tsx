import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Shield, Clock, Phone, Star, Users, Award, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="pt-24"> {/* Account for fixed header */}
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Gás de <span className="text-cian">Qualidade</span><br />
                Entrega <span className="text-verde">Rápida</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Há mais de 10 anos oferecendo gás com segurança e agilidade para 
                residências e empresas em toda a região metropolitana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-hero">
                  <Link to="/produtos">Ver Produtos</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <a href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido.">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligue Agora
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm">4.9/5 avaliação</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">+5.000 clientes</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Entregador da Gás Ideal com botijão de gás"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 bg-verde text-white p-3 rounded-lg shadow-lg">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-azul text-white p-3 rounded-lg shadow-lg">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-cinza-claro">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-preto mb-4">
              Por que escolher a Gás Ideal?
            </h2>
            <p className="text-lg text-cinza max-w-2xl mx-auto">
              Oferecemos muito mais que gás. Oferecemos tranquilidade, segurança e agilidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Entrega Rápida",
                description: "Entrega em até 30 minutos na região central"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Segurança Total",
                description: "Produtos certificados e entregadores treinados"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Atendimento 24h",
                description: "Funcionamos todos os dias, inclusive feriados"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Qualidade Garantida",
                description: "Gás puro e botijões com certificação INMETRO"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-elevated text-center p-6 hover:scale-105 transition-all duration-300">
                <div className="text-azul mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-preto mb-2">
                  {feature.title}
                </h3>
                <p className="text-cinza">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Precisa de gás agora?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Faça seu pedido pelo WhatsApp e receba em casa com toda segurança e agilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                <a href="https://wa.me/5511999999999?text=Olá! Preciso de gás com urgência.">
                  <Zap className="w-4 h-4 mr-2" />
                  Pedido Urgente
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/produtos">Ver Catálogo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Anos de Experiência" },
              { number: "5.000+", label: "Clientes Atendidos" },
              { number: "24h", label: "Atendimento" },
              { number: "30min", label: "Entrega Rápida" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-azul mb-2">
                  {stat.number}
                </div>
                <div className="text-cinza font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;