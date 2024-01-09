import {
  ErrorMessage,
  Field,
  FieldArray,
  FieldArrayRenderProps,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import styles from "./ReactFormik.module.css";
import React from "react";

interface UserForm {
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  address: string;
  gender: string;
  addressList: string[]
}

const ReactFormik = () => {
  const validate = (values: UserForm) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    const errors: any = {};

    if (!values.email) {
      errors.email = "email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "invalid email address";
    }

    if (!values.password) {
      errors.password = "password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "password must be contained at least one digit, one lowercase and one uppercase letter, and be between 8 and 16 characters long!";
    }

    if (!values.confirmPassword || values.confirmPassword !== values.password) {
      errors.confirmPassword = "confirmPassword must match the password";
    }

    if (!values.address) {
      errors.address = "address is required";
    }

    // validate each element in the addressList array
    errors.addressList = []
    values.addressList.map((address, index) => {
      if(!address) {
        errors.addressList.push(`Address ${index + 2} is required`)
      }
      return null
    });

    if(errors.addressList && errors.addressList.length <= 0) {
      delete errors.addressList;
    }


    return errors;
  };

  const handleSubmit = (
    values: UserForm,
    formikHelper: FormikHelpers<UserForm>
  ) => {
    console.log(values, formikHelper);
    formikHelper.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        address: "",
        addressList: [] as string[],
        gender: "",
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {(formikProps: FormikProps<UserForm>) => (
        <Form>
          {/* Email address */}
          <div className="form-group">
            <label htmlFor="email" className={styles.label}>
              Email Address
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
              />
            </label>
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password" className={styles.label}>
              Password
              <Field
                type={formikProps.values.showPassword ? "text" : "password"}
                name="password"
                className="form-control"
                placeholder="Enter password"
              />
            </label>
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirm-password" className={styles.label}>
              Confirm Password
              <Field
                type={formikProps.values.showPassword ? "text" : "password"}
                name="confirmPassword"
                className="form-control"
                placeholder="Enter confirm password"
              />
            </label>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-danger"
            />
          </div>

          {/* Show Password */}
          <div className="form-group">
            <label htmlFor="showPassword" className={styles.label}>
              <Field
                type="checkbox"
                name="showPassword"
                className={styles.checkbox}
              />{" "}
              Check to display password
            </label>
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address" className={styles.label}>
              address
              <Field
                type="text"
                name="address"
                className="form-control"
                placeholder="Enter address"
              />
            </label>
            <ErrorMessage
              name="address"
              component="div"
              className="text-danger"
            />
          </div>

          {/* Address List - fieldArray */}
          <FieldArray name="addressList">
            {(arrayHelper: FieldArrayRenderProps) => (
              <div className="form-group">
                <div>
                  <button 
                  className="btn btn-secondary"
                  onClick={() => arrayHelper.push("")}>
                    Add address
                  </button>
                </div>
                {formikProps.values.addressList.map((address: string, index: number) => (
                  <div key={index}>
                    <label className={styles.label}>
                      Address {index + 2}
                      <div className="d-flex align-items-center">
                        <Field
                          type="text"
                          name={`addressList[${index}]`}
                          className="form-control"
                        />
                        <button
                          className="btn btn-danger"
                          onClick={() => arrayHelper.remove(index)}
                        >
                          -
                        </button>
                      </div>
                    </label>
                    <ErrorMessage
                      name={`addressList.${index}`}
                      component="div"
                      className="text-danger"
                    />
                  </div>
                ))}
              </div>
            )}
          </FieldArray>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender">
              Gender
              <Field as="select" name="gender" className="form-control">
                <option value="">Please select gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Field>
            </label>
          </div>

          {/* Submit */}
          <div className="form-group">
            <button
              type="submit"
              className={`btn btn-primary ${styles.button}`}
              disabled={!formikProps.isValid}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReactFormik;
