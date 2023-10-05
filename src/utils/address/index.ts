import { Address } from "@prisma/client"
import prisma from "../prisma"


type GetAddress = (userId: string) => Promise<Address[]>

export type GetAddressProps = Parameters<GetAddress>

export const getAddress: GetAddress = async (userId) => {
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

type CreateAddress = (userId: string, data: CreateAddressData) => Promise<Address>

export type CreateAddressProps = Parameters<CreateAddress>;

export const createAddress: CreateAddress = async (userId, { name, phoneNumber }) => {
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

type DeleteAddress = (id: string) => Promise<Address>

export type DeleteAddressProps = Parameters<DeleteAddress>

export const deleteAddress: DeleteAddress = async (id) => {
  return await prisma.address.delete({
    where: {
      id
    }
  })
}