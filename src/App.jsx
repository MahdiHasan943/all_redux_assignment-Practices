import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import Main from "./layout/Main/Main"
import { Toaster } from "react-hot-toast"





function App() {





  return (
    <>
      <RouterProvider router={router}>   
    <Toaster/>
       
        </RouterProvider>
    </>
  )
}

export default App
