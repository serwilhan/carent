import { useCallback, useEffect, useState } from "react";

import bannerImage from "@/assets/banner-image.png";
import packageImage from "@/assets/package.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Baner() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api) return;

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 10000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [api]);

  const bannerItems = [
    {
      id: 1,
      title: "Ramadan Kareem",
      subtitle: "Exclusive Offers",
      discount: "60%",
      color: "from-[#FFE9CA] to-[#FFE9CA]/0",
      color2: "from-[#fff3e2] via-[#fff3e2]/70 to-transparent",
    },
    {
      id: 2,
      title: "Eid Mubarak",
      subtitle: "Special Deals",
      discount: "50%",
      color: "from-[#E2D4F0] to-[#E2D4F0]/0",
      color2: "from-[#f1eaf8] via-[#f1eaf8]/70 to-transparent",
    },
    {
      id: 3,
      title: "Lebaran Sale",
      subtitle: "Great Savings",
      discount: "40%",
      color: "from-[#B6D4A8] to-[#B6D4A8]/0",
      color2: "from-[#dbead4] via-[#dbead4]/70 to-transparent",
    },
  ];

  return (
    <div className="w-full pt-4 sm:pt-6 md:pt-8 lg:pt-10">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="mx-auto w-full"
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {bannerItems.map((item, index) => (
            <CarouselItem
              key={item.id}
              className="pl-2 sm:pl-4 md:basis-4/5 lg:basis-3/4"
            >
              <div
                className={`transition-all duration-500 ease-in-out ${
                  index === current
                    ? "z-10 scale-100 opacity-100 sm:scale-105"
                    : "z-0 scale-95 opacity-90 sm:scale-90 sm:opacity-100"
                }`}
              >
                <Card
                  className={`bg-gradient-to-r ${item.color} overflow-hidden shadow-lg`}
                >
                  <CardContent className="p-0">
                    <div className="relative flex flex-col items-center justify-between sm:flex-row">
                      {/* Text Content */}
                      <div className="w-full space-y-2 p-4 sm:w-1/2 sm:space-y-4 sm:p-6 md:p-8">
                        <h2 className="transform text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out hover:scale-105 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                          {item.title}
                          <br />
                          <span className="text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
                            {item.subtitle}
                          </span>
                        </h2>
                        <p className="text-sm text-gray-600 opacity-100 transition-all duration-300 ease-in-out sm:text-base sm:opacity-0 sm:group-hover:opacity-100 md:text-lg">
                          Discount Up To
                        </p>
                        <span className="inline-block transform text-3xl font-bold text-red-600 transition-all duration-300 ease-in-out hover:scale-110 hover:text-red-700 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                          {item.discount}
                        </span>
                      </div>

                      {/* Background Image */}
                      <div className="relative h-48 w-full overflow-hidden sm:h-64 sm:w-1/2 md:h-80 lg:h-96">
                        <img
                          src={bannerImage}
                          alt={`${item.title} Sale`}
                          className="h-full w-full object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${item.color2}`}
                        ></div>
                      </div>

                      {/* Package Icon */}
                      <div className="absolute bottom-4 right-4 z-20 transform transition-all duration-300 ease-in-out hover:rotate-12 sm:right-1/2 sm:top-1/2 sm:-translate-y-1/2">
                        <img
                          src={packageImage}
                          alt="Package Icon"
                          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
