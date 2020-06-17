import React from "react";
import { Spinner } from 'reactstrap';
const SpinnerPage = () => {
  return (
    <>
      <br></br>
      <Spinner type="grow" color="info" />
      {/* <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div> */}
    </>
  );
}

export default SpinnerPage;