import React, { FC, useEffect } from 'react'

//style component
import { StyleForm } from '../../styles/components/edit-profile'
import { StyleSpiner } from '../../styles/spiner'

// form / validation form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// types
import { IFormInputs } from '../../types/elements'

// hooks
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'

const schema = yup
	.object({
		username: yup
			.string()
			.required()
			.min(3, 'Username length should be at least 3 characters')
			.max(20, 'Username cannot exceed more than 20 characters'),
		email: yup.string().email().required(),
		password: yup
			.string()
			.required()
			.min(6, 'Password length should be at least 6 characters')
			.max(40, 'Password cannot exceed more than 40 characters'),
		avatar: yup.string().url(),
		bio: yup
			.string()
			.min(5, 'Bio length should be at least 5 characters')
			.max(20, 'Bio cannot exceed more than 20 characters'),
	})
	.required()

const EditProfileForm: FC = () => {
	const { user, loading } = useTypeSelector(state => state.user)

	const { fetchUpdateUser, fetchClearState } = useActions()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	})
	const onSubmit = (data: IFormInputs) => {
		fetchClearState()
		fetchUpdateUser(data, user.token)
	}

	if (loading) {
		return <StyleSpiner size='large' tip='Проверка авторизации...' />
	}

	return (
		<StyleForm>
			<h1>Edit profile</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					{...register('username')}
					placeholder='username'
					value={user.username}
				/>
				<p>{errors.username?.message}</p>
				<label htmlFor='email'>Email address</label>
				<input
					id='email'
					{...register('email')}
					placeholder='Email address'
					value={user.email}
				/>
				<p>{errors.email?.message}</p>
				<label htmlFor='password'>New password</label>
				<input
					type='password'
					id='password'
					{...register('password')}
					placeholder='New password'
				/>
				<p>{errors.password?.message}</p>
				<label htmlFor='bio'>Bio</label>
				<textarea
					id='bio'
					{...register('bio')}
					placeholder='Bio'
					value={user.bio}
				/>
				<p>{errors.bio?.message}</p>
				<label htmlFor='avatar'>Avatar image (url)</label>
				<input
					id='avatar'
					{...register('avatar', {
						required: {
							value: true,
							message: 'Url is required',
						},
						pattern: {
							value:
								/(http|https|ftp):\/\/(.+?)\/(([a-zA-Z0-9_ \-%\.]*)\.(jpg|png|jpeg))/,
							message: 'Please enter a valid url',
						},
					})}
					placeholder='Avatar image'
					value={user.image}
				/>
				<p>{errors.avatar?.message}</p>
				<input type='submit' value='Save' />
			</form>
		</StyleForm>
	)
}

export default EditProfileForm
