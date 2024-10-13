import { LogIn, Search } from "lucide-react";
import { Link } from "react-router-dom";

import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Navbar = () => {
  return (
    <header className="z-50 w-full px-4 py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="items-center justify-center bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-center text-2xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400">
          My Thrift
        </div>
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="relative w-full max-w-md">
            <Input
              className="rounded-2xl dark:bg-[#545454] bg-[#EEEEEE] py-2 pr-4 placeholder:text-muted-foreground"
              placeholder="Cari di sini..."
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400"
              size={20}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to={"/login"}>
            <Button
              variant="default"
              className="flex items-center justify-center gap-2"
            >
              <LogIn className="size-5 text-white" />
              Masuk
            </Button>
          </Link>
        <ModeToggle />
        </div>
      </div>
    </header>
  );
};
