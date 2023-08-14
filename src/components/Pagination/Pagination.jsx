import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({ setPageNumber, pageNumber, info }) => {

  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);


  return (
    <>
      <style jsx="true">
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 12px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        htmlForcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        pageCount={info?.pages}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        pageRangeDisplayed={width < 576 ? 1 : 2}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        nextLabel="Next"
        nextClassName="btn btn-info next"
        previousLabel="Prev"
        previousClassName="btn btn-info prev"
        activeClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
      />
    </>
  );
};


export default Pagination;