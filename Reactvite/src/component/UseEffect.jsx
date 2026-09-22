import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [count, setCounter] = useState(0);
  const [pointer, setPointer] = useState('1000');
  const [product, setProduct] = useState([]);

  useEffect(() => {
    //   console.log("Hey...using useEffect hook, count=" + count);
    //   console.log("Hey...using useEffect hook, pointer=" + pointer);
    // }, [count,pointer]);

    async function fetchData() {
      try {
        const data = await fetch('https://fakestoreapi.com/products');
        const jsonData = await data.json();
        console.log(jsonData);
        setProduct(jsonData);
      } catch (e) {
        console.log("Error is:" + e);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>UseEffect</div>

      <h2 style={{ color: "red" }}>count: {count}</h2>
      <h2 style={{ color: "red" }}>pointer: {pointer}</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  width="80"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button onClick={() => setCounter(count + 10)}>
        Counter
      </button>

      <button onClick={() => setPointer(pointer + 10)}>
        Pointer
      </button>
    </div>
  );
}

export default UseEffect;