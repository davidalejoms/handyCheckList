import Select from "react-select"
import EmptyView from "./EmptyView"
import Item from "./Item"
import { useMemo, useState } from "react"

const ItemList = ({ items, HandleDeleteItem, handleSingleItemCheckToogle }) => {
  const [sortBy, setSortBy] = useState("default ASC")

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.Packed - a.Packed
        }
        if (sortBy === "unpacked") {
          return a.Packed - b.Packed
        }
        if (sortBy === "default ASC") {
          return a.name.localeCompare(b.name)
        }
        if (sortBy === "default DESC") {
          return b.name.localeCompare(a.name)
        }
      }),
    [items, sortBy]
  )

  const sortingOptions = [
    {
      value: "default ASC",
      label: "Sort by default ASC",
    },
    {
      value: "default DESC",
      label: "Sort by default DESC",
    },
    {
      value: "packed",
      label: "Sort by packed",
    },
    {
      value: "unpacked",
      label: "Sort by unpacked",
    },
  ]
  return (
    <>
      <ul className="item-list">
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
        {items.length === 0 ? (
          <EmptyView />
        ) : (
          sortedItems.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              item={item}
              onDeleteItem={HandleDeleteItem}
              onToogleItem={handleSingleItemCheckToogle}
            />
          ))
        )}
      </ul>
    </>
  )
}

export default ItemList
