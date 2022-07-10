import styled from 'styled-components'

export const StylePagination = styled.div`
	width: 100%;
	margin: auto;

	text-align: center;

	span {
		display: inline-block;
		margin-right: 5px;
		width: 22px;
		height: 22px;
		cursor: pointer;

		&:hover {
			background: #1890ff;
			border-radius: 4px;
			color: #fff;
		}
	}

	.active {
		background: #1890ff;
		border-radius: 4px;
		color: #fff;
	}
`
