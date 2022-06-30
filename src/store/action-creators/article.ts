import axios from 'axios'

import { Dispatch } from 'redux'

import { ArticlesAction, ArticlesActionTypes } from './../../types/articles'

import { ArticleAction, ArticleActionTypes } from './../../types/article'

const baseUrl = 'https://kata.academy:8021/api'

export const fetchArticles = (page: number) => {
	return async (dispatch: Dispatch<ArticlesAction>) => {
		try {
			dispatch({ type: ArticlesActionTypes.FETCH_ARTICLES })

			let offset = 0

			page > 0 ? (offset = (page - 1) * 5) : (offset = page * 5)

			const response = await axios.get(
				`${baseUrl}/articles?limit=5&offset=${offset}`
			)

			setTimeout(async () => {
				dispatch({
					type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
					payload: {
						articles: response.data.articles,
						articlesCount: response.data.articlesCount,
						currentPage: page,
					},
				})
			}, 500)
		} catch (e) {
			dispatch({
				type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
				payload: 'Произошла ошибка загрузки статей.',
			})
		}
	}
}

// получаем страницу
export const setCurrentPage = (page: number) => ({
	type: ArticlesActionTypes.SET_CURRENT_PAGE,
	payload: page,
})

// Получаем отдельную статью
export const fetchArticle = (slug: any) => {
	return async (dispatch: Dispatch<ArticleAction>) => {
		try {
			dispatch({ type: ArticleActionTypes.FETCH_ARTICLE })

			const response = await axios.get(`${baseUrl}/articles/${slug}`)

			setTimeout(async () => {
				dispatch({
					type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
					payload: response.data,
				})
			}, 500)
		} catch (e) {
			dispatch({
				type: ArticleActionTypes.FETCH_ARTICLE_ERROR,
				payload: 'Произошла ошибка загрузки статей.',
			})
		}
	}
}
