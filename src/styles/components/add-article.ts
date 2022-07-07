import styled from 'styled-components'

export const StyleArticleBlock = styled.section`
	box-sizing: border-box;

	margin: auto;

	max-width: 600px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 48px 32px;
	margin-top: 24px;
	gap: 21px;

	background: #ffffff;

	border: 1px solid #d9d9d9;
	box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07),
		0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198),
		0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275),
		0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035),
		0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725),
		0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);
	border-radius: 6px;

	h1 {
		text-align: center;
		font-weight: 500;
		font-size: 20px;
		line-height: 28px;

		width: 100%;
	}

	form {
		display: flex;
		flex-direction: column;

		width: 100%;
	}

	label {
		font-size: 14px;
		line-height: 22px;

		color: #262626;
	}

	input,
	textarea {
		box-sizing: border-box;
		background: #ffffff;
		border: 1px solid #d9d9d9;
		border-radius: 4px;

		width: 100%;
		padding: 5px;

		font-size: 16px;
		line-height: 24px;

		color: rgba(0, 0, 0, 0.75);

		&::placeholder {
			color: #bfbfbf;
		}
	}

	p {
		color: red;
	}

	input[type='submit'] {
		width: 300px;
		height: 40px;

		background: #1890ff;
		border-radius: 4px;

		color: #ffffff;

		cursor: pointer;
	}
`

export const StyleTagsBlock = styled.div`
	display: flex;
	flex-direction: column;

	gap: 5px;

	margin-bottom: 10px;

	input {
		margin-right: 10px;
		max-width: 300px;
	}

	button {
		box-sizing: border-box;
		width: 100px;
		height: 36px;

		border: 1px solid #f5222d;
		border-radius: 4px;

		color: #f5222d;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;

		background-color: white;

		cursor: pointer;
	}

	.add {
		border: 1px solid #1890ff;
		border-radius: 4px;

		color: #1890ff;
	}
`
