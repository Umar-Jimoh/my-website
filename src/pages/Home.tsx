import MainLayout from "@/layouts/MainLayout";

function Home() {
  return (
    <MainLayout isLogo={false}>
      <div className="flex flex-col justify-center items-center min-h-[calc(100dvh-64px-96px)] text-center">
        <span className=" md:text-md mb-10 text-muted-foreground">
          It’s all about an artisan dev
        </span>
        <h1 className="text-4xl md:text-5xl uppercase font-bold mt-4">
          I'm Umar Jimoh
        </h1>
        <p className="text-md md:text-lg mt-5">
          Software Developer based in Nigeria, Abuja
        </p>
      </div>
    </MainLayout>
  );
}

export default Home;
