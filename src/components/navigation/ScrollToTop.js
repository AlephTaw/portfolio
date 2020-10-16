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
      <div onClick={() => this.scrollToTop()} style={{"color": "blue"}}>Top</div>
    );
  }
}
