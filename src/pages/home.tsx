import Baner from "@/components/home/baner";
import CategoryPage from "@/components/home/category";
import { Navbar } from "@/components/navbar";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Baner />
      <div className="container mx-auto px-4">
        <CategoryPage />
      </div>
    </div>
  );
};

export default Home;
