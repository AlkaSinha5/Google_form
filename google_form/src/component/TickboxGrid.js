import React from 'react'

const TickboxGrid = () => {
  return (
    

    <div className="container">
      <h5>Tick box Grid *</h5>

      <div className="form-group">
        <div className="d-flex justify-content-between">
          <div></div> {/* Empty cell for spacing */}
          <div>Column 1</div>
          <div>Column 2</div>
          <div>Column 3</div>
        </div>
        <div className="d-flex justify-content-between fan">
          <div>Row 1</div>
          <label>
            <input
              type="checkbox"
              name="row1"
              value="1"
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="row1"
              value="2"
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="row1"
              value="3"
            />
          </label>
        </div>
        <div className="d-flex justify-content-between fan">
          <div>Row 2</div>
          <label>
            <input
              type="checkbox"
              name="row2"
              value="1"
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="row2"
              value="2"
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="row2"
              value="3"
            />
          </label>
        </div>
        <div className="d-flex justify-content-between fan">
          <div>Row 3</div>
          <label>
            <input
              type="checkbox"
              name="row3"
              value="1"
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="row3"
              value="2"
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="row3"
              value="3"
            />
          </label>
        </div>
      </div>
    </div>


  )
}

export default TickboxGrid;