import { useState } from 'react'
import '../styles/App.css'

function Education({isActive, switchNext, switchPrev}) {
    // Give invisible tag if not currently in view
	let classNames = "section invisible";
    if (isActive) {
        classNames = "section"; 
    }

	return (
		<div className={classNames}>
			<h2>Personal Info</h2>
			<div className="personalLevelContainer">
				<div className="personalInputs">
					<h3 className="personalLevelTitle">
						What is your highest level of education?
					</h3>
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
