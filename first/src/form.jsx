import React from "react";
import { useForm } from "react-hook-form";

const SimpleForm = () => {
  // Initialize the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define what happens when the form is submitted
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2)); // Show the form data in an alert box
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name", { required: "Name is required" })} // Registering the input
        />
        {errors.name && <p>{errors.name.message}</p>}{" "}
        {/* Display error message */}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          {...register("lastName", { required: "Last Name is required" })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
