import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import  * as BeerActions from './actions.js';

export class Beer extends Component {
  componentDidMount() {
    this.props.loadBeer();
  }
  render() {
    const beers = this.props.beers;
    return (
      <ul>
        {beers.map((beer, index) => (
          <li key={index}>
            {beer.name}
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    beers: state.beers
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(BeerActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Beer)