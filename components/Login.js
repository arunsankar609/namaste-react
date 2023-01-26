import logimg from "../assets/images/login.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="Login_Main">
      <div className="image-d">
        <img className="log_img" src={logimg} />
      </div>
      <div className="login_input">
        <div className="form_div" >
        <h2>Log into your account</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-main">
                <div>
                  
                  <Field className="field" type="email" name="email" placeHolder="Email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <Field className="field" type="password" name="password" placeHolder="Enter your Password" />
                  <ErrorMessage name="password" component="div" />
                </div>
              <Link to='/home'>  <button className="login_btn1" type="submit" disabled={isSubmitting}>
                  Submit
                </button></Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      </div>
    </div>
  );
};
export default Login;
