/* eslint-disable no-undef */
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

const useBookSearch = (query, pageNumber) => {
  console.log(query)

  const [books , setBooks] = useState([]);
  const [hasMore , setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: "GET",
      url: `http://www.omdbapi.com/?t=${query.query}&apikey=552d7127`,
      params: { q: query, page: pageNumber },
      // cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        // setBooks(prevBooks => {
        //   return [...prevBooks, res.data.docs.map(b=>b.title)]
        // })
        console.log("data:", res);
        // return res.data
      })
      .catch((e) => {
        // if (axios.isCancel(e)) return;
        console.dir(e)
      });
    // return () => cancel();
  }, [query,pageNumber]);
  return null;
};

export default useBookSearch;
