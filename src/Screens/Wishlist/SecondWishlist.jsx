import React, { useContext } from "react";
import { AiFillEye, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import style from "./Wishlist.module.css";
import { ThemeContext } from "../../Context/CreateContext";
import { toast } from "react-toastify";

function SecondWishlist({ second }) {
  const { id, img, title, price, left, actualPrice } = second;
  const { getCartTotal, addToCart, getProduct } = useContext(ThemeContext);

  const addToCartHandler = async ({
    id,
    img,
    title,
    price,
    left,
    actualPrice,
  }) => {
    const carts = await getProduct();
    const exist = carts.find((prod) => prod.id === id);
    if (exist) {
      toast.warn("Product already in cart");
      return;
    }
    addToCart({
      id,
      title,
      img,
      price,
      actualPrice,
      left,
    });
    getCartTotal();
  };
  return (
    <div className={style.all}>
      <div className={style.container}>
        <div className=" rounded-3xl items-center flex justify-between">
          <div>
            <button>{left}%</button>{" "}
          </div>
          <div>
            <AiFillEye className="text-3xl cursor-pointer m-4" />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        <div className={`${style.footer}  cursor-pointer`}>
          <AiOutlineShoppingCart
            className="text-2xl mr-2"
            onClick={() =>
              addToCartHandler({ id, img, title, price, left, actualPrice })
            }
          />
          <h4>Add to cart</h4>
        </div>
      </div>

      <div>
        <h2 className=" text-xl font-medium">{title}</h2>
        <div className=" flex">
          <h5 className="mr-2 text-[#DB4444]">{price}</h5>
          <h6>{actualPrice}</h6>
        </div>
        <div className="flex mr-2">
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
        </div>
      </div>
    </div>
  );
}

export default SecondWishlist;
