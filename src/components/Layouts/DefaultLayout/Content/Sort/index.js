import './sort.css';
const Sort = () => {
  return (
    <div className="container">
      <div className="row sectionSearch">
        <p className="col-12 row justify-content-center">
          <span className="sectionSearchTotal col-4">Total Products: ..</span>
          <span className="col-7"><div>Sort by:</div> </span>
        </p>
        <form className="sectionSearchForm form-group col-12 row justify-content-center" id="sectionSearchForm">
          <span className="sectionSearchItem col-4 row justify-content-center">
            <button className="btn btn-outline-secondary sectionSearchLabel col-10">
            Price Low to High
            </button>            
          </span>
          <span className="sectionSearchItem col-4 row justify-content-center">
            <button className="btn btn-outline-secondary sectionSearchLabel col-10">
            Price High to Low
            </button>           
          </span>
          <span className="sectionSearchItem col-4 row justify-content-center">
            <button className="btn btn-outline-secondary sectionSearchLabel col-10">
            Product Name
            </button>           
          </span>
        </form>
      </div>
    </div>
  );
};

export default Sort;
