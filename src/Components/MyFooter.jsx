import React from 'react'

function MyFooter() {
  return (
    <>
       <div className="myfooter container-fluid mt-5">
          <div className="row ">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6 text-start">
                  <p className='fw-bold'>Popular Catogories</p>
                  <span>Cars</span><br />
                  <span>Flats for rent</span><br />
                  <span>Mobile Phones </span><br />
                  <span>Jobs</span><br />
                </div>
                <div className="col-md-6 text-start">
                  <p className='fw-bold'>Trending Searches</p>
                  <span>Bikes</span><br />
                  <span>Watches</span><br />
                  <span>Books</span><br />
                  <span>Dogs</span><br />
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="row">
                <div className="col-md-6 text-start">
                  <p className='fw-bold'>About Us</p>
                  <span>About Dubbizle Group</span><br />
                  <span>OLX Blogs</span><br />
                  <span>Contact Us</span><br />
                  <span>OLX for Business</span><br />
                </div>
                <div className="col-md-6 text-start">
                  <p className='fw-bold'>OLX</p>
                  <span>Help</span><br />
                  <span>Sitemap</span><br />
                  <span>Terms of use</span><br />
                  <span>Privacy Policy</span><br />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h1>FOLLOW US </h1>
              <i class="fa-brands fa-facebook m-1" height='12'></i>
              <i class="fa-brands fa-instagram m-1"></i>
              <i class="fa-brands fa-twitter m-1"></i>
              <i class="fa-brands fa-google-play m-1"></i>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint sun</p>
            </div>
          </div>
       </div>  
    </>
  )
}

export default MyFooter
    