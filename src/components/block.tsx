import { useState } from "react";
import Card, { CardObject } from "./card";

export default function Block() {
  const EMPTY_CARD = { symbol: "", meaning: "" };
  const [cards, setCards] = useState<CardObject[]>([]);

  function updateCard(card: CardObject, index: number) {
    setCards((prevState) => {
      const copyPrevState = [...prevState];
      const cardIsEmpty = !(card.symbol || card.meaning);

      const currentIsNull = !copyPrevState[index];
      const cardIsLast = copyPrevState.length - 1 === index;

      const deleteCard = () => {
        copyPrevState.splice(index, 1);

        return copyPrevState;
      };

      const editCard = () => {
        copyPrevState.splice(index, 1, card);

        return copyPrevState;
      };

      if (cardIsEmpty && currentIsNull) return copyPrevState;

      if (cardIsEmpty && cardIsLast) return deleteCard();

      return editCard();
    });
  }

  return (
    <div className="">
      <header></header>
      <div className="w-full space-y-4">
        {[...cards, EMPTY_CARD].map((card, index) => (
          <Card
            key={`card-${index}`}
            defaultCard={card}
            updateCard={(cardObj) => updateCard(cardObj, index)}
          />
        ))}
      </div>
    </div>
  );
}
