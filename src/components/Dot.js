import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/Dot.css';

const Dot = props => {
  return (
    <div>
      <FontAwesomeIcon
        style={{ marginRight: 10 }}
        className={props.active ? 'active' : 'not-active'}
        icon={faCircle}
        onClick={() => {
          props.onDotClick(props.number);
        }}
      />
    </div>
  );
};

export default Dot;
