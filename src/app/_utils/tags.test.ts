import {
  aggregateTags,
  filterArticlesByTag,
  sortTagCounts,
  TagCount,
  updateTagCounts,
} from '@/app/_utils/tags'
import { Article } from '@/app/_utils/articles'

describe('aggregateTags', () => {
  test('exists', () => {
    expect(aggregateTags).toBeDefined()
  })

  test('returns array of tags with counts', () => {
    const articles: Article[] = [
      {
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
      },
      {
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
      },
    ]

    expect(aggregateTags(articles)).toEqual([
      { tag: 'maybe', count: 2 },
      { tag: 'yes', count: 1 },
      { tag: 'no', count: 1 },
      { tag: 'I dunno', count: 1 },
      { tag: 'can you repeat the question?', count: 1 },
    ])
  })

  test('sorts results with highest number of occurrences first', () => {
    const articles: Article[] = [
      {
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
      },
      {
        slug: 'antwerp',
        subdirectory: 'articles',
        data: {
          tags: ['maybe', 'yes'],
          publishedDate: 'tomorrow',
          title: 'antwerp',
          description: 'its a city',
          thumbnailUrl: 'antwerp.png',
        },
        content: 'antwerp',
      },
      {
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
      },
      {
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
      },
    ]

    expect(aggregateTags(articles)).toEqual([
      { tag: 'maybe', count: 4 },
      { tag: 'no', count: 3 },
      { tag: 'yes', count: 2 },
      { tag: '74', count: 1 },
    ])
  })
})

describe('updateTagCounts', () => {
  test('exists', () => {
    expect(updateTagCounts).toBeDefined()
  })

  test('adds a missing tag to tags array', () => {
    const tags: TagCount[] = []
    updateTagCounts(tags, ['steve'])
    expect(tags).toEqual([{ tag: 'steve', count: 1 }])
  })

  test('adds a count of an existing tag to tags array', () => {
    const tags: TagCount[] = [{ tag: 'steve', count: 1 }]
    updateTagCounts(tags, ['steve'])
    expect(tags).toEqual([{ tag: 'steve', count: 2 }])
  })

  test('adds a count of multiple tags to tags array', () => {
    const tags: TagCount[] = [{ tag: 'steve', count: 1 }]
    updateTagCounts(tags, ['steve', 'antwerp'])
    expect(tags).toEqual([
      { tag: 'steve', count: 2 },
      { tag: 'antwerp', count: 1 },
    ])
  })
})

describe('sortTagCounts', () => {
  test('exists', () => {
    expect(sortTagCounts).toBeDefined()
  })

  test('returns positive if count of tag a is less than tag b', () => {
    const tagA = { tag: 'a', count: 1 }
    const tagB = { tag: 'b', count: 2 }

    expect(sortTagCounts(tagA, tagB)).toEqual(1)
  })

  test('returns negative if count of tag a is greater than tag b', () => {
    const tagA = { tag: 'a', count: 3 }
    const tagB = { tag: 'b', count: 2 }

    expect(sortTagCounts(tagA, tagB)).toEqual(-1)
  })

  test('returns neutral if count of tag a is the same as tag b', () => {
    const tagA = { tag: 'a', count: 2 }
    const tagB = { tag: 'b', count: 2 }

    expect(sortTagCounts(tagA, tagB)).toEqual(0)
  })
})

describe('filterArticlesByTag', () => {
  const articles: Article[] = [
    {
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
    },
    {
      slug: 'antwerp',
      subdirectory: 'articles',
      data: {
        tags: ['maybe', 'yes'],
        publishedDate: 'tomorrow',
        title: 'antwerp',
        description: 'its a city',
        thumbnailUrl: 'antwerp.png',
      },
      content: 'antwerp',
    },
    {
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
    },
    {
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
    },
  ]

  test('exists', () => {
    expect(filterArticlesByTag).toBeDefined()
  })

  test('returns only articles that have the requested tag', () => {
    expect(filterArticlesByTag(articles, 'yes')).toEqual([
      articles[0],
      articles[1],
    ])
    expect(filterArticlesByTag(articles, 'no')).toEqual([
      articles[0],
      articles[2],
      articles[3],
    ])
    expect(filterArticlesByTag(articles, 'maybe')).toEqual(articles)
    expect(filterArticlesByTag(articles, 'nope')).toEqual([])
  })
})
