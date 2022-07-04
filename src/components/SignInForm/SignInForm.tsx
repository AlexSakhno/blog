import React, { FC } from 'react'

import { Link } from 'react-router-dom'

import { StyleForm } from '../../styles/components/sign-in'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface IFormInputs {
	email: string
	password: string
}

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().required(),
	})
	.required()

const SignInForm: FC = () => {
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
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='email'>Email address</label>
				<input id='email' {...register('email')} placeholder='Email address' />
				<p>{errors.email?.message}</p>
				<label htmlFor='password'>Password</label>
				<input id='password' {...register('password')} placeholder='Password' />
				<p>{errors.password?.message}</p>
				<input type='submit' value='Login' />
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
