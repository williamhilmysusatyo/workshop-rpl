import { Prisma, PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";

const prisma = new PrismaClient();

export const login = async (req, res) => {
  try {
    const user = await prisma.cust_info.findFirst({
      where: {
        email: req.body.email,
      },
    });
    const checkPassword = req.body.password === user.last_name;
    if (!checkPassword)
      throw createHttpError.Unauthorized(
        "Email address or password is not valid!"
      );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const user = await prisma.cust_info.create({
      data: req.body,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
