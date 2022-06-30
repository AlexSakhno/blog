export interface ArticleState {
	article: {
		slug: string
		title: string
		description: string
		body: string
		tagList: any[]
		createdAt: Date
		updatedAt: Date
		favorited: boolean
		favoritesCount: number
		author: {
			username: string
			bio: string
			image: string
			following: boolean
		}
	}

	loading?: boolean
	error?: null | string
}

export enum ArticleActionTypes {
	FETCH_ARTICLE = 'FETCH_ARTICLE',
	FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',
	FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR',
}

interface FetchArticleAction {
	type: ArticleActionTypes.FETCH_ARTICLE
}

interface FetchArticleSuccessAction {
	type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS
	payload: {
		article: {
			slug: string
			title: string
			description: string
			body: string
			tagList: any[]
			createdAt: Date
			updatedAt: Date
			favorited: boolean
			favoritesCount: number
			author: {
				username: string
				bio: string
				image: string
				following: boolean
			}
		}
	}
}

interface FetchArticleErrorAction {
	type: ArticleActionTypes.FETCH_ARTICLE_ERROR
	payload: string
}

export type ArticleAction =
	| FetchArticleAction
	| FetchArticleSuccessAction
	| FetchArticleErrorAction
