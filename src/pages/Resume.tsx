import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";
import MainLayout from "@/layouts/MainLayout";

function Resume() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Summary />
        <Skills />
        <Experience />
        <Education /> 
        <Projects />
      </div>
    </MainLayout>
  );
}

export default Resume;
