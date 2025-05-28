import { useState } from 'react'
import '../styles/App.css'

// import Personal from './PersonalInfo.jsx'
import Education from './EducationInfo.jsx'
// import Experience from './PersonalInfo.jsx'

function App() {
	const [view, setView] = useState(0)
        
	return (
		<div className="generatorContainer">
			<p className="generatorTitle">CV Generator</p>
			<Education />
		</div>
	)
}

export default App
