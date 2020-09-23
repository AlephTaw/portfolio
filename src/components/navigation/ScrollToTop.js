import React, { Component } from "react";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  scrollToTop(e) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  render() {
    return (
            <a onClick={() => this.scrollToTop()} href=''>Top</a>
    );
  }
}
