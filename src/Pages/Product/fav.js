import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import {MdFavorite} from "react-icons/md";
export default function 
() {
  return (
    <div>
         <a href="" className="col-3  justify-content-end">
                    <MdFavoriteBorder  onClick={< MdFavorite/>}
                      style={{
                        height: "30px",
                        width: "30px",
                        marginLeft: "35px",
                        marginTop: "3px",
                      }}
                    />
                    
                  </a>
    </div>
  )
}
