import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

interface ExperienceProps {
  items: ExperienceItemProps[];
}

interface ExperienceItemProps {
  id: string;
  role: string;
  company: string;
  period: {
    from: string;
    to: string;
  };
  details: string[];
}

function ExperienceItem({ items }: ExperienceProps) {
  return (
    <>
      {items.map((item, index) => (
        <AccordionItem value={`item-${index}`}>
          <AccordionTrigger className="hover:no-underline cursor-pointer">
            <div>
              <span className="text-lg">{item.role}</span> <br />
              <span className="text-muted-foreground text-sm">{`${item.company} | ${item.period.from} - ${item.period.to}`}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="grid md:grid-cols-[1fr_3fr] gap-4 text-balance">
            {item.details.map((detail, index) => (
              <span
                key={index}
                className="border border-b-0 border-l-0 border-r-0 border-t-2 py-4">
                {detail}
                <br />
              </span>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </>
  );
}
export default ExperienceItem;

// function company() {

// }
