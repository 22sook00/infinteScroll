
import React, { useState,useRef,useCallback } from 'react';
import './App.css';
import BookList from './BookList';
import useBookSearch from './hook/useBookSearch'

function App() {
  // const [query,setQuery] = useState('');
  // const [pageNumber, setPageNumber]= useState(1);
  
  // const handleSearch = (e) => {
  //   setQuery(e.target.value);
  //   setPageNumber(1)
  // }
  // useBookSearch({query,pageNumber})


  return (
    <div className="App">
      {/* <input type='text' onChange={handleSearch}/> */}
      <BookList />
    </div>
  );
}

export default App;
