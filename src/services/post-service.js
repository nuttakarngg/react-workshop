import axios from "axios";

export async function getPosts() {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const result = await axios.get(url);
  if (result.status === 200) {
    return result.data;
  }
  return [];
}
