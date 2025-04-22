
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Code, Image, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

// Демо-данные для товаров
const products = [
  {
    id: "1",
    title: "Интернет-магазин",
    price: 15000,
    category: "Сайты",
    image: "/placeholder.svg",
    description: "Готовый интернет-магазин с админ-панелью и каталогом товаров."
  },
  {
    id: "2",
    title: "Бот для Telegram",
    price: 8000,
    category: "Боты",
    image: "/placeholder.svg",
    description: "Многофункциональный бот для автоматизации бизнес-процессов."
  },
  {
    id: "3",
    title: "Фотопак для бизнеса",
    price: 3500,
    category: "Фото",
    image: "/placeholder.svg",
    description: "Набор профессиональных фотографий для оформления вашего сайта или соцсетей."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Цифровые товары для вашего бизнеса
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Готовые решения, которые помогут вашему бизнесу расти: сайты, Telegram боты и профессиональные фото
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/catalog">Каталог товаров</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Наши услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Наши категории</h2>
          
          <Tabs defaultValue="websites" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="websites" className="flex items-center gap-2">
                <Code size={16} /> Сайты
              </TabsTrigger>
              <TabsTrigger value="bots" className="flex items-center gap-2">
                <MessageSquare size={16} /> Telegram боты
              </TabsTrigger>
              <TabsTrigger value="photos" className="flex items-center gap-2">
                <Image size={16} /> Фото для товаров
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="websites" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.filter(p => p.category === "Сайты").map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
                <ProductCard 
                  id="4" 
                  title="Корпоративный сайт" 
                  price={12000} 
                  category="Сайты" 
                  image="/placeholder.svg" 
                  description="Многостраничный сайт для презентации вашей компании и привлечения клиентов." 
                />
              </div>
              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link to="/catalog?category=websites" className="flex items-center gap-1">
                    Смотреть все сайты <ChevronRight size={16} />
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="bots" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.filter(p => p.category === "Боты").map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
                <ProductCard 
                  id="5" 
                  title="Бот для поддержки" 
                  price={6500} 
                  category="Боты" 
                  image="/placeholder.svg" 
                  description="Автоматизированный бот для ответов на часто задаваемые вопросы ваших клиентов." 
                />
              </div>
              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link to="/catalog?category=bots" className="flex items-center gap-1">
                    Смотреть все боты <ChevronRight size={16} />
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="photos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.filter(p => p.category === "Фото").map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
                <ProductCard 
                  id="6" 
                  title="Фотосессия товаров" 
                  price={5000} 
                  category="Фото" 
                  image="/placeholder.svg" 
                  description="Индивидуальная фотосессия для ваших товаров с профессиональной обработкой." 
                />
              </div>
              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link to="/catalog?category=photos" className="flex items-center gap-1">
                    Смотреть все фото <ChevronRight size={16} />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Готовы начать работу с нами?</h2>
          <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Зарегистрируйтесь сейчас и получите скидку 10% на первую покупку любого цифрового товара из нашего каталога.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/login">Зарегистрироваться</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-secondary py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="text-xl font-bold">ЦифроМаркет</Link>
              <p className="text-sm text-muted-foreground">© 2023 Все права защищены</p>
            </div>
            <div className="flex gap-6">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Условия использования
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Политика конфиденциальности
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
