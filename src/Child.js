class Child extends Component {
  render() {
    return (
      <div onClick={this.props.handleColorChange}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
} 