import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { StyleNavLink } from '../../styles/components/header'

const ReLogin: FC = () => {
	const { pathname } = useLocation()

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

export default ReLogin
