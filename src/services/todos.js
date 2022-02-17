import axios from 'axios';

const baseUrl = 'http://jsonplaceholder.typicode.com/todos';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

const update = async (data) => {
  const response = await axios.put(`${baseUrl}/${data.id}`, data);
  return response.data;
};

const todosService = { getAll, createNew, update };

export default todosService;