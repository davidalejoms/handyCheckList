const Item = ({ item, onDeleteItem, onToogleItem }) => {
  const { name, Packed, id } = item
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={Packed}
          onChange={() => onToogleItem(id)}
        />
        {name}
      </label>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  )
}

export default Item
