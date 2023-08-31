import { expect, test } from '@playwright/test'

test.describe('articles page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/articles`)
  })

  test('exists', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Articles')
  })
})
