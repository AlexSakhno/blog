// axios
import axios from 'axios'

// redux
import { Dispatch } from 'redux'
import { UserAction, UserActionTypes } from '../../types/users'

const baseUrl = 'https://kata.academy:8021/api'

export const fetchRegUser = (data: any) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USER })

			const response = await axios.post(`${baseUrl}/users`, {
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

			const response = await axios.post(`${baseUrl}/users/login`, {
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

export const fetchClearState = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		dispatch({
			type: UserActionTypes.FETCH_USER_ERROR,
			payload: {
				username: '',
				email: '',
			},
		})
	}
}
