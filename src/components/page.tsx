import Block from "./block";

export default function Page() {
  return (
    <div className="grid h-screen bg-gray-400">
      <div className="justify-self-end w-9/12">
        <header className="mt-4 px-8">Theme</header>
        <div className="my-16 px-24 space-y-8">
          {Array.from(Array(1).keys()).map((value, index) => (
            <Block key={`block-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
