import {
  aggregateTags,
  sortTagCounts,
  TagCount,
  updateTagCounts,
} from '@/app/_utils/tags'

describe('aggregateTags', () => {
  test('exists', () => {
    expect(aggregateTags).toBeDefined()
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

  test('returns negative if count of tag a is less than tag b', () => {
    const tagA = { tag: 'a', count: 1 }
    const tagB = { tag: 'b', count: 2 }

    expect(sortTagCounts(tagA, tagB)).toEqual(-1)
  })

  test('returns positive if count of tag a is greater than tag b', () => {
    const tagA = { tag: 'a', count: 3 }
    const tagB = { tag: 'b', count: 2 }

    expect(sortTagCounts(tagA, tagB)).toEqual(1)
  })

  test('returns neutral if count of tag a is the same as tag b', () => {
    const tagA = { tag: 'a', count: 2 }
    const tagB = { tag: 'b', count: 2 }

    expect(sortTagCounts(tagA, tagB)).toEqual(0)
  })
})
