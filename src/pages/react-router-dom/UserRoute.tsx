import React, {  useState } from 'react'
import { Link, Prompt, Route, Switch } from 'react-router-dom'
import UserDetail from './UserDetail';
import Topics from './Topics';

const UserRoute = () => {

    const [text, setText] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }

    

  return (
    <div>
        <ul>
            <li>
                <Link to="/users?userId=1&name=User1">User 1 Details</Link>
            </li>
            <li>
                <Link to="/users?userId=2&name=User2">User 2 Details</Link>
            </li>
            <li>
                <Link to="/users?userId=3&name=User3">User 3 Details</Link>
            </li>
        </ul>
        {/* <Prompt when={text.length > 0} message={"Do you want to go"}>

        </Prompt> */}
        <textarea onChange={handleChange}></textarea>
        <Topics></Topics>
        {/* User detail when click URL */}
        {/* <Switch>
            <Route path={"/users"} component={UserDetail}></Route>
        </Switch> */}
    </div>
  )
}

export default UserRoute