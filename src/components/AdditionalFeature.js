import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';

const AdditionalFeature = props => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  // console.log('Additional Feature State', state);
}

export default connect(mapStateToProps, { addItem })(AdditionalFeature);
