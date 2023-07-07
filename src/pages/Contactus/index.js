const Contact = () => {
  return (
    <div className="row justify-content-center">
      <div className="content row">
        <div className="header col-12">
          <h3 className="title" style={{ textAlign: 'center' }}>
            CONTACT US
          </h3>
        </div>
        <div className="body col-12 row justify-content-center">
          <div className="col-10"> 
          <h2>Helpline Number</h2>
          <p>In case of any query please call one of our customer service representatives </p>
          <p>Our helpline is staffed between 9:30am and 4:30pm Monday to Friday.</p>
          <h2>Contact and Company Details</h2>
          <ul className="link-list">
            <li>
              <span className="link-list-title">Email: </span>
              <span className="link-list-info">
                <a href="#">maverickdress@gmail.com</a>
              </span>
            </li>
            <li>
              <span className="link-list-title">Telephone/Zalo: </span>
              <span className="link-list-info">000 0000 000 </span>
            </li>
          </ul>
          <h2>Address:</h2>
        </div>
          <div className="col-10">
            <button className="btn-lg btn-outline-secondary" style={{ margin: '5px 0' }}>
              <span>
                <a href="https://goo.gl/maps/v8JewsxyDPaZGa3aA" className="btn-lg btn-outline-secondary">
                  Maverick Dress, 33 Đ. Đặng Văn Ngữ, Phường 14, Phú Nhuận, Ho Chi Minh City, Viet Nam
                </a>
              </span>
            </button>
            <button className="btn-lg btn-outline-secondary" style={{ margin: '5px 0' }}>
              <span className="link-list-info">
                <a href="https://goo.gl/maps/ZFAzPnr3eEpKboxH6" className="btn-lg btn-outline-secondary">
                  Maverick Dress, 121 Đinh Tiên Hoàng, Phường Đa Kao, Quận 1, Ho Chi Minh City, Viet Nam
                </a>
              </span>
            </button>
            <button className="btn-lg btn-outline-secondary" style={{ margin: '5px 0' }}>
              <span className="link-list-info">
                <a href="https://goo.gl/maps/QbcESSP7A7end8KfA" className="btn-lg btn-outline-secondary">
                  Maverick Dress, 102 Nguyễn Đình Chính, Phường 15, Phú Nhuận, Thành phố Hồ Chí Minh 725060, Việt Nam
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Contact;
