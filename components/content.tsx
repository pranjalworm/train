import React from 'react';
import { CardService, CardType } from '../services/card.service';
import { ProjectCardIds } from '../shared/enums';
import { Card } from './card';

const getCards = (cardType: CardType) => {

  let cardData;
  const cards = [];

  switch (cardType) {
    case CardType.Project:
      cardData = CardService.getCards(CardType.Project);
      break;

    case CardType.Blog:
      cardData = CardService.getCards(CardType.Blog);
      break;
  }

  for (const key in cardData) {

    const config = cardData[key];

    const card = <Card
      key={config.id}
      id={config.id}
      imageUrl={config.imageUrl}
      imageAlt={config.imageUrl}
      title={config.title}
      description={config.description}
      clickCallback={cardClickHandler} />

    cards.push(card);
  }

  return cards;
};


const cardClickHandler = (id: string) => {

  let url: string;

  switch (id) {
    case ProjectCardIds.PranjalDubeyPhotography:
      url = 'https://pranjaldubey.photography';
      break;

    case ProjectCardIds.CssFilterGenerator:
      url = 'https://pranjalworm.github.io/css-filter-generator/';
      break;

    default:
      throw new Error('CardClickHandler: Invalid Id passed!')
  }

  window.open(url);
}

export default function Content() {

  return (
    <div className="h-screen w-full p-8 text-primary bg-content">

      <div className="text-3xl font-title mb-8">Projects</div>

      <div className="flex flex-row">
        {getCards(CardType.Project)}
      </div>

      <div className="text-3xl font-title mb-8 mt-4">Blogs</div>

      <div className="flex flex-row">
        {getCards(CardType.Blog)}
      </div>

    </div>
  );
}