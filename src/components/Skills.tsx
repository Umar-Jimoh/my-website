import { skillItems } from "@/lib/constants";
import SkillBadge from "./SkillBadge";

function Skills() {
  return (
    <section>
      <h2 className="text-xl text-foreground font-bold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skillItems.map(({ id, icon, label }) => (
          <SkillBadge key={id} icon={icon} label={label} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
