import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - filtoor.xyz",
  description: "Documentation for filtoor.xyz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col">
          <div className="h-8 absolute w-full bg-zinc-800 text-slate-200 z-10 items-center flex px-4 text-xs">
            <span>
              <a href="https://www.filtoor.xyz" className="font-bold underline">
                filtoor.xyz
              </a>{" "}
              documentation
            </span>
          </div>
          <div className="mt-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
