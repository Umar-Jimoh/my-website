import { experience } from "@/lib/constants";
import ExperienceItem from "./ExperienceItem";
import { Accordion } from "./ui/accordion";

function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-0">
        <ExperienceItem items={experience} />
      </Accordion>
    </section>
  );
}

export default Experience;
