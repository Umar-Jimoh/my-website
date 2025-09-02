import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
  isLogo?: boolean
}

function MainLayout({ children, isLogo = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation isLogo={isLogo} />
      <main className="max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
