import React from 'react';
import { useState,useEffect } from 'react';
import Pagination_component from "./Pagination_component";

export default function Pagination({ data, Pagination_component, title, pageLimit, dataLimit }) {

    const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }


  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    console.log(data);
    console.log(data.slice(startIndex, endIndex))
    return data.slice(startIndex, endIndex);
  };


  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
  
      {/* show the posts, 10 posts at a time */}
      <div >
        {getPaginatedData().map((d, idx) => (
          <Pagination_component key={idx} data={d} />
        ))}
      </div>
  
      {/* show the pagiantion
          it consists of next and previous buttons
          along with page numbers, in our case, 5 page
          numbers at a time
      */}
      <div >
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          
        >
          prev
        </button>
  
        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            
          >
            <span>{item}</span>
          </button>
        ))}
  
        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>
    </div>
  );  



}
