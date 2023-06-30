//
// import React, { Component } from 'react';

// class Product extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <h2>Pro0</h2>
//         );
//     }
// }

// export default Product;

// import React from 'react';

// const Product = () => {
//     return (  
//         <h2>Pro</h2>
//     );
// }

// export default Product;

import React, { Component } from 'react';
import "./content.css"
import axios from 'axios';
import { toast } from 'react-toastify';

class Product extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        title: 'truong san pham',
        products:            []    }
    xoaSanPham=(id)=>{
            console.log('Xoa san pham:', id);
          //  const index = this.state.products.indexOf( x=>x.id===id );
          axios({
            url:'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn/'+id,
            method:'DELETE',   
          }).then( response=>{
            console.log(response.data) 
            //tim phan tu da xoa trong product
            const index = this.state.products.findIndex(x=>x.id===id)
           let t = [...this.state.products]
           t.splice(index, 1) //xoa mot phan tu bat dau tu vi tri index
           console.log(this.state.products.splice(index, 1));
           console.log(t.length)
           this.setState({products: [...t]})
          // toast("Đã xóa!");
           toast.success('Đã xóa !', {
          //  position: toast.POSITION.BOTTOM_LEFT
        });
          })
       
        }
    componentDidMount() {
        let t = []
        axios({
            method: `get`,
            url: `https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn`,
            data: {},

        }).then(response => {
            console.log(response);
            t = response.data
            this.setState({ products: response.data })
        })
    }
    render() {
        const login=localStorage.getItem("user", false)
        return (
            <div>
                <div className='row'>
                    <h2 className='col-12'>San pham </h2>
                    <input type="button" placeholder='Tang' className='col-12'
                        onClick={() => {
                            const sortedProducts = [...this.state.products].sort((a, b) => a.price - b.price);
                            this.setState({ title: 'Sap xep tang', products: sortedProducts });
                            console.log(sortedProducts);
                        }
                        }>
                    </input>
                    <input type="button" placeholder='Giam' className='col-12'
                        onClick={() => {
                            const sortedProducts = [...this.state.products].sort((a, b) => b.price - a.price);
                            this.setState({ title: 'Sap xep giam', products: sortedProducts });
                            console.log(sortedProducts);
                        }
                        }>
                    </input>
                </div>
                <div className='row'>
                    <h2 className='col-12'>Danh sach san pham </h2>
                    {this.state.products.map(x =>
                        <div className='col-3'>
                            <div className="product card" key={x.id}>
                                    <img src={x.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Hinh anh: {x.name}</h5>
                                        <p className="card-text"> Gioi thieu: {x.detail}</p>
                                        <div className="align-items-center ">
                                            <h6 className="font-weight-bold">Price:{x.price}</h6>
                                        </div>
                                        <a href="#" className="btn btn-primary">BUY???</a>
                                        {login?<button className="btn btn-primary" onClick={()=>this.xoaSanPham(x.id)}>Xoa</button>:""}
                                    </div>
                                </div>
                        </div>
                                
                    )}

                </div>
            </div>
        );
    }
}

export default Product;