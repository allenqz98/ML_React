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
      <h1>FINA4390 Final Project Model Prediction</h1>
      
      <label>Lower Range of your Fico Score</label>
      <input placeholder="Fico..." {...register("val1", {pattern: /^\d+$/})} />
      <div style={{ color: "red" }}>{errors.val1 && "Must be a number"}</div>

      <label>Higher Range of your Fico Score</label>
      <input placeholder="Fico..." {...register("val2", {pattern: /^\d+$/})} />
      <div style={{ color: "red" }}> 
        {errors.val2 && "Must be a number"}
      </div>

      <label>How much have you paid yet?</label>
      <input placeholder="Amount..." {...register("val3", {pattern: /^\d+$/})} />
      <div style={{ color: "red" }}> 
        {errors.val3 && "Must be a number"}
      </div>


      <input type="submit" />
    </form>
    { open? <BaseModal /> : <span/>}
    </div>
  );
}
