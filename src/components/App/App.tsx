import { Routes, Route } from 'react-router-dom'

// redux
import { store } from '../../store'
import { Provider } from 'react-redux'

// styled components
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/global'
import { baseTheme } from '../../styles/theme'

// components
import { Layout } from '../Layout/Layout'
import ArticlesList from '../ArticlesList/ArticlesList'
import SignInForm from '../SignInForm/SignInForm'
import SignUpForm from '../SignUpForm/SignUpForm'

function App() {
	return (
		<ThemeProvider theme={baseTheme}>
			<GlobalStyle />
			<Provider store={store}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<ArticlesList />} />
						<Route path='signin' element={<SignInForm />} />
						<Route path='signup' element={<SignUpForm />} />
						<Route path='*' element={<h2>Страница не найдена</h2>} />
					</Route>
				</Routes>
			</Provider>
		</ThemeProvider>
	)
}

export default App
