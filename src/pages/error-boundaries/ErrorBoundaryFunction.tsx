import React from 'react'

const ErrorBoundaryFunction = ({error,
    resetErrorBoundary}: any )=> {
  return (
    <div>
        <p>Something went wrong with your component:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
    </div>

  )
}

export default ErrorBoundaryFunction