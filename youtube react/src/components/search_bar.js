import React from 'react';

const  inputStyle ={
    display:"block",
    marginTop :"0px",
    marginLeft:"60px",
    width:"470px"
}


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        this.props.onSearchTermChange(event.target.value);
    }

    render(){
        return (
            <div className="search-bar">
                 <input style={inputStyle} placeholder="Search" type="text"                 
                    value={this.state.term}
                    onChange={this.onInputChange} 
                />               
            </div>
        );        
    }

}

export default SearchBar;