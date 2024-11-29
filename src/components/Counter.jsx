import { useContext } from "react"
import { ItemsContext } from "../contexts/ItemsContextProvider"

const Counter = () => {
  const { active, total } = useContext(ItemsContext)
  return (
    <p>
      <b>{active}</b> / {total} Items Packed
    </p>
  )
}

export default Counter
