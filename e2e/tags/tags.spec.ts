import { expect, test } from '@playwright/test'

test.describe('tags page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/tags`)
  })

  test('exists', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Tags')
  })

  test('contains a list of tag links', async ({ page }) => {
    const tags = page.getByTestId('tag-link')

    expect(await tags.count()).toBeGreaterThanOrEqual(1)
    await tags.first().click()
    await expect(page).toHaveURL('/tags/test')
    await expect(page.getByText(/Articles Tagged/)).toBeVisible()
  })
})
