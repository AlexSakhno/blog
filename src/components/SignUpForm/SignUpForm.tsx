import React, { FC } from 'react'

// route
import { Link, Navigate } from 'react-router-dom'

// redux
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'

//style component
import { StyleForm } from '../../styles/components/sign-up'
import { StyleSpiner } from '../../styles/spiner'

// form / validation form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// antD
import { Divider } from 'antd'

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
		repassword: yup
			.string()
			.required('Confirm Password is required')
			.min(6, 'Password length should be at least 6 characters')
			.max(40, 'Password cannot exceed more than 40 characters')
			.oneOf([yup.ref('password')], 'Passwords do not match'),
		police: yup
			.bool()
			.required()
			.oneOf([true], 'It is required to accept the agreement'),
	})
	.required()

const SignUpForm: FC = () => {
	const { auth, loading, error } = useTypeSelector(state => state.user)

	const { fetchRegUser, fetchClearState } = useActions()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data: IFormInputs) => {
		fetchClearState()
		fetchRegUser(data)
	}

	if (loading) {
		return <StyleSpiner size='large' tip='Загрузка страницы...' />
	}

	if (auth) {
		return <Navigate replace to='/' />
	}

	return (
		<StyleForm>
			<h1>Create new account</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='username'>Username</label>
				<input id='username' {...register('username')} placeholder='username' />
				<p>{errors.username?.message}</p>
				<p>{error?.username ? 'username is already in use' : ''}</p>
				<label htmlFor='email'>Email address</label>
				<input id='email' {...register('email')} placeholder='Email address' />
				<p>{errors.email?.message}</p>
				<p>{error?.email ? 'email address is already in use' : ''}</p>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					{...register('password')}
					placeholder='Password'
				/>
				<p>{errors.password?.message}</p>
				<label htmlFor='repassword'>Repeat Password</label>
				<input
					type='password'
					id='repassword'
					{...register('repassword')}
					placeholder='Password'
				/>
				<p>{errors.repassword?.message}</p>

				<Divider />

				<label htmlFor='checkbox'>
					<input
						id='checkbox'
						type='checkbox'
						defaultChecked={true}
						{...register('police')}
					/>
					I agree to the processing of my personal information
				</label>
				<p>{errors.police?.message}</p>
				<input type='submit' value='Create' />
			</form>
			<div>
				<span>
					Don’t have an account? <Link to='/sign-in'>Sign In</Link>.
				</span>
			</div>
		</StyleForm>
	)
}

export default SignUpForm
