import { Card, CardConfig } from "../components/card";
import { CardIds } from "../shared/enums";

export const Cards: { [key: string]: CardConfig } = {

  PranjalDubeyPhotography: {
    id: CardIds.PranjalDubeyPhotography,
    imageUrl: '/images/pranjal-dubey-photography.jpg',
    imageAlt: 'silhouette of a man against sunset',
    title: 'Pranjal Dubey Photography',
    description: 'A website to document my photography and to share my travel stories.'
  },

  CssFilterGenerator: {
    id: CardIds.CssFilterGenerator,
    imageUrl: '/images/css-filter-generator.jpg',
    imageAlt: 'a colorful abstract background',
    title: 'CSS Filter Generator 2',
    description: 'An improved web worker based css filter generator which always produces a value of loss less than equal to 1.'
  },

}
