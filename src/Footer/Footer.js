


import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import "./Footer.css"
           export default function Footer (){
                return(
                    <>
                    <div className="footer_Parent">
 
                            <div className="footer_First">
                                <div className="Bing">Binge 'n<span>Bash</span></div>
                                <div className="icons_Footer">
         <div className="icons_Footer1">
            <FaInstagram />
            </div>
          <div className="icons_Footer1">
            <AiOutlineYoutube />
            </div>
          <div className="icons_Footer1">
            <FaFacebookSquare />
            </div>
         </div>
                    <div className="footer_Last">2023 c Binge 'n Bash,All Rights Reserved</div>
                            </div>
                            <div className="footer_Second">
                                <div>Home</div>
                                <div>Book Now</div>
                                <div>Add-ons</div>
                                <div>About US</div>
                            </div>
                            <div className="footer_Three">
                                <div>Gallery</div>
                                <div>Refund Policy</div>
                                <div>Privacy Policy</div>
                                <div>Terms and Conditions</div>
                            </div>
                            <div className="footer_Four">
                                <div>Contact Us</div>
                                <ul>
                                    <li>401, Meta towers, Hitec city Madhapur,Hyderabad - 500081</li>
                                    <li>+91 9948954545 (WhatsApp only)</li>
                                    <li>admin@bingenbash.com</li>
                                </ul>
                            </div>
                        
                    </div>
                    </>
                )
            }