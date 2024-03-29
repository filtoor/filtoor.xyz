import { Playfair_Display } from "next/font/google";

const headerFont = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 max-w-md py-8 px-4 text-zinc-200">
      <img
        src="/logo_trans.png"
        alt="filtoor logo"
        className="w-1/2 mb-[-32px]"
      />
      <p>
        <a href="#" className="font-bold underline">
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
        projects to offer higher rate limits.{" "}
        <a
          href="https://twitter.com/solarnius"
          className="underline font-bold"
          target="blank"
        >
          Get in touch
        </a>{" "}
        with us to discuss.
      </p>
      <p>
        Feel free to read our{" "}
        <a href="/docs" className="font-bold underline">
          documentation
        </a>{" "}
        and play with our API in our{" "}
        <a href="/playground" className="font-bold underline">
          playground
        </a>
        .
      </p>
      <div className="flex flex-col gap-2">
        <p>
          We are open source and rely on community support to keep going. If you
          would like to contribute, please send any SOL assets to:
        </p>
        <span className="font-bold bg-slate-600 p-2 rounded-md text-xs w-max self-center my-4">
          filtoor.sol
        </span>
        <p>aka</p>
        <span className="font-bold bg-slate-600 p-2 rounded-md text-xs w-max self-center my-4">
          FLTRjoLrgPHcFTQzW2tKdnZBhVJYY1rg9HUF3nZToJ3z
        </span>
      </div>

      <p>We very much appreciate your support in fighting spam on Solana ❤️</p>
    </div>
  );
}
