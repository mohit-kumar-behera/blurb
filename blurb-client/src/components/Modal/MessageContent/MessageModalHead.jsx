import React from 'react';
import { connect } from 'react-redux';

// import actions
import { removeMessage } from '../../../redux/actions/messageAction';

const MessageModalHead = props => {
  return (
    <div className="modal-head">
      <button
        className="close close-modal"
        onClick={() => props.removeMessage()}
      >
        &times;
      </button>
    </div>
  );
};

export default connect(null, { removeMessage })(MessageModalHead);
