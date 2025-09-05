import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const [cursorStyle, setCursorStyle] = useState<string>("_");
  const text = "Software Developer based in Nigeria, Abuja";
  const typeSpeed = 80;

  useEffect(() => {
    const typingTime = text.length * typeSpeed;
    const timer = setTimeout(() => setCursorStyle("|"), typingTime + 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout isLogo={false}>
      <div className="flex flex-col justify-center items-center min-h-[calc(100dvh-64px-124px)] text-center">
        <span className=" md:text-md mb-10 text-muted-foreground">
          It’s all about an artisan dev
        </span>
        <h1 className="text-4xl md:text-5xl uppercase font-bold mt-4">
          I'm Umar Jimoh
        </h1>
        <p className="text-md md:text-lg mt-4">
          <Typewriter
            words={[text]}
            typeSpeed={typeSpeed}
            loop={1}
            cursor
            cursorBlinking
            cursorStyle={cursorStyle}
          />
        </p>
      </div>
    </MainLayout>
  );
}

export default Home;
