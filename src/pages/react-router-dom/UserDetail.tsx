import React, { Fragment } from 'react'
import { RouteChildrenProps } from 'react-router-dom'

const UserDetail = (props: RouteChildrenProps) => {
    const queryParam = new URLSearchParams(props.location.search);
    console.log(queryParam);
    return (
        <Fragment>
            <div>UserID: {queryParam.get("userId")}</div>
            <div>UserName: {queryParam.get("name")}</div>
        </Fragment>
    )
}

export default UserDetail