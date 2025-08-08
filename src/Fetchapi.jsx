import { useEffect, useState } from "react";

function Fetchapi({ url }) {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((v) => {
        console.log(v.quotes);
        setQuotes(v.quotes);
        setLoading(false); 
      });
  }, [url]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Quotes Table</h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading quotes...</p>
      ) : (
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #000", padding: "10px" }}>ID</th>
              <th style={{ border: "1px solid #000", padding: "10px" }}>Quote</th>
              <th style={{ border: "1px solid #000", padding: "10px" }}>Author</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((qu) => (
              <tr key={qu.id}>
                <td style={{ border: "1px solid #000", padding: "10px" }}>{qu.id}</td>
                <td style={{ border: "1px solid #000", padding: "10px" }}>{qu.quote}</td>
                <td style={{ border: "1px solid #000", padding: "10px" }}>{qu.author}</td>
              </tr>
            ))}

          </tbody>
        </table>
      )}
    </>
  );
}

export { Fetchapi };
