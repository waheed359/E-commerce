import React from "react";


const Contact = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-12 p-5 text-center mt-5 mb-5 fw-bold  text-white bg-dark">
          <h1>Get In Touch</h1>

        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-4 col-lg-4 p-5 text-center mt-5  fw-bold  text-white bg-dark">
          <h3>Opening Closing Time </h3>
          <span>Mon - Fri: 8am - 8pm</span>
          <br></br>
          <span>Saturday: 9am - 7pm</span>
          <br></br>
          <span>Sunday: 9am - 8pm</span>
        </div>
        <div className="col-4 col-lg-6 p-5 text-center  mt-5  fw-bold  text-white bg-dark">
          <h3>We're here to help! </h3>
          <p className="text-start mt-5">
            Fill out the form with any quarry on your mind and we'll get back to
            you as soon as possible
          </p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-4 col-lg-4 p-5 text-center  fw-bold  text-white bg-dark">
          <h3>Store Location </h3>
          <p className="text-start mt-4">
            500 Terry Francois Street San Francisco, CA 94158
          </p>

          <p className="text-start">info@mysite.com</p>

          <p className="text-start">123-456-7890</p>
        </div>
        <div className="col-4 col-lg-6 p-5 text-center  mb-5 fw-bold  text-white bg-dark">
          <h3>Fill Up to contact us </h3>
          <form className="row">
            <div class=" col-6  form-outline text-start">
              <label
                class="form-label justify-content-start mt-5 text-start"
                for="form16"
              >
                First Name
              </label>
              <input
                type="text"
                id="form16"
                class="input p-2 form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
            </div>
            <div class=" col-6  form-outline text-start">
              <label
                class="form-label justify-content-start mt-5 text-start"
                for="form16"
              >
                Last Name
              </label>
              <input
                type="text"
                id="form16"
                class="p-2 form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
            </div>
            <div class=" col-6  form-outline text-start">
              <label
                class="form-label justify-content-start  text-start"
                for="form16"
              >
                Email *
              </label>
              <input
                type="text"
                id="form16"
                class="p-2 form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
            </div>
            <div class=" col-6  form-outline text-start">
              <label
                class="form-label justify-content-start  text-start"
                for="form16"
              >
                Subject
              </label>
              <input
                type="text"
                id="form16"
                class="p-2 form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
            </div>
            <div class=" col-12  form-outline text-start">
              <label
                class="form-label justify-content-start text-start"
                for="form16"
              >
                Masseage
              </label>
              <textarea
                type="text"
                row={5}
                id="form16"
                class="p-4 form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
               <div class=" col-12  form-outline text-center">
             <button className="btn btn-outline-primary p-2 mx-3 btn-lg mt-5 mb-5 rounded-pill ">
          Submit
        </button> 
        </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
