import React from 'react';
import "./styles.css";
import $ from 'jquery';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'

import BaseModal from './BaseModal';


export default function App() {

  const open = useSelector((state) => state.open)
  // const result = useSelector((state) => state.result)

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();


  const onSubmit = (data) => {
    $.get(`http://mingyang.pythonanywhere.com/model?last_fico_range_low=${data.val1}&last_fico_range_high=${data.val2}&total_rec_prncp=${data.val3}`, 
    res => {
      dispatch({type: 'toggleModal'})
      dispatch({type: 'updateResult', payload:res})
      reset()
    }
    );
  };


  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>xxx Prediction</h1>
      
      <label>Input</label>
      <input placeholder="Input" {...register("val1")} />

      <label>Input</label>
      <input placeholder="Input" {...register("val2")} />

      <label>Input</label>
      <input
        placeholder="Input"
        type="text"
        {...register("val3")}
      />

      <div style={{ color: "red" }}>
        {Object.keys(errors).length > 0 &&
          "There are errors, check your console."}
      </div>
      <input type="submit" />
    </form>
    { open? <BaseModal /> : <span/>}
    </div>
  );
}
