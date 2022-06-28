export interface ArticleState {
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

export enum ArticleActionTypes {
	FETCH_ARTICLES = 'FETCH_ARTICLES',
	FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
	FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
	SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

interface SetCurrentPageAction {
	type: ArticleActionTypes.SET_CURRENT_PAGE
	payload: number
}

interface FetchArticlesAction {
	type: ArticleActionTypes.FETCH_ARTICLES
}

interface FetchArticlesSuccessAction {
	type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS
	payload: {
		articles: any[]
		articlesCount: number
		currentPage: number
	}
}

interface FetchArticlesErrorAction {
	type: ArticleActionTypes.FETCH_ARTICLES_ERROR
	payload: string
}

export type ArticleAction =
	| FetchArticlesAction
	| FetchArticlesSuccessAction
	| FetchArticlesErrorAction
	| SetCurrentPageAction
