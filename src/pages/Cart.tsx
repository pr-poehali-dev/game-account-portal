
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

// Демо-данные для корзины
const cartItems = [
  {
    id: "1",
    title: "Интернет-магазин",
    price: 15000,
    quantity: 1,
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Бот для Telegram",
    price: 8000,
    quantity: 1,
    image: "/placeholder.svg",
  }
];

const Cart = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Товары в корзине</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 py-4">
                      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.title}</h3>
                        <div className="text-sm text-muted-foreground mb-2">ID: {item.id}</div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border rounded-md">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Minus size={14} />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              className="w-12 h-8 text-center border-0"
                              min={1}
                              readOnly
                            />
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Plus size={14} />
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-semibold">{item.price} ₽</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Сумма заказа</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Подытог</span>
                    <span>{subtotal} ₽</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Скидка</span>
                    <span>{discount} ₽</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Итого</span>
                    <span>{total} ₽</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Оформить заказ</Button>
                </CardFooter>
              </Card>
              
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>У вас есть промокод?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input placeholder="Введите промокод" />
                      <Button variant="outline">Применить</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-4">Ваша корзина пуста</h2>
            <p className="text-muted-foreground mb-8">
              Добавьте товары из нашего каталога, чтобы продолжить покупки
            </p>
            <Button asChild>
              <Link to="/catalog">Перейти в каталог</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
