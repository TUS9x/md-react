const Contact = () => {
  return (
    <div className="row justify-content-center">
      <div className="content row">
        <div className="header col-10">
          <h3 className="title" style={{ textAlign: 'center' }}>
            CONTACT US AT
          </h3>
        </div>
        <div className="body col-12 row justify-content-center">
          <div className="col-10">
            <button className="btn-lg btn-outline-secondary" style={{margin:'5px 0'}}>
              <span >                
                <a href="https://goo.gl/maps/v8JewsxyDPaZGa3aA" className="btn-lg btn-outline-secondary">                 
                  Maverick Dress, 33 Đ. Đặng Văn Ngữ, Phường 14, Phú Nhuận, Ho Chi Minh City, Viet Nam
                </a>
              </span>
            </button>
            <button className="btn-lg btn-outline-secondary" style={{margin:'5px 0'}}>
              <span className="link-list-info">            
                <a href="https://goo.gl/maps/ZFAzPnr3eEpKboxH6" className="btn-lg btn-outline-secondary">            
                  Maverick Dress, 121 Đinh Tiên Hoàng, Phường Đa Kao, Quận 1, Ho Chi Minh City, Viet Nam
                </a>
              </span>
            </button>
            <button className="btn-lg btn-outline-secondary" style={{margin:'5px 0'}}>
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
