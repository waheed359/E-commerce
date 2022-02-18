import React from "react";
import { useState } from "react";
import { RiEBike2Fill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { TiArrowSync } from "react-icons/ti";
import { MdPriceChange } from "react-icons/md";

const Home = () => (
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide mt-2 mb-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div
        class="container-fluid carousel-inner "
        style={{ height: "400px", marginRight: "20px" }}
      >
        <div class="carousel-item active">
          <img
            src="https://www.xda-developers.com/files/2021/07/OnePlus-Nord-2-Feature-Image-Watermarked-1900x700_c.jpg"
            class="d-block  w-100"
            alt="..."
          />
        </div>

        <div class="carousel-item">
          <img
            src="https://campaign.kuikr.com/qb/19june19/wqa_857x260.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://cdn.vox-cdn.com/thumbor/zPBbjZglKrkp_yYe4py8vLs4qAU=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23015720/Best_Phone_Grid_Fall_2021_16x9.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img src="3.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <div class="card  row-cols-md-2 justify-content-center  mt-5 g-5 bg-dark text-white">
            <img
              src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020_big.jpg.large.jpg"
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div class="card  row-cols-md-2 justify-content-center   mt-5 g-5 bg-dark text-white">
            <img
              src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020_big.jpg.large.jpg"
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Iphone</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5 mb-1">
      <h1>Product List</h1>
    </div>
    <div className="container">
      <div class="row row-cols-1 row-cols-md-4 border-dark justify-content-center  mt-1 g-5">
        <div class="col">
          <div class="card">
            <img src="3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-3">
          <h4 className="text-drk fs-4 text-nowrap  text-align-center">
            {" "}
            <i className="text-dark">
              {" "}
              <RiEBike2Fill />
            </i>{" "}
            Rider Pickup
          </h4>
        </div>
        <div className="col-3  ">
          <h4 className="text-drk fs-4 text-nowrap  text-align-center">
            {" "}
            <i className="text-dark">
              {" "}
              <FaShippingFast />
            </i>{" "}
            Free Shiping
          </h4>
        </div>
        <div className="col-3  ">
          <h4 className="text-drk fs-4 text-nowrap  text-align-center">
            {" "}
            <i className="text-dark">
              {" "}
              <MdPriceChange />
            </i>{" "}
            Low Prices /change
          </h4>
        </div>
        <div className="col-3 ">
          <h4 className="text-drk fs-4 text-nowrap  text-align-center">
            {" "}
            <i className="text-dark">
              {" "}
              <TiArrowSync />
            </i>{" "}
            Availble to you 24/7
          </h4>
        </div>
      </div>
    </div>
    <div className="container">
      <div class="row row-cols-3  justify-content-center text-center  mt-4 mb-3 g-0">
        <h1>Best Seller</h1>
      </div>
    </div>
    <div className="container">
      <div class="row row-cols-1 row-cols-md-6 border-dark justify-content-center  mt-1 g-1">
        <div class="col">
          <div class="card">
            <img src="3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Computer</h5>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-primary mt-5 mb-5 rounded-pill ">
          View All
        </button>
      </div>
    </div>
    <div className="container">
      <div class="row row-cols-1  border-dark justify-content-center text-center mb-4  mt-1">
        <div class="col">
          <h1>Shop By Categories</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div class="row row-cols-1 row-cols-md-5  border-dark justify-content-center  mt-3 g-4">
        <div class="col  ">
          <img
            src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            class="image-circle"
            alt="..."
          />
          <div class="card-body text-center">
            <a href="/Computer" className="text">
               Computer 
            </a>
          </div>
        </div>
        <div class="col me-1">
          <img
            src="https://www.phoneworld.com.pk/wp-content/uploads/2019/12/DIRBS-tax-collection.jpg"
            class="image-circle"
            alt="mobile"
          />
          <div class="card-body text-center">
            <a href="/Mobile" className="text text-center">
               Mobile 
            </a>
          </div>
        </div>
        <div class="col">
          <img
            src="https://m.media-amazon.com/images/I/71b1xQSUXeL._AC_SL1500_.jpg"
            class="image-circle"
            alt="mobile"
          />
          <div class="card-body text-center">
            <a href="/Drones" className="text">
               Drones 
            </a>
          </div>
        </div>
        <div class="col">
          <img src="3.jpg" class="image-circle" alt="mobile" />
          <div class="card-body text-center">
            <a href="/sale" className="text ">
               Sale 
            </a>
          </div>
        </div>
        <div class="col">
          <img
            src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/tablets/matepad-pro-10-8.jpg"
            class="image-circle"
            alt="mobile"
          />
          <div class="card-body text-center">
            <a href="/Tablet" className="text ">
               Tablet 
            </a>
          </div>
        </div>
        <div class="col">
          <img
            src="https://dzidedimall.com/wp-content/uploads/2021/02/home-appliance1.jpg"
            class="image-circle"
            alt="mobile"
          />
          <div class="card-body text-center">
            <a href="/Homecinema" className="text">
               Home Applicance 
            </a>
          </div>
        </div>
        <div class="col">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Cptvdisplay.jpg"
            class="image-circle"
            alt="mobile"
          />
          <div class="card-body text-center">
            <a href="/T.v" className="text">
             T.v 
            </a>
          </div>
        </div>
        <div class="col">
          <img
            src="https://www.laptab.com.pk/theme/images/product/206483/aefgo-94jnm.png"
            class="image-circle"
            alt="mobile"
          />
          <div class="card-body text-center">
            <a href="/Handfree" className="text">
               Hand free 
            </a>
          </div>
        </div>
        <div class="col">
          <img
            src="https://w11stop.com/image/cache/computer%20accessories/Audionic/audionic,%20reborn,%20rb-108-550x550.png.webp"
            className="image-circle"
            alt="mobile"
          />
          <div class="card-body text-center">
            <a href="/Speaker" className="text text-center">
               Speaker 
            </a>
          </div>
        </div>
      </div>
    </div>

    <footer class="text-center text-lg-start bg-dark text-white">
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
      </section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto  mb-4">
              <h6 class="text-uppercase fw-bold mb-4  ">
                <i class="fas fa-gem me-3"></i>Store
              </h6>
              <p>Describe your shop</p>

              <div className="mt-5">
                <BsFacebook
                  style={{
                    width: "35px",
                    height: "35px",
                    marginLeft: "2px",
                    borderRadius: "16px",
                  }}
                />

                <BsTwitter
                  style={{
                    width: "35px",
                    height: "35px",
                    marginLeft: "15px",
                    borderRadius: "16px",
                  }}
                />
                <BsInstagram
                  style={{
                    width: "35px",
                    height: "35px",
                    marginLeft: "15px",
                    borderRadius: "16px",
                  }}
                />
                <BsPinterest
                  style={{
                    width: "35px",
                    height: "35px",
                    marginLeft: "15px",
                    borderRadius: "16px",
                  }}
                />
              </div>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
              <h6 class="text-uppercase fw-bold mb-4">Shop</h6>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  ShopAll
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Computer
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Tablets
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Headphones
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Drones
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Mobiles
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Watch
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
              <h6 class="text-uppercase fw-bold mb-4 text-center">
                HelpFull links
              </h6>
              <p>
                <a href="/ShopAll" class=" text-reset text-decoration-none">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Help
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center ">
              <h6 class="text-uppercase fw-bold mb-4 text-center">Contact</h6>
              <p>
                <i class="text-center"></i> Rawalpindi, Pakistan
              </p>
              <p>
                <i class="me-0"></i>
                wahed359@gmail.com
              </p>
              <p>
                <i class="me-0"></i>0307-5289715
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
);

export default Home;
