
import React from "react";

interface LifeCycleState {
    favoriteColor?: string;
    isShow?:boolean;
}

interface LifeCycleProps{

    myColor?:string;
}

export class LifeCycle extends React.Component<LifeCycleProps, LifeCycleState> {
    // Mounting
    constructor(props: LifeCycleProps) {
        super(props);
        console.log("1: constructor");
        this.state = { favoriteColor: "red", isShow: true };
    }

    static getDerivedStateFromProps(nextProp:LifeCycleProps, prevState: LifeCycleState) {
        console.log("2.getDerivedStateFromProps");
        console.log(`props: ${JSON.stringify(nextProp)} - state: ${JSON.stringify(prevState)}`);
        
        if(nextProp.myColor !== prevState.favoriteColor) {
            // return { favoriteColor: nextProp.myColor};
        }
        return null;
    }

    unmounting = () => {
        this.setState({ isShow: false });
    }

    render() {
        console.log("3. render");
        return (
            <>
                <h1 style={{color: this.state.favoriteColor}}>Life Cycle Method</h1>
                <h3 id="element1">...</h3>
                <h3 id="element2">...</h3>
                {`My favorite color: ${this.state.favoriteColor}`}
                <hr />
                {/* conditional rendering */}
                {this.state.isShow ? <Unmount/> : null } 
                <button type="button" onClick={this.unmounting}>
                    unmount component
                </button>
            </>
        )
    }

    componentDidMount(): void {
        console.log("4. componentDidMount");
        setTimeout(() => {
            this.setState({ favoriteColor: "purple"})
        }, 3000)
    }

    // updating
    shouldComponentUpdate(
        nextProps: Readonly<LifeCycleProps>, 
        nextState: Readonly<LifeCycleState>, 
        nextContext: any
    ): boolean {
            console.log("2. shouldComponentUpdate");
            console.log("nextProps", nextProps);
            console.log("nextState", nextState);
            console.log("nextContext", nextContext);
            return true;
    } 
    
    getSnapshotBeforeUpdate(
        prevProps: Readonly<LifeCycleProps>, 
        prevState: Readonly<LifeCycleState>) 
        {
        console.log("4. getSnapshotBeforeUpdate");
        const h3 = document.getElementById("element1")!;

        return ( h3.innerHTML = `before the update, the favorite color state was
        ${JSON.stringify(prevState)} and props was ${JSON.stringify(prevProps)}`)
    }

    componentDidUpdate(
        // prevProps: Readonly<LifeCycleProps>, 
        // prevState: Readonly<LifeCycleState>, 
        // snapshot?: any
        ): void {
        console.log("5. componentDidUpdate");
        const h3 = document.getElementById("element2")!;
        h3.innerHTML = `the update favorite color is ${this.state.favoriteColor}`
    }
}

class Unmount extends React.Component {
    componentWillUnmount(): void {
        console.log("componentWillUnmount");
        alert("the component to be unmounted")
    }

    render() {
        return <h2>Waiting Unmount</h2>
    }
}
 
