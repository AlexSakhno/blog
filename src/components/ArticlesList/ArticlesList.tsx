// IMPORTS
import { FC, useEffect } from 'react'

// uuid
import { v4 as uuidv4 } from 'uuid'

// redux
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'

// style components
import { StyleSpiner } from '../../styles/spiner'
import { StyleArticleList } from '../../styles/components/article-list'

// components
import Article from '../Article/Article'

// IMPORTS \\

const ArticlesList: FC = () => {
	const { data, loading, error, currentPage } = useTypeSelector(
		state => state.articles
	)

	const { fetchArticles } = useActions()

	useEffect(() => {
		fetchArticles(currentPage)
	}, [currentPage])

	if (loading) {
		return <StyleSpiner size='large' tip='Загрузка статей...' />
	}

	if (error) {
		return <h2>{error}</h2>
	}

	const articlesList = data.articles.map(article => {
		return <Article key={uuidv4()} {...article} />
	})

	return <StyleArticleList>{articlesList}</StyleArticleList>
}

export default ArticlesList
