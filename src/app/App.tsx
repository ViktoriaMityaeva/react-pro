import { Provider } from "react-redux"
import { store } from "./store/store"
import { BrowserRouter } from "react-router-dom"
import { AppRouter, AuthProvider } from "features/authRouting"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
