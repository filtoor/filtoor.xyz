import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const headerFont = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 max-w-md p-8 text-zinc-200">
      <h2
        className={`${headerFont.className} text-7xl font-bold bg-gradient-to-r from-orange-100 to-white inline-block text-transparent bg-clip-text tracking-normal leading-normal`}
      >
        filtoor.xyz
      </h2>
      <p>
        <a
          href="https://filtoor.xyz"
          target="_blank"
          className="font-bold underline"
        >
          filtoor.xyz
        </a>{" "}
        is a service that provides a performant API for cNFT spam detection on
        Solana, created by the maintainers of{" "}
        <a
          href="https://github.com/solarnius/cnft-spam-filter"
          target="_blank"
          className="font-bold underline"
        >
          cnft-spam-filter
        </a>
        .
      </p>
      <p>
        We currently offer a free rate-limited public API and can work with
        projects to offer higher rate limits for a reasonable fee.
      </p>
    </div>
  );
}
