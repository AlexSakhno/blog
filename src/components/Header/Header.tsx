import React from 'react'

// redux
import { useTypeSelector } from '../../hooks/useTypeSelector'

// route
import { Link, useLocation } from 'react-router-dom'

// styled components
import {
	StyleHeader,
	StyleHeaderContainer,
	StyleNavLink,
} from '../../styles/components/header'

const Header = () => {
	const { pathname } = useLocation()
	const { auth } = useTypeSelector(state => state.user)

	const header = () => {
		return (
			<div>
				<StyleNavLink
					className={pathname === '/sign-in' ? 'active' : ''}
					to='/sign-in'
				>
					SignIn
				</StyleNavLink>
				<StyleNavLink
					className={pathname === '/sign-up' ? 'active' : ''}
					to='/sign-up'
				>
					SignUp
				</StyleNavLink>
			</div>
		)
	}

	return (
		<StyleHeader>
			<StyleHeaderContainer>
				<span>
					<Link to='/'>Realworld Blog</Link>
				</span>
				{!auth ? header() : ''}
			</StyleHeaderContainer>
		</StyleHeader>
	)
}

export default Header
