import React from "react";
import { useState } from "react";
import Popup from "../popup"
import { MdFavoriteBorder } from "react-icons/md";
import {MdFavorite} from "react-icons/md";
 
function Computer() {
  const computerProd = [
    {
      id: 1,
      Url: "https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
      name: "Hp",
      description:
        "Hewlett-Packard (HP) was founded in 1939 by William Hewlett and David Packard and",
        Url2:"https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
        About:
        "Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive Designed to work with Windows or Mac computers, this external hard drive makes backup a snap just drag and dropTo get set up, connect the portable hard drive to a computer for automatic recognition no software required This USB drive provides plug and play simplicity with the included 18 inch USB 3.0 cable",
        Actualprice:"25$",
        Price:"20$",
      tittle:"Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
      saving:"20%",
      Feature:<li>"
        1,
        2,
        3"</li>,
      Note:"",


    },
    {
      id: 2,
      Url: "https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
      name: "Hp",
      description:
        "Hewlett-Packard (HP) was founded in 1939 by William Hewlett and David Packard and",
        Url2:"https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
        About:
        "Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive Designed to work with Windows or Mac computers, this external hard drive makes backup a snap just drag and dropTo get set up, connect the portable hard drive to a computer for automatic recognition no software required This USB drive provides plug and play simplicity with the included 18 inch USB 3.0 cable",
        Actualprice:"25$",
        Price:"20$",
      tittle:"Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
      saving:"20%",
      Feature:<li>"
        1,
        2,
        3"</li>,
      Note:"",
    },
    {
      id: 3,
      Url: "https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
      name: "Hp",
      description:
        "Hewlett-Packard (HP) was founded in 1939 by William Hewlett and David Packard and",
        Url2:"https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
        About:
        "Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive Designed to work with Windows or Mac computers, this external hard drive makes backup a snap just drag and dropTo get set up, connect the portable hard drive to a computer for automatic recognition no software required This USB drive provides plug and play simplicity with the included 18 inch USB 3.0 cable",
        Actualprice:"25$",
        Price:"20$",
      tittle:"Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
      saving:"20%",
      Feature:<li>"
        1,
        2,
        3"</li>,
      Note:"",
    },
    {
      id: 4,
      Url: "https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
      name: "Hp",
      description:
        "Hewlett-Packard (HP) was founded in 1939 by William Hewlett and David Packard and",
        Url2:"https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
        About:
        "Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive Designed to work with Windows or Mac computers, this external hard drive makes backup a snap just drag and dropTo get set up, connect the portable hard drive to a computer for automatic recognition no software required This USB drive provides plug and play simplicity with the included 18 inch USB 3.0 cable",
        Actualprice:"25$",
        Price:"20$",
      tittle:"Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
      saving:"20%",
      Feature:<li>"
        1,
        2,
        3"</li>,
      Note:"",
    },
    {
      id: 5,
      Url: "https://www.pngitem.com/pimgs/m/45-450952_transparent-laptop-png-hp-laptops-images-png-png.png",
      name: "Hp",
      description:
        "Hewlett-Packard (HP) was founded in 1939 by William Hewlett and David Packard and",
        Url2:"https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
        About:
        "Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive Designed to work with Windows or Mac computers, this external hard drive makes backup a snap just drag and dropTo get set up, connect the portable hard drive to a computer for automatic recognition no software required This USB drive provides plug and play simplicity with the included 18 inch USB 3.0 cable",
        Actualprice:"25$",
        Price:"20$",
      tittle:"Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
      saving:"20%",
      Feature:<li>"
        1,
        2,
        3"</li>,
      Note:"",
    },
    {
      id: 6,
      Url: "https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
      name: "Hp",
      description:
        "Hewlett-Packard (HP) was founded in 1939 by William Hewlett and David Packard and",
        Url2:"https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
        About:
        "Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive Designed to work with Windows or Mac computers, this external hard drive makes backup a snap just drag and dropTo get set up, connect the portable hard drive to a computer for automatic recognition no software required This USB drive provides plug and play simplicity with the included 18 inch USB 3.0 cable",
        Actualprice:"25$",
        Price:"20$",
      tittle:"Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
      saving:"20%",
      Feature:<li>"
        1,
        2,
        3"</li>,
      Note:"",
    },
    {
      id: 7,
      Url: "https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
      name: "Hp",
      description:
        "Hewlett-Packard (HP) was founded in 1939 by William Hewlett and David Packard and",
        Url2:"https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
        About:
        "Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive Designed to work with Windows or Mac computers, this external hard drive makes backup a snap just drag and dropTo get set up, connect the portable hard drive to a computer for automatic recognition no software required This USB drive provides plug and play simplicity with the included 18 inch USB 3.0 cable",
        Actualprice:"25$",
        Price:"20$",
      tittle:"Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
      saving:"20%",
      Feature:<li>"
        1,
        2,
        3"</li>,
      Note:"",
    },
    {
      id: 8,
      Url: "https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
      name: "Hp",
      description:
        "Hewlett-Packard (HP) was founded in 1939 by William Hewlett and David Packard and",
        Url2:"https://www.hp.com/us-en/shop/app/assets/images/product/1B9N3AV_1/center_facing.png?_=1638007562613&imwidth=270&imdensity=1",
        About:
        "Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive Designed to work with Windows or Mac computers, this external hard drive makes backup a snap just drag and dropTo get set up, connect the portable hard drive to a computer for automatic recognition no software required This USB drive provides plug and play simplicity with the included 18 inch USB 3.0 cable",
        Actualprice:"25$",
        Price:"20$",
      tittle:"Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
      saving:"20%",
      Feature: "1 , 2 , 3",
      Note:"Portable 2TB External Hard Drive ",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12  text-center mt-4 mb-4">
          <h1>Computer product</h1>
        </div>
      </div>
      <div className="row">
        {computerProd.map((desc) => (
          <div className="col-2 col-md-3 mb-5">
            <div className="card"  >
              <img src={desc.Url} style={{height:"100%"}} className="card-img-top" />
              <div className="card-body"  >
                <h5 className="card-title" >{desc.name}</h5>
                <p className="card-text" >{desc.description}</p>
                <div className="row">
                  <a className="col-6 btn btn-primary"  onClick={togglePopup}
>
                    View Detail
                    
                  </a>
               
                  <a href="" className="col-3  justify-content-end" >
                    <MdFavoriteBorder 
                      style={{
                        height: "25px",
                        width: "25px",
                        marginLeft: "50px",
                        marginTop: "3px",
                        color:"red"
                      }}
                    />
                    
                  </a>
                   

                    
                  {isOpen && <Popup
      content={<>
        <div className="row">
            <div className="col-6">
              <img src={desc.Url} style={{height:"60%" , width:"70%", marginLeft:"40px",marginTop:"40px"}} className="card-img-top" />
              </div>
              <div className="col-5">
                <h5 className="card-title" >{desc.tittle}</h5>
               <div > <p className="card-text" >{desc.About}</p></div>
               <li>Feature :{desc.Feature}</li>
               <div > <span className="card-text" >Actual Price:{desc.Actualprice}</span></div>
               <div > <span className="card-text" >Price :{desc.Price}</span></div>
               <div > <span className="card-text" >Saving:{desc.saving}</span></div>
               <div > <p className="card-text" >Note :{desc.Note}</p></div>
               <div className="my-3"><button className="btn btn-primary">Add to Cart</button>
               
               <button className="btn btn-primary" style={{marginLeft:'40px'}}>Buy Now </button></div>
                <div className="row">
                   </div></div>
                   </div>
         
      </>}
      handleClose={togglePopup}
    />}  
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Computer;
