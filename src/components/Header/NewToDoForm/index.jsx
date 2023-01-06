import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";

function NewToDoForm() {
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);

        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default NewToDoForm;
