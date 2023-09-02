import { expect, test } from '@playwright/test'

test.describe('tags page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tags/test')
  })

  test('exists', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText(/Articles Tagged/)
  })

  test('contains a list of tagged article links', async ({ page }) => {
    const articleCards = page.getByTestId('article-card')

    expect(await articleCards.count()).toBeGreaterThanOrEqual(1)
    await articleCards.first().click()
    await expect(page).toHaveURL(/articles\/.+/)
    await expect(page.locator('h1')).toBeVisible()
  })
})

test('empty tag', async ({ page }) => {
  await page.goto('/tags/nothing-tagged-this')

  await expect(page.getByText(/No articles found./)).toBeVisible()
})
