import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { getPosts } from "../services/post-service";

export default function Home(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [data, setData] = useState([]);

  const _fetchAPI = () => {
    getPosts().then((data) => {
      setData(data);
    });
  };

  useEffect(() => {
    _fetchAPI();
  }, []);

  return (
    <div className="container py-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Home</h4>
          <TextInput label="Your name" onChange={setName} value={name} />
          <TextInput label="Your age" onChange={setAge} value={age} />
        </div>
        <div className="card-footer">
          Name = {name ?? "empty name"}, Age = {age ?? "empty age"}
        </div>
      </div>
    </div>
  );
}
