import * as React from "react";

import { PlusIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  "Semua",
  "Hobi",
  "Kendaraan",
  "Baju",
  "Elektronik",
  "Kesehatan",
];

const products = [
  {
    id: 1,
    name: "Jam Tangan Casio",
    price: "Rp 250.000",
    image:
      "https://images.pexels.com/photos/164641/pexels-photo-164641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
  },
  {
    id: 2,
    name: "Jam Tangan Casio",
    price: "Rp 250.000",
    image:
      "https://images.pexels.com/photos/164641/pexels-photo-164641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
  },
  {
    id: 3,
    name: "Jam Tangan Casio",
    price: "Rp 250.000",
    image:
      "https://images.pexels.com/photos/164641/pexels-photo-164641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
  },
  {
    id: 4,
    name: "Jam Tangan Casio",
    price: "Rp 250.000",
    image:
      "https://images.pexels.com/photos/164641/pexels-photo-164641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
  },
  {
    id: 5,
    name: "Jam Tangan Casio",
    price: "Rp 250.000",
    image:
      "https://images.pexels.com/photos/164641/pexels-photo-164641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
  },
  {
    id: 6,
    name: "Jam Tangan Casio",
    price: "Rp 250.000",
    image:
      "https://images.pexels.com/photos/164641/pexels-photo-164641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
  },
  {
    id: 7,
    name: "Jam Tangan Casio",
    price: "Rp 250.000",
    image:
      "https://images.pexels.com/photos/164641/pexels-photo-164641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
  },
  {
    id: 8,
    name: "Jam Tangan Casio",
    price: "Rp 250.000",
    image:
      "https://images.pexels.com/photos/164641/pexels-photo-164641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
  },
];

export default function CategoryPage() {
  const [activeCategory, setActiveCategory] = React.useState("Semua");

  return (
    <div className="container mx-auto my-10 px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Telusuri Kategori</h1>

      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 p-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="flex rounded-full"
            >
              <SearchIcon className="mr-2 size-4" />
              {category}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Button className="rounde-lg fixed bottom-4 right-1/2 flex shadow-xl">
        <PlusIcon className="mr-2 size-5 rounded-xl" />
        Jual
      </Button>
    </div>
  );
}
