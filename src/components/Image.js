import React, { Component } from 'react';
import '../css/Image.css';

class Image extends Component {
  constructor(props) {
    super(props);
    this.img = React.createRef();
  }

  componentDidUpdate() {
    this.img.current.classList.remove('fade');
    setTimeout(() => {
      this.img.current.classList.add('fade');
    }, 0);
  }

  render() {
    return (
      <img className='image fade' ref={this.img} src={this.props.src} alt='' />
    );
  }
}

export default Image;
