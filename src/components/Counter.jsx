const Counter = ({ stats: { total, active } }) => {
  return (
    <p>
      <b>{active}</b> / {total} Items Packed
    </p>
  )
}

export default Counter
