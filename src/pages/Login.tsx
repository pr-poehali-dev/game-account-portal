
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Вход:", { email, password });
    // Здесь будет логика входа
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Регистрация:", { name, email, password });
    // Здесь будет логика регистрации
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto flex items-center justify-center py-16">
        <Card className="w-full max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent className="space-y-2">
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@mail.ru"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-sm font-medium">
                        Пароль
                      </label>
                      <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                        Забыли пароль?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Войти
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Имя
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Иван Иванов"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reg-email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="reg-email"
                      type="email"
                      placeholder="example@mail.ru"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reg-password" className="text-sm font-medium">
                      Пароль
                    </label>
                    <Input
                      id="reg-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Зарегистрироваться
                  </Button>
                </form>
              </TabsContent>
            </CardContent>
            <CardFooter className="text-center text-sm text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с нашими{" "}
              <Link to="/terms" className="text-primary hover:underline">
                условиями использования
              </Link>
            </CardFooter>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Login;
