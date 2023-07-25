import express, {Request, Response} from 'express'

const app = express()

app.use(express.json())

app.get('/', async (request:Request, response:Response) => {
	return response.json({message: 'You have reached home'})
})

export default app