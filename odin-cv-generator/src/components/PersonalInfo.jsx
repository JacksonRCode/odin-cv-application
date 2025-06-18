import { useState } from 'react'
import '../styles/App.css'

function Personal({isActive, switchNext, switchPrev}) {
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
                    <div className="inputContainer"> 
                        <label 
                            className="personalFirstName"
                            htmlFor="firstName">First Name: 
                        </label>
                        <input 
                            id="firstName"
                            name="firstName"
                        ></input>
                    </div>
                    <div className="inputContainer"> 
                        <label 
                            className="personalLastName"
                            htmlFor="lastName">Last Name: 
                        </label>
                        <input 
                            id="lastName"
                            name="lastName"
                        ></input>
                    </div>
                    <div className="inputContainer"> 
                        <label 
                            className="personalPhoneNumber"
                            htmlFor="phoneNumber">Phone Number: 
                        </label>
                        <input 
                            id="phoneNumber"
                            name="phoneNumber"
                        ></input>
                    </div>
                </div>
				<button 
                    className="next" 
                    id="goToEducation"
                    onClick={switchNext}
                >Next</button>
			</div>
		</div>
	)
}

export default Personal
