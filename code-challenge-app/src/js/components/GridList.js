import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Content from './Content.js'
import {addContentToFavorites} from '../actions/results.js'
import axios from 'axios';

const styles = theme => ({
 root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const mapStateToProps = state => {
    return { contentList : state.contentList }
}

const addToFavorites = (content) => (
        axios.post('http://localhost:8080/code-challenge-giphy/v1/content/giphy/user/oscar/favorites', content,
        {
            'Content-Type': 'application/json'
        })
        .then( response => {
            console.log('added content to favorites');
         })
        .catch(function (error){
            console.log(error);
        })
    )




const MyIcon = ({classes, content}) => (
    <IconButton contentid={content.id} className={classes.icon} onClick = { () => (addToFavorites(content)) } >
        <FavoriteIcon />
    </IconButton>
)

const MyListTile = ({classes, content}) =>(
    <GridListTile key={content.id}>
        <img src={content.url} alt={content.description} />
            <GridListTileBar
                title={content.description}
                subtitle={<span>by: {content.description}</span>}
                actionIcon= { <MyIcon classes = {classes} content = {content} /> }
            />
    </GridListTile>
)

const MyGridList = ({classes, children, content }) => (
    <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        <ListSubheader component="div">Results</ListSubheader>
            </GridListTile>
              {children}
          </GridList>
)

class ImageGridList extends React.Component {

  render(){
    const { classes } = this.props;
    const { contentList } = this.props;

    return (
        <div className={classes.root}>
        <MyGridList classes = {classes}>
            {contentList.map(content => (
                <MyListTile key = {content.id} classes = {classes} content = {content} />
            ))}
        </MyGridList>
        </div>
      );
  }
}

const gridList = withStyles(styles)(ImageGridList);
const connectedList = connect(mapStateToProps)(gridList);

export default connectedList;