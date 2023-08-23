import ArticleBySlug from '@/app/articles/[...slug]/page'

describe('ArticleBySlug', () => {
  test('exists', () => {
    expect(ArticleBySlug).toBeDefined()
  })

  test('does a render thing if slug valid', () => {
    // write some expectations
  })

  test('renders an error if slug invalid', () => {
    // assert that error page exists
  })
})
