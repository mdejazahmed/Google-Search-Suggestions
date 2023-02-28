// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {value: ''}

  pickSuggestion = suggestion => {
    this.setState({value: suggestion})
  }

  onInput = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {value} = this.state

    const resultList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(value.toLowerCase()),
    )

    return (
      <div className="mainContainer">
        <div className="logoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
        </div>
        <div className="searchAndSuggestionContainer">
          <div className="searchBarContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="inputBar"
              value={value}
              onChange={this.onInput}
            />
          </div>
          <ul className="suggestions">
            {resultList.map(each => (
              <SuggestionItem
                key={each.id}
                details={each}
                pickSuggestion={this.pickSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
