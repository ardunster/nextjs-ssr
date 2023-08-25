'use client'

function Button(props: { inputText: string }) {
  return (
    <button onClick={() => alert('You clicked me!')}>{props.inputText}</button>
  )
}
export default Button
