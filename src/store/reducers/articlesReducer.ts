import {
	ArticlesAction,
	ArticlesActionTypes,
	ArticlesState,
} from '../../types/articles'

const initalState: ArticlesState = {
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

export const articlesReducer = (
	state = initalState,
	action: ArticlesAction
): ArticlesState => {
	switch (action.type) {
		case ArticlesActionTypes.FETCH_ARTICLES:
			return {
				...state,
				loading: true,
			}
		case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS:
			return {
				...state,
				loading: false,
				currentPage: action.payload.currentPage,
				data: {
					articles: action.payload.articles,
					articlesCount: action.payload.articlesCount,
				},
			}
		case ArticlesActionTypes.FETCH_ARTICLES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case ArticlesActionTypes.SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			}
		default:
			return state
	}
}
