import React from 'react';

function LinearScaleForm() {
  return (
    <div className="container">
      <h5>Linear Scale *</h5>
      
        <div className="form-group">
          <div className="d-flex justify-content-between">
            <h6 className='worst'>Worst</h6>
            <h6>Best</h6>
          </div>
          <div className="d-flex justify-content-between space-between">
          
            <label>
                
            <div>1</div>
            
              <input
        
                type="radio"
                name="question1"
                id="q1option1"
                value="1"
              />
              
            </label>
            <label>
            <div>2</div>
              <input
                type="radio"
                name="question1"
                id="q1option2"
                value="2"
              />
               
            </label>
            
            <label>
            <div>3</div>
              <input
                type="radio"
                name="question1"
                id="q1option3"
                value="3"
              />
              
            </label>
            
            <label>
            <div>4</div>
              <input
                type="radio"
                name="question1"
                id="q1option4"
                value="4"
              />
              
            </label>

            <label>
            

            <div>5</div>
            
              <input
                type="radio"
                name="question1"
                id="q1option5"
                value="5"
              />
               
            </label>
            
          </div>
          
        </div>
      
    </div>
  );
}

export default LinearScaleForm;
