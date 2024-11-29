import { secondaryButtons } from "../lib/constants"
import Button from "./Button"

const ButtonGroup = ({
  handleAllItemsCheck,
  handleAllItemsUnCheck,
  handleAllToInitial,
  handleRemoveAll,
}) => {
  const secondaryButtonsArr = [
    { text: secondaryButtons[0], onclick: handleAllItemsCheck },
    { text: secondaryButtons[1], onclick: handleAllItemsUnCheck },
    { text: secondaryButtons[2], onclick: handleAllToInitial },
    { text: secondaryButtons[3], onclick: handleRemoveAll },
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
