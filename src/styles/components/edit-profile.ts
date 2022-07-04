import styled from 'styled-components'

export const StyleForm = styled.section`
	max-width: 384px;
	max-height: 100%;

	margin: auto;
	margin-top: 60px;
	padding: 0 22px;

	align-items: flex-start;
	padding: 48px 32px;
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
		width: 100%;

		line-height: 28px;
		text-align: center;

		color: #262626;
		font-weight: 700;
	}

	form {
		display: flex;
		flex-direction: column;

		label {
			font-weight: 600;
			font-size: 14px;
			line-height: 22px;
			opacity: 0.85;
			color: #262626;
		}

		input {
			background: #ffffff;

			border: 1px solid #d9d9d9;
			border-radius: 4px;

			height: 40px;

			padding: 8px 12px;

			&::placeholder {
			}
		}

		input[type='submit'] {
			background: #1890ff;
			border-radius: 4px;
			height: 40px;

			font-size: 16px;
			line-height: 24px;

			color: #ffffff;

			margin-top: 21px;
			cursor: pointer;

			&:hover {
				transform: scale(1.01);
				transition: transform 0.3s;
			}
		}
		p {
			color: red;
		}
	}
`
