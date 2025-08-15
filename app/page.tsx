import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>kompsos&nbsp;</span>
        <span className={title({ color: "violet" })}>pokemon&nbsp;</span>
        <br />
        <span className={title()}>gallery</span>
        <div className={subtitle({ class: "mt-4" })}>
          search for pokemons using name or global pokemon id
        </div>
      </div>
    </section>
  );
}
