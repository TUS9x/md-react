import './sort.css';
import { useContext } from 'react';
import Context from '../../../../store/Context';
import {actions} from '../../../../store' 
const Sort = () => {
  const storeContext = useContext(Context)
  const [state,dispatch] = storeContext
  const {condition}=state
  return (
    <div className="container">
      <div className="row sectionSearch justify-content-center">
        <p className="col-12 row">
          <span className="sectionSearchTotal col-4">Total Products: ..</span>
          <span className="col-8">Find your ideal here </span>
        </p>
        <form className="sectionSearchForm form-group col-12 row" id="sectionSearchForm">
          <span className="sectionSearchItem col-4 row">
            <label className="sectionSearchLabel col-4" htmlFor="xBrand">
              Brand:
            </label>
            <select name="xBrand" id="xBrand" className="sectionSearchSelect form-control col-8"
            onChange={(e)=>{dispatch(actions.addBrand(e.target.value))
                            dispatch(actions.filterSortProducts(condition))
            }}
            >
              <option value = "">All</option>
              <option value="banner">Banner</option>
              <option value="david-luke">David-luke</option>
              <option value="one-all">One-all</option>
              <option value="trutex">Trutex</option>
            </select>
          </span>
          <span className="sectionSearchItem col-4 row">
            <label className="sectionSearchLabel col-4" htmlFor="xSort">
              Color:
            </label>
            <select name="xColour" id="xColour" className="sectionSearchSelect form-control col-8"
           onChange={(e)=>{
             dispatch(actions.addColor(e.target.value))
             dispatch(actions.filterSortProducts(condition))
          }}
            >
              <option value="">All</option>
              <option value="amber">Amber</option>
              <option value="black">Black</option>
              <option value="bottle-green">Bottle Green</option>
              <option value="burgundy">Burgundy</option>
              <option value="dark-royal">Dark Royal</option>
              <option value="emerald">Emerald</option>
              <option value="grey">Grey</option>
              <option value="jade">Jade</option>
              <option value="marl-grey">Marl Grey</option>
              <option value="maroon">Maroon</option>
              <option value="navy">Navy</option>
              <option value="purple">Purple</option>
              <option value="red">Red</option>
              <option value="royal">Royal</option>
              <option value="scarlet">Scarlet</option>
              <option value="school-grey">School Grey</option>
              <option value="sky">Sky</option>
            </select>
          </span>
          <span className="sectionSearchItem col-4 row">
            <label className="sectionSearchLabel col-4" htmlFor="xSort">
              Sort By:
            </label>
            <select name="xSort" id="xBrand" className="sectionSearchSelect form-control col-8"
            onChange={(e)=>{
              dispatch(actions.addSortby(e.target.value))
              dispatch(actions.filterSortProducts(condition))
            }}
            >
              <option value="">Recommend</option>
              <option value="priceLowToHigh" onClick={()=>console.Consolelog('lowhight')}>Price Low to High</option>
              <option value="priceHighToLow">Price High to Low</option>
              <option value="productName">Product Name</option>
            </select>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Sort;
