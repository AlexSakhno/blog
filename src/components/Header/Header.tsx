import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import {
	StyleHeader,
	StyleHeaderContainer,
	StyleNavLink,
} from '../../styles/components/header'

const Header = () => {
	const { pathname } = useLocation()

	return (
		<StyleHeader>
			<StyleHeaderContainer>
				<span>
					<Link to='/'>Realworld Blog</Link>
				</span>
				<div>
					<StyleNavLink
						className={pathname === '/signin' ? 'active' : ''}
						to='/signin'
					>
						SignIn
					</StyleNavLink>
					<StyleNavLink
						className={pathname === '/signup' ? 'active' : ''}
						to='/signup'
					>
						SignUp
					</StyleNavLink>
				</div>
			</StyleHeaderContainer>
		</StyleHeader>
	)
}

export default Header
