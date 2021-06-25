import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

const App = () => {
  return (
    <div>
    {/* LOADER */}
    <div id="preloader">
      <img className="preloader" src="images/loaders/heart-loading2.gif" alt="" />
    </div>
    {/* END LOADER */}
    <header>
      <div className="header-top wow fadeIn">
        <div className="container">
          <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="image" /></a>
          <div className="right-header">
            <div className="header-info">
              <div className="info-inner">
                <span className="icontop"><img src="images/phone-icon.png" alt="#" /></span>
                <span className="iconcont"><a href="tel:800 123 456">800 123 456</a></span>	
              </div>
              <div className="info-inner">
                <span className="icontop"><i className="fa fa-envelope" aria-hidden="true" /></span>
                <span className="iconcont"><a data-scroll href="mailto:info@yoursite.com">info@Lifecare.com</a></span>	
              </div>
              <div className="info-inner">
                <span className="icontop"><i className="fa fa-clock-o" aria-hidden="true" /></span>
                <span className="iconcont"><a data-scroll href="#">Daily: 7:00am - 8:00pm</a></span>	
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom wow fadeIn">
        <div className="container">
          <nav className="main-menu">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i className="fa fa-bars" aria-hidden="true" /></button>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a className="active" href="index.html">Home</a></li>
                <li><a data-scroll href="#about">About us</a></li>
                <li><a data-scroll href="#service">Services</a></li>
                <li><a data-scroll href="#testimonials">Testimonials</a></li>
                <li><a data-scroll href="#getintouch">Contact</a></li>
              </ul>
            </div>
          </nav>
          <div className="serch-bar">
            <div id="custom-search-input">
              <div className="input-group col-md-12">
                <input type="text" className="form-control input-lg" placeholder="Search" />
                <span className="input-group-btn">
                  <button className="btn btn-info btn-lg" type="button">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="home" className="parallax first-section wow fadeIn" data-stellar-background-ratio="0.4" style={{backgroundImage: 'url("images/slider-bg.png")'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="text-contant">
              <h2>
                <span className="center"><span className="icon"><img src="images/icon-logo.png" alt="#" /></span></span>
                <a href className="typewrite" data-period={2000} data-type="[ &quot;Welcome to Life Care&quot;, &quot;We Care Your Health&quot;, &quot;We are Expert!&quot; ]">
                  <span className="wrap" />
                </a>
              </h2>
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
    {/* end section */}
    <div id="time-table" className="time-table-section">
      <div className="container">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="row">
            <div className="service-time one" style={{background: '#2895f1'}}>
              <span className="info-icon"><i className="fa fa-ambulance" aria-hidden="true" /></span>
              <h3>Emergency Case</h3>
              <p>Dignissimos ducimus qui blanditii sentium volta tum deleniti atque cori as quos dolores et quas mole.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="row">
            <div className="service-time middle" style={{background: '#0071d1'}}>
              <span className="info-icon"><i className="fa fa-clock-o" aria-hidden="true" /></span> 
              <h3>Working Hours</h3>
              <div className="time-table-section">
                <ul>
                  <li><span className="left">Monday - Friday</span><span className="right">8.00 – 18.00</span></li>
                  <li><span className="left">Saturday</span><span className="right">8.00 – 16.00</span></li>
                  <li><span className="left">Sunday</span><span className="right">8.00 – 13.00</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="row">
            <div className="service-time three" style={{background: '#0060b1'}}>
              <span className="info-icon"><i className="fa fa-hospital-o" aria-hidden="true" /></span>
              <h3>Clinic Timetable</h3>
              <p>Dignissimos ducimus qui blanditii sentium volta tum deleniti atque cori as quos dolores et quas mole.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about" className="section wow fadeIn">
      <div className="container">
        <div className="heading">
          <span className="icon-logo"><img src="images/icon-logo.png" alt="#" /></span>
          <h2>The Specialist Clinic</h2>
        </div>
        {/* end title */}
        <div className="row">
          <div className="col-md-6">
            <div className="message-box">
              <h4>What We Do</h4>
              <h2>Clinic Service</h2>
              <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
              <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <a href="#services" data-scroll className="btn btn-light btn-radius btn-brd grd1 effect-1">Learn More</a>
            </div>
            {/* end messagebox */}
          </div>
          {/* end col */}
          <div className="col-md-6">
            <div className="post-media wow fadeIn">
              <img src="images/about_03.jpg" alt="" className="img-responsive" />
              <a href="http://www.youtube.com/watch?v=nrJtHemSPW4" data-rel="prettyPhoto[gal]" className="playbutton"><i className="flaticon-play-button" /></a>
            </div>
            {/* end media */}
          </div>
          {/* end col */}
        </div>
        {/* end row */}
        <hr className="hr1" />
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="service-widget">
              <div className="post-media wow fadeIn">
                <a href="images/clinic_01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                <img src="images/clinic_01.jpg" alt="" className="img-responsive" />
              </div>
              <h3>Digital Control Center</h3>
            </div>
            {/* end service */}
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="service-widget">
              <div className="post-media wow fadeIn">
                <a href="images/clinic_02.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                <img src="images/clinic_02.jpg" alt="" className="img-responsive" />
              </div>
              <h3>Hygienic Operating Room</h3>
            </div>
            {/* end service */}
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="service-widget">
              <div className="post-media wow fadeIn">
                <a href="images/clinic_03.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                <img src="images/clinic_03.jpg" alt="" className="img-responsive" />
              </div>
              <h3>Specialist Physicians</h3>
            </div>
            {/* end service */}
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="service-widget">
              <div className="post-media wow fadeIn">
                <a href="images/clinic_01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                <img src="images/clinic_01.jpg" alt="" className="img-responsive" />
              </div>
              <h3>Digital Control Center</h3>
            </div>
            {/* end service */}
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
    <div id="service" className="services wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
            <div className="inner-services">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="serv">
                  <span className="icon-service"><img src="images/service-icon1.png" alt="#" /></span>
                  <h4>PREMIUM FACILITIES</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="serv">
                  <span className="icon-service"><img src="images/service-icon2.png" alt="#" /></span>
                  <h4>LARGE LABORATORY</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="serv">
                  <span className="icon-service"><img src="images/service-icon3.png" alt="#" /></span>
                  <h4>DETAILED SPECIALIST</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="serv">
                  <span className="icon-service"><img src="images/service-icon4.png" alt="#" /></span>
                  <h4>CHILDREN CARE CENTER</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="serv">
                  <span className="icon-service"><img src="images/service-icon5.png" alt="#" /></span>
                  <h4>FINE INFRASTRUCTURE</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="serv">
                  <span className="icon-service"><img src="images/service-icon6.png" alt="#" /></span>
                  <h4>ANYTIME BLOOD BANK</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end section */}
    <div id="testimonials" className="section wb wow fadeIn">
      <div className="container">
        <div className="heading">
          <span className="icon-logo"><img src="images/icon-logo.png" alt="#" /></span>
          <h2>Testimonials</h2>
        </div>
        {/* end title */}
        <div className="row">
          <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <div className="testimonial clearfix">
              <div className="desc">
                <h3><i className="fa fa-quote-left" /> The amazing clinic! Wonderful Support!</h3>
                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
              </div>
              <div className="testi-meta">
                <img src="images/testi_01.png" alt="" className="img-responsive alignleft" />
                <h4>James Fernando <small>- Manager of Racer</small></h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
          </div>
          {/* end col */}
          <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
            <div className="testimonial clearfix">
              <div className="desc">
                <h3><i className="fa fa-quote-left" /> Thanks for Help us!</h3>
                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
              </div>
              <div className="testi-meta">
                <img src="images/testi_02.png" alt="" className="img-responsive alignleft" />
                <h4>Andrew Atkinson <small>- Life Manager</small></h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
          </div>
          {/* end col */}
        </div>
        {/* end row */}
        <hr className="invis" />
        <div className="row">
          <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
            <div className="testimonial clearfix">
              <div className="desc">
                <h3><i className="fa fa-quote-left" /> The amazing clinic! Wonderful Support!</h3>
                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
              </div>
              <div className="testi-meta">
                <img src="images/testi_03.png" alt="" className="img-responsive alignleft" />
                <h4>Amanda DOE <small>- Manager of Racer</small></h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
          </div>
          {/* end col */}
          <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
            <div className="testimonial clearfix">
              <div className="desc">
                <h3><i className="fa fa-quote-left" /> Thanks for Help us!</h3>
                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
              </div>
              <div className="testi-meta">
                <img src="images/testi_01.png" alt="" className="img-responsive alignleft" />
                <h4>Martin Johnson <small>- Founder of Goosilo</small></h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
    {/* end section */}
    <div id="getintouch" className="section wb wow fadeIn" style={{paddingBottom: 0}}>
      <div className="container">
        <div className="heading">
          <span className="icon-logo"><img src="images/icon-logo.png" alt="#" /></span>
          <h2>Get in Touch</h2>
        </div>
      </div>
      <div className="contact-section">
        <div className="form-contant">
          <form id="ajax-contact" action="assets/mailer.php" method="post">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group in_name">
                  <input type="text" className="form-control" placeholder="Name" required="required" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group in_email">
                  <input type="email" className="form-control" placeholder="E-mail" required="required" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group in_email">
                  <input type="tel" className="form-control" id="phone" placeholder="Phone" required="required" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group in_email">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group in_message"> 
                  <textarea className="form-control" id="message" rows={5} placeholder="Message" required="required" defaultValue={""} />
                </div>
                <div className="actions">
                  <input type="submit" defaultValue="Send Message" name="submit" id="submitButton" className="btn small" title="Submit Your Message!" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div id="googleMap" style={{width: '100%', height: '450px'}} />
      </div>
    </div>
    <footer id="footer" className="footer-area wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo padding">
              <a href><img src="images/logo.png" alt="" /></a>
              <p>Locavore pork belly scen ester pine est chill wave microdosing pop uple itarian cliche artisan.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-info padding">
              <h3>CONTACT US</h3>
              <p><i className="fa fa-map-marker" aria-hidden="true" /> PO Box 16122 Collins Street West Victoria 8007 Australia</p>
              <p><i className="fa fa-paper-plane" aria-hidden="true" /> info@gmail.com</p>
              <p><i className="fa fa-phone" aria-hidden="true" /> (+1) 800 123 456</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="subcriber-info">
              <h3>SUBSCRIBE</h3>
              <p>Get healthy news, tip and solutions to your problems from our experts.</p>
              <div className="subcriber-box">
                <form id="mc-form" className="mc-form">
                  <div className="newsletter-form">
                    <input type="email" autoComplete="off" id="mc-email" placeholder="Email address" className="form-control" name="EMAIL" />
                    <button className="mc-submit" type="submit"><i className="fa fa-paper-plane" /></button> 
                    <div className="clearfix" />
                    {/* mailchimp-alerts Start */}
                    <div className="mailchimp-alerts">
                      <div className="mailchimp-submitting" />
                      {/* mailchimp-submitting end */}
                      <div className="mailchimp-success" />
                      {/* mailchimp-success end */}
                      <div className="mailchimp-error" />
                      {/* mailchimp-error end */}
                    </div>
                    {/* mailchimp-alerts end */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyright-area wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="footer-text">
              <p>© 2018. Distributed by <a id="tw" href="https://themewagon.com/" target="_blank">ThemeWagon</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="social">
              <ul className="social-links">
                <li><a href><i className="fa fa-rss" /></a></li>
                <li><a href><i className="fa fa-facebook" /></a></li>
                <li><a href><i className="fa fa-twitter" /></a></li>
                <li><a href><i className="fa fa-google-plus" /></a></li>
                <li><a href><i className="fa fa-youtube" /></a></li>
                <li><a href><i className="fa fa-pinterest" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end copyrights */}
    <a href="#home" data-scroll className="dmtop global-radius"><i className="fa fa-angle-up" /></a>
  </div>
  )
}

export default App
