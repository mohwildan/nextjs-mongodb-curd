import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(`${process.env.PROD_URL}/api/users/`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${process.env.PROD_URL}/api/users/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Link href="Add">
        <button>Create akun</button>
      </Link>

      {data.map((item, index) => {
        return (
          <div key={item._id}>
            <h4>
              {index + 1}.{item.nama}{" "}
              <Link href={item._id}>
                <button>edit</button>
              </Link>
              <button onClick={() => deleteUser(item._id)}>delete</button>
            </h4>
            <p>{item.email}</p>
          </div>
        );
      })}
    </>
  );
}
