import styled from 'styled-components'

export const StyleArticleBlock = styled.article`
	max-width: 100%;

	box-sizing: border-box;

	margin: auto;
	margin-top: 25px;

	padding: 15px;

	background: #ffffff;

	border-radius: 5px;
	filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
`

export const StyleArticleHeader = styled.header`
	display: flex;
	justify-content: space-between;
`

export const StyleArticleContent = styled.div`
	display: block;
	box-sizing: border-box;

	p {
		margin-top: 20px;
		font-size: 12px;
		line-height: 22px;
		color: rgba(0, 0, 0, 0.75);
		max-height: 25px;
		overflow: hidden;
	}

	h1 {
		font-size: 20px;
		line-height: 28px;
		color: #1890ff;
		margin: 0;
		max-height: 30px;
		overflow: hidden;
	}

	div {
		display: flex;

		align-items: center;

		button {
			display: flex;
			align-items: center;
			justify-content: center;

			margin-left: 13px;
			position: relative;

			width: 16px;
			height: 16px;
			border: none;
			background-color: transparent;

			cursor: pointer;

			font-size: 14px;
			line-height: 22px;
			color: rgba(0, 0, 0, 0.75);
		}

		span {
			border: none;
			font-size: 14px;
		}
	}

	span {
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 2px;

		font-size: 12px;
		line-height: 15px;
		color: rgba(0, 0, 0, 0.5);

		margin-right: 3px;

		padding: 2px 3px;
	}
`

export const StyleArticleAuthor = styled.div`
	display: flex;
	justify-content: space-between;
	div {
		margin-right: 12px;

		span {
			font-size: 18px;
			line-height: 28px;

			display: flex;
			align-items: center;

			color: rgba(0, 0, 0, 0.85);
		}

		span:last-child {
			display: block;

			font-size: 12px;
			line-height: 22px;
			color: rgba(0, 0, 0, 0.5);
		}
	}

	div > img {
		margin-right: 0;
		background-size: contain;
		width: 46px;
		height: 46px;
	}
`
