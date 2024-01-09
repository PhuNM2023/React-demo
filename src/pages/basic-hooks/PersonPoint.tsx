import React, { Fragment, useEffect } from 'react'

interface PersonPointInfo {
    point?: number;
    finalPoint: number;
    changePoint?: () => void;
    setPoint: (point: number) => void;

}
const PersonPoint = (props: PersonPointInfo) => {
    const { point, finalPoint, setPoint, changePoint } = props
    // way 4 - cleanup function
    useEffect(() => {
        // logic to run after each render
        console.log("childComponent re-render");
        // Cleanup function
        return () => {
            // Cleanup logic (clearInterval, remove event listeners, ...)
            console.log("componentWillUnmount");
        }
    }) // chạy liên tục
    // way 5 - cleanup function
    useEffect(() => {
        // logic to run after each render
        console.log("childComponent re-render");
        // Cleanup function
        return () => {
            // Cleanup logic (clearInterval, remove event listeners, ...)
            console.log("componentWillUnmount");
        }
    },[]) // chỉ chạy 1 lần

    return (
        <Fragment>
            <h3>
                Your point:
                <span style={{ color: "orange" }}>{point}</span>
            </h3>
            <h3>
                Your final point:
                <span style={{ color: "green" }}>{finalPoint}</span>
            </h3>
            <button className='btn btn-success mr-2' onClick={changePoint}>Change point</button>
            <button className='btn btn-warning' onClick={() => setPoint(1)}>Change point final</button>
            <hr />
        </Fragment>
    )
}

export default PersonPoint