import { footerIcons } from "@/lib/icons";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center h-24 gap-4 text-muted-foreground">
      <div className="flex gap-5 text-xl mb-2">
        {footerIcons.map(({ id, link, icon, label }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="hover:text-foreground transition-colors duration-200">
            {icon}
          </a>
        ))}
      </div>
      <span className="text-sm font-light">
        &#169; Umar Jimoh All right Reserved
      </span>
    </footer>
  );
}

export default Footer;
