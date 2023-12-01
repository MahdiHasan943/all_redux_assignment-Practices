import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import Main from "./layout/Main/Main"
import { Provider } from "react-redux"
import store from "./redux/store"



function App() {





  return (
    <>
      <Provider store={store}> 
      <RouterProvider router={router}>   
    
       
        </RouterProvider>
        </Provider>
    </>
  )
}

export default App
