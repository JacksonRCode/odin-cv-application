import { useState } from 'react'
import '../styles/App.css'

import Personal from './PersonalInfo.jsx'
import Education from './EducationInfo.jsx'
// import Experience from './PersonalInfo.jsx'

function App() {
	const [view, setView] = useState(0);
        
	return (
		<div className="generatorContainer">
			<p className="generatorTitle">CV Generator</p>
            <Personal 
                isActive = {view === 0}
                switchNext = {() => setView(1)}
            />            
			<Education 
                isActive = {view === 1}
                switchNext = {() => setView(2)}
                switchPrev = {() => setView(0)}
            />
			{/* <Experience  */}
			{/*              isActive = {view === 2} */}
			{/*              switchPrev = {() => setView(1)} */}
			{/*          /> */}
		</div>
	)
}

export default App
