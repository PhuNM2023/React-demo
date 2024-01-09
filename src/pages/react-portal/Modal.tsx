import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { styled } from 'styled-components'

export default class Modal extends Component<any> {
    renderDialog() {
        if(this.props.open) {
            return (
                <Background>
                    <Dialog>
                        {this.props.children}
                    </Dialog>
                </Background>
            )
        }
        return <></>
    }
  render() {
    return ReactDOM.createPortal(this.renderDialog(), document.body)
  }
}

const Background = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color:rgba(0,0,0,0.2);
display: flex;
justify-content: center;
align-items: center;
top: 0;
bottom: 0;
left: 0;
right: 0;
`;

const Dialog = styled.div`
background-color: white;
position: relative;
height: 50%;
width: 50%;
padding: 30px;
display: flex;
flex-direction: column;
overflow-t: auto;
`
