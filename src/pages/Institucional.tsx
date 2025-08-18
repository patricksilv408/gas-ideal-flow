import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, MapPin, Phone, Mail, Clock } from "lucide-react";

const Institucional = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    { src: "/api/placeholder/600/400", alt: "Equipe Gás Ideal" },
    { src: "/api/placeholder/600/400", alt: "Frota de entrega" },
    { src: "/api/placeholder/600/400", alt: "Depósito e armazenamento" },
    { src: "/api/placeholder/600/400", alt: "Certificações de qualidade" },
    { src: "/api/placeholder/600/400", alt: "Atendimento ao cliente" }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente residencial",
      content: "Excelente atendimento! O gás chegou em menos de 20 minutos e o entregador foi muito educado. Recomendo!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Proprietário de restaurante",
      content: "Uso os serviços da Gás Ideal há 3 anos. Nunca tive problemas com qualidade ou pontualidade. Empresa séria!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Dona de casa",
      content: "Preços justos e entrega rápida. O WhatsApp facilita muito na hora de fazer o pedido. Muito satisfeita!",
      rating: 5
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-primary text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Institucional</h1>
            <p className="text-xl text-gray-200">
              Conheça nossa história, valores e compromisso com a qualidade
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12 space-y-16">
        {/* Mission, Vision, Values */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-preto mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-cinza max-w-2xl mx-auto">
              Construímos nossa empresa baseada em princípios sólidos que guiam todas nossas ações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elevated text-center p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h3 className="text-xl font-semibold text-preto mb-4">Missão</h3>
              <p className="text-cinza leading-relaxed">
                Fornecer gás de alta qualidade com entrega rápida e segura, 
                garantindo a satisfação e tranquilidade dos nossos clientes em 
                todas as regiões que atendemos.
              </p>
            </Card>

            <Card className="card-elevated text-center p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <h3 className="text-xl font-semibold text-preto mb-4">Visão</h3>
              <p className="text-cinza leading-relaxed">
                Ser a empresa líder em distribuição de gás na região, 
                reconhecida pela excelência no atendimento, inovação nos 
                serviços e compromisso com a sustentabilidade.
              </p>
            </Card>

            <Card className="card-elevated text-center p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <h3 className="text-xl font-semibold text-preto mb-4">Valores</h3>
              <p className="text-cinza leading-relaxed">
                Segurança, qualidade, pontualidade, honestidade e respeito 
                ao cliente. Valorizamos o meio ambiente e promovemos práticas 
                sustentáveis em todos os nossos processos.
              </p>
            </Card>
          </div>
        </section>

        {/* Image Carousel */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-preto mb-4">
              Nossa Estrutura
            </h2>
            <p className="text-lg text-cinza max-w-2xl mx-auto">
              Conheça nossa equipe, frota e instalações preparadas para atender você da melhor forma
            </p>
          </div>

          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="relative">
              <img
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                className="w-full h-96 object-cover"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center">
                {carouselImages[currentImageIndex].alt}
              </h3>
            </div>
          </Card>
        </section>

        {/* Testimonials */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-preto mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-cinza max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior recompensa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elevated p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-cinza mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <footer>
                  <div className="font-semibold text-preto">{testimonial.name}</div>
                  <div className="text-sm text-cinza">{testimonial.role}</div>
                </footer>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section with Map */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-preto mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-cinza max-w-2xl mx-auto">
              Estamos sempre prontos para atender você. Fale conosco!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="card-elevated p-6">
                <h3 className="text-xl font-semibold text-preto mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Telefone</div>
                      <div className="text-cinza">(11) 99999-9999</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">E-mail</div>
                      <div className="text-cinza">contato@gasideal.com.br</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Endereço</div>
                      <div className="text-cinza">
                        Rua das Empresas, 123<br />
                        Centro - São Paulo/SP<br />
                        CEP: 01000-000
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Horário de Funcionamento</div>
                      <div className="text-cinza">24 horas - Todos os dias</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button 
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os serviços da Gás Ideal.">
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Google Maps Embed */}
            <div>
              <Card className="overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.449977690069!2d-46.63465568502205!3d-23.5648720845983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sMarco%20Zero%20da%20Cidade%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Gás Ideal"
                  className="w-full h-full min-h-[400px]"
                />
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Institucional;