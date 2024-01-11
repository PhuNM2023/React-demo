import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchUserAction } from "../actions/user.action";
import { useSelector } from "react-redux";
import { RootState } from "../types/model";

const UserProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserAction())
  }, []);

  const userState = useSelector((state: RootState) => state.user)
  console.log(userState);
  return (
    <Fragment>
      <h2>User profile</h2>
    </Fragment>
  )

}

export default UserProfile


