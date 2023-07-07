import './header.css';
import MainNavigation from '../../../MainNavi/MainNavigation';
import ShopContext from '../../../GlobalState/ShopContext';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../../store/Context';
import {actions} from '../../../store'
function Header() {
  const context = useContext(ShopContext);
  const storeContext = useContext(Context)
  const [state,dispatch] =storeContext
  const {condition}=state
  return (
    <>
      <div className="container">
        <div className="row" id="top-banner">
          <div className="col-lg-4 col-md-4 col-12" id="top-banner-logo">
            <NavLink to="/" title="Maverick Dress">
              <img src="./image/logo/MTC_FinalLogos-01.png" width={'60%'} alt="anh" />
            </NavLink>
          </div>
          <form className="form-inline my-2 my-lg-2 col-4 row">
            <input
              className="form-control mr-md-2 col-8"
              type="text"
              placeholder="Search"
              style={{ fontSize: 'large' }}
              onChange={(e)=>dispatch(actions.searchProducts(e.target.value))}        
            />
            <button
              className="btn btn-outline-secondary my-2 my-sm-0 col-3"
              type="submit"
              style={{ fontSize: 'large' }}
            >
              Search
            </button>
          </form>
          <div className="col-4 justify-content-end row" id="topBannerIcons">
            <div className="col-3 form-inline" id="topBannerIconsWelcome">
              <NavLink to="/login" className="btn btn-light">
                Log in
              </NavLink>
            </div>
            <div className="col-2 form-inline" id="topBannerIconsAccount">
              <NavLink to="/profile" title="My Account">
                <img src="./image/logo/Icon-Account-Outline-32.png" alt="Profile" />
              </NavLink>
            </div>
            <NavLink
              to="/cart"
              className="col-2 form-inline"
              id="topBannerIconsBasket"
              style={{
                backgroundImage: 'url(./image/logo/Icon-Bag-Outline-32.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            >
              <span
                id="topBannerIconBasketQty"
                style={{ color: 'whitesmoke', fontSize: 'smaller', margin: '0', padding: '0 0 10px 15px' }}
              >
                <div style={{ backgroundColor: 'green', padding: '1px 7px 0 8px', borderRadius: '100%' }}>
                  <MainNavigation
                    cartItemNumber={context.cart.reduce((count, curItem) => {
                      return count + curItem.quantity * 1;
                    }, 0)}
                  />
                </div>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="containerFuild">
        <div>
          <nav className="navbar-expand-md navbar-light bg-secondary  row"
            style={{ margin: '5px 0', padding: '5px 0' }}
          >
            <ul className="navbar-nav col-12 justify-content-center row">
              <li className="nav-item col-2">
                <NavLink className="nav-link" to="/aboutus">
                  <strong>ABOUT US</strong>
                </NavLink>
              </li>
              <li className="nav-item col-2">
                <NavLink className="nav-link" to="/products">
                  <strong>PRODUCTS</strong>
                </NavLink>
              </li>
              <li className="nav-item col-2 " style={{ fontSize: 'larger' }}>
                <NavLink className="nav-link text-danger" to="/sale">
                  <strong>SALE</strong>
                </NavLink>
              </li>
              <li className="nav-item col-2">
                <NavLink className="nav-link" to="/contactus">
                  <strong>CONTACT US</strong>
                </NavLink>
              </li>
              <li className="nav-item col-2">
                <NavLink className="nav-link" to="/feedback">
                  <strong>FEEDBACK</strong>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="containerFuild">
        <div>
          <marquee className="row" behavior="alternate">
              <div className="homePageBrands">
                <div className="homePageBrandLogo">
                  <a  title="One+All Schoolwear">
                    <img src="./image/brand/One-All.png" alt="One+All Schoolwear" />
                  </a>
                </div>
                <div className="homePageBrandLogo">
                  <a  title="Banner Schoolwear">
                    <img src="./image/brand/Banner.png" alt="Banner Schoolwear" />
                  </a>
                </div>
                <div className="homePageBrandLogo">
                  <a title="Trutex Schoolwear">
                    <img src="./image/brand/Trutex.png" alt="Trutex Schoolwear" />
                  </a>
                </div>
                <div className="homePageBrandLogo">
                  <a title="Winterbottom's Schoolwear">
                    <img src="./image/brand/Winterbottoms.png" alt="Winterbottom's Schoolwear" />
                  </a>
                </div>
                <div className="homePageBrandLogo">
                  <a title="Akoa Sportswear">
                    <img src="./image/brand/Akoa.png" alt="Akoa Sportswear" />
                  </a>
                </div>
                <div className="homePageBrandLogo">
                  <a title="Falcon Sportswear">
                    <img src="./image/brand/Falcon.png" alt="Falcon Sportswear" />
                  </a>
                </div>
                <div className="homePageBrandLogo">
                  <a title="JUCO Sportswear">
                    <img src="./image/brand/JUCO.png" alt="JUCO Sportswear" />
                  </a>
                </div>
                <div className="homePageBrandLogo">
                  <a title="Chadwick Teamwear">
                    <img src="./image/brand/Term-Footwear.png" alt="Chadwick Teamwear" />
                  </a>
                </div>
                <div className="homePageBrandLogo">
                  <a title="David Luke Schoolwear">
                    <img src="./image/brand/David-Luke.png" alt="David Luke Schoolwear" />
                  </a>
                </div>
            </div>
          </marquee>
        </div>
      </div>
    </>
  );
}

export default Header;
