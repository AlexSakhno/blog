import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ArticleActionCrCreator from '../store/action-creators/article'

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(ArticleActionCrCreator, dispatch)
}
