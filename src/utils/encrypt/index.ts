// import all crypto-js libraries as CryptoJS
import CryptoJS from 'crypto-js'

// Encryption function
function encryptData(
	unknownData: string | Record<string, any>,
	secretKey: string,
): string {
	let data: string

	// if unknownData is object then stringify the data
	if (typeof unknownData === 'string') {
		data = unknownData
	} else {
		data = JSON.stringify(unknownData)
	}

	// encrypt data using crypto library
	return CryptoJS.AES.encrypt(data, secretKey).toString()
}

// Decryption function
function decryptData<T = string | Record<string, any>>(
	encryptedData: string,
	secretKey: string,
) {
	// decrypt data using crypto library
	const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(
		CryptoJS.enc.Utf8,
	)

	// if decryptedData is object then parse the data
	return JSON.parse(decryptedData) as T
}

export { encryptData, decryptData }
