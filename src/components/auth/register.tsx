import { useState } from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";

import loginImage from "@/assets/login-image.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left side - Image */}
      <div className="relative hidden lg:block lg:w-1/2">
        <img
          src={loginImage}
          alt="Second Hand Bookshelf"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-[#A06ECE] to-[#A06ECE]/0">
          <h1 className="ml-20 text-6xl font-bold text-white">
            My <br />
            Thrift.
          </h1>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md text-left">
          <div className="mb-8">
            <h2 className="mb-2 text-2xl font-bold">Daftar</h2>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nama</Label>
              <Input
                id="name"
                placeholder="Nama Lengkap"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Contoh: johndee@gmail.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  placeholder="Masukkan password"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <Button className="w-full rounded-md py-2">Masuk</Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Sudah punya akun ?{" "}
            <a
              href="/login"
              className="font-bold text-purple-600 hover:underline"
            >
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
