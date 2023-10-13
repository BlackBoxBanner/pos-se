'use client'
export const fileToBuffer = async (file: File): Promise<Buffer> => {
	const arrBuffer = await file.arrayBuffer()
	return Buffer.from(arrBuffer)
}
