import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart, Trash2, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import productsData from "@/data/products.json";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  weight: string;
  features: string[];
}

interface CartItem extends Product {
  quantity: number;
}

const Produtos = () => {
  const [products] = useState<Product[]>(productsData);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { toast } = useToast();

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("gasIdealCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("gasIdealCart", JSON.stringify(cart));
  }, [cart]);

  const categories = [
    { value: "all", label: "Todos os Produtos" },
    { value: "residencial", label: "Residencial" },
    { value: "comercial", label: "Comercial" },
    { value: "industrial", label: "Industrial" },
    { value: "refil", label: "Refil" },
    { value: "kit", label: "Kits" },
    { value: "delivery", label: "Delivery" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    toast({
      title: "Produto removido",
      description: "Item removido do carrinho com sucesso.",
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const generateWhatsAppLink = () => {
    if (cart.length === 0) return "";

    let message = "🛒 *Pedido Gás Ideal*\\n\\n";
    
    cart.forEach(item => {
      message += `▫️ ${item.name}\\n`;
      message += `   Quantidade: ${item.quantity}\\n`;
      message += `   Preço unitário: R$ ${item.price.toFixed(2)}\\n`;
      message += `   Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}\\n\\n`;
    });

    message += `💰 *Total: R$ ${getTotalPrice().toFixed(2)}*\\n\\n`;
    message += "Gostaria de confirmar este pedido. Qual o prazo de entrega?";

    return `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-primary text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nossos Produtos</h1>
            <p className="text-xl text-gray-200">
              Gás de qualidade para todas as suas necessidades
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories and Cart */}
          <div className="space-y-6">
            {/* Categories */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Categorias</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.value
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </Card>

            {/* Cart */}
            <Card className="p-6 sticky top-32">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Carrinho</h3>
                <Badge variant="secondary">
                  {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'itens'}
                </Badge>
              </div>

              {cart.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  Seu carrinho está vazio
                </p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="border-b border-border pb-3 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-sm leading-tight">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive/80"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-muted flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-medium">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-lg text-primary">
                        R$ {getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                    <Button 
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <a href={generateWhatsAppLink()}>
                        Finalizar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="card-elevated overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-primary">
                      {product.weight}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-verde fill-current" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">
                          R$ {product.price.toFixed(2)}
                        </span>
                      </div>
                      <Button
                        onClick={() => addToCart(product)}
                        size="sm"
                        className="bg-gradient-primary hover:shadow-lg transition-all duration-300"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Adicionar
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Nenhum produto encontrado nesta categoria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;