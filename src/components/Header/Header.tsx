import { useEffect } from 'react'

// redux
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'

// route
import { Link } from 'react-router-dom'

// styled components
import {
	StyleHeader,
	StyleHeaderContainer,
} from '../../styles/components/header'

// components
import ReLogin from './Relogin'
import Login from './Login'

const Header = () => {
	const { auth } = useTypeSelector(state => state.user)

	const { fetchGetUser } = useActions()

	useEffect(() => {
		const tokenString = localStorage.getItem('token')
		if (tokenString) fetchGetUser(JSON.parse(tokenString))
	}, [])

	return (
		<StyleHeader>
			<StyleHeaderContainer>
				<span>
					<Link to='/'>Realworld Blog</Link>
				</span>
				{!auth ? <ReLogin /> : <Login />}
			</StyleHeaderContainer>
		</StyleHeader>
	)
}

export default Header
