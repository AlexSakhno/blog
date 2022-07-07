import axios from 'axios'

import { Dispatch } from 'redux'

import { ArticlesAction, ArticlesActionTypes } from './../../types/articles'

import { ArticleAction, ArticleActionTypes } from './../../types/article'
import { string } from 'yup'
import { Action } from 'history'

axios.defaults.baseURL = 'https://kata.academy:8021/api/'
axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem(
	'token'
)}`

export const fetchArticles = (page: number) => {
	return async (dispatch: Dispatch<ArticlesAction>) => {
		try {
			dispatch({ type: ArticlesActionTypes.FETCH_ARTICLES })

			let offset = 0

			page > 0 ? (offset = (page - 1) * 5) : (offset = page * 5)

			const response = await axios.get(`/articles?limit=5&offset=${offset}`)

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

			const response = await axios.get(`/articles/${slug}`)

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

// Добавляем статью
export const fetchAddArticle = (data: any) => {
	return async (dispatch: Dispatch<ArticleAction>) => {
		try {
			dispatch({ type: ArticleActionTypes.FETCH_ARTICLE })

			const article = {
				title: data.title,
				description: data.description,
				body: data.text,
				tagList: [data.tags],
			}

			const response = await axios.post(`/articles`, {
				article: article,
			})

			setTimeout(async () => {
				dispatch({
					type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
					payload: response.data,
				})
			}, 500)

			const res = await response.data.article.slug
			return res
		} catch (e) {
			dispatch({
				type: ArticleActionTypes.FETCH_ARTICLE_ERROR,
				payload: 'Произошла ошибка добавления статьи.',
			})
		}
	}
}

// Изменяем статью
export const fetchUpdateArticle = (data: any, slug: string) => {
	return async (dispatch: Dispatch<ArticleAction>) => {
		try {
			dispatch({ type: ArticleActionTypes.FETCH_ARTICLE })

			const article = {
				title: data.title,
				description: data.description,
				body: data.text,
				tagList: [data.tags],
			}

			const response = await axios.put(`/articles/${slug}`, {
				article: article,
			})

			setTimeout(async () => {
				dispatch({
					type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
					payload: response.data,
				})
			}, 500)

			const res = await response.data.article.slug
			return res
		} catch (e) {
			dispatch({
				type: ArticleActionTypes.FETCH_ARTICLE_ERROR,
				payload: 'Произошла ошибка обновления статьи.',
			})
		}
	}
}

// Удаляем статью
export const fetchDelArticle = (slug: string) => {
	return async (dispatch: Dispatch<ArticleAction>) => {
		try {
			dispatch({ type: ArticleActionTypes.FETCH_ARTICLE })

			await axios.delete(`/articles/${slug}`)

			setTimeout(async () => {
				dispatch({
					type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
					payload: {
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
					},
				})
			}, 500)
		} catch (e) {
			dispatch({
				type: ArticleActionTypes.FETCH_ARTICLE_ERROR,
				payload: 'Произошла ошибка удаления статьи.',
			})
		}
	}
}

// Лайкаем статью
export const fetchLikeArticle = (slug: any, favorited: boolean) => {
	return async (dispatch: Dispatch<ArticleAction>) => {
		try {
			dispatch({ type: ArticleActionTypes.FETCH_ARTICLE })

			const response = await axios(`/articles/${slug}/favorite`, {
				method: !favorited ? 'post' : 'delete',
			})

			setTimeout(async () => {
				dispatch({
					type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
					payload: response.data,
				})
			}, 500)

			const res = await response.data.article.slug
			return res
		} catch (e) {
			dispatch({
				type: ArticleActionTypes.FETCH_ARTICLE_ERROR,
				payload: 'Произошла ошибка проставления лайка.',
			})
		}
	}
}
