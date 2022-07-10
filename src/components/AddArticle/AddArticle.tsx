import { FC, useEffect, useMemo, useState } from 'react'

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

// router
import { useLocation, useNavigate } from 'react-router-dom'

// uuid
import { v4 as uuidv4 } from 'uuid'

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
		tags: yup.array(),
	})
	.required()

const AddArticle: FC = () => {
	const { pathname } = useLocation()

	const { article, loading } = useTypeSelector(state => state.article)

	const [tags, setTags] = useState([{ id: '1' }])
	const [state, setState] = useState('')

	const { fetchAddArticle, fetchUpdateArticle } = useActions()

	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormAddArticleInputs>({
		resolver: yupResolver(schema),
	})

	const onSubmit = async (data: IFormAddArticleInputs) => {
		let res
		if (pathname !== '/add-article') {
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
		navigate(`/articles/${article}`)
	}

	if (loading) {
		return <StyleSpiner size='large' tip='Добавляем статью...' />
	}

	let titlePage =
		pathname === '/add-article' ? 'Create new article' : 'Edit article'

	// Работа с тегами
	const tagForm = (num: string, index: number) => {
		return (
			<div key={num}>
				<input placeholder='Tag' id='tags' {...register(`tags.${index}`)} />
				<button type='button' id={num} onClick={() => delTagForm(num)}>
					Delete
				</button>
			</div>
		)
	}

	const addTagForm = () => {
		const id = uuidv4()
		return setTags(() => [...tags, { id: id }])
	}

	const delTagForm = (id: string) => {
		const elem = tags.filter(item => item.id != id)
		return setTags(() => [...elem])
	}

	const tagsList = tags.map((item, index) => {
		return tagForm(item.id, index)
	})

	return (
		<StyleArticleBlock>
			<h1>{titlePage}</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='title'>Title</label>
				<input
					id='title'
					{...register('title')}
					placeholder='Title'
					defaultValue={pathname !== '/add-article' ? article.title : ''}
				/>
				<p>{errors.title?.message}</p>
				<label htmlFor='description'>Short description</label>
				<input
					id='description'
					{...register('description')}
					placeholder='Short description'
					defaultValue={pathname !== '/add-article' ? article.description : ''}
				/>
				<p>{errors.description?.message}</p>
				<label htmlFor='text'>Text</label>
				<textarea
					id='text'
					{...register('text')}
					placeholder='Text'
					defaultValue={pathname !== '/add-article' ? article.body : ''}
				/>
				<p>{errors.text?.message}</p>

				<label htmlFor='tags'>Tags</label>
				<StyleTagsBlock>
					{tagsList}
					<div>
						<button type='button' className='add' onClick={() => addTagForm()}>
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
