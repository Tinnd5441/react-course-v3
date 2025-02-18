import axios from 'axios';
import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products';

const FirstRequest = () => {

  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
