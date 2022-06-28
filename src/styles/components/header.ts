import styled from 'styled-components'

export const StyleHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.bgBase};
	width: 100%;
	height: 80px;
	color: rgba(0, 0, 0, 0.85);
	font-size: 18px;
	line-height: 28px;
`
export const StyleHeaderContainer = styled.div`
	max-width: 1440px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;

	margin: 0 auto;
	padding-left: 22px;

	a {
		text-decoration: none;
		color: inherit;
	}

	div {
		margin-right: 22px;
		display: flex;
	}

	div > a {
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

		@media screen and (max-width: 375px) {
			height: 30px;
			width: 80px;
			font-size: 14px;
		}

		&:hover {
			color: ${({ theme }) => theme.colors.success};

			border: 1px solid ${({ theme }) => theme.colors.success};
			border-radius: 5px;
		}
	}
`
