import React, { Component, useState, useEffect } from 'react';
import ShopContext from '../../components/GlobalState/ShopContext';
import MainNavigation from '../../components/MainNavi/MainNavigation';
const Products = (props) => {
  return (
    <ShopContext.Consumer>
      {(context) => (
        <React.Fragment>
          <main className="container" style={{ padding: '10px 0' }}>
            <div
              className="row justify-content-center"
              style={{ border: '1px solid rgb(201, 201, 201)', borderRadius: '5px' }}
            >
              <div className="row col-12 ">
                {context.products.map((post) => (
                  <div className="dataCart col-3" key={post.id} style={{ padding: '0' }}>
                    <div className="productBlockContainer row" >
                      <img className='col-12' src={post.img} alt={post.title} />
                      <h5 className='col-12'>{post.name}</h5>
                      <p className="product-block-prices col-6"> Price: {post.price}</p>
                      <div className='col-6' onClick={context.addProductToCart.bind(this, post)}>
                        <img src="./image/logo/Icon-Bag-Outline-32.png" alt="img" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default Products;
