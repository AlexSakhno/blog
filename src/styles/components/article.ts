import styled from 'styled-components'

export const StyleArticleBlock = styled.div`
	display: flex;
	justify-content: space-between;

	max-width: 100%;
	max-height: 140px;

	box-sizing: border-box;

	margin: auto;
	margin-top: 25px;

	padding: 15px;

	background: #ffffff;

	border-radius: 5px;
	filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
`

export const StyleArticleContent = styled.div`
	display: block;
	box-sizing: border-box;

	header {
		display: flex;
		justify-content: space-between;

		align-items: center;
	}

	h2 {
		color: #1890ff;
		margin: 0;
		max-height: 30px;
		overflow: hidden;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;

		margin-left: 13px;
		position: relative;

		width: 50px;
		height: 15px;
		border: none;
		background-color: transparent;

		cursor: pointer;

		font-size: 14px;
		line-height: 22px;
		color: rgba(0, 0, 0, 0.75);

		&::before {
			position: absolute;
			content: '';
			width: 16px;
			height: 15px;
			background: url('./image/unLike.svg') no-repeat;
			left: 0;
		}
	}

	bu span {
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 2px;

		font-size: 12px;
		line-height: 15px;
		color: rgba(0, 0, 0, 0.5);

		margin-right: 3px;

		padding: 2px 3px;
	}

	p {
		font-size: 12px;
		line-height: 22px;
		color: rgba(0, 0, 0, 0.75);
		max-height: 25px;
		overflow: hidden;
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
