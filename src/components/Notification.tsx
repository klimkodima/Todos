import React from 'react';
import { connect } from 'react-redux';

const Notification = (props: { notification: string }) => {

  if ( props.notification === null) {
    return null;
  }
  return (
    <div className="success">
      { props.notification}
    </div>
  )
}

const mapStateToProps = (state: { notification: string }) => {
  return {
    notification: state.notification,
  }
};

export default connect(mapStateToProps)(Notification);
