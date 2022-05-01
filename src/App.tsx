import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import BookList from "./BookList";
import useBookSearch from "./hook/useBookSearch";

//react-query infinite scroll
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      {/* <input type='text' onChange={handleSearch}/> */}
      {/* <BookList /> */}
      <QueryClientProvider client={queryClient}>
        {/* <Component {...pageProps} /> */}
        <Header />
        <Footer />
      </QueryClientProvider>{" "}
    </div>
  );
};

export default App;
