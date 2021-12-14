import React from 'react';
import { Link } from 'react-router-dom';

// import stylesheets
import './StretchLink.css';

class StretchLink extends React.Component {
  stretchLinkRef = React.createRef(null);

  componentDidMount() {
    this.stretchLinkElem = this.stretchLinkRef.current;

    const parentDiv = this.stretchLinkElem.parentElement;
    const parentDivPadding =
      getComputedStyle(parentDiv).getPropertyValue('padding');
    parentDiv.style.padding = 0;

    this.stretchLinkElem.style.padding = parentDivPadding;
  }

  clickChildLink = ev => {
    if (ev.target.closest('a')) return;
    this.stretchLinkElem.querySelector('a').click();
  };

  render() {
    return (
      <div
        ref={this.stretchLinkRef}
        className="stretchlink"
        onClick={this.clickChildLink}
      >
        <Link to={this.props.to} className={this.props.className}>
          {this.props.children}
        </Link>
      </div>
    );
  }
}

export default StretchLink;
