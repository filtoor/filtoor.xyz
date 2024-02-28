import Form from "./form";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 max-w-md w-full py-8 px-4 text-zinc-200">
      <img
        src="/logo_trans.png"
        alt="filtoor logo"
        className="w-1/2 mb-[-32px]"
      />
      <h3 className={`font-bold tracking-normal leading-normal mt-[-40px]`}>
        playground
      </h3>

      <Form />
    </div>
  );
}
