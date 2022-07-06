export interface UsersState {
	user: {
		username: string
		password?: string
		email: string
		token: string
		bio: string
		image: string
	}
	auth?: boolean
	loading?: boolean
	error?: {
		username?: string
		email?: string
		other?: string
	}
}

export enum UserActionTypes {
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
	FETCH_USER_ERROR = 'FETCH_USER_ERROR',
	FETCH_USER_LOGOUT = 'FETCH_USER_LOGOUT',
}

interface FetchUserAction {
	type: UserActionTypes.FETCH_USER
}

interface FetchUSerSuccessAction {
	type: UserActionTypes.FETCH_USER_SUCCESS
	payload: {
		user: {
			username: string
			password: string
			email: string
			token: string
			bio: string
			image: string
		}
		auth?: boolean
	}
}

interface FetchUserErrorAction {
	type: UserActionTypes.FETCH_USER_ERROR
	payload: {
		username?: string
		email?: string
		other?: string
	}
}

interface FetchUserLogoutAction {
	type: UserActionTypes.FETCH_USER_LOGOUT
	payload: {
		user: {
			username: string
			email: string
			token: string
			bio: string
			image: string
		}
		auth?: boolean
	}
}

export type UserAction =
	| FetchUserAction
	| FetchUSerSuccessAction
	| FetchUserErrorAction
	| FetchUserLogoutAction
