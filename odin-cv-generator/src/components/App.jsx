import { useState } from 'react'
import '../styles/App.css'

// import Personal from './PersonalInfo.jsx'
import Education from './EducationInfo.jsx'
// import Experience from './PersonalInfo.jsx'

function App() {
	const [view, setView] = useState(1);
        
	return (
		<div className="generatorContainer">
			<p className="generatorTitle">CV Generator</p>
			<Education 
                isActive = {view === 1}
                switchNext = {() => setView(2)}
                switchPrev = {() => setView(0)}
            />
		</div>
	)
}

export default App
