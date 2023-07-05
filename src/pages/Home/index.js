import { useState, useEffect } from 'react';
import axios from 'axios';
import Sort from '../../components/Layouts/DefaultLayout/Content/Sort';
import Products from '../Products';
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
      <Products/>
    </>
  );
}

export default Home;
