import { FC, useEffect, useState } from 'react'

// styled components
import {
	StyleArticleBlock,
	StyleTagsBlock,
} from '../../styles/components/add-article'
import { StyleSpiner } from '../../styles/spiner'

// form / validation form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// types
import { IFormAddArticleInputs } from '../../types/elements'

// redux
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'
import { useNavigate } from 'react-router-dom'

const schema = yup
	.object({
		title: yup
			.string()
			.required()
			.min(1, 'Title length should be at least 5 characters')
			.max(40, 'Title cannot exceed more than 40 characters'),
		description: yup
			.string()
			.required()
			.min(1, 'Description length should be at least 10 characters')
			.max(50, 'Description cannot exceed more than 50 characters'),
		text: yup
			.string()
			.required()
			.min(1, 'Text length should be at least 60 characters')
			.max(2000, 'Text cannot exceed more than 2000 characters'),
		tags: yup
			.string()
			.min(1, 'Tag length should be at least 60 characters')
			.max(15, 'Tag cannot exceed more than 2000 characters'),
	})
	.required()

const AddArticle: FC = () => {
	const { article, loading } = useTypeSelector(state => state.article)

	const { fetchAddArticle, fetchUpdateArticle } = useActions()

	const navigate = useNavigate()
	const [state, setState] = useState('')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormAddArticleInputs>({
		resolver: yupResolver(schema),
	})

	const onSubmit = async (data: IFormAddArticleInputs) => {
		let res
		if (article.slug !== '') {
			fetchUpdateArticle(data, article.slug)
			res = article.slug
		} else {
			const resp = fetchAddArticle(data)
			res = await resp
		}

		setState(String(res))
	}

	if (state !== '') {
		const article = state

		setState('')
		navigate(`/articles/${article}`)
	}

	if (loading) {
		return <StyleSpiner size='large' tip='Добавляем статью...' />
	}

	return (
		<StyleArticleBlock>
			<h1>Create new Article</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='title'>Title</label>
				<input
					id='title'
					{...register('title')}
					placeholder='Title'
					defaultValue={article.title}
				/>
				<p>{errors.title?.message}</p>
				<label htmlFor='description'>Short description</label>
				<input
					id='description'
					{...register('description')}
					placeholder='Short description'
					defaultValue={article.description}
				/>
				<p>{errors.description?.message}</p>
				<label htmlFor='text'>Text</label>
				<textarea
					id='text'
					{...register('text')}
					placeholder='Text'
					defaultValue={article.body}
				/>
				<p>{errors.text?.message}</p>
				<label htmlFor='tags'>Tags</label>
				<StyleTagsBlock>
					<div>
						<input
							placeholder='Tag'
							id='tag'
							{...register('tags')}
							defaultValue={article.tagList}
						/>
						<button type='button'>Delete</button>
					</div>
					<div>
						<button type='button' className='add'>
							Add tag
						</button>
					</div>
				</StyleTagsBlock>
				<input type='submit' value='Send' />
			</form>
		</StyleArticleBlock>
	)
}

export default AddArticle
