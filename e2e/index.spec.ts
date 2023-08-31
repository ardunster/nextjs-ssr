import { expect, test } from '@playwright/test'

const baseUrl = 'http://localhost:3000'

test.describe('main page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl)
  })

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle('NextJS Blog with Markdown via MDX')
  })

  test('has a nav bar with link to main page', async ({ page }) => {
    const navbar = page.getByRole('navigation')
    await expect(navbar).toBeVisible()

    const mainPageLink = navbar.getByRole('link', { name: 'Main Page' })
    await expect(mainPageLink).toBeVisible()
    await mainPageLink.click()
    await expect(page).toHaveURL(baseUrl)
  })

  test('has a nav bar with link to articles', async ({ page }) => {
    const navbar = page.getByRole('navigation')
    await expect(navbar).toBeVisible()

    const articleLink = navbar.getByRole('link', { name: 'Articles' })
    await expect(articleLink).toBeVisible()
    await articleLink.click()
    await expect(page).toHaveURL(`${baseUrl}/articles`)
  })

  test('has a nav bar with link to tags', async ({ page }) => {
    const navbar = page.getByRole('navigation')
    await expect(navbar).toBeVisible()

    const tagLink = navbar.getByRole('link', { name: 'tags' })
    await expect(tagLink).toBeVisible()
    await tagLink.click()
    await expect(page).toHaveURL(`${baseUrl}/tags`)
  })
})
