
import React from "react"

interface DropdownProps {
  options: string[];
  title?: string;
  fn?: () => void;
  children?: string

}

interface StateItem {
  isShow: false
}

class Dropdown extends React.Component<DropdownProps> {
  state =  {
    isShow: false,
  }

  constructor(props: DropdownProps) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({isShow: !this.state.isShow})
  // }
  handleClick = () => {
    // this.setState({isShow: !this.state.isShow}) // old
    this.setState((prevState: StateItem) => ({isShow: !prevState.isShow}))
  }

  mouseEnterHandler = (e: any) => {
    console.log(e.target.textContent);
  }

  render() {
    return (
      <div className="dropdown" onMouseEnter={this.mouseEnterHandler}>
        <button
          className="btn btn-secondary dropdown-toggle"
          onClick={this.handleClick}>
          {this.props.title || this.props.children || "This is dropdown"}
        </button>
        <div className={`dropdown-menu ${this.state.isShow ? "show" : ""}`}>
          {this.props.options.map((opt: string, index: number) => (
            <a key={index} className="dropdown-item" href="#" 
            onClick={() => alert(`You selected: ${opt}`)}>
              {opt}
            </a>
          ))}
        </div>
      </div>
    )
  }
} 

export default Dropdown;