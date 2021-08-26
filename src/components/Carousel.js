import React, { Component } from 'react';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dot from './Dot';
import Modal from 'react-modal';

import '../css/Modal.css';
import '../css/Carousel.css';

Modal.setAppElement('#root');

class Carousel extends Component {
  state = { currentSlide: 0, modalOpen: false };

  constructor(props) {
    super(props);
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') {
        this.changeSlide(this.state.currentSlide - 1);
      } else if (e.key === 'ArrowRight') {
        this.changeSlide(this.state.currentSlide + 1);
      }
    });
    this.startInterval();
  }

  startInterval() {
    if (this.props.interval) {
      this.interval = setInterval(() => {
        this.changeSlide(this.state.currentSlide + 1);
      }, this.props.interval);
    }
  }

  changeSlide(position) {
    if (position === this.props.children.length) {
      this.setState({ currentSlide: 0 });
    } else if (position < 0) {
      this.setState({ currentSlide: this.props.children.length - 1 });
    } else {
      this.setState({ currentSlide: position });
    }
  }

  handleDotClick(position) {
    this.setState({ currentSlide: position });
  }

  handleCloseModal() {
    this.setState({ modalOpen: false });
    this.startInterval();
  }

  handleOpenModal() {
    this.setState({ modalOpen: true });
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='carousel'>
        <Modal
          isOpen={this.state.modalOpen}
          shouldCloseOnOverlayClick={true}
          className='modal'
          overlayClassName='overlay'
          onRequestClose={this.handleCloseModal.bind(this)}>
          {this.props.children[this.state.currentSlide]}
        </Modal>
        <div className='container'>
          <FontAwesomeIcon
            className='arrow'
            onClick={() => this.changeSlide(this.state.currentSlide - 1)}
            icon={faChevronLeft}
          />
          <div
            className='image-container'
            onClick={this.handleOpenModal.bind(this)}
            style={{ height: this.props.height, width: this.props.width }}>
            {this.props.children[this.state.currentSlide]}
          </div>
          <FontAwesomeIcon
            className='arrow'
            onClick={() => this.changeSlide(this.state.currentSlide + 1)}
            icon={faChevronRight}
          />
        </div>
        <div className='dots'>
          {this.props.children.map((_, i) => {
            return (
              <Dot
                key={i}
                number={i}
                active={i === this.state.currentSlide}
                onDotClick={this.handleDotClick.bind(this)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
