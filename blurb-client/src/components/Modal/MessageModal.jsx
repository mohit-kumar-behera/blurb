import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

// import components
import MessageModalHead from './MessageContent/MessageModalHead';
import MessageModalBody from './MessageContent/MessageModalBody';

// import actions
import { removeMessage } from '../../redux/actions/messageAction';

// import stylesheets
import './Modal.css';

class MessageModal extends React.Component {
  modalRoot = document.getElementById('modal-root');
  modalTimeout = 10;

  constructor(props) {
    super(props);
    this.messageModalEl = document.createElement('div');
    this.messageModalEl.className = 'message-modal';
  }

  addTimer = sec =>
    setTimeout(() => {
      this.props.removeMessage();
    }, sec * 1000);

  componentDidMount() {
    this.modalRoot.appendChild(this.messageModalEl);
    this.timer = this.addTimer(this.modalTimeout);
  }

  componentDidUpdate() {
    clearTimeout(this.timer);
    this.timer = this.addTimer(this.modalTimeout);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.messageModalEl);
  }

  render() {
    return ReactDOM.createPortal(
      <>
        <MessageModalHead />
        <MessageModalBody messages={this.props.messages} />
      </>,
      this.messageModalEl
    );
  }
}

const mapStateToProps = state => {
  const { hasMessage, messages } = state.message;
  return {
    hasMessage,
    messages,
  };
};

export default connect(mapStateToProps, { removeMessage })(MessageModal);
