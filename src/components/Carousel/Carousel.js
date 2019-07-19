import React from "react";
import "./Carousel.scss";

export class Carousel extends React.Component {
  state = {
    currentViewIndex: 0
  };

  constructHandle(index) {
    const { currentViewIndex } = this.state;
    return (
      <div
        key={index}
        onClick={() => currentViewIndex !== index && this.toggleView(index)}
        className={`carousel--handle-container__handle${
          currentViewIndex === index ? " active" : ""
        }`}
      />
    );
  }

  renderViewHandles(count) {
    const handles = [];
    let index = 0;
    while (index < count) {
      handles.push(this.constructHandle(index));
      index++;
    }
    return handles;
  }

  toggleView(index) {
    this.setState({ currentViewIndex: index });
  }

  render() {
    const viewCount = React.Children.toArray(this.props.children).length;
    const { currentViewIndex } = this.state;
    return (
      <div className="carousel--container">
        <div className="carousel--container__content">
          {React.Children.map(this.props.children, (child, index) => {
            if (currentViewIndex === index) {
              return child;
            }
          })}
        </div>
        <div className="carousel--handle-container">
          {this.renderViewHandles(viewCount)}
        </div>
      </div>
    );
  }
}
