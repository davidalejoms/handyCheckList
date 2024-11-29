import { secondaryButtons } from "../lib/constants"
import useItemsStore from "../stores/itemsStore"
import Button from "./Button"

const ButtonGroup = () => {
  const allItemsCheck = useItemsStore((state) => state.allItemsCheck)
  const allItemsUnCheck = useItemsStore((state) => state.allItemsUnCheck)
  const allToInitial = useItemsStore((state) => state.allToInitial)
  const removeAll = useItemsStore((state) => state.removeAll)

  const secondaryButtonsArr = [
    { text: secondaryButtons[0], onclick: allItemsCheck },
    { text: secondaryButtons[1], onclick: allItemsUnCheck },
    { text: secondaryButtons[2], onclick: allToInitial },
    { text: secondaryButtons[3], onclick: removeAll },
  ]
  return (
    <section className="button-group">
      {secondaryButtonsArr.map((button, index) => (
        <Button key={index} type="secondary" onClick={button.onclick}>
          {button.text}
        </Button>
      ))}
    </section>
  )
}

export default ButtonGroup
