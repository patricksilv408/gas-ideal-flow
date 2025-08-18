import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Award, Truck, Clock, Star, CheckCircle } from "lucide-react";

const Gradiente = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Entrega Expressa",
      description: "Receba seu gás em até 30 minutos"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Total",
      description: "Produtos certificados e entregadores treinados"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualidade Garantida",
      description: "Gás puro com certificação INMETRO"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Frota Própria",
      description: "Veículos modernos e bem equipados"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Atendimento 24h",
      description: "Funcionamos todos os dias da semana"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Avaliação 5 Estrelas",
      description: "Mais de 5.000 clientes satisfeitos"
    }
  ];

  const plans = [
    {
      name: "Residencial",
      price: "85",
      description: "Para uso doméstico",
      features: [
        "Botijão P13 de 13kg",
        "Entrega em até 30min",
        "Suporte 24h",
        "Preço promocional"
      ],
      color: "bg-azul"
    },
    {
      name: "Comercial",
      price: "280",
      description: "Para estabelecimentos",
      features: [
        "Botijão P45 de 45kg",
        "Entrega prioritária",
        "Desconto para pedidos recorrentes",
        "Suporte técnico"
      ],
      color: "bg-verde",
      popular: true
    },
    {
      name: "Industrial",
      price: "450",
      description: "Para grandes volumes",
      features: [
        "Botijão P90 de 90kg",
        "Entrega especializada",
        "Contrato personalizado",
        "Consultoria técnica"
      ],
      color: "bg-laranja"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              linear-gradient(135deg, 
                hsl(var(--azul)) 0%, 
                hsl(var(--cian)) 25%, 
                hsl(var(--verde)) 50%, 
                hsl(var(--azul-escuro)) 75%, 
                hsl(var(--azul)) 100%
              )
            `
          }}
        />
        
        <div 
          className="relative py-20 text-white"
          style={{
            background: `
              linear-gradient(135deg, 
                hsl(var(--azul-escuro)) 0%, 
                hsl(var(--azul)) 30%, 
                hsl(var(--cian)) 60%, 
                hsl(var(--verde)) 100%
              )
            `
          }}
        >
          <div className="container-custom">
            <div className="text-center space-y-6 animate-fade-in">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Demonstração de Gradientes CSS
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold">
                Paleta de Cores
                <br />
                <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Gás Ideal
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Explore nossa identidade visual construída com variáveis CSS personalizadas,
                criando uma experiência visual única e profissional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-azul hover:bg-gray-100 font-semibold"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Explorar Cores
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-azul"
                >
                  <a href="https://wa.me/5511999999999?text=Olá! Vi a página de gradientes e gostaria de fazer um pedido.">
                    Fazer Pedido
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="section-padding bg-cinza-claro">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-preto mb-4">
              Paleta de Cores CSS
            </h2>
            <p className="text-lg text-cinza max-w-2xl mx-auto">
              Utilizamos variáveis CSS personalizadas para manter consistência visual
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "--azul", color: "bg-azul", desc: "Azul Principal" },
              { name: "--azul-escuro", color: "bg-azul-escuro", desc: "Azul Escuro" },
              { name: "--cian", color: "bg-cian", desc: "Cian Accent" },
              { name: "--verde", color: "bg-verde", desc: "Verde Confiança" },
              { name: "--verde-claro", color: "bg-verde-claro", desc: "Verde Claro" },
              { name: "--laranja", color: "bg-laranja", desc: "Laranja Accent" },
              { name: "--cinza", color: "bg-cinza", desc: "Cinza Neutro" },
              { name: "--cinza-claro", color: "bg-cinza-claro", desc: "Cinza Claro" },
              { name: "--branco", color: "bg-branco border", desc: "Branco Puro" },
              { name: "--preto", color: "bg-preto", desc: "Preto Profundo" }
            ].map((colorVar, index) => (
              <Card key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className={`h-24 ${colorVar.color}`} />
                <div className="p-4">
                  <code className="text-xs font-mono text-primary block mb-1">
                    {colorVar.name}
                  </code>
                  <p className="text-sm text-cinza">{colorVar.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Gradients */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-preto mb-4">
              Benefícios Exclusivos
            </h2>
            <p className="text-lg text-cinza max-w-2xl mx-auto">
              Descubra por que somos a escolha preferida de milhares de clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="card-elevated p-6 text-center hover:scale-105 transition-all duration-300"
                style={{
                  background: index % 2 === 0 
                    ? `linear-gradient(135deg, hsl(var(--background)), hsl(var(--cinza-claro)))`
                    : `linear-gradient(135deg, hsl(var(--cinza-claro)), hsl(var(--background)))`
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--azul)), hsl(var(--cian)))`
                  }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-preto mb-2">
                  {benefit.title}
                </h3>
                <p className="text-cinza">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-cinza-claro">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-preto mb-4">
              Nossos Planos
            </h2>
            <p className="text-lg text-cinza max-w-2xl mx-auto">
              Escolha o plano ideal para suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden p-8 text-center ${
                  plan.popular ? 'ring-2 ring-verde scale-105' : ''
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge 
                    className="absolute top-4 right-4 bg-verde text-white"
                  >
                    Mais Popular
                  </Badge>
                )}
                
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${plan.color} text-white`}
                >
                  <span className="text-2xl font-bold">
                    {plan.name.charAt(0)}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-preto mb-2">
                  {plan.name}
                </h3>
                <p className="text-cinza mb-4">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-preto">R$ {plan.price}</span>
                  <span className="text-cinza">/unidade</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-verde mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild
                  className={`w-full ${plan.color} hover:opacity-90 text-white`}
                >
                  <a href={`https://wa.me/5511999999999?text=Olá! Gostaria de contratar o plano ${plan.name}.`}>
                    Escolher Plano
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section 
        className="section-padding text-white"
        style={{
          background: `
            linear-gradient(135deg, 
              hsl(var(--azul)) 0%, 
              hsl(var(--verde)) 50%, 
              hsl(var(--cian)) 100%
            )
          `
        }}
      >
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Pronto para fazer seu pedido?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Entre em contato conosco agora e receba seu gás com toda segurança e agilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-azul hover:bg-gray-100 font-semibold"
              >
                <a href="https://wa.me/5511999999999?text=Olá! Vi a página de gradientes e gostaria de fazer um pedido urgente.">
                  <Zap className="w-5 h-5 mr-2" />
                  Pedido Urgente
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-azul"
              >
                <a href="/produtos">
                  Ver Catálogo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gradiente;