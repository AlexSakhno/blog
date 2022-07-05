import { combineReducers } from 'redux'
import { articlesReducer } from './articlesReducer'
import { articleReducer } from './articleReducer'
import { userReducer } from './usersReducer'

export const rootReducer = combineReducers({
	articles: articlesReducer,
	article: articleReducer,
	user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
