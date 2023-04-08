import { useState } from "react";
import Textarea from "./textarea";

export default function Card() {
  const [symbol, setSymbol] = useState("");
  const [meaning, setMeaning] = useState("");

  return (
    <div className="group flex flex-row-reverse w-full space-x-8 space-x-reverse">
      {(symbol || meaning) && (
        <>
          <Textarea
            name="meaning"
            placeholder="Add the meaning or translation"
            className="peer group-last:placeholder:text-transparent"
            value={meaning}
            onChange={(e) => setMeaning((e.target as HTMLInputElement).value)}
          />
          <div className="flex flex-col h-6">
            <hr className="w-full m-auto px-1 border border-black" />
          </div>
        </>
      )}
      <Textarea
        name="symbol"
        placeholder="Add a word, phrase or symbol"
        className="peer group-last:placeholder:text-transparent"
        value={symbol}
        onChange={(e) => setSymbol((e.target as HTMLInputElement).value)}
      />
      <div className="flex flex-col h-6 group-last:invisible group-hover:visible peer-focus:visible">
        <hr className="w-full m-auto px-1 border border-black" />
      </div>
    </div>
  );
}
