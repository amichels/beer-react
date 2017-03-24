import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import  * as BeerActions from './actions.js';

export class Beer extends Component {
  componentDidMount() {
    this.props.loadBeer();
  }
  render() {
    const {images, selectedImage, selectImage} = this.props;
    return (
        <div>test </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    beer: state.beer
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(BeerActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Beer)