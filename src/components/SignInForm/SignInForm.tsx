import { Button, Form, Input } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { StyleForm } from '../../styles/components/sign-in'

const formItemLayout = {
	labelCol: { span: 24 },
	wrapperCol: { span: 26 },
}

const formTailLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 24, offset: 9 },
}

const SignInForm: FC = () => {
	const [form] = Form.useForm()
	const [checkNick, setCheckNick] = useState(false)

	useEffect(() => {
		form.validateFields(['nickname'])
	}, [checkNick, form])

	const onCheckboxChange = (e: { target: { checked: boolean } }) => {
		setCheckNick(e.target.checked)
	}

	const onCheck = async () => {
		try {
			const values = await form.validateFields()
			console.log('Success:', values)
		} catch (errorInfo) {
			console.log('Failed:', errorInfo)
		}
	}

	return (
		<StyleForm>
			<h1>Sign In</h1>
			<Form form={form} name='dynamic_rule'>
				<Form.Item
					{...formItemLayout}
					name='email'
					label='Email adress'
					rules={[
						{
							required: true,
							type: 'email',
							message: 'Enter the correct email address',
						},
					]}
				>
					<Input placeholder='Email adress' />
				</Form.Item>

				<Form.Item
					{...formItemLayout}
					name='password'
					label='Password'
					rules={[
						{
							required: true,
							message: 'Please input your password',
						},
					]}
				>
					<Input placeholder='Password' />
				</Form.Item>
				<Form.Item {...formTailLayout}>
					<Button type='primary' onClick={onCheck}>
						Submit
					</Button>
				</Form.Item>
			</Form>
			<div>
				<span>
					Dont`t have an account?
					<Link to='/sign-up'> Sign Up.</Link>
				</span>
			</div>
		</StyleForm>
	)
}

export default SignInForm
