import React, { Component } from 'react';
import { connect } from "react-redux";
import SearchBar from 'material-ui-search-bar'
import axios from 'axios';
import {setContentResults} from '../actions/results.js'



const mapDispatchToProps = dispatch => {
  return {
     setContentResults : results => dispatch(setContentResults(results))
  };
}

const toContentList = data => {
    var contentList = [];
    data.map( element => contentList.push( toContent(element)));
    return contentList;
}

const toContent = element =>{
    return {
        url : element.images.fixed_height.url,
        id : element.id,
        title : element.title,
        description : 'Giphy'
    }
}

class Search extends Component {
    constructor() {
        super();

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event){
        axios.get('http://api.giphy.com/v1/gifs/search',
            { params : {api_key : 'oSlwKL14zdZu81PMYiolx3csYyXv8fHm', limit : 5, q : this.state.value }
        })
        .then( response => {
            console.log(response.data);
            this.props.setContentResults( toContentList(response.data.data) );
         })
        .catch(function (error){
            console.log(error);
        });
    }

    render() {
      return(
        <SearchBar
          onChange={(value) =>  this.setState({value: value})}
          onRequestSearch={this.handleOnChange}
          style={{
            margin: 5,
            maxWidth: 800
          }}
        />
      )
    }

}
const ConnectedSearch = connect(null, mapDispatchToProps)(Search);
export default ConnectedSearch;
