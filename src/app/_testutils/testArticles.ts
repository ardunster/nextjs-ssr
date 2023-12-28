import { Article } from '@/app/_utils/articles'

export const mockArticleSteve: Article = {
  slug: 'steve',
  subdirectory: 'articles',
  data: {
    tags: ['yes', 'no', 'maybe'],
    publishedDate: 'yesterday',
    title: 'steve',
    description: 'lots of steveing',
    thumbnailUrl: 'steve.png',
  },
  content: 'steve',
}

export const mockArticleAntwerp: Article = {
  slug: 'antwerp',
  subdirectory: 'articles',
  data: {
    tags: ['maybe', 'I dunno', 'can you repeat the question?'],
    publishedDate: 'tomorrow',
    title: 'antwerp',
    description: 'its a city',
    thumbnailUrl: 'antwerp.png',
  },
  content: 'antwerp',
}

export const mockArticleBermuda: Article = {
  slug: 'bermuda',
  subdirectory: 'articles',
  data: {
    tags: ['maybe', 'yes'],
    publishedDate: 'tomorrow',
    title: 'bermuda',
    description: 'its a triangle',
    thumbnailUrl: '3_sided_polygon.png',
  },
  content: 'bermuda triangle math',
}

export const mockArticleSome: Article = {
  slug: 'some-article',
  subdirectory: 'articles',
  data: {
    tags: ['maybe', 'no'],
    publishedDate: 'last week',
    title: 'some article',
    description: 'an article about stuff',
    thumbnailUrl: 'article.png',
  },
  content: 'lots of content all about stuff',
}

export const mockArticleSomeOther: Article = {
  slug: 'some-other-article',
  subdirectory: 'articles',
  data: {
    tags: ['maybe', '74', 'no'],
    publishedDate: 'seven years ago',
    title: 'some other article 74',
    description: '74 is a magic number',
    thumbnailUrl: '74.png',
  },
  content: '74',
}
