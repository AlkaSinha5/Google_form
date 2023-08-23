import React from 'react'

const Mcq = () => {
  return (
    <div className="container">
      <h5>MCQ *</h5>
      
        <div className="form-group">
          {/* <label htmlFor="question1">Question 1: What is 2 + 2?</label> */}
          <div className="form-check">
            <input
            //   className="form-check-input"
              type="radio"
              name="question1"
              id="q1option1"
            />
            <label className="form-check-label" htmlFor="q1option1">
            Option 1
            </label>
          </div>
          <div className="form-check">
            <input
            //   className="form-check-input"
              type="radio"
              name="question1"
              id="q1option2"
            />
            <label className="form-check-label" htmlFor="q1option2">
            Option 2
            </label>
          </div>
          <div className="form-check">
            <input
            //   className="form-check-input"
              type="radio"
              name="question1"
              id="q1option3"
            />
            <label className="form-check-label" htmlFor="q1option3">
            Option 3
            </label>
          </div>
        </div>
    
        
      
    </div>

  )
}

export default Mcq