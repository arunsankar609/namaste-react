import logimg from "../assets/images/login.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="p-5 ">
        <img className="w-[890px]   rounded-3xl" src={logimg} />
      </div>
      <div className="py-3 mt-5 text-center bg-slate-400 w-[400px] h-[590px] text-white rounded-3xl">
        <div className="mt-44" >
        <h2 className="text-2xl font-bold">Log into your account</h2>
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
              <div className="mt-6">
                <div>
                  
                  <Field className="w-72 h-10 rounded-md" type="email" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <Field className="w-72 h-10 rounded-md mt-2" type="password" name="password" placeholder="Enter your Password" />
                  <ErrorMessage name="password" component="div" />
                </div>
              <Link to='/home'>  <button className="bg-green-800 w-20 h-10 mt-3 rounded-2xl" type="submit" disabled={isSubmitting}>
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
