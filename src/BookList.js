/* eslint-disable array-callback-return */
import React, { useState, useCallback, useRef } from "react";

const BookList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const observer = useRef();
  const lastBookElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("visible");
      }
    });
    // if (node) observer.current.observer(node);
    console.log("node", observer.current);
  }, []);

  const books = [
    { title: "BookList1" },
    { title: "BookList2" },
    { title: "BookList3" },
    { title: "BookList4" },
    { title: "BookList5" },
    { title: "BookList6" },
    { title: "BookList7" },
    { title: "BookList8" },
    { title: "BookList9" },
    { title: "BookList10" },
    { title: "BookList11" },
    { title: "BookList12" },
    { title: "BookList13" },
    { title: "BookList14" },
    { title: "BookList15" },
    { title: "BookList16" },
    { title: "BookList17" },
    { title: "BookList18" },
    { title: "BookList19" },
    { title: "BookList20" },
  ];

  return (
    <section>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <h1 ref={lastBookElementRef} key={index}>
              {book.title}
	</h1>
          );
        } else {
          return <div key={index}>{book.title}</div>;
        }
      })}

      <div>{loading && "Loading"}</div>
	</section>
  );
};

export default BookList;
