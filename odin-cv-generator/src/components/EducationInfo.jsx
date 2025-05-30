import '../styles/App.css'

function Education() {
	
	return (
		<>
			<h2>Education</h2>
			<div className="educationLevelContainer">
				<div className="educationInputs">
					<h3 className="educationLevelTitle">
						What is your highest level of education?
					</h3>
					<div className="educationLevelButtons">
						<label for="selfEducated">Self Educated
							
							<input
								type="radio"
								id="selfEducated"
								name="education"
							></input>
						</label>
						<label for="highschoolDiploma">Highschool Diploma
							<input
								type="radio"
								id="highschoolDiploma"
								name="education"
							></input>
						</label>
						<label for="bachelorsDegree">Bachelors Degree
							<input
								type="radio"
								id="bachelorsDegree"
								name="education"
							></input>
						</label>
						<label for="postGrad">Post Graduate
							<input
								type="radio"
								id="postGrad"
								name="education"
							></input>
						</label>
					</div>
					<div className="gpaLevel">
						<label for="userGpa">What is your GPA?</label>
						<input
							id="userGpa"
						></input>
					</div>
				</div>
				<button className="next" id="goToExperience">Next</button>
			</div>
		</>
	)
}

export default Education
