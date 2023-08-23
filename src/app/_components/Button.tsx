import { useState } from 'react'

function Button(inputText: string) {
  const [buttonText, setButtonText] = useState(inputText)

  return (
    <button onClick={() => setButtonText('You clicked me!')}>
      {buttonText}
    </button>
  )
}
export default Button
