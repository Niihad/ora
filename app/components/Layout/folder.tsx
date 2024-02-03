import Link from "next/link";

export default function Folder() {
  return (
    <div className="mt-auto header uppercase text-center ">
      <div className="bg-black text-white p-5 px-6 ">
        <div className="text-2xl p-1 pb-4 text-zinc-400 pr-4">
          <Link href="">CONTACT US TO SCHEDULE AN APPOINTMENT</Link>
        </div>
        <hr className="h-1 "/>     
        <h1 className="flex gap-2 text-3xl  p-3 justify-center font-bold">Dr. Ajdarpasic Mathilde</h1>
        <div className="flex gap-4 pb-2 text-xs justify-center">
          <Link href="">Beverly Hills</Link>
          <p>|</p>
          <Link href="">London</Link>
        </div>
        <Link className="text-zinc-400 text-xs " href="">421 N. Rodeo Drive Penthouse | Beverly Hills, CA 90210 © Copyright 2024. All Rights Reserved. Dr. Sam Saleh.</Link>
        <p className="text-zinc-400 pt-3 text-xs">Beverly Hills | London</p>
      </div>
    </div>
  );
}
