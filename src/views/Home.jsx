import { useState } from "react";
import TextInput from "../components/TextInput";

export default function Home(props) {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  return (
    <div className="container py-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Home</h4>
          <TextInput label="Your name" onChange={setName} value={name} />
          <TextInput label="Your age" onChange={setAge} value={age} />
          {/* <div className="form-group">
            <p>Your name</p>
            <input
              type="text"
              value={name}
              onChange={(e) =>
                //   (e) => (name = e.target.value)
                setName(e.target.value)
              }
              className="form-control"
              name=""
              id=""
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <p>Your age</p>
            <input
              type="number"
              min="1"
              max="100"
              className="form-control"
              placeholder="Enter your Age"
              value={age}
              onChange={(e) =>
                //   (e) => (name = e.target.value)
                setAge(e.target.value)
              }
            />
          </div> */}
        </div>
        <div className="card-footer">
          Name = {name}, Age = {age}
        </div>
      </div>
    </div>
  );
}
