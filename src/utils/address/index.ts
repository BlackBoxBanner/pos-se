import { Address } from "@prisma/client"
import prisma from "../prisma"


export type GetAddressProps = { userId: string }
type GetAddress = (props: GetAddressProps) => Promise<Address[]>

export const getAddress: GetAddress = async (props) => {
  const { userId } = props
  if (!userId) throw new Error("No ID provided.")

  return await prisma.address.findMany({
    where: {
      User: {
        id: userId
      }
    }
  })
}


type CreateAddressData = {
  name: string;
  phoneNumber: number
}

export type CreateAddressProps = { userId: string, data: CreateAddressData }
type CreateAddress = (props: CreateAddressProps) => Promise<Address>

export const createAddress: CreateAddress = async (props) => {
  const { userId, data: { name, phoneNumber } } = props
  if (!userId) throw new Error("No ID provided.")
  if (!name) throw new Error("No name provided.")
  if (!phoneNumber) throw new Error("No phone number provided.")
  return await prisma.address.create({
    data: {
      name,
      phoneNumber,
      User: {
        connect: {
          id: userId
        },
      }
    }
  })
}

export type DeleteAddressProps = { id: string }
type DeleteAddress = (props: DeleteAddressProps) => Promise<Address>

export const deleteAddress: DeleteAddress = async (props) => {
  const { id } = props
  return await prisma.address.delete({
    where: {
      id
    }
  })
}