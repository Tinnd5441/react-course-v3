import { useEffect } from 'react';
import authFetch from '../axios/custom';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    const resp1 = await authFetch('/react-store-products');
    console.log("resp1",resp1);
    const resp2 = await axios(randomUserUrl);
    console.log(resp2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
