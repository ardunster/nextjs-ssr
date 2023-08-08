import Articles from '@/app/articles/page'
import { render, screen } from '@testing-library/react'

describe('Articles', () => {
  test('exists', () => {
    expect(Articles).toBeDefined()
  })

  test('displays Articles heading', () => {
    render(<Articles/>)
    expect(screen.getByText('Articles')).toBeInTheDocument()
  })
})
