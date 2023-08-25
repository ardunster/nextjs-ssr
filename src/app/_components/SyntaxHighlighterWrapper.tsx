import { ReactNode } from 'react'

export default function SyntaxHighlighterWrapper(props: {
  children: ReactNode
}) {
  return <div>{props.children}</div>
}
