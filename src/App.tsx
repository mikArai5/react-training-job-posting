import { Routes, Route } from 'react-router-dom'
import { TheDefaultLayout } from './components/layouts'
import LoginPage from '@/pages/login'

function App() {
	return (
		<TheDefaultLayout>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</TheDefaultLayout>
	)
}

export default App
