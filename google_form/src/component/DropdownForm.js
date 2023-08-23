import React from 'react';

function DropdownForm() {
  return (
    <div className="container">
      <h5>Dropdown *</h5>
      
        <div className="form-group">
         
          <select className="form-control" id="dropdown">
            <option value="">Choose</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            
            {/* Add more options here */}
          </select>
        </div>
        
    </div>
  );
}

export default DropdownForm;
