import { useState } from 'react'
import '../styles/App.css'

function Education({isActive, switchNext, switchPrev}) {
    // Give invisible tag if not currently in view
	let classNames = "section invisible";
    if (isActive) {
        alert("hey"); 
        classNames = "section"; 
    }

	return (
		<div className={classNames}>
			<h2>Education</h2>
			<div className="educationLevelContainer">
				<div className="educationInputs">
					<h3 className="educationLevelTitle">
						What is your highest level of education?
					</h3>
					<div className="educationLevelButtons">
						<label htmlFor="selfEducated">Self Educated
							
							<input
								type="radio"
								id="selfEducated"
								name="education"
							></input>
						</label>
						<label htmlFor="highschoolDiploma">Highschool Diploma
							<input
								type="radio"
								id="highschoolDiploma"
								name="education"
							></input>
						</label>
						<label htmlFor="bachelorsDegree">Bachelors Degree
							<input
								type="radio"
								id="bachelorsDegree"
								name="education"
							></input>
						</label>
						<label htmlFor="postGrad">Post Graduate
							<input
								type="radio"
								id="postGrad"
								name="education"
							></input>
						</label>
					</div>
					<div className="gpaLevel">
						<label htmlFor="userGpa">What is your GPA?</label>
						<input
							id="userGpa"
						></input>
					</div>
				</div>
				<button 
                    className="next" 
                    id="goToExperience"
                    onClick={switchNext}
                >Next</button>
			</div>
		</div>
	)
}

export default Education
