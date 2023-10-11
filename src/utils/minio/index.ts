import { Client } from 'minio';

const useMinio = () => {
  const ACCESSKEY = process.env.MINIO_ACCESS_KEY
  const SECRETKEY = process.env.MINIO_SECRET_KEY

  if (!ACCESSKEY) throw new Error("MINIO_ACCESS_KEY key missing")
  if (!SECRETKEY) throw new Error("MINIO_SECRET_KEY key missing")

  // Minio Configuration
  return new Client({
    endPoint: "localhost",
    port: 9000,
    useSSL: false,
    accessKey: ACCESSKEY,
    secretKey: SECRETKEY
  })

}
export { useMinio }