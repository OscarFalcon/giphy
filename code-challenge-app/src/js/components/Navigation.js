import React, {Component }from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import axios from 'axios';
import {setContentResults} from '../actions/results.js'
import {valueToNavigation, NAVIGATION_FAVORITES, NAVIGATION_SEARCH} from '../constants/NavigationConstants.js'



const styles = {
  root: {
    width: 500,
  },
};


const mapDispatchToProps = dispatch => {
  return {
     setContentResults : results => dispatch(setContentResults(results))
  };
}

class SimpleBottomNavigation extends Component {
  state = {
    value: 0,
  };

  constructor() {
    super();
     this.handleChange = this.handleChange.bind(this);
   }


  handleChange = (event, value) => {

    const navigationPage = valueToNavigation(value);
    if(navigationPage === NAVIGATION_FAVORITES ){
        console.log('calling axios');

        axios.get('http://localhost:8080/code-challenge-giphy/v1/content/giphy/user/oscar')
        .then( response => {
            console.log(response.data);
            this.props.setContentResults( response.data.favorites )
        })
        .catch(function (error){
            console.log(error);
        });
    }
    else{
        this.props.setContentResults([]);
    }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="HashTags" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(SimpleBottomNavigation));