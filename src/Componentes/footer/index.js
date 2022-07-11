import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaExclamationTriangle } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer py-3 fixed-bottom">
        <div className="container">
          <div className="row ">
            <div className="col justify-content-center ">
              <a href="">
                <BsFacebook className="ancora me-2" size={20} />
              </a>
              <a href="">
                <RiInstagramFill className="ancora me-2" size={20} />
              </a>
              <a href="">
                <BsLinkedin className="ancora me-2" size={20} />
              </a>
            </div>
            <div className="rodape col justify-content-end ">
              <a className="ancora" href="Esta com problemas? fale con">
                <FaExclamationTriangle className="me-2" />
                Esta tendo problemas com nosso sistema?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
