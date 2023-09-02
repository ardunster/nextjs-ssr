import { expect, test } from '@playwright/test'

test.describe('single article page', () => {
  test.beforeEach(async ({ page }) => {
    // Test verify against a specific article, will need to be updated when real articles
    // replace mocks used to develop code.
    await page.goto('/articles/article2')
  })

  test('exists', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Older Test Article')
  })

  test('contains breadcrumbs', async ({ page }) => {
    await expect(page.getByText('breadcrumb')).toBeVisible()
  })

  test('contains created date', async ({ page }) => {
    await expect(page.getByText('created')).toBeVisible()
  })

  test('contains thumbnail image', async ({ page }) => {
    await expect(page.getByAltText('thumbnail')).toBeVisible()
  })
})

test('non-existent article shows entered slug', async ({ page }) => {
  await page.goto('/articles/no-article-with-this-slug')

  await expect(page.getByText(/no-article-with-this-slug/)).toBeVisible()
})
