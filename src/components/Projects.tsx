import { projects } from "@/lib/constants";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="my-4">
        {projects.map((project) => (
          <ProjectItem item={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
