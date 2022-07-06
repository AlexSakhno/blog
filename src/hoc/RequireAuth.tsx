import { useLocation, Navigate } from 'react-router-dom'

import { useTypeSelector } from '../hooks/useTypeSelector'

export const RequireAuth = ({ children }: any) => {
	const location = useLocation()

	const { auth } = useTypeSelector(state => state.user)

	if (!auth) {
		return <Navigate to='/sign-in' state={{ from: location }} />
	}

	return children
}
