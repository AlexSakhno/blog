import React from 'react'
import { Link } from 'react-router-dom'

import {
	StyleHeader,
	StyleHeaderContainer,
} from '../../styles/components/header'

const Header = () => {
	return (
		<StyleHeader>
			<StyleHeaderContainer>
				<span>
					<Link to='/'>Realworld Blog</Link>
				</span>
				<div>
					<Link to='/signin'>SignIn</Link>
					<Link to='/signup'>SignUp</Link>
				</div>
			</StyleHeaderContainer>
		</StyleHeader>
	)
}

export default Header
