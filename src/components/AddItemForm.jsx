import { useRef, useState } from "react"
import Button from "./Button"
import useItemsStore from "../stores/itemsStore"

const AddItemForm = () => {
  const newItemText = useItemsStore((state) => state.newItemText)

  const [itemText, setItemText] = useState("")
  const addFieldRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    if (!itemText) return

    newItemText(itemText)

    setItemText("")
    addFieldRef.current.focus()
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>AddItemForm</h2>
      <input
        ref={addFieldRef}
        value={itemText}
        type="text"
        onChange={(e) => {
          setItemText(e.target.value)
        }}
      />
      <Button buttonHandler={submitHandler}>Add To List</Button>
    </form>
  )
}

export default AddItemForm
