function Cart() {
  return (
    <div>
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
              <div className="cart-product"></div>
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
      ;
    </div>
  );
}

export default Cart;
