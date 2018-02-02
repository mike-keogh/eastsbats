import React, { Component } from "react";
import { connect } from "react-redux";

import { getImages } from "../actions/images";

class Images extends Component {
  constructor(props) {
    super(props);
    this.renderImages = this.renderImages.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(getImages());
  }

  renderImages() {
    return this.props.images.map((image, i) => {
      console.log("image", image);
      return <img src={image.image} key={i} />;
    });
  }
  render() {
    return <div>{this.renderImages()}</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Images);
