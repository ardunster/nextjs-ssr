import { TagCard } from '@/app/_components/TagCard'
import { TagCount } from '@/app/_utils/tags'
import { render, screen } from '@testing-library/react'

describe('TagCard', () => {
  test('exists', () => {
    expect(TagCard).toBeDefined()
  })

  test('displays input tag count information', () => {
    const mockTagCount: TagCount = {
      tag: 'test-tag',
      count: 42,
    }
    render(<TagCard tagCount={mockTagCount} key={1} />)
    expect(screen.getByText('test-tag')).toBeInTheDocument()
    expect(screen.getByText(/42/)).toBeInTheDocument()
  })
})
