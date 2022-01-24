import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [bookData, setBookData] = useState([]);

  const [bookTitle, setBookTitle] = useState("");
  const [bookReview, setBookReview] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/backend/all");
      const data = response.data;
      console.log(data);
      setBookData(data);
    };

    getData();
  }, []);

  const handleTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleReviewChange = (e) => {
    setBookReview(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const review = e.target[1].value;

    const book = {
      title: title,
      review: review,
    };

    const sendData = async () => {
      const request = axios.post("/backend/save", book);
      const nb = (await request).data;
      setBookData(bookData.concat(nb));
    };

    sendData();
  };

  const handleDelete = (idBook) => {
    const deleteBook = async () => {
      const del = await axios.delete("/backend/delete", {
        data: { id: idBook },
      });

      await setBookData(bookData.filter((x) => x._id !== idBook));
      console.log(idBook);
      console.log(bookData);
    };

    deleteBook();
  };

  return (
    <div>
      <h1>Knjige</h1>
      <p>To pa je tretja verzija aplikacije.</p>
      <form onSubmit={handleFormSubmit}>
        <p>
          Vnesi ime knjige:{" "}
          <input value={bookTitle} onChange={handleTitleChange} />
        </p>
        <p>
          Vnesi opis knjige:{" "}
          <input value={bookReview} onChange={handleReviewChange} />
        </p>
        <button type="submit">Dodaj opis</button>
      </form>
      <ul>
        {bookData.map((n) => (
          <li key={n._id}>
            <p>
              <b>{n.title}:</b> {n.review}{" "}
              <button
                onClick={() => {
                  handleDelete(n._id);
                }}
              >
                Izbrisi
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
