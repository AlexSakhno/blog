import { UserAction, UserActionTypes, UsersState } from './../../types/users'

const initalState: UsersState = {
	user: {
		username: '',
		password: '',
		email: '',
		token: '',
		bio: '',
		image: '',
	},
	auth: false,
	loading: false,
	error: {},
}

export const userReducer = (
	state = initalState,
	action: UserAction
): UsersState => {
	switch (action.type) {
		case UserActionTypes.FETCH_USER:
			return {
				...state,
				loading: true,
			}
		case UserActionTypes.FETCH_USER_SUCCESS:
			return {
				...state,
				user: {
					...action.payload.user,
				},
				auth: true,
				loading: false,
			}
		case UserActionTypes.FETCH_USER_ERROR:
			return {
				...state,
				loading: false,
				error: {
					...action.payload,
				},
			}
		case UserActionTypes.FETCH_USER_LOGOUT:
			return {
				...state,
				user: {
					...action.payload.user,
				},
				auth: false,
				loading: false,
			}
		default:
			return state
	}
}
