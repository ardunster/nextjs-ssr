import { Article } from '@/app/_utils/articles'

export const mockArticleSteve: Article = {
  slug: 'steve',
  subdirectory: 'articles',
  data: {
    publishedDate: 'yesterday',
    title: 'steve',
    description: 'lots of steveing',
    tags: ['yes', 'no', 'maybe'],
    thumbnailUrl: 'steve.png',
    status: 'published',
    category: 'category_1',
  },
  content: 'steve',
}

export const mockArticleAntwerp: Article = {
  slug: 'antwerp',
  subdirectory: 'articles',
  data: {
    publishedDate: 'tomorrow',
    title: 'antwerp',
    description: 'its a city',
    tags: ['maybe', 'I dunno', 'can you repeat the question?'],
    thumbnailUrl: 'antwerp.png',
    status: 'published',
    category: 'category_1',
  },
  content: 'antwerp',
}

export const mockArticleBermuda: Article = {
  slug: 'bermuda',
  subdirectory: 'articles',
  data: {
    publishedDate: 'tomorrow',
    title: 'bermuda',
    description: 'its a triangle',
    tags: ['maybe', 'yes'],
    thumbnailUrl: '3_sided_polygon.png',
    status: 'published',
    category: 'category_1',
  },
  content: 'bermuda triangle math',
}

export const mockArticleSome: Article = {
  slug: 'some-article',
  subdirectory: 'articles',
  data: {
    publishedDate: 'last week',
    title: 'some article',
    description: 'an article about stuff',
    tags: ['maybe', 'no'],
    thumbnailUrl: 'article.png',
    status: 'published',
    category: 'category_1',
  },
  content: 'lots of content all about stuff',
}

export const mockArticleSomeOther: Article = {
  slug: 'some-other-article',
  subdirectory: 'articles',
  data: {
    publishedDate: 'seven years ago',
    title: 'some other article 74',
    description: '74 is a magic number',
    tags: ['maybe', '74', 'no'],
    thumbnailUrl: '74.png',
    status: 'published',
    category: 'category_1',
  },
  content: '74',
}
