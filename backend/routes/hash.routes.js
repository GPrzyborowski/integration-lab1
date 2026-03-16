import express from 'express'
import crypto from 'crypto'

const router = express.Router()

router.use(express.json())

router.post('/hash', (req, res) => {
	const { data } = req.body
	if (!data) {
		return res.status(400).json({ error: 'Data not provided.' })
	}
	const hash = crypto.createHash('sha256').update(data).digest('hex')
	res.json({
		hash: hash,
	})
})

export default router
