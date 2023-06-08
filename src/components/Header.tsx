import { Container } from "./Container";
import { Ellipsis } from "./Ellipsis";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

export type LogoProps = {
  className?: string;
};

export const Header = () => {
  const navItems = [
    <>
      Praia <Ellipsis />
    </>,
    <>
      Aulas <Ellipsis />
    </>,
    <>
      Contato <Ellipsis />
    </>,
    "Matricule-se",
  ];

  return (
    <div>
      <div className="bg-surf-blue-200 py-1 text-sm font-bold text-white">
        <Container>
          Aulas na Praia Mansa de Sexta à Domingo das 06:00 às 14:00
        </Container>
      </div>
      <header className="bg-surf-darkGray-300 py-3">
        <Container className="flex items-center justify-between">
          <h1 className="h-9">
            <p className="hidden">SurfBot</p>
            <Logo className="h-full" />
          </h1>
          <nav>
            <ul className="flex flex-wrap justify-between gap-4">
              {navItems.map((navItem, index) => (
                <NavItem key={index}>{navItem}</NavItem>
              ))}
            </ul>
          </nav>
        </Container>
      </header>
    </div>
  );
};
