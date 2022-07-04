import React, { FC } from 'react'

//style component
import { StyleForm } from '../../styles/components/edit-profile'

// form / validation form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// types
import { IFormInputs } from '../../types/elements'

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
	})
	.required()

const EditProfileForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	})
	const onSubmit = (data: IFormInputs) => console.log(data)

	return (
		<StyleForm>
			<h1>Edit profile</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='username'>Username</label>
				<input id='username' {...register('username')} placeholder='username' />
				<p>{errors.username?.message}</p>
				<label htmlFor='email'>Email address</label>
				<input id='email' {...register('email')} placeholder='Email address' />
				<p>{errors.email?.message}</p>
				<label htmlFor='password'>New password</label>
				<input
					type='password'
					id='password'
					{...register('password')}
					placeholder='New password'
				/>
				<p>{errors.password?.message}</p>
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
				/>
				<p>{errors.avatar?.message}</p>
				<input type='submit' value='Save' />
			</form>
		</StyleForm>
	)
}

export default EditProfileForm
