import React, { useState } from "react";

const ReactBasicForm = () => {
  const [formState, setFormState] = useState({
    emailAddress: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, emailAddress: event.target.value }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      password: event.target.value,
      errorPassword: "",
    }));
    if (formState.password.length < 8 || formState.password.length > 16) {
      setFormState((prev) => ({
        ...prev,
        errorPassword: "password must be between 8 and 16 characters",
      }));
    }
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      confirmPassword: event.target.value,
    }));
  };

  const handleShowPassword = () => {
    setFormState((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      return;
    }
    // do something with the form
  };

  const validate = () => {
    let error = false;
    // validate email
    if (!formState.emailAddress) {
      setFormState((prev) => ({ ...prev, errorEmail: "Email is required." }));
      error = true;
    } else {
      setFormState((prev) => ({ ...prev, errorEmail: "" }));
      error = false;
    }

    // validate email pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.emailAddress)) {
      setFormState((prev) => ({ ...prev, errorEmail: "Email is not valid" }));
      error = true;
    } else {
      setFormState((prev) => ({ ...prev, errorEmail: "" }));
      error = false;
    }

    // validate password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    if (!formState.password || !passwordRegex.test(formState.password)) {
      setFormState((prev) => ({
        ...prev,
        errorPassword:
          "password must be contained at least one digit, one lowercase and one uppercase letter, and be between 8 and 16 characters long!",
      }));
      error = true;
    } else {
      setFormState((prev) => ({ ...prev, errorPassword: "" }));
      error = false;
    }

    // validate password
    if (!formState.password) {
      setFormState((prev) => ({
        ...prev,
        errorPassword: "",
      }));

      error = false;
    }

    if (
      !formState.confirmPassword ||
      formState.confirmPassword !== formState.password
    ) {
      setFormState((prev) => ({
        ...prev,
        errorConfirmPassword: "Confirm password must equal password.",
      }));
      error = true;
    } else {
      setFormState((prev) => ({
        ...prev,
        errorConfirmPassword: "",
      }));
      error = false;
    }
    return error;
  };

  return (
    <div
      style={{
        backgroundColor: "mediumseagreen",
        margin: "20px 0 20px",
        padding: "15px",
      }}
      className="container"
    >
      <h2>Registration new user</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/* Email address */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email-address"
            className={`form-control ${
              formState.errorEmail ? "is-invalid" : ""
            }`}
            placeholder="enter email"
            value={formState.emailAddress}
            onChange={handleEmailChange}
          />
          {formState.errorEmail && (
            <div className="text-danger">{formState.errorEmail}</div>
          )}
        </div>
        {/* End Email address */}

        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={`${formState.showPassword ? "text" : "password"}`}
            id="password"
            className={`form-control ${
              formState.errorPassword ? "is-invalid" : ""
            }`}
            placeholder="enter Password"
            value={formState.password}
            onChange={handlePasswordChange}
          />
          {formState.errorPassword && (
            <div className="text-danger"> {formState.errorPassword}</div>
          )}
        </div>
        {/* End password */}

        {/* Confirm password */}
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type={`${formState.showPassword ? "text" : "password"}`}
            id="confirm-password"
            className={`form-control ${
              formState.errorPassword ? "is-invalid" : ""
            }`}
            placeholder="enter Password"
            value={formState.confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {formState.errorConfirmPassword && (
            <div className="text-danger"> {formState.errorConfirmPassword}</div>
          )}
        </div>
        {/* End Confirm password */}

        {/* Toggle show/hide password */}
        <div className="form-group">
          <input
            type="checkbox"
            id="show-password"
            className="show-password"
            checked={formState.showPassword}
            onChange={handleShowPassword}
          />
        </div>
        <label htmlFor="show-password">Check to display password</label>
        {/* End Toggle show/hide password */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactBasicForm;
