import { useState, useEffect } from 'react';
import axios from 'axios'

function Home() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch('https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn')
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     });
  // }, []);
  useEffect(()=>{

    axios({
      method:'get',
      url: 'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
      data:{},
    }).then(response=>{
      setPosts(response.data)
    },[])
  })
  return (
    <>
      <h2>Home page</h2>
      <p>Đây là nơi load sản phẩm từ API</p>
      <div className='row'> 
       {posts.map((post) => {
        return (
          <div className="data-cart col-3" key={post.id}>
            <div className="product-block-container" data-id={post.id} >
              <img src={post.img} alt={post.title} />
              <h5>{post.name}</h5>
              <p className="product-block-prices"> Price: {post.price}</p>
            </div>
          </div>
        );
      })}
      </div>
     
    </>
  );
}

export default Home;
