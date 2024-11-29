import Header from "./Header"
import BackgroundHeading from "./BackgroundHeading"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
    </>
  )
}

export default App
