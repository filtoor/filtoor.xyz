import { Playfair_Display } from "next/font/google";
import Wallet from "./wallet";

const headerFont = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 max-w-md w-full py-8 px-4 text-zinc-200">
      <h2
        className={`${headerFont.className} text-7xl font-bold bg-gradient-to-r from-orange-100 to-white inline-block text-transparent bg-clip-text tracking-normal leading-normal`}
      >
        filtoor
      </h2>
      <h3
        className={`${headerFont.className} font-bold tracking-normal leading-normal mt-[-40px]`}
      >
        playground
      </h3>

      <Wallet />
    </div>
  );
}
