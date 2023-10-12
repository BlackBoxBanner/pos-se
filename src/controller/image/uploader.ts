import { minioClient } from '@/utils/minio'

function randomHexString(): string {
	const random32BitInt = Math.floor(Math.random() * 0x100000000) // 0x100000000 is 2^32
	return random32BitInt.toString(16).padStart(8, '0')
}

export type UploadImageProps = {
	buffer: Buffer
	fileName: string
}
type UploadImage = (props: UploadImageProps) => Promise<string | undefined>
const uploadImage: UploadImage = async ({ buffer, fileName }) => {
	const fileType = fileName.slice(fileName.lastIndexOf('.'))
	const name = randomHexString() + fileType
	try {
		await minioClient.putObject('menu', name, Buffer.from(buffer))
		return name
	} catch (err) {
		console.log(err)
	}
}

type GetImage = (fileName: string) => Promise<string>
const getImage: GetImage = async (fileName: string) => {
	try {
		await minioClient.getObject('menu', fileName)
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message)
		}
	}
	return await minioClient.presignedGetObject('menu', fileName)
}

export { uploadImage, getImage, randomHexString }
