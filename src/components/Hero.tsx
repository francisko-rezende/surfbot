import { Container } from "./Container";

const Arrow = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 6H10.5M10.5 6L5.5 1M10.5 6L5.5 11"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Hero = () => {
  return (
    <section className="bg-[url('/src/images/bg-intro.jpg')] bg-cover bg-[55%]">
      <Container className="flex flex-wrap items-center justify-between pb-11 pt-[273px]">
        <h2 className="font-serif text-7xl text-white">Escola de Surf</h2>
        <form
          className="grid grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="sr-only" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="h-full rounded-l-lg pl-4 text-lg"
          />
          <button
            className="round flex items-center gap-5 rounded-r-lg bg-surf-red-200 p-3 text-lg font-bold uppercase text-white"
            type="submit"
          >
            Matricule-se <Arrow />
          </button>
        </form>
      </Container>
    </section>
  );
};
