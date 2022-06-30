export interface ArticlesState {
	data: {
		articles: any[]
		articlesCount: number
	}
	totalPage: number
	currentPage: number
	perPage: number
	loading?: boolean
	error?: null | string
}

export enum ArticlesActionTypes {
	FETCH_ARTICLES = 'FETCH_ARTICLES',
	FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
	FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
	SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

interface SetCurrentPageAction {
	type: ArticlesActionTypes.SET_CURRENT_PAGE
	payload: number
}

interface FetchArticlesAction {
	type: ArticlesActionTypes.FETCH_ARTICLES
}

interface FetchArticlesSuccessAction {
	type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS
	payload: {
		articles: any[]
		articlesCount: number
		currentPage: number
	}
}

interface FetchArticlesErrorAction {
	type: ArticlesActionTypes.FETCH_ARTICLES_ERROR
	payload: string
}

export type ArticlesAction =
	| FetchArticlesAction
	| FetchArticlesSuccessAction
	| FetchArticlesErrorAction
	| SetCurrentPageAction
