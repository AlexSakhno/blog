export interface IFormInputs {
	username: string
	email: string
	password: string
	repassword: string
	police: boolean
	bio: string
	avatar: string
}

export interface IFormAddArticleInputs {
	title: string
	description: string
	text: string
	tags?: any[]
}
