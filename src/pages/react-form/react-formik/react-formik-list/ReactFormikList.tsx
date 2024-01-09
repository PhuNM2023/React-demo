import {
  FieldArray,
  Formik,
  FormikHelpers,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import React from "react";

interface Friend {
  name: string;
  email: string;
}

interface InviteFriendsForm {
  friends: Friend[];
}

interface FriendErrors {
  name?: string;
  email?: string;
}

interface Errors {
  friends?: FriendErrors[]
}


const initialValues: InviteFriendsForm = {
  friends: [
    {
      name: "",
      email: "",
    },
  ],
};

const ReactFormikList = () => {
  const handleSubmit = (
    values: InviteFriendsForm,
    { resetForm }: FormikHelpers<InviteFriendsForm>
  ) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  const validate = (values:InviteFriendsForm) => {
    const errors: Errors = {};
    values.friends.forEach((friend, index) => {
      if(!friend.name) {
        errors.friends = errors.friends || [];
        errors.friends[index] = errors.friends[index] || {};
        errors.friends[index].name = "name is required";
      }
      if(!friend.email) {
        errors.friends = errors.friends || [];
        errors.friends[index] = errors.friends[index] || {};
        errors.friends[index].email = "email is required";
      } else if(isValidEmail(friend.email)) {
        errors.friends = errors.friends || [];
        errors.friends[index] = errors.friends[index] || {};
        errors.friends[index].email = "invalid email format!";
      }
    
    })
    return errors
  };

  const isValidEmail = (email: string) => {
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return true
    }
    return false
  }

  return (
    <div>
      <h2>Invite friends</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
        {({ values }) => (
          <Form>
            <FieldArray name="friends">
              {({  remove, push }) => (
                <div>
                  {values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
                      <div className="row" key={index}>
                        <div className="col">
                          {/* input name */}
                          {/* <label htmlFor="text">Name: </label>
                        <Field type='text' id='text' name='text'/>
                        <ErrorMessage className='text-danger' name='text' component='div'/> */}
                          <label htmlFor={`friends.${index}.name`}>
                            Name:{" "}
                          </label>
                          <Field
                            name={`friends.${index}.name`}
                            placeholder="Enter friend name"
                            type="text"
                          />
                          <ErrorMessage
                            name={`friends.${index}.name`}
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        <div className="col">
                          {/* input email */}
                          {/* <label htmlFor="email">Email: </label>
                        <Field type='text' name='email'/>
                        <ErrorMessage className='text-danger' name='email' component='div'/> */}
                          <label htmlFor={`friends.${index}.email`}>
                            Email:{" "}
                          </label>
                          <Field
                            name={`friends.${index}.email`}
                            placeholder="Enter friend email"
                            type="text"
                          />
                          <ErrorMessage
                            name={`friends.${index}.email`}
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        {/* button remove friend item */}
                        <div className="row">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => remove(index)}
                          >
                            remove
                          </button>
                        </div>
                      </div>
                    ))}

                  {/* button add friend item */}
                  <div >
                    <button
                      type="button"
                      className="btn btn-primary "
                      onClick={() => push({ name: "", email: "" })}
                    >
                      add friend
                    </button>
                  </div>
                </div>
              )}
            </FieldArray>
            <button type="submit" className="btn btn-success">Invite</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReactFormikList;
