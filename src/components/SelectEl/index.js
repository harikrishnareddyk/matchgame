import './index.css'

const SelectEl = props => {
  const {each, selectedEl} = props
  const {tabId, displayText} = each

  const Selectgenre = () => {
    selectedEl(tabId)
  }
  return (
    <li className="SelectEl">
      <button className="select" onClick={Selectgenre}>
        {displayText}
      </button>
    </li>
  )
}
export default SelectEl
