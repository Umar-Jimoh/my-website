import { useTheme } from "@/hooks/useTheme";
import { Switch } from "./ui/switch";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  return (
    <>
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => {
          setTheme(checked ? "dark" : "light");
        }}
      />
    </>
  );
}

export default ThemeToggle;
