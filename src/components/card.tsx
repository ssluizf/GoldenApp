import { useState } from "react";

import Textarea from "./textarea";
export interface CardObject {
  symbol: string;
  meaning: string;
}

interface Card {
  defaultCard: CardObject;
  updateCard(card: CardObject): void;
}

export default function Card({ defaultCard, updateCard }: Card) {
  const [card, setCard] = useState<CardObject>(defaultCard);

  function handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;

    const newCard = { ...card, [name]: value };

    setCard(newCard);
    updateCard(newCard);
  }

  function debounce(func: (...args: any) => void, timeout: number) {
    let timer: any;

    return (...args: any) => {
      clearTimeout(timer);

      timer = setTimeout(function (this: any) {
        func.apply(this, args);
      }, timeout);
    };
  }

  const debouncedOnChange = debounce(handleChange, 200);

  return (
    <div className="group flex flex-row-reverse w-full space-x-8 space-x-reverse">
      {(card.symbol || card.meaning) && (
        <>
          <Textarea
            name="meaning"
            placeholder="Add the meaning or translation"
            className="peer placeholder:text-transparent group-first:placeholder:text-current"
            onChange={debouncedOnChange}
            defaultValue={defaultCard.meaning}
          />
          <div className="flex flex-col h-6">
            <hr className="w-full m-auto px-1 border border-black" />
          </div>
        </>
      )}
      <Textarea
        name="symbol"
        placeholder="Add a word, phrase or symbol"
        className="peer placeholder:text-transparent group-first:placeholder:text-current"
        onChange={debouncedOnChange}
        defaultValue={defaultCard.symbol}
      />
      <div className="flex flex-col h-6 group-last:invisible group-only:visible group-hover:visible peer-focus:visible">
        <hr className="w-full m-auto px-1 border border-black" />
      </div>
    </div>
  );
}
