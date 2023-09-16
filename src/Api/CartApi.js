import axios from "axios";
import { toast } from "react-toastify";

export const cartHandler = async () => {
  const url = `http://localhost:3004/products`;
  try {
    await axios.get(url);
  } catch (err) {
    console.log(err.message);
  }
};

export const addToCart = async ({
  id,
  title,
  num,
  img,
  price,
  actualPrice,
  left,
}) => {
  const url = `http://localhost:3004/products`;
  try {
    const { data } = await axios.post(url, {
      id,
      title,
      num,
      img,
      price,
      actualPrice,
      left,
    });
    toast.success("Product added to cart");
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};

export const allCart = async () => {
  const url = `http://localhost:3004/cart`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error, "error");
    toast.error(error);
  }
};
const findAddToCart = "";

export const manageCart = async (id, price, num) => {
  const url = `http://localhost:3004/products/${id}`;
  console.log(price, "price");
  const totalCart = ` $${+price.replace("$", "") * num}`;
  try {
    const foundCart = await findAddToCart(id);
    if (!foundCart) {
      toast.error("Not found");
    }
    const { data } = await axios.patch(url, {
      num: num,
      priceTotal: totalCart,
    });
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};
