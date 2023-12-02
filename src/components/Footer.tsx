import React from 'react'
import { Link, NavLink, To } from 'react-router-dom'

// Styles
import '../styles/components/footer.css'

// Assets
import Realpop_Logo from '../assets/images/icon/realpop512x.png'


type Props = {
  text: String
  to: To
}

const Footer = () => {
  return (
    <>
      <div className="footer-bg z-[80] absolute border-t-[8px] border-electric-pink bg-opaque-black w-full h-[750px] "></div>
      <footer className="container z-[80] relative mx-auto bottom-0 w-full h-[750px] px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
          <div className="footer-full-content relative py-[50px] flex flex-col items-center gap-y-[80px]">
            <Link to="/" className="brand flex items-center gap-x-[8px] text-[2rem] font-[700] capitalize sm:text-[2.5rem] sm:gap-x-[12px] lg:text-[3rem] xl:text-[3.5rem] premium:text-[4rem]">
              <img src={ Realpop_Logo } alt="Realpop Logo" className="w-[60px] h-[60px] cursor-pointer sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px]" />
              Realpop
            </Link>
            <div className="content flex justify-between w-full">
              {/* Navigate */}
              <div className="navigate flex flex-col gap-y-[16px]">
                <h2 className="text-[1.25rem] font-[700] capitalize sm:text-[1.5rem] lg:text-[1.8rem]">Navigate</h2>
                <div className="links flex flex-col gap-y-[8px]">
                  <Navigate to={"/"} text={"Home"} />
                  <Navigate to={"/about"} text={"About"} />
                  <Navigate to={"/shop"} text={"Shop"} />
                  <Navigate to={"/contact"} text={"Contact"} />
                  <Navigate to={"/help"} text={"Help"} />
                </div>
              </div>
              {/* Follow Us */}
              <div className="follow-us flex flex-col gap-y-[16px]">
                <h2 className="text-[1.25rem] font-[700] capitalize sm:text-[1.5rem] lg:text-[1.8rem]">Follow Us</h2>
                <div className="socmeds ">
                  <div className="chris-section flex flex-col gap-y-[8px] pb-2">
                    <p className="cursor-pointer">Realpop owner:</p>
                    <hr />
                    <Link to="https://www.facebook.com/chrsdrl" target="_blank" className="socmed flex items-center gap-x-[8px]">
                      <div className=""><i className="fa-brands fa-facebook"></i></div>
                      <p>chrsdrl</p>
                    </Link>
                    <Link to="https://www.instagram.com/lakezeus_/" target="_blank" className="socmed flex items-center gap-x-[8px]">
                      <div className=""><i className="fa-brands fa-instagram"></i></div>
                      <p>lakezeus_</p>
                    </Link>
                    <Link to="https://github.com/zyozyoo" target="_blank" className="socmed flex items-center gap-x-[8px]">
                      <div className=""><i className="fa-brands fa-github"></i></div>
                      <p>zyozyoo</p>
                    </Link>
                  </div>
                  <div className="jam-section flex flex-col gap-y-[8px] pb-2">
                    <p className="cursor-pointer">Realpop developer:</p>
                    <hr />
                    <Link to="https://www.facebook.com/MoonbamiOffcl" target="_blank" className="socmed flex items-center gap-x-[8px]">
                      <div className=""><i className="fa-brands fa-facebook"></i></div>
                      <p>MoonbamiOffcl</p>
                    </Link>
                    <Link to="https://www.instagram.com/moonbamidesu/" target="_blank" className="socmed flex items-center gap-x-[8px]">
                      <div className=""><i className="fa-brands fa-instagram"></i></div>
                      <p>moonbamidesu</p>
                    </Link>
                    <Link to="https://github.com/MoonbamiOfficial" target="_blank" className="socmed flex items-center gap-x-[8px]">
                      <div className=""><i className="fa-brands fa-github"></i></div>
                      <p>MoonbamiOfficial</p>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Girl Groups */}
              <div className="navigate flex flex-col gap-y-[16px]">
                <h2 className="text-[1.25rem] font-[700] capitalize sm:text-[1.5rem] lg:text-[1.8rem]">Photocards</h2>
                <div className="links flex flex-col gap-y-[8px]">
                  <li>TWICE</li>
                  <li>NMIXX</li>
                  <li>NewJeans</li>
                  <li>aespa</li>
                  <li>LE SSERAFIM</li>
                </div>
              </div>
            </div>
            <div className="copyright w-full text-center">
              <hr className="border-electric-pink"/>
              <p className="my-4">&copy; {new Date().getFullYear()} Realpop</p>
            </div>
          </div>
      </footer>
    </>
  )
}

const Navigate = (props: Props) => {
  return (
    <NavLink to={props.to} className="footer-nav">{props.text}</NavLink>
  )
}

export default Footer