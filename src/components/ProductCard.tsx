
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const ProductCard = ({ title, price, category, image, description }: ProductProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <Badge variant="outline" className="bg-accent">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <p className="font-bold text-lg">{price} ₽</p>
        <Button size="sm">В корзину</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
