import "./header.css"
function Header() {
  return (
    <>
      <div className="containerFluid">
        <div className="row" id="top-banner">
          <div className="col-lg-4 col-md-4 col-12" id="top-banner-logo">
            <a href="./" title="Maverick Dress">
              <img src="./image/logo/MTC_FinalLogos-01.png" width={'60%'} alt="anh" />
            </a>
          </div>
          <form className="form-inline my-2 my-lg-2 col-4 row" >
            <input className="form-control mr-md-2 col-8" type="text" placeholder="Search" style={{fontSize:'large'}} />
            <button className="btn btn-outline-secondary my-2 my-sm-0 col-3" type="submit" style={{fontSize:'large'}}>
              Search
            </button>
          </form>
          <div className="col-4 justify-content-end row" id="topBannerIcons">
            <div className="col-3 form-inline" id="topBannerIconsWelcome">
              <a href="./login" className="btn btn-light">
                Log in
              </a>
            </div>
            <div className="col-2 form-inline" id="topBannerIconsAccount">
              <a href="./profile" title="My Account">
              <img src="./image/logo/Icon-Account-Outline-32.png" alt='Profile'/>
              </a>
            </div>
            <div className="col-2 form-inline" id="topBannerIconsBasket">
              <a href="./cart" title="My Bag">
                <img src="./image/logo/Icon-Bag-Outline-32.png" alt='Profile'/>
                <span id="topBannerIconBasketQty" />
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar-expand-md navbar-light bg-secondary  row" style={{margin:'5px 0', padding:'5px 0'}}>
          <ul className="navbar-nav col-12 justify-content-center row">
            <li className="nav-item col-2">
              <a className="nav-link" href="./aboutus" data-toggle="modal" data-target="#modal-aboutus">
                <strong>ABOUT US</strong>
              </a>
            </li>
            <li className="nav-item col-2 dropdown">
              <a className="nav-link" href="./products" id="navbarDropdownMenuLink2">
                <strong>PRODUCTS</strong>
              </a>
            </li>
            <li className="nav-item col-1 " style={{fontSize:'larger'}}>
              <a className="nav-link text-danger" href="./sale">
                <strong>SALE</strong>
              </a>
            </li>
            <li className="nav-item col-2">
              <a className="nav-link" href="./contactus">
                <strong>CONTACT US</strong>
              </a>
            </li>
            <li className="nav-item col-2">
              <a className="nav-link" href="./feedback">
                <strong>FEEDBACK</strong>
              </a>
            </li>
            
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
