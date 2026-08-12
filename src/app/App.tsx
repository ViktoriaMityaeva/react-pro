import { Provider } from "react-redux"
import { store } from "./store/store"
import { RefPage } from "pages/refExample/ui/refExample"

function App() {

  return (
    <Provider store={store}>
        <RefPage />
    </Provider>
  )
}

export default App
