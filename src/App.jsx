import { useState } from "react";
import Content from "./Content";

const gifts = [
  "Tien",
  "Ming",
  // 'Nam',
];
const courses = [
  {
    id: 1,
    name: "JS",
  },
  {
    id: 2,
    name: "react",
  },
  {
    id: 3,
    name: "devOps",
  },
];
function App() {
  const [gift, setGift] = useState();
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
    console.log(gift);
  };

  //

  const [checked, setChecked] = useState([]);
  console.log(checked);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    // call API
  };

  // 

  const [show, setShow] =useState(false);
  const handleShow = () => {
    setShow(true)
  }
  const handleHide = () => {
    setShow(false)
  }
  return (
    <div style={{ padding: 32 }}>
      <div>{gift || "chưa có phần thưởng"}</div>
      <button onClick={randomGift}>Lấy Thưởng</button>

      {/*  */}
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
      <br />
      <br />
      <button onClick={handleShow}>Show</button>
      <button onClick={handleHide}>Hide</button>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content></Content>}
    </div>
  );
}

export default App;
