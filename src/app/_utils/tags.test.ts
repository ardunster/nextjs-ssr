import { addTagCounts, aggregateTags, Tags } from '@/app/_utils/tags'

describe('aggregateTags', () => {
  test('exists', () => {
    expect(aggregateTags).toBeDefined()
  })
})

describe('addTagCounts', () => {
  test('exists', () => {
    expect(addTagCounts).toBeDefined()
  })

  test('adds a missing tag to tags object', () => {
    const tags: Tags = {}
    addTagCounts(tags, ['steve'])
    expect(tags).toEqual({ steve: 1 })
  })

  test('adds a count of an existing tag to tags object', () => {
    const tags: Tags = { steve: 1 }
    addTagCounts(tags, ['steve'])
    expect(tags).toEqual({ steve: 2 })
  })
})
