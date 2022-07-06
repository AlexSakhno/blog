import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyleUserBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-self: center;

	max-width: 1440px;
	height: 100%;

	margin: 0 auto;
	padding-left: 22px;

	a {
		text-decoration: none;
		color: inherit;
	}
`
export const StyleNavLink = styled(Link)`
	display: flex;

	align-items: center;
	justify-content: center;

	box-sizing: border-box;

	background-color: transparent;

	border: none;

	color: inherit;

	cursor: pointer;

	max-width: 112px;
	height: 31px;

	font-size: 14px;
	line-height: 22px;

	padding: 3px;
	margin-right: 20px;

	@media screen and (max-width: 375px) {
		font-size: 12px;
		height: 40px;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.success};

		border: 1px solid ${({ theme }) => theme.colors.success};
		border-radius: 5px;
	}

	&.active {
		color: ${({ theme }) => theme.colors.success};

		border: 1px solid ${({ theme }) => theme.colors.success};
		border-radius: 5px;
	}
`

export const StyleButton = styled.button`
	display: flex;

	align-items: center;
	justify-content: center;

	box-sizing: border-box;

	background-color: transparent;

	border: none;

	font-size: inherit;
	line-height: inherit;
	color: inherit;

	cursor: pointer;

	width: 110px;
	height: 50px;

	&:hover {
		color: ${({ theme }) => theme.colors.success};

		border: 1px solid ${({ theme }) => theme.colors.success};
		border-radius: 5px;
	}

	@media screen and (max-width: 375px) {
		height: 45px;
		width: 80px;
		font-size: 14px;
	}
`
export const StyleProfileBlock = styled.div`
	display: flex;
	font-size: 18px;
	line-height: 28px;

	display: flex;
	align-items: center;

	text-align: center;

	color: rgba(0, 0, 0, 0.85);

	span {
		margin-right: 13px;
	}

	img {
		width: 46px;
		height: 46px;
		font-size: 10px;
	}

	@media screen and (max-width: 425px) {
		span {
			margin-right: 0px;
		}
	}

	@media screen and (max-width: 375px) {
		img {
			display: none;
		}
	}
`
