import { number } from 'prop-types';
import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import $ from 'jquery';
export default class FormSubmission extends React.Component {


  state = {
    val: "",
    val2:"",
    val3:"",
    result: ""
  };

  
  onSubmit = () => {
    console.log(this.state.val);
    var val1 = this.state.val;
    var val2 = this.state.val2;
    var val3 = this.state.val3;
    console.log(val2);
 

    $.get(`http://mingyang.pythonanywhere.com/model?last_fico_range_low=${val1}&last_fico_range_high=${val2}&total_rec_prncp=${val3}`, 
      data => { this.setState({"result":data.result}); console.log(data.result); }
    );
    
    var result = '';
   

      
  };
 

  handleButtonClicked() {

    var num = this.state.val;
    console.log(num);


    $.get("demo_test.asp", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'fo234o',
        body: num,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      
      
  };


  
  render() {
    

    return  (
    
      
     
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <InputGroup className="mb-3">
    <InputGroup.Text  id="exampleFormControlInput1" type="text" value={this.state.val} 
      onChange={e => this.setState({ val: e.target.value })} >What is the lower bound of your last fico score?</InputGroup.Text>
    <FormControl
      placeholder=""
      aria-label="Username"
      aria-describedby="basic-addon1"
      value={this.state.val} 
      onChange={e => this.setState({ val: e.target.value })}
    />
    <InputGroup.Text  id="exampleFormControlInput2" type="text" value={this.state.val} 
      onChange={e => this.setState({ val2: e.target.value })} >What is the higher bound of your last fico score?</InputGroup.Text>
    <FormControl
      placeholder=""
      aria-label="Username"
      aria-describedby="basic-addon1"
      value={this.state.val2} 
      onChange={e => this.setState({ val2: e.target.value })}
    />
    <InputGroup.Text  id="exampleFormControlInput3" type="text" value={this.state.val} 
      onChange={e => this.setState({ val3: e.target.value })} >How much have you paid in total? </InputGroup.Text>
    <FormControl
      placeholder=""
      aria-label="Username"
      aria-describedby="basic-addon1"
      value={this.state.val3} 
      onChange={e => this.setState({ val3: e.target.value })}
    />
    <Button
          className="btnFormSend"
          variant="outline-success"
          onClick={this.onSubmit}
        >
          Submit
        </Button>
  </InputGroup>
      <h3>According to our model, this user { this.state.result}</h3>
        
      
      </div>


    );
  }
}