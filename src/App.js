import React, { Component } from 'react';

import Carousel from './components/Carousel';
import Image from './components/Image';

class App extends Component {
  render() {
    return (
      <div>
        <Carousel height={340} width={600} interval={5000}>
          <Image src='https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
          <Image src='https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
          <Image src='https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
          <Image src='https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
        </Carousel>
      </div>
    );
  }
}

export default App;
