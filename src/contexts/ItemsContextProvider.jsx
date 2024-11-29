import { createContext, useEffect, useState } from "react"
import { InitialItems } from "../lib/constants"

export const ItemsContext = createContext()

const ItemsContextProvider = ({ children }) => {
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
  const total = items.length
  const active = items.filter((item) => item.Packed).length

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])
  return (
    <ItemsContext.Provider
      value={{
        items,
        HandleNewItemText,
        HandleDeleteItem,
        handleSingleItemCheckToogle,
        handleAllItemsCheck,
        handleAllItemsUnCheck,
        handleAllToInitial,
        handleRemoveAll,
        total,
        active,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsContextProvider
