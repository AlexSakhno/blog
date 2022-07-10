import { Outlet, useLocation } from 'react-router-dom'

// components
import Header from '../Header/Header'

// style components
import { StyleLayout } from '../../styles/components/layout'
import Footer from '../Footer/Footer'

const Layout = () => {
	const { pathname } = useLocation()

	return (
		<>
			<Header />
			<StyleLayout>
				<Outlet />
			</StyleLayout>
			{pathname === '/' ? <Footer /> : ''}
		</>
	)
}

export { Layout }
