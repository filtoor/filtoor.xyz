import Image from "next/image";
import { Sriracha } from "next/font/google";

const headerFont = Sriracha({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h2
        className={`${headerFont.className} text-8xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text`}
      >
        filtoor
      </h2>
      <p>
        filtoor.xyz is a service that provides a performant API for cNFT spam
        detection on Solana, created by the maintainers of{" "}
        <a href="https://github.com/solarnius/cnft-spam-filter">
          cnft-spam-filter
        </a>
        .
      </p>
      <p>
        We currently offer a free rate-limited public API and can work with
        projects to offer higher rate limits for a reasonable fee.
      </p>
    </main>
  );
}
