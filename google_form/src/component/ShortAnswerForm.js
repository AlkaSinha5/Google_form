import React from 'react';

function ShortAnswerForm() {
  return (
    <div className="container">
      <h5>Short Answer Form *</h5>
      
        {/* <div className="form-group"> */}
          <input
            type="text"
            className="form-control"
            id="shortAnswer"
            placeholder="your answer"
          />
        {/* </div> */}
       
    </div>
  );
}

export default ShortAnswerForm;
