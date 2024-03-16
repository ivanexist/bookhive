const CheckoutItem = ({ cartItem }) => {
  return (
    <div>
      <div className="flex justify-between my-4 mx-2  text-gray-950">
        <div className="flex">
          <span>
            <img
              className="h-16 w-12"
              src={`../../../../../public/bookhive/${cartItem.book_cover}`}
              alt=""
            />
          </span>
          <div className="flex flex-col justify-center mx-4">
            <span>
              {cartItem.title.length > 40
                ? `${cartItem.title.substring(0, 40)}...`
                : cartItem.title}
            </span>
            <span className="text-gray-500">{cartItem.quantity} pcs</span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <span>${(cartItem.quantity * cartItem.price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
export default CheckoutItem;
