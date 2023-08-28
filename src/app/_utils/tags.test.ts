import {
  aggregateTags,
  sortTagCounts,
  TagCount,
  updateTagCounts,
} from '@/app/_utils/tags'
import { Article } from '@/app/_utils/getArticles'

describe('aggregateTags', () => {
  test('exists', () => {
    expect(aggregateTags).toBeDefined()
  })

  test('returns array of tags with counts', () => {
    const articles: Article[] = [
      {
        slug: 'steve',
        data: {
          tags: ['yes', 'no', 'maybe'],
        },
      },
      {
        slug: 'antwerp',
        data: { tags: ['maybe', 'I dunno', 'can you repeat the question?'] },
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
        data: {
          tags: ['yes', 'no', 'maybe'],
        },
      },
      {
        slug: 'antwerp',
        data: { tags: ['maybe', 'yes'] },
      },
      {
        slug: 'some-article',
        data: { tags: ['maybe', 'no'] },
      },
      {
        slug: 'some-other-article',
        data: { tags: ['maybe', '74', 'no'] },
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
