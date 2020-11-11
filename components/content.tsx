import React from 'react';
import { Cards } from '../data/content-data';
import { CardIds } from '../shared/enums';
import { Card } from './card';

const getCards = () => {

  const cards = [];

  for (const key in Cards) {

    const cardConfig = Cards[key];
    const card = <Card
      key={cardConfig.id}
      id={cardConfig.id}
      imageUrl={cardConfig.imageUrl}
      imageAlt={cardConfig.imageUrl}
      title={cardConfig.title}
      description={cardConfig.description}
      clickCallback={cardClickHandler} />

    cards.push(card);
  }

  return cards;

};

const cardClickHandler = (id: string) => {

  let url: string;

  switch (id) {
    case CardIds.PranjalDubeyPhotography:
      url = 'https://pranjaldubey.photography';
      break;

    case CardIds.CssFilterGenerator:
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
        {getCards()}
      </div>

    </div>
  );
}