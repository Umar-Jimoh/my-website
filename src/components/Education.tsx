import { PiGraduationCap } from "react-icons/pi";

function Education() {
  return (
    <section>
      <h2 className="text-xl text-foreground font-bold mb-2">Education</h2>
      <div className="flex gap-2">
        <PiGraduationCap size="24px" />
        <div className="flex flex-col">
          <h3 className="text-lg">Bachelor of Science in Computer Science</h3>
          <p className="text-muted-foreground text-sm">
            Ladoke Akintola University of Technology |{" "}
            <time dateTime="2019">2019</time> –{" "}
            <time dateTime="2024">2024</time>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_3fr] gap-4 text-balance mt-4">
        <h4 className="border-t-2 py-4">
          Relevant Coursework: Data Structures and Algorithms, Database
          Management Systems, Web Development, Software Engineering.
        </h4>
      </div>
    </section>
  );
}

export default Education;
