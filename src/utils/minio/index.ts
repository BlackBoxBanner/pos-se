import { Client } from 'minio'

const useMinio = () => {
	const ACCESS_KEY = process.env.MINIO_ACCESS_KEY
	const SECRET_KEY = process.env.MINIO_SECRET_KEY

	if (!ACCESS_KEY) throw new Error('MINIO_ACCESS_KEY key missing')
	if (!SECRET_KEY) throw new Error('MINIO_SECRET_KEY key missing')

	// Minio Configuration
	return new Client({
		endPoint: 'localhost',
		port: 9000,
		useSSL: false,
		accessKey: ACCESS_KEY,
		secretKey: SECRET_KEY,
	})
}

const minioClient = useMinio()

export { useMinio, minioClient }
