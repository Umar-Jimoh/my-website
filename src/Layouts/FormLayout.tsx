import Navigation from "@/components/shared/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
  isLogo?: boolean;
}

function FormLayout({ children, isLogo = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation isLogo={isLogo} />
      <main>{children}</main>
    </div>
  );
}

export default FormLayout;
