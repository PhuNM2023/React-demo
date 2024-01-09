import React, { Component } from 'react'

export default class ErrorBoundaryClass extends 
Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error: Error) {
        console.log("getDerivedError", error);
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);
    }

  render() {
    if(this.state.hasError) {
        return <h3>Something went wrong</h3>
    }

    return this.props.children;
  }
}
