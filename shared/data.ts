import { CardConfig } from "../components/card"
import { BlogCardIds, ProjectCardIds } from "./enums"

export namespace CardData {

  export const ProjectCards: { [key: string]: CardConfig } = {

    PranjalDubeyPhotography: {
      id: ProjectCardIds.PranjalDubeyPhotography,
      imageUrl: '/images/pranjal-dubey-photography.jpg',
      imageAlt: 'silhouette of a man against sunset',
      title: 'Pranjal Dubey Photography',
      description: 'A website to document my photography and to share my travel stories.'
    },

    CssFilterGenerator: {
      id: ProjectCardIds.CssFilterGenerator,
      imageUrl: '/images/css-filter-generator.jpg',
      imageAlt: 'a colorful abstract background',
      title: 'CSS Filter Generator 2',
      description: 'An improved web worker based css filter generator which always produces a value of loss less than equal to 1.'
    }
  }

  export const BlogCards: { [key: string]: CardConfig } = {

    HelloWorld: {
      id: BlogCardIds.HelloWorld,
      imageUrl: '/images/pranjal-dubey-photography.jpg',
      imageAlt: 'silhouette of a man against sunset',
      title: 'Hello World',
      description: 'The quick brown fox jumps right over the lazy dog. The quick brown fox jumps right over the lazy dog.'
    },
  }

}