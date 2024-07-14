import { NavlinkStyles } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/NavItem";
import { Link } from "next-view-transitions";

export default function NavLink({
  url,
  newTab,
  label,
  cta,
  className,
  handleMobileMenu,
}: NavItem) {
  return (
    <Link
      href={url || "/"}
      className={cn(
        NavlinkStyles,
        cta &&
          "mt-4 bg-mint px-4 py-4 text-center font-bold text-gray-900 sm:mt-0 sm:py-2",
        className,
      )}
      onClick={handleMobileMenu}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {label}
    </Link>
  );
}
