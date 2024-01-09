import React, { Fragment } from 'react'
import { withRouter } from './utils/withRouter';

const Topics = (props: any) => {
    const queryParams = new URLSearchParams(props?.
        router.location?.search);

    console.log(queryParams);
    return (
        <Fragment>
            <h3>Topics of user with code: {queryParams.get("userId")}</h3>
            <h3>Topics of user with first name {queryParams.get("name")}</h3>
        </Fragment>
    )
}

export default withRouter(Topics)