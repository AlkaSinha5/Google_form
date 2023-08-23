import React from 'react';

function FileUploadForm() {
  return (
    <div className="container">
      <h5>File *</h5>
      
        <div className="form-group">
          
          <input
            type="file"
            className="form-control-file"
            id="fileInput"
          />
        </div>
        
    </div>
  );
}

export default FileUploadForm;
