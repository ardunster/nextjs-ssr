'use client'

import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'

export default function SyntaxHighlighterWrapper(
  props: SyntaxHighlighterProps,
) {
  return <SyntaxHighlighter props={props}>{props.children}</SyntaxHighlighter>
}
