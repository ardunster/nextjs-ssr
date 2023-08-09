import ReactMarkdown from 'react-markdown'

const markdown = `Test Markdown`

export default function Articles() {
  return (
    <>
      <h1>Articles</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  )
}
