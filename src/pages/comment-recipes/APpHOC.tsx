import { ComponentType } from "react";

interface WithAdditionalProp {
  additionalProp: string;
}

// define a simple HOC that add a prop to the wrapped component
const WithAdditionalProp =
  <T extends WithAdditionalProp>(WrappedComponent: ComponentType<T>) =>
  (props: Omit<T, "additionalProp">) =>
    (
      <WrappedComponent
        {...(props as T)}
        additionalProp="I'm an additional prop"
      />
    );

interface WrappedComponentProps {
  message: string;
}

const MyComponent: React.FC<WrappedComponentProps & WithAdditionalProp> = ({
  message,
  additionalProp,
}) => {
  return (
    <div>
      <p>{message}</p>
      <p>{additionalProp}</p>
    </div>
  );
};

// Use the HOC to enhance the component
const EnhancedComponent = WithAdditionalProp(MyComponent);

//  UseAge of the enhanced component
const AppHOC = () => {
  return <EnhancedComponent message="Hello from the wrapped component" />;
};

export default AppHOC;
