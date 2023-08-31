import { expect, test } from '@playwright/test'

test.describe('error page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/some-page-does-not-exist`)
  })

  test('exists', async ({ page }) => {
    await expect(page).toHaveTitle(/404/)
  })
})
