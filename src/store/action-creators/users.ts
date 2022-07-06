// axios
import axios from 'axios'

// redux
import { Dispatch } from 'redux'
import { UserAction, UserActionTypes } from '../../types/users'

axios.defaults.baseURL = 'https://kata.academy:8021/api/'
axios.defaults.headers.put['Content-Type'] = 'application/json'

export const fetchRegUser = (data: any) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USER })

			const response = await axios.post('/users', {
				user: {
					username: data.username,
					email: data.email,
					password: data.password,
				},
			})

			setTimeout(async () => {
				dispatch({
					type: UserActionTypes.FETCH_USER_SUCCESS,
					payload: {
						user: response.data.user,
						auth: true,
					},
				})
			}, 500)
			localStorage.setItem('token', JSON.stringify(response.data.user.token))
		} catch (e: any) {
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: {
					username: e.response.data.errors.username,
					email: e.response.data.errors.email,
				},
			})
		}
	}
}

export const fetchLoginUser = (data: any) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USER })

			const response = await axios.post(`/users/login`, {
				user: {
					email: data.email,
					password: data.password,
				},
			})

			setTimeout(async () => {
				dispatch({
					type: UserActionTypes.FETCH_USER_SUCCESS,
					payload: {
						user: response.data.user,
						auth: true,
					},
				})
			}, 500)

			localStorage.setItem('token', JSON.stringify(response.data.user.token))
		} catch (e: any) {
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: {
					other: e.response.data.errors['email or password'],
				},
			})
		}
	}
}

export const fetchUpdateUser = (data: any, token: string) => {
	axios.defaults.headers.common['Authorization'] = `Token ${token}`

	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USER })

			const response = await axios.put('/user', {
				user: {
					username: data.username,
					token: token,
					email: data.email,
					password: data.password,
					bio: data.bio,
					image: data.avatar,
				},
			})

			setTimeout(async () => {
				dispatch({
					type: UserActionTypes.FETCH_USER_SUCCESS,
					payload: {
						user: response.data.user,
					},
				})
			}, 500)
		} catch (e: any) {
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: {
					other: e.response.data.errors.message,
				},
			})
		}
	}
}

export const fetchGetUser = (token: string) => {
	axios.defaults.headers.common['Authorization'] = `Token ${token}`

	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USER })

			const response = await axios.get('/user')

			setTimeout(async () => {
				dispatch({
					type: UserActionTypes.FETCH_USER_SUCCESS,
					payload: {
						user: response.data.user,
						auth: true,
					},
				})
			}, 500)
		} catch (e: any) {
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: {
					other: '',
				},
			})
		}
	}
}

export const fetchClearState = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		dispatch({
			type: UserActionTypes.FETCH_USER_ERROR,
			payload: {
				username: '',
				email: '',
				other: '',
			},
		})
	}
}

export const logOut = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		setTimeout(
			() =>
				dispatch({
					type: UserActionTypes.FETCH_USER_LOGOUT,
					payload: {
						user: {
							username: '',
							email: '',
							token: '',
							bio: '',
							image: '',
						},
					},
				}),
			500
		)
		localStorage.removeItem('token')
	}
}
