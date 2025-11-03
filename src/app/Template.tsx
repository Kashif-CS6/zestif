import Header from "@/app/_components/common/Resturant/Header";
import Footer from "@/app/_components/common/Resturant/Footer";
import HeaderTop from "./_components/common/HeaderTop";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="px-2 md:px-0 w-full md:w-[1280px] md:mx-auto">
        <HeaderTop />
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
