function Footer() {
  return (
    <div id="footer" className="containerFluid bg-secondary row justify-content-center" style={{fontSize:'small',color:'white', paddingTop:'0.5rem'} }>
      <div id="footerInner" className="row col-12">
        <div id="footerLeft" className="col-8">
          Time: &nbsp;
          <a id="time" href="./">
          </a>
          <br /> Email:&nbsp;
          <a href="#">ex@ex.com</a>&nbsp;&nbsp; &nbsp;&nbsp;Telephone:&nbsp;
          <a href="tel:+441432343532">0000&nbsp;00&nbsp;00&nbsp;00</a>&nbsp;&nbsp;
          <br /> Fax:
          <br /> Maverick Dress, 33 Đ. Đặng Văn Ngữ, Phường 14, Phú Nhuận, TP. Hồ Chí Minh 730000, Việt Nam
          <br /> Instagram:
          <br /> Facebook:
        </div>
        <div id="footerRight" className="col-4" >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2559780504657!2d106.66419370996417!3d10.79169625886885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d34a6bd6ab%3A0x5673d22fb78f82dd!2sMaverick!5e0!3m2!1svi!2s!4v1683986856271!5m2!1svi!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{border:'none'}}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
