import Navigation from "@/components/shared/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
  isLogo?: boolean
}

function MainLayout({ children, isLogo = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation isLogo={isLogo}/>
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
