import React, { Fragment } from 'react'
import * as UseRefTopics from "./useRefTopic"

const UseRef = () => {
  return (
    <Fragment>

      <h2>UseRef</h2>
      <UseRefTopics.ToggleFocusFunc/>
      {/* <UseRefTopics.ToggleFocusClass/> */}
      <hr />
      <UseRefTopics.CountReRender/>
      <hr />
      <UseRefTopics.TrackingStateChange/>
    </Fragment>
  )
}

export default UseRef