import { ErrorMessage, Field, Form, FormikProps, withFormik } from "formik";
import "../debugging/UserCRUD.css";

interface FormValues {
  name: string;
  email: string;
}

const LoginForm = (props: FormikProps<FormValues>) => {
  const { values, handleSubmit, handleChange, handleBlur } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <Field
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage name="name" component={"div"} className="text-danger" />
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <Field
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage name="email" component={"div"} className="text-danger" />
      </div>

      <button type="submit">Submit</button>
    </Form>
  );
};

// wrap form component with withFormik HOC
const EnhancedForm = withFormik<{}, FormValues>({
  // Define the initial from values
  mapPropsToValues: () => ({ name: "", email: "" }),
  validate: (values) => {
    const errors: { [key: string]: string } = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(values.email)) {
      errors.email = "invalid email address";
    }

    return errors;
  },

  // difine the form submission function
  handleSubmit: (values, { setSubmitting }) => {
    console.log("Submitted values: ", values);
    setSubmitting(false);
  },
})(LoginForm);

// Main component
const ReactWithFormik = () => {
  return (
    <div>
      <h2>React with withFormik</h2>
      <EnhancedForm />
    </div>
  );
};

export default ReactWithFormik;
