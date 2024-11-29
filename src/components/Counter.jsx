import useItemsStore from "../stores/itemsStore"

const Counter = () => {
  const total = useItemsStore((state) => state.total)
  const checked = useItemsStore((state) => state.items).filter(
    (item) => item.Packed
  ).length
  return (
    <p>
      <b>{checked}</b> / {total} Items Packed
    </p>
  )
}

export default Counter
