import { FC, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

// работа со временем
import { format } from 'date-fns'

// style component
import { StyleSpiner } from '../../styles/spiner'
import {
	StyleArticleHeader,
	StyleArticleBlock,
	StyleArticleAuthor,
	StyleArticleContent,
	StyleArticleEdit,
	StyleBlock,
	StyleMarkdown,
} from '../../styles/components/article-card'

// hooks
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'

// uuid
import { v4 as uuidv4 } from 'uuid'
import { string } from 'yup'

const ArticleCard: FC = () => {
	const { article, loading, error } = useTypeSelector(state => state.article)

	const { username } = useTypeSelector(state => state.user.user)

	const { fetchArticle, fetchDelArticle, fetchLikeArticle } = useActions()

	const { slug } = useParams()

	const navigate = useNavigate()

	useEffect(() => {
		fetchArticle(slug)
	}, [])

	if (loading) {
		return <StyleSpiner size='large' tip='Загрузка статьи...' />
	}

	if (error) {
		return <h2>{error}</h2>
	}

	let tagElem
	let tagList: any = []

	if (article.tagList[0]) {
		tagElem = article.tagList[0]
		tagList = tagElem.split(',')
	}

	const tags = tagList.map((tag: string) => {
		return <span key={uuidv4()}>{tag}</span>
	})

	const date = format(new Date(article.createdAt), 'MMM d, y')

	const delArticle = () => {
		fetchDelArticle(article.slug)
		navigate('/')
	}

	return (
		<>
			<StyleArticleBlock>
				<StyleArticleHeader>
					<StyleArticleContent>
						<div>
							<h1>{article.title}</h1>
							<div>
								<button
									onClick={() => fetchLikeArticle(slug, article.favorited)}
								>
									{!article.favorited ? (
										<img src='../image/unLike.svg' />
									) : (
										<img src='../image/like.svg' />
									)}
								</button>
								<span>{article.favoritesCount}</span>
							</div>
						</div>
						{tags}
						<p>{article.description}</p>
					</StyleArticleContent>
					<StyleBlock>
						<StyleArticleAuthor>
							<div>
								<span>{article.author.username}</span>
								<span>{date}</span>
							</div>
							<div>
								<img
									src={article.author.image}
									alt={`Avatar ${article.author.username}`}
								/>
							</div>
						</StyleArticleAuthor>
						{username === article.author.username ? (
							<StyleArticleEdit>
								<button onClick={() => delArticle()}>Delete</button>
								<Link to='/edit-article' {...article}>
									Edit
								</Link>
							</StyleArticleEdit>
						) : (
							''
						)}
					</StyleBlock>
				</StyleArticleHeader>
				<StyleMarkdown>{article.body}</StyleMarkdown>
			</StyleArticleBlock>
		</>
	)
}

export default ArticleCard
