import ShopContext from '../../components/GlobalState/ShopContext';
import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function Cart(props) {
  const context = useContext(ShopContext);
  var total = 0;
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
              <div className="cart-top">
                <div className="row">
                  <div className="col-2" />
                  <div className="col-5">Product Name</div>
                  <div className="col-2">Size/Qty</div>
                  <div className="col-2 ">Price</div>
                  <div className="col-1" />
                </div>
              </div>
              <hr />
              <main className="cart-product">
                {context.cart.length <= 0 && <p>No Item in the Cart!</p>}

                {context.cart.map((cartItem) => (
                  <div className="product-block-container row" key={cartItem.id}>
                    <div className="col-2 justify-content-center row" style={{ margin: '0' }}>
                      <img src={cartItem.img} className="col-12" />
                    </div>
                    <h4 className="col-5 form-inline">{cartItem.name}</h4>
                    <div className="col-2 row">
                      <div className="col-12 form-inline">
                        <select name="size" id="xBrand" className="form-control" style={{ padding: '0 2px' }}>
                          <option value="s">S</option>
                          <option value="m"> M </option>
                          <option value="l">L</option>
                          <option value="xl">XL</option>
                          <option value="xxl">XXL</option>
                        </select>
                      </div>
                      
                        <div className='col-12'>
                          <input
                            className="cart-quantity-input col-12 form-control"
                            name="qty"
                            type="number"
                            defaultValue={cartItem.quantity}
                            style={{ padding: '5px 2px' }}
                            onClick={context.upDate.bind(this, cartItem.id)}
                            onChange={(e) => {
                              cartItem.quantity = e.target.value;
                              console.log(cartItem.quantity);
                              return;
                            }}
                          />
                        </div>
                        <div style={{ display: 'none' }}>{(total += cartItem.price * 1 * (cartItem.quantity * 1))}</div>
                      
                    </div>
                    <p className="product-block-prices  form-inline col-2 justify-content-center" data-price={cartItem.price}>
                      ${cartItem.price}
                    </p>
                    <div className="col-1 row">
                      <div
                        className="col-12 form-inline"
                        onClick={context.removeProductFromCart.bind(this, cartItem.id)}
                        style={{
                          backgroundImage: 'url(./image/logo/icon-trash.png)',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                          backgroundSize: '90%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </main>
              <hr />
              <div className="d-flex justify-content-end">
                <h5 className="col-4">
                  Total:$ {total}
                  &nbsp;&nbsp;
                  <span className="price text-success" />
                </h5>
              </div>
            </div>
            <div className="modal-footer border-top-0 d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                <NavLink
                  className="nav-link"
                  to="/products"
                  style={{ textDecoration: 'none', color: 'white', padding: '0' }}
                >
                  Back to Shopping
                </NavLink>
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
