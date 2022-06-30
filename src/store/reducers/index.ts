import { combineReducers } from 'redux'
import { articlesReducer } from './articlesReducer'
import { articleReducer } from './articleReducer'

export const rootReducer = combineReducers({
	articles: articlesReducer,
	article: articleReducer,
})

export type RootState = ReturnType<typeof rootReducer>
