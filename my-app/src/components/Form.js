import React from "react";
import { useForm } from "react-hook-form";
import { createTicket } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

// import "./styles.css";

export default function Form() {
  const dispatch = useDispatch();
  const aa = (state) => state.tickets;
  const test = useSelector(aa);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formValue) => {
    const createTicketThunk = createTicket(formValue)
    dispatch(createTicketThunk);
    // createTicket(formValue);
  };
  console.log(test);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input
        {...register("title", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.title?.type === "required" && <p>This field is required</p>}
      {errors?.title?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.title?.type === "pattern" && <p>Alphabetical characters only</p>}
      <label>Body</label>
      <input {...register("body", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.body?.type === "pattern" && <p>Alphabetical characters only</p>}
      {/* <label>Age</label>a
      <input {...register("age", { min: 18, max: 99 })} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )} */}
      <button type="submit">Submit</button>
    </form>
  );
}
