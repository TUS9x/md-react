import ShopContext from '../../components/GlobalState/ShopContext';
import MainNavigation from '../../components/MainNavi/MainNavigation';
import React, { useContext, useEffect } from 'react';
function Cart(props) {
  const context = useContext(ShopContext);
  useEffect(() => {
    console.log(context);
  }, []);
  return (
    <React.Fragment>
      <div className="" id="cartModal">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h3 className="modal-title" id="modalLabel">
                Your Shopping Cart
              </h3>
            </div>
            <div className="modal-body">
              <div className="cart-top row">
                <div className="col-2" />
                <div className="col-5">Product</div>
                <div className="col-1">Size</div>
                <div className="col-1">Price</div>
                <div className="col-1">Qty</div>
                <div className="col-1" />
              </div>
              <hr />
              <main className="cart-product cart">
                {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
                <ul>
                  {context.cart.map((cartItem) => (
                    <>
                      <div className="product-block-container row" key={cartItem.id}>
                        <div className="col-2 justify-content-center">
                          <img src={cartItem.img} data-toggle="modal" data-target="#modelChiTietSanPham" />{' '}
                        </div>
                        <h2 className="col-5">{cartItem.name}</h2>
                        <select name="size" id="xBrand" className="col-1 form-control">
                          <option value="s">S</option>
                          <option value="m" selected="selected">
                            M
                          </option>
                          <option value="l">L</option>
                          <option value="xl">XL</option>
                          <option value="xxl">XXL</option>
                        </select>
                        <p className="product-block-prices form-control col-1" data-price={cartItem.price}>
                          {cartItem.price}
                        </p>
                        <input
                          className="cart-quantity-input form-control col-1"
                          name="qty"
                          type="number"
                          defaultValue={cartItem.quantity}
                        />
                        <div className="col-1">
                          <button onClick={context.removeProductFromCart.bind(this, cartItem.id)}>
                            Remove
                          </button>
                          </div>
                      </div>
                    </>
                  ))}
                </ul>
              </main>
              <hr />
              <div className="d-flex justify-content-end">
                <h5 className="col-4">
                  Total:&nbsp;&nbsp;
                  <span className="price text-success" />
                </h5>
              </div>
            </div>
            <div className="modal-footer border-top-0 d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-success">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;
