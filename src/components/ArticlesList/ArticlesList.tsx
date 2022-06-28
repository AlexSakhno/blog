// IMPORTS
import { FC, useCallback, useEffect } from 'react'

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
import { StylePagination } from '../../styles/pagination'

// Service
import { Service } from '../../utils/service'
const service = new Service()

// IMPORTS \\

const ArticlesList: FC = () => {
	const { data, loading, error, currentPage, perPage, totalPage } =
		useTypeSelector(state => state.articles)

	const pagesCount = Math.ceil(data.articlesCount / perPage)
	const pages: any[] = []
	service.createPage(pages, pagesCount, currentPage)

	const { fetchArticles, setCurrentPage } = useActions()

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

	const allPages = pages.map((page, index) => (
		<span
			onClick={() => setCurrentPage(page)}
			className={currentPage === page ? 'active' : ''}
			key={index}
		>
			{page}
		</span>
	))

	return (
		<StyleArticleList>
			{articlesList}
			<StylePagination>{allPages}</StylePagination>
		</StyleArticleList>
	)
}

export default ArticlesList
