import Card from "./card";

export default function Block() {
  return (
    <div className="">
      <header></header>
      <div className="w-full space-y-4">
        {Array.from(Array(2).keys()).map((value, index) => (
          <Card key={`card-${index}`} />
        ))}
      </div>
    </div>
  );
}
