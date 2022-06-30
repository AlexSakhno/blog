import { FC } from 'react'

// работа со временем
import { format } from 'date-fns'

// uuid
import { v4 as uuidv4 } from 'uuid'

// style components
import {
	StyleArticleAuthor,
	StyleArticleBlock,
	StyleArticleContent,
} from '../../styles/components/article'

// router
import { Link } from 'react-router-dom'

interface ArticleItem {
	title: string
	slug: string
	description: string
	body: string
	tagList: any[]
	createdAt?: Date
	updatedAt?: Date
	favorited: boolean
	favoritesCount: number
	author: {
		username: string
		bio: null | string
		image: string
		following: false
	}
}

const Article: FC<ArticleItem> = props => {
	const {
		title,
		tagList,
		description,
		author,
		createdAt,
		favoritesCount,
		slug,
	} = props

	const tags = tagList.map(tag => {
		if (tag !== '' && tag !== null) return <span key={uuidv4()}>{tag}</span>
	})

	const date = format(new Date(), 'MMM d, y')

	return (
		<StyleArticleBlock>
			<StyleArticleContent>
				<header>
					<Link to={`/articles/${slug}`}>{title}</Link>
					<button>{favoritesCount}</button>
				</header>
				{tags}
				<p>{description}</p>
			</StyleArticleContent>
			<StyleArticleAuthor>
				<div>
					<span>{author.username}</span>
					<span>{date}</span>
				</div>
				<div>
					<img src={author.image} alt={`Avatar ${author.username}`} />
				</div>
			</StyleArticleAuthor>
		</StyleArticleBlock>
	)
}

export default Article
