import { FC } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'

// styled components
import { StylePagination } from '../../styles/pagination'
import { StyleFooter } from '../../styles/components/footer'

// Service
import { Service } from '../../utils/service'
const service = new Service()

const Footer: FC = () => {
	const { data, currentPage, perPage } = useTypeSelector(
		state => state.articles
	)

	const pagesCount = Math.ceil(data.articlesCount / perPage)
	const pages: any[] = []
	service.createPage(pages, pagesCount, currentPage)

	const { setCurrentPage } = useActions()

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
		<StyleFooter>
			<StylePagination>{allPages}</StylePagination>
		</StyleFooter>
	)
}

export default Footer
