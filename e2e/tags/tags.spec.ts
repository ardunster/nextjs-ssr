import { expect, test } from '@playwright/test'

test.describe('tags page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/tags`)
  })

  test('exists', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Tags')
  })
})
