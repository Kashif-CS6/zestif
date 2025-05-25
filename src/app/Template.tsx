import Header from "@/app/_components/common/Resturant/Header";
import Footer from "@/app/_components/common/Resturant/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="px-[30px] md:px-[60px] lg:px-[120px] xl:px-[240px] flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}
