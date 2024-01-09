import React, { Fragment } from 'react'

interface ActionButtonProps {
    className?: string;
    action?: () => void;
    title?: string;
    isShow?: boolean;
}

const ActionButton = ({className, action, title, isShow} 
    : ActionButtonProps) => {
  return (
    <Fragment>
        {isShow && (
            <button className={className} onClick={action}>
                {title}
            </button>
        )}
    </Fragment>
  )
}

export default ActionButton