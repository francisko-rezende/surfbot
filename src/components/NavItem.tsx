type NavItemProps = {
  children: React.ReactNode;
  href?: string;
};

export const NavItem = ({ children, href }: NavItemProps) => {
  return (
    <li>
      <a
        href={href || "#"}
        className="flex items-center gap-4 font-bold text-white"
      >
        {children}
      </a>
    </li>
  );
};
