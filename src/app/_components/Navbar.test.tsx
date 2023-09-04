import Navbar from '@/app/_components/Navbar'
import { render, screen } from '@testing-library/react'

jest.mock('next/navigation')

describe('Navbar', () => {
  test('exists', () => {
    expect(Navbar).toBeDefined()
  })

  test('contains link to Main Page', () => {
    render(<Navbar />)
    const mainPageLink = screen.getByRole('link', { name: 'Main Page' })
    expect(mainPageLink).toBeInTheDocument()
    expect(mainPageLink).toHaveAttribute('href', '/')
  })

  test('contains link to Articles Page', () => {
    render(<Navbar />)
    const articleLink = screen.getByRole('link', { name: 'Articles' })
    expect(articleLink).toBeInTheDocument()
    expect(articleLink).toHaveAttribute('href', '/articles')
  })

  test('contains link to Tags Page', () => {
    render(<Navbar />)
    const tagsLink = screen.getByRole('link', { name: 'Tags' })
    expect(tagsLink).toBeInTheDocument()
    expect(tagsLink).toHaveAttribute('href', '/tags')
  })
})
