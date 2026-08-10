import { Provider } from "react-redux"
import { TaskPage } from "../pages/tasks"
import { store } from "./store/store"

function App() {

  return (
    <Provider store={store}>
      <TaskPage />
    </Provider>
  )
}

export default App
