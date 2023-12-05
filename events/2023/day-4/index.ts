import { sum } from "@helpers/arrays";

type Card = {
  id: number;
  winningNumbers: number[];
  cardNumbers: number[];
};

const parseCard = (card: string): Card => {
  const [, id] = card.match(/Card\s+(\d+):\s+/).map((n) => parseInt(n, 10));
  const cardArr = card.split(/:\s+/)[1].split(/\s+/);
  const seperatorIndex = cardArr.indexOf("|");
  const winningNumbers = cardArr.slice(0, seperatorIndex).map((n) => parseInt(n, 10));
  const cardNumbers = cardArr.slice(seperatorIndex + 1).map((n) => parseInt(n, 10));

  return {
    id,
    winningNumbers,
    cardNumbers,
  };
};

export const partOne = (input: string): number => {
  let total = 0;
  const cards = input.split("\n");

  for (const card of cards) {
    let cardTotal = 0;

    const { winningNumbers, cardNumbers } = parseCard(card);

    for (const number of cardNumbers) {
      if (winningNumbers.includes(number)) {
        cardTotal += Math.max(cardTotal, 1);
      }
    }

    total += cardTotal;
  }

  return total;
};

export const partTwo = (input: string): number => {
  const cardMultiplier = {};
  const cards = input.split("\n");

  for (const card of cards) {
    const { id } = parseCard(card);
    cardMultiplier[id] = 1;
  }

  for (let index = 0; index < cards.length; index++) {
    const { id, winningNumbers, cardNumbers } = parseCard(cards[index]);
    const matches = cardNumbers.filter((n) => winningNumbers.includes(n)).length;
    const matchedCards = cards.slice(index + 1, index + matches + 1);

    for (const matchedCard of matchedCards) {
      const { id: matchedCardID } = parseCard(matchedCard);
      cardMultiplier[matchedCardID] += cardMultiplier[id];
    }
  }

  return sum(Object.values(cardMultiplier));
};
