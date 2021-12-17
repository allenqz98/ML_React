import React from 'react';
import "./styles.css";
import $ from 'jquery';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'

import BaseModal from './BaseModal';


export default function App() {

  const open = useSelector((state) => state.open)

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();


  const onSubmit = (data) => {
    $.get(`https://mingyang.pythonanywhere.com/model?State=${data.val1}&Term=${data.val2}&CreateJob=${data.val3}&SBA_Appv=${data.val4}&RetainedJob=${data.val6}`, 
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
      <h1>Answer the following questions to predict whether the company will default its loans</h1>
      
      <label>What State is the company located at?</label>
      <input placeholder="State..." {...register("val1")} />

      <label>What is the loan term</label>
      <input placeholder="Term..." {...register("val2")} />
      <div style={{ color: "red" }}> 
        {errors.val2 && "Must be a number"}
      </div>

      <label>How many job did the company create?</label>
      <input placeholder="CreateJob..." {...register("val3")} />
      <div style={{ color: "red" }}> 
        {errors.val3 && "Must be a number"}
      </div>

      <label>What is the SBA Approval amount?</label>
      <input placeholder="SBA Approval..." {...register("val4")} />
      <div style={{ color: "red" }}> 
        {errors.val4 && "Must be a number"}
      </div>
      {/* <label>NoEmp</label> */}
      {/* <input placeholder="NoEmp..." {...register("val5")} />
      <div style={{ color: "red" }}> 
        {errors.val5 && "Must be a number"}
      </div> */}
      <label>How many jobs did the company retain</label>
      <input placeholder="JobRetained..." {...register("val6")} />
      <div style={{ color: "red" }}> 
        {errors.val6 && "Must be a number"}
      </div>

      <input type="submit" />
    </form>
    { open? <BaseModal /> : <span/>}
    </div>
  );
}
