import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ArticleActionCreator from '../store/action-creators/article'

import * as UserActionCreator from '../store/action-creators/users'

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(
		Object.assign({}, ArticleActionCreator, UserActionCreator),
		dispatch
	)
}
