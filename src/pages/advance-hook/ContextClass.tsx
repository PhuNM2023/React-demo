import { Component, ReactNode, createContext } from "react";

// create a new context object with default values
interface MyContextProps {
  value: string;
  updateValue: (newValue: string) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined)

// create a context provider
class MyContextProvider extends Component<{ children: ReactNode }, MyContextProps
> {
  updateValue = (newValue: string) => {
    this.setState({ value: newValue });
  }

  state = {
    value: "Default value",
    updateValue: this.updateValue,
  };

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

// A react class component utilizes context through consumer
class MyClassComponent extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          if (!context) {
            throw new Error("MyClassComponent must be rendered within a MyContextProvider")
          }

          return (
            <div>
              <p>Value from context: <strong>{context.value}</strong></p>
              <button
                className="btn btn-primary"
                onClick={() => context.updateValue("New Value")}
              >
                Update value
              </button>
            </div>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

// Using myContextProvider to wrap MyClassComponent

const ReactContextClass = () => {
  return (
    <MyContextProvider>
      <MyClassComponent />
    </MyContextProvider>
  )
}

export default ReactContextClass
