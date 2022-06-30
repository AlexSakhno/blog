import {
	ArticleAction,
	ArticleActionTypes,
	ArticleState,
} from '../../types/article'

const initalState: ArticleState = {
	article: {
		slug: '',
		title: '',
		description: '',
		body: '',
		tagList: [],
		createdAt: new Date(),
		updatedAt: new Date(),
		favorited: false,
		favoritesCount: 0,
		author: {
			username: '',
			bio: '',
			image: '',
			following: false,
		},
	},
	loading: false,
	error: null,
}

export const articleReducer = (
	state = initalState,
	action: ArticleAction
): ArticleState => {
	switch (action.type) {
		case ArticleActionTypes.FETCH_ARTICLE:
			return {
				...state,
				loading: true,
			}
		case ArticleActionTypes.FETCH_ARTICLE_SUCCESS:
			return {
				...state,
				article: {
					...action.payload.article,
				},
				loading: false,
			}
		case ArticleActionTypes.FETCH_ARTICLE_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
