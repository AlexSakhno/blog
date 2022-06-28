import axios from 'axios'

import { Dispatch } from 'redux'

import { ArticleAction, ArticleActionTypes } from './../../types/articles'

const baseUrl = 'https://kata.academy:8021/api'

export const fetchArticles = (page: number) => {
	return async (dispatch: Dispatch<ArticleAction>) => {
		try {
			dispatch({ type: ArticleActionTypes.FETCH_ARTICLES })

			let offset = 0

			page > 0 ? (offset = (page - 1) * 5) : (offset = page * 5)

			const response = await axios.get(
				`${baseUrl}/articles?limit=5&offset=${offset}`
			)

			setTimeout(async () => {
				dispatch({
					type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
					payload: {
						articles: response.data.articles,
						articlesCount: response.data.articlesCount,
						currentPage: page,
					},
				})
			}, 1000)
		} catch (e) {
			dispatch({
				type: ArticleActionTypes.FETCH_ARTICLES_ERROR,
				payload: 'Произошла ошибка загрузки статей.',
			})
		}
	}
}

export const setCurrentPage = (page: number) => ({
	type: ArticleActionTypes.SET_CURRENT_PAGE,
	payload: page,
})
