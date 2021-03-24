class Parent extends Component {
  render() {
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}