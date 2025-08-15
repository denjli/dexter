import { title } from "@/components/primitives";
import Search from "@/components/Search";
import SinglePokemon from "@/components/SinglePokemon";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>kompsos&nbsp;</span>
        <span className={title({ color: "violet" })}>pokemon&nbsp;</span>
        <br />
        <span className={title()}>gallery</span>
        <div className="py-4"></div>
        <Search />
      </div>
      <div className="container bg-red-100 grid p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
        <SinglePokemon />
        <SinglePokemon />
        <SinglePokemon />
        <SinglePokemon />
        <SinglePokemon />
        <SinglePokemon />
      </div>
    </section>
  );
}
