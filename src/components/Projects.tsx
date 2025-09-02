import { projects } from "@/lib/constants";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section>
      <h2 className="text-xl text-foreground font-bold mb-2">Projects</h2>
      {projects.map((project) => (
        <ProjectItem item={project}/>
      ))}
    </section>
  );
}

export default Projects;
