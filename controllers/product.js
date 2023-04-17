import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProduct = async (req, res) => {
  try {
    const response = await prisma.product_info.findMany({
      where: {
        car_name: { contains: req.query.car_name },
        car_model: { contains: req.query.car_model },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const editProduct = async (req, res) => {
  try {
    const response = await prisma.product_info.upsert({
      where: {
        car_id: req.body.car_id,
      },
      update: {
        car_name: req.body.car_name,
        car_model: req.body.car_model,
        car_vin: req.body.car_vin,
        price: "€" + req.body.price,
      },
      create: req.body,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
