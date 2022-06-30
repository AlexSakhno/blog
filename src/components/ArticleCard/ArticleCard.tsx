import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Markdown
import ReactMarkdown from 'react-markdown'

// style component
import { StyleSpiner } from '../../styles/spiner'
import {
	StyleArticleHeader,
	StyleArticleBlock,
	StyleArticleAuthor,
	StyleArticleContent,
} from '../../styles/components/article-card'

// hooks
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'

// uuid
import { v4 as uuidv4 } from 'uuid'

const ArticleCard: FC = () => {
	const { article, loading, error } = useTypeSelector(state => state.article)

	const { fetchArticle } = useActions()
	const { slug } = useParams()

	useEffect(() => {
		fetchArticle(slug)
	}, [])

	if (loading) {
		return <StyleSpiner size='large' tip='Загрузка статьи...' />
	}

	if (error) {
		return <h2>{error}</h2>
	}

	const tags = article.tagList.map(tag => {
		if (tag !== '' && tag !== null) return <span key={uuidv4()}>{tag}</span>
	})

	return (
		<>
			<StyleArticleBlock>
				<StyleArticleHeader>
					<StyleArticleContent>
						<div>
							<h1>{article.title}</h1>
							<button>
								{!article.favorited ? (
									<img src='../image/unLike.svg' />
								) : (
									<img src='../image/like.svg' />
								)}
							</button>
							<span>{article.favoritesCount}</span>
						</div>
						{tags}
						<p>{article.description}</p>
					</StyleArticleContent>
					<StyleArticleAuthor>
						<div>
							<span>{article.author.username}</span>
							{/* <span>{article.createdAt}</span> */}
						</div>
						<div>
							<img
								src={article.author.image}
								alt={`Avatar ${article.author.username}`}
							/>
						</div>
					</StyleArticleAuthor>
				</StyleArticleHeader>
				<ReactMarkdown>{article.body}</ReactMarkdown>
			</StyleArticleBlock>
		</>
	)
}

export default ArticleCard
