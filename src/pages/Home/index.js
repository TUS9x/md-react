import { useState, useEffect } from 'react';
import axios from 'axios';
import Sort from '../../components/Layouts/DefaultLayout/Content/Sort';
function Home() {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch('https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn')
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     });
  // }, []);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
      data: {},
    }).then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <>
      <Sort/>
      <div className='container' style={{padding:'10px 0'}}>
        <div className='row justify-content-center' style={{border:'1px solid rgb(201, 201, 201)', borderRadius:'5px'}}>
          <h2 className='col-12'>Home page</h2>
          <p className='col-12'>Đây là nơi load sản phẩm từ API</p>
          <div className="row col-12 ">
            {posts.map((post) => {
              return (
                <div className="dataCart col-3" key={post.id} style={{padding:'0'}}>
                  <div className="productBlockContainer" data-id={post.id}>
                    <img src={post.img} alt={post.title} />
                    <h5>{post.name}</h5>
                    <p className="product-block-prices"> Price: {post.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
