import { FC } from 'react'

// работа со временем
import { format } from 'date-fns'

// uuid
import { v4 as uuidv4 } from 'uuid'

// style components
import {
	StyleArticleHeader,
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
	createdAt: Date
	updatedAt: Date
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
		favorited,
		favoritesCount,
		slug,
	} = props

	let tagElem
	let arrTagList: any = []

	if (tagList[0]) {
		tagElem = tagList[0]
		arrTagList = tagElem.split(',')
	}

	const tags = arrTagList.map((tag: string) => {
		return <span key={uuidv4()}>{tag}</span>
	})

	const date = format(new Date(createdAt), 'MMM d, y')

	return (
		<StyleArticleBlock>
			<StyleArticleHeader>
				<StyleArticleContent>
					<div>
						<Link to={`/articles/${slug}`}>{title}</Link>
						<div>
							<button>
								{!favorited ? (
									<img src='../image/unLike.svg' />
								) : (
									<img src='../image/like.svg' />
								)}
							</button>
							<span>{favoritesCount}</span>
						</div>
					</div>
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
			</StyleArticleHeader>
		</StyleArticleBlock>
	)
}

export default Article
