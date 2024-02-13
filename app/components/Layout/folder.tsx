import Link from "next/link";

export default function Folder() {
  return (
    <div className="uppercase text-center ">
      <div className="bg-black text-white p-5 px-6 ">
        <div className="text-2xl p-1 pb-4 text-zinc-400 pr-4">
          <Link href="">CONTACT US TO SCHEDULE AN APPOINTMENT</Link>
        </div>
        <hr className="h-1 "/>     
        <h1 className="flex gap-2 text-3xl p-3 justify-center font-bold">Ora dental practice</h1>
        <Link className="text-zinc-400 text-xs " href="https://www.google.com/maps/dir//Centre+dentaire+differdange+65A+Av.+de+la+Libert%C3%A9+4601+Differdange+Luxembourg/@49.5263651,5.8900633,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47eacb049c805e7b:0xee6cc48d7952f62e">65A avenue de la Liberté, 4601 Differdange </Link>
        <p className="text-zinc-400 pt-3 text-xs">© Copyright 2024. All Rights Reserved. Ora dental practice.</p>
      </div>
    </div>
  );
}
