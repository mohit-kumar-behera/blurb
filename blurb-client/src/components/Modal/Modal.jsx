import React from 'react';
import ReactDOM from 'react-dom';

// import stylesheets
import './Modal.css';

class Modal extends React.Component {
  modalRoot = document.getElementById('modal-root');

  constructor(props) {
    super(props);
    this.messageModalEl = document.createElement('div');
    this.messageModalEl.className = 'modal main-modal';
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.messageModalEl);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.messageModalEl);
  }

  render() {
    return ReactDOM.createPortal(
      <>
        <div className="modal-content">
          <div className="modal-head">
            <h2>{this.props.title}</h2>
          </div>
          <div className="modal-body">{this.props.content}</div>
          <div className="modal-footer">{this.props.actions}</div>
        </div>
      </>,
      this.messageModalEl
    );
  }
}

export default Modal;
