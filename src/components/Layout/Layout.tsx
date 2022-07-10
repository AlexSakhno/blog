import { Outlet } from 'react-router-dom'

// components
import Header from '../Header/Header'

// style components
import { StyleLayout } from '../../styles/components/layout'
import Footer from '../Footer/Footer'

const Layout = () => {
	return (
		<>
			<Header />
			<StyleLayout>
				<Outlet />
			</StyleLayout>
			<Footer />
		</>
	)
}

export { Layout }
