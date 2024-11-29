import Header from "./Header"
import BackgroundHeading from "./BackgroundHeading"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import { InitialItems } from "../lib/constants"

function App() {
  const ItemsFromLocalStorafe = JSON.parse(localStorage.getItem("items"))
  const [items, setItems] = useState(() =>
    ItemsFromLocalStorafe.length > 0 ? ItemsFromLocalStorafe : InitialItems
  )

  const HandleNewItemText = (newItem) => {
    const NewTodo = { id: Date.now(), name: newItem, Packed: false }
    const newItems = [...items, NewTodo]
    setItems(newItems)
  }

  const HandleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const handleSingleItemCheckToogle = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, Packed: !item.Packed }
      }
      return item
    })
    setItems(newItems)
  }
  const handleAllItemsCheck = () => {
    const newItems = items.map((item) => {
      return { ...item, Packed: true }
    })
    setItems(newItems)
  }
  const handleAllItemsUnCheck = () => {
    const newItems = items.map((item) => {
      return { ...item, Packed: false }
    })
    setItems(newItems)
  }
  const handleAllToInitial = () => {
    setItems(InitialItems)
  }
  const handleRemoveAll = () => {
    setItems([])
  }
  const stats = {
    total: items.length,
    active: items.filter((item) => item.Packed).length,
  }
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header stats={stats} />
        <ItemList
          items={items}
          HandleDeleteItem={HandleDeleteItem}
          handleSingleItemCheckToogle={handleSingleItemCheckToogle}
        />
        <Sidebar
          HandleNewItemText={HandleNewItemText}
          HandleDeleteItem={HandleDeleteItem}
          handleAllItemsCheck={handleAllItemsCheck}
          handleAllItemsUnCheck={handleAllItemsUnCheck}
          handleAllToInitial={handleAllToInitial}
          handleRemoveAll={handleRemoveAll}
        />
      </main>

      <Footer />
    </>
  )
}

export default App
