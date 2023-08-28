import { aggregateTags, TagCount, updateTagCounts } from '@/app/_utils/tags'

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
