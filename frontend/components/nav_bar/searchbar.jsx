import React from 'react';

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
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;