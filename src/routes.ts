import { Request, Response, Router } from 'express'
import { User } from './model/user'
import { AppDataSource } from './data-source'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
	// Active Record

	// Criar Usuario
	// const users = new User()

	// users.name = "Eduardo"
	// users.email = "duduzin@gmail.com"
	// users.password = "123456"

	// users.save()

	// Listar Usuario

	// const users = await User.find({ where: { id: 1 } })

	// Data Mapper - Repository Pattern * NÃO PRECISA EXTERNDER O BASEENTITY

	const userRepository = AppDataSource.getRepository(User)

	const users = await userRepository.find()

	const newUser = userRepository.create({
		name: "Eduarda",
		email: "eduarda@gmail.com",
		password: "12345"
	})

	await userRepository.save(newUser)

	return res.json()
})

export default routes
