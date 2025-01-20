import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get('https://api.github.com/users/matheuscobz');
  return response.data;
};

export const searchIssues = async (texto, username, repo) => {
  const response = await axios.get(`https://api.github.com/search/issues?q=${texto}%20repo:${username}/${repo}`)
}