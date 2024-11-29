import { create } from "zustand"
import { InitialItems } from "../lib/constants"
import { persist } from "zustand/middleware"

const useItemsStore = create(
  persist(
    (set, get) => ({
      items: InitialItems,
      newItemText: (newItem) => {
        const NewTodo = { id: Date.now(), name: newItem, Packed: false }

        set((state) => {
          return { items: [...state.items, NewTodo] }
        })
      },
      deleteItem: (id) => {
        set((state) => {
          const filteredItems = state.items.filter((item) => item.id !== id)
          return { items: filteredItems }
        })
      },
      singleItemCheckToogle: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) return { ...item, Packed: !item.Packed }
            return item
          })
          return { items: newItems }
        })
      },
      allItemsCheck: () => {
        set((state) => {
          const newCheckedItems = state.items.map((item) => ({
            ...item,
            Packed: true,
          }))
          return { items: newCheckedItems }
        })
      },
      allItemsUnCheck: () => {
        set((state) => {
          const uncheckedItems = state.items.map((item) => ({
            ...item,
            Packed: false,
          }))
          return { items: uncheckedItems }
        })
      },
      allToInitial: () => set((state) => ({ ...state, items: InitialItems })),
      removeAll: () => set((state) => ({ ...state, items: [] })),

      total: () => {
        set((state) => ({ total: get(state).items.length }))
      },
    }),
    { name: "items" }
  )
)

export default useItemsStore
