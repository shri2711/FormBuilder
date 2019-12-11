
/*jshint esversion: 6 */
/* jshint ignore:start */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div
        style={{
          border: '1px solid #008f68',
          padding: '20px 20px',
        }}
      >
        <div className = "Subtitle" onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <div  style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div className="section_form">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default ProjectSection;

/* jshint ignore:end */