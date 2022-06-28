import {
	ArticleAction,
	ArticleActionTypes,
	ArticleState,
} from '../../types/articles'

const initalState: ArticleState = {
	data: {
		articles: [],
		articlesCount: 0,
	},
	totalPage: 0,
	currentPage: 1,
	perPage: 10,
	loading: false,
	error: null,
}

export const articleReducer = (
	state = initalState,
	action: ArticleAction
): ArticleState => {
	switch (action.type) {
		case ArticleActionTypes.FETCH_ARTICLES:
			return {
				...state,
				loading: true,
			}
		case ArticleActionTypes.FETCH_ARTICLES_SUCCESS:
			return {
				...state,
				loading: false,
				currentPage: action.payload.currentPage,
				data: {
					articles: action.payload.articles,
					articlesCount: action.payload.articlesCount,
				},
			}
		case ArticleActionTypes.FETCH_ARTICLES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case ArticleActionTypes.SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			}
		default:
			return state
	}
}
