import './App.css'
import {SignInButton,SignOutButton,SignUpButton, Show} from "@clerk/react"

function App() {
  return (
    <>
    <header>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>

        <Show when="signed-in">
          <SignOutButton/>
        </Show>

    </header>
    </>
  )
}

export default App
