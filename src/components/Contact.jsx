import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};
const Contact = ({ dark }) => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { firstName, lastName, email, message } = errors;

  return (
    <div
      className={`flex-col flex justify-center items-center ${
        dark ? "bg-zinc-800" : "bg-zinc-200"
      } py-3`}
    >
      <h1
        className={`${
          dark ? "text-gray-400" : "text-black"
        } underline text-4xl mb-3`}
      >
        Contact Me
      </h1>
      <form
        name="form"
        className="md:w-[35rem] flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <input
            type="text"
            autoComplete="off"
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
          />
          {firstName && touched.firstName ? (
            <p className="text-red-700 text-sm">{firstName}</p>
          ) : null}
        </div>
        <div className="w-full">
          <input
            type="text"
            autoComplete="off"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
          />
          {lastName && touched.lastName ? (
            <p className="text-red-700 text-sm">{lastName}</p>
          ) : null}
        </div>
        <div className="w-full">
          <input
            type="email"
            autoComplete="off"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {email && touched.email ? (
            <p className="text-red-700 text-sm">{email}</p>
          ) : null}
        </div>
        <div className="w-full">
          <textarea
            className="w-full m-2 text-zinc-500 text-lg px-4 outline-none py-2 bg bg-transparent border-b-2 border-zinc-500 h-[8rem] resize-none"
            placeholder="Type your message here"
            value={values.message}
            onChange={handleChange}
            name="message"
          ></textarea>
          {message && touched.message ? (
            <p className="text-red-700 text-sm">{message}</p>
          ) : null}
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full m-2 text-xl text-zinc-800 bg-stone-400 border outline-none border-zinc-400 font-semibold rounded py-2 active:scale-95"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
