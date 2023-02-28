// Write your code here

const SuggestionItem = props => {
  const {details} = props
  const {suggestion, pickSuggestion} = details

  const onArrow = () => {
    pickSuggestion(suggestion)
  }

  return (
    <li className="suggestionItem">
      <p className="suggestion">{suggestion}</p>
      <button onClick={onArrow} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt=" arrow"
          className="suggestionArrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
