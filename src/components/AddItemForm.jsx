import { useRef, useState } from "react"
import Button from "./Button"

const AddItemForm = ({ onAddItem }) => {
  const [itemText, setItemText] = useState("")
  const addFieldRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    if (!itemText) return

    onAddItem(itemText)

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
