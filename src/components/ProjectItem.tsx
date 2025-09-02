import { Link } from "react-router-dom";

interface ProjectProps {
  item: ProjectItemProps;
}

interface ProjectItemProps {
  subtitle: string;
  title: string;
  details: string;
  link: string;
}

function ProjectItem({ item }: ProjectProps) {
  return (
    <div className="mb-12">
      <span className="text-sm text-muted-foreground">{item.subtitle}</span>
      <h3 className="text-foreground mb-2">{item.title}</h3>
      <p className="text-balance mb-6">{item.details}</p>
      <Link
        to={item.link}
        className="px-4 py-2 gap-2 rounded-sm text-foreground border in-dark:bg-[#1F2124] hover:bg-foreground hover:text-background transition-colors duration-200">
        view project
      </Link>
    </div>
  );
}

export default ProjectItem;
