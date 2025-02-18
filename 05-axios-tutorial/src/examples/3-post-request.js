import { useState } from 'react';
import axios from 'axios';
const url = 'https://www.course-api.com/axios-tutorial-post';

const PostRequest = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, formData);
      console.log(resp);
    } catch {
      console.log('error');
    }
  };

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={formData.name}
            onChange={(e) =>  setFormData({ ...formData, [e.target.id]: e.target.value })}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={formData.email}
            onChange={(e) =>  setFormData({ ...formData, [e.target.id]: e.target.value })}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default PostRequest;
