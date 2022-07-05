import React, { FC } from 'react'

import { Link, Navigate } from 'react-router-dom'

// redux
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'

// style components
import { StyleForm } from '../../styles/components/sign-in'
import { StyleSpiner } from '../../styles/spiner'

// form / validation form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// types
import { IFormInputs } from '../../types/elements'

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup
			.string()
			.required()
			.min(6, 'Password length should be at least 6 characters')
			.max(40, 'Password cannot exceed more than 40 characters'),
	})
	.required()

const SignInForm: FC = () => {
	const { auth, loading, error } = useTypeSelector(state => state.user)

	const { fetchLoginUser, fetchClearState } = useActions()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	})
	const onSubmit = (data: IFormInputs) => {
		fetchClearState()
		fetchLoginUser(data)
	}

	if (loading) {
		return <StyleSpiner size='large' tip='Проверка авторизации...' />
	}

	if (auth) {
		return <Navigate replace to='/' />
	}

	return (
		<StyleForm>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='email'>Email address</label>
				<input id='email' {...register('email')} placeholder='Email address' />
				<p>{errors.email?.message}</p>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					{...register('password')}
					placeholder='Password'
				/>
				<p>{errors.password?.message}</p>
				<input type='submit' value='Login' />
				<p>{error?.other ? 'invalid email address or password' : ''}</p>
			</form>
			<div>
				<span>
					Don’t have an account? <Link to='/sign-up'>Sign Up</Link>.
				</span>
			</div>
		</StyleForm>
	)
}

export default SignInForm
