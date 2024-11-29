import Header from "./Header"
import BackgroundHeading from "./BackgroundHeading"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import ItemsContextProvider from "../contexts/ItemsContextProvider"

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>

      <Footer />
    </>
  )
}

export default App
