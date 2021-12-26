import React from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

// import components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MessageModal from '../Modal/MessageModal';

// import actions
import { addMessage } from '../../redux/actions/messageAction';

// import stylesheets
import './PageLayout.css';

class PageLayout extends React.Component {
  handleAddMessage = () => {
    const newMessage = {
      id: Math.floor(Math.random() * 1456),
      content: `The ID for the Message is ${Math.floor(Math.random() * 1456)}`,
    };

    this.props.addMessage(newMessage);
  };

  render() {
    return (
      <section id="page">
        <Navbar />

        <button onClick={this.handleAddMessage}>ADD MESSAGE</button>

        <div className="page-container">
          <Outlet />
        </div>
        <Footer />
        {this.props.hasMessage && <MessageModal />}
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { hasMessage } = state.message;
  return {
    hasMessage,
  };
};

export default connect(mapStateToProps, { addMessage })(PageLayout);
// export default connect(mapStateToProps)(PageLayout);
