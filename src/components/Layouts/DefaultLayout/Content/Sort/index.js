import './sort.css';
import { useContext } from 'react';
import Context from '../../../../store/Context';
import {actions} from '../../../../store' 
const Sort = () => {
  const storeContext = useContext(Context)
  const [state,dispatch] = storeContext
  return (
    <div className="container">
      <div className="row sectionSearch">
        <p className="col-12 row justify-content-center">
          <span className="sectionSearchTotal col-4">Total Products: ..</span>
          <span className="col-7"><div>Sort by:</div> </span>
        </p>
        <div className="sectionSearchForm form-group col-12 row justify-content-center" id="sectionSearchForm">
          <span className="sectionSearchItem col-4 row justify-content-center">
            <button className="btn btn-outline-secondary sectionSearchLabel col-10"
           onClick={()=>dispatch(actions.sortLowToHight())}
            >
            Price Low to High
            </button>            
          </span>
          <span className="sectionSearchItem col-4 row justify-content-center">
            <button className="btn btn-outline-secondary sectionSearchLabel col-10"
             onClick={()=>dispatch(actions.sortHightToLow())}
            >
            Price High to Low
            </button>           
          </span>
          <span className="sectionSearchItem col-4 row justify-content-center">
            <button className="btn btn-outline-secondary sectionSearchLabel col-10"
        onClick={()=>dispatch(actions.sortProductName())}
            >
            Product Name
            </button>           
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sort;
