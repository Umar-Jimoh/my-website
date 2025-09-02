interface SkillBadgeProps {
  icon: React.JSX.Element;
  label: string;
}

function SkillBadge({ icon, label }: SkillBadgeProps) {
  return (
    <div className="flex justify-center items-center px-4 py-2 gap-2 rounded-sm text-foreground border in-dark:bg-[#1F2124] hover:bg-foreground hover:text-background transition-colors duration-200">
      <span>{icon}</span>
      <p>{label}</p>
    </div>
  );
}

export default SkillBadge;
