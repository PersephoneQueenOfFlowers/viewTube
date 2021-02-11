import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortAwesome/free-solid-svg-icons';
class SearchBar extends React.Component {

	// state = {term: ''};

	// onInputChange = e => {		
	// 	this.setState({ term: e.target.value });
	// };

	// onFormSubmit = e => {
	// 	e.preventDefault();

	// 	this.props.onFormSubmit(this.state.term);
	// };

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
            <input id="search" autoCapitalize="none" autoComplete="off" autoCorrect="off" name="search_query" tabIndex="0" type="text" spellCheck="false" placeholder="Search" aria-label="Search" aria-haspopup="false" role="combobox" aria-autocomplete="list" dir="ltr" className="ytd-searchbox" />
            <FontAwesomeIcon icon={faSearch} />
            <input id="searchSubmit" type="submit" value=""/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;