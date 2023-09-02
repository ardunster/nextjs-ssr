import { expect, test } from '@playwright/test'

test.describe('articles page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/articles`)
  })

  test('exists', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Articles')
  })

  test('contains a list of article cards', async ({ page }) => {
    const articleCards = page.getByTestId('article-card')

    expect(await articleCards.count()).toBeGreaterThanOrEqual(1)
    await articleCards.first().click()
    await expect(page).toHaveURL(/articles\/.+/)
    await expect(page.locator('h1')).toBeVisible()
  })
})
