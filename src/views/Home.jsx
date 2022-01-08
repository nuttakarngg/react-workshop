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
          <hr />
          <TextInput label="Your name" onChange={setName} value={name} />
          <TextInput label="Your age" onChange={setAge} value={age} />
        </div>
        <div className="card-footer">
          Name = {name ?? "empty name"}, Age = {age ?? "empty age"}
        </div>
      </div>
      <div className="card my-4">
        <div className="card-header">
          <h4>Post Data</h4>
        </div>
        <div className="card-body">
          <table className="table table-responsive table-bordered table-hover table-striped">
            <thead>
              <tr>
                <td>title</td>
                <td>body</td>
              </tr>
            </thead>
            <tbody>
              {data.map(({ title, body,id }) => (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
