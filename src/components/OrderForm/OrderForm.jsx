import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Element } from "react-scroll";
import styles from "./OrderForm.module.scss";

const OrderForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    quantity: Yup.number().required("Quantity is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  return (
    <Element name="order">
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              resetForm();
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <h3>Order now</h3>
              <div>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className={styles.input}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className={styles.input}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.input}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <Field
                  type="number"
                  name="number"
                  placeholder="Quantity"
                  className={styles.input}
                />
                <ErrorMessage
                  name="quantity"
                  component="div"
                  className="error"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submit_btn}
              >
                Order
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Element>
  );
};

export default OrderForm;
