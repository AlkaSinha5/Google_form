import React from 'react';

function CheckboxForm() {
  return (
    <div className="container">
      <h5>Checkbox Form *</h5>
      
        {/* <div className="form-group"> */}
          
          <div className="form-check">
            <input
            //   className="form-check-input"
              type="checkbox"
              id="colorRed"
            />
            <label className="form-check-label" htmlFor="colorRed">
            Option 1
            </label>
          </div>
          <div className="form-check">
            <input
            //   
              type="checkbox"
              id="colorBlue"
            />
            <label className="form-check-label" htmlFor="colorBlue">
            Option 2
            </label>
          </div>
          <div className="form-check">
            <input
            //   className="form-check-input"
              type="checkbox"
              id="colorGreen"
            />
            <label className="form-check-label" htmlFor="colorGreen">
            Option 3
            </label>
          </div>
        </div>
        
    // </div>
  );
}

export default CheckboxForm;
