import { FC } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'

import {
	StyleUserBlock,
	StyleButton,
	StyleNavLink,
	StyleProfileBlock,
} from '../../styles/components/login'

const Login: FC = () => {
	const { pathname } = useLocation()

	const { user } = useTypeSelector(state => state.user)

	const { logOut } = useActions()

	let image = ''
	user.image ? (image = user.image) : (image = './image/avatar.svg')

	const onLogout = () => {
		logOut()
		return <Navigate to='/' />
	}

	return (
		<StyleUserBlock>
			<StyleNavLink
				className={
					pathname === '/add-article' ? 'add-article active' : 'add-article'
				}
				to='/add-article'
			>
				Create article
			</StyleNavLink>
			<StyleProfileBlock>
				<Link to='/edit-profile'>
					<span>{user.username}</span>
					<img src={image} alt='Avatar' />
				</Link>
			</StyleProfileBlock>
			<StyleButton onClick={() => onLogout()}>Log Out</StyleButton>
		</StyleUserBlock>
	)
}

export default Login
