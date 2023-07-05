import './header.css';
import MainNavigation from '../../../MainNavi/MainNavigation';
import ShopContext from '../../../GlobalState/ShopContext';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
function Header() {
  const context = useContext(ShopContext);
  return (
    <>
      <div className="container">
        <div className="row" id="top-banner">
          <div className="col-lg-4 col-md-4 col-12" id="top-banner-logo">
            <a href="./" title="Maverick Dress">
              <img src="./image/logo/MTC_FinalLogos-01.png" width={'60%'} alt="anh" />
            </a>
          </div>
          <form className="form-inline my-2 my-lg-2 col-4 row">
            <input
              className="form-control mr-md-2 col-8"
              type="text"
              placeholder="Search"
              style={{ fontSize: 'large' }}
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
              <span id="topBannerIconBasketQty" style={{color:'whitesmoke', fontSize:'smaller',margin:'0', padding:'0 0 10px 25px'}}>
                <div style={{backgroundColor:'green', padding:'1px 7px 0 8px', borderRadius:'100%'}}>
                  <MainNavigation
                    cartItemNumber={context.cart.reduce((count, curItem) => {
                      return count + curItem.quantity;
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
          <nav
            className="navbar-expand-md navbar-light bg-secondary  row"
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
    </>
  );
}

export default Header;
