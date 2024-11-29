import AddItemForm from "./AddItemForm"
import ButtonGroup from "./ButtonGroup"

const Sidebar = ({
  HandleNewItemText,
  handleAllItemsCheck,
  handleAllItemsUnCheck,
  handleAllToInitial,
  handleRemoveAll,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={HandleNewItemText} />
      <ButtonGroup
        handleAllItemsCheck={handleAllItemsCheck}
        handleAllItemsUnCheck={handleAllItemsUnCheck}
        handleAllToInitial={handleAllToInitial}
        handleRemoveAll={handleRemoveAll}
      />
    </div>
  )
}

export default Sidebar
