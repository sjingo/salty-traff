import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black justify-center md:flex flex-nowrap">
      <div className="p-4 bg-slate-300 sm:max-sm:w-full md:w-1/3">
        <h2 className="text-white  font-bold text-2xl ">1</h2>
        <Link
          href="/protected"
          prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
          className="text-stone-400 underline hover:text-stone-200 transition-all"
        >
          Protected Page
        </Link>
        <hr />
        <Link
          href="/incidents"
          prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
          className="text-stone-400 underline hover:text-stone-200 transition-all"
        >
          Incidents Page
        </Link>
      </div>
      <div className=" bg-slate-400  p-4 grow sm:max-sm:w-full">
        <h2 className="text-stone-200 font-bold text-2xl">2</h2>
      </div>
    </div>
  );
}
