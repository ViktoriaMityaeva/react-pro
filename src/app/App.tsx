import { Provider } from "react-redux"
import { store } from "./store/store"
import { RegisterPage } from "pages/register"

function App() {

  return (
    <Provider store={store}>
        <RegisterPage />
    </Provider>
  )
}

export default App
