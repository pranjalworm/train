import { Card, CardConfig } from "../components/card";
import { CardData } from "../shared/data";
import { BlogCardIds, ProjectCardIds } from "../shared/enums";

export enum CardType {
  Project = 'project',
  Blog = 'blog'
}

export class CardService {

  static getCards(cardType: CardType) {

    switch (cardType) {
      case CardType.Project:
        return CardData.ProjectCards;

      case CardType.Blog:
        return CardData.BlogCards;
    }
  }

}
