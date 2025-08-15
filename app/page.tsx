import { title } from "@/components/primitives";
import Search from "@/components/Search";

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
    </section>
  );
}
