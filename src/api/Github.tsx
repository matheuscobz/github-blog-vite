import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get('https://api.github.com/users/matheuscobz');
  return response.data;
};

export const searchIssues = async () => {
  const issues = await axios.get(`https://api.github.com/search/issues?q=Teste%20repo:matheuscobz/github-blog-vite`)
  return issues.data;
}