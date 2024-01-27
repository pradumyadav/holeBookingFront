import { Link, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import "./Nav.css"
import Carousel from "../Components/Carousel";
// import FormCompo from "../Components/FormCompo";
import Footer from "../Footer/Footer";
import Theater from "../Theater/Theater";
import Dynamic from "../Dynamic/Dynamic";
import Gallery from "../Components/Gallery";
import Login from "../Components/Login";

export default function Nav() {
  return (
    <>
      <div className="first_Parent">
        <div className="parent_Image">
            <img src="https://www.bingenbash.com/static/media/bnb_crown.a8bf7f6fa383aaa00ec739e109c2f8aa.svg"  className="logo_Img" alt="Not Found"/>
        </div>

        <div className="first_Sub_Parent">

        <div className="all_Div_Parent">
            
          <div className="details_Divs padding">
            <IoLocationOutline style={{color:"#c699f9e4"}}/> Hyderabad
          </div>
          <div className="details_Divs"> 
            <MdOutlineEmail style={{color:"#c699f9e4"}}/> admin@bingenbash.com
            </div>
          <div className="details_Divs">
            <FaWhatsapp style={{color:"#c699f9e4"}}/> +919948954545 (WhatsApp only)
            </div>


         <div className="icons_Parent">
         <div className="icons">
            <FaInstagram />
            </div>
          <div className="icons">
            <AiOutlineYoutube />
            </div>
          <div className="icons">
            <FaFacebookSquare />
            </div>
         </div>
          
          
        </div>

        <div className="all_Link_Parent">
          <Link className="link" to="/home">HOME</Link>
          <Link className="link" to="/aboutus">ABOUT US</Link>
          <Link className="link" to="/gallery">GALLERY</Link>
          <Link className="link" to="/refund-policy"> REFUND POLICY</Link>
          <Link className="link" to="/add-ons">ADD-ONS</Link>
          <Link className="link" to="/dynamic">Dynamic component</Link>
          <Link to="/">
          <button className="btn">Login</button>
          </Link>

          
          {/* <button className="btn">Book Now</button> */}
        </div>

        </div>
       
      </div>
      <Carousel/>
       <br/><br/>
       <Theater/> 
      {/* <FormCompo/>  */}
      <br/>
      <Footer/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/refund-policy" element={<Home />} />
        <Route path="/add-ons" element={<Home />} />
        <Route path="/dynamic/:section" element={<Dynamic/>} /> {/* Dynamic route with parameter */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}
