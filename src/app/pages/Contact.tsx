import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Background from '../../components/bg/Background'
import Footer from '../../components/Footer'

// Assets
import Realpop_Logo from '../../assets/images/icon/realpop512x.png'

type Props = {}

const Contact = (props: Props) => {
  return (
    <>
      <Background />
      <section id="contact" className="container mx-auto mt-[350px] py-[100px] h-full flex flex-col px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] lg:flex-row xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
        <div className="contact bg-deep-violet flex flex-col items-center px-[32px] py-[64px] ">
          <h1 className="capitalize text-[2.50rem] font-[700]">How can we help you?</h1>
          <div className="contact-box grid grid-cols-2 gap-4">
            <div className="first-name-section flex flex-col gap-x-[8px] my-5">
              <label className="" htmlFor="first-name" >First Name</label>
              <input id="first-name" className="px-[8px] py-[4px] bg-transparent outline-none " type="text" autoCapitalize="true" autoComplete="true" placeholder="First Name" />
              <hr />
            </div>
            <div className="last-name-section flex flex-col gap-x-[8px] my-5">
              <label className="" htmlFor="last-name" >Last Name</label>
              <input id="last-name" className="px-[8px] py-[4px] bg-transparent outline-none " type="text" autoCapitalize="true" autoComplete="true" placeholder="Last Name" />
              <hr />
            </div>
            <div className="last-name-section flex flex-col col-span-2 gap-x-[8px] my-5">
              <label className="" htmlFor="last-name" >Email</label>
              <input id="email" className="px-[8px] py-[4px] bg-transparent outline-none " type="text" autoComplete="true" placeholder="Email" />
              <hr />
            </div>
            <div className="last-name-section flex flex-col col-span-2 gap-x-[8px] my-5">
              <label className="" htmlFor="last-name" >Your Message</label>
              <textarea id="message" className="px-[8px] py-[4px] bg-transparent outline-none" name="message" cols={30} rows={10} autoComplete="true" placeholder="Aa"></textarea>
              <hr />
            </div>
          </div>
        </div>
        <div className="realpop-team bg-black px-[32px] py-[64px]">
          <h1 className="capitalize text-[2.50rem] font-[700] mb-5">Realpop Team</h1>
          <div className="team-box grid grid-cols-2 gap-[50px]">
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

            <div className="github-repo col-span-2">
              <div className="repo flex items-center gap-x-[16px] text-[1.5rem]">
                <div className="text-[3rem]">
                  <i className="fa-brands fa-github"></i>
                </div>
                <h1 className="font-[700]">Repository</h1>
              </div>
              <Link to="https://github.com/MoonbamiOfficial/realpop-web.git" target="_blank" className="hover:underline text-blue-400">https://github.com/MoonbamiOfficial/realpop-web.git</Link>
            </div>

            <div className="location col-span-2">
              <div className="address flex items-center gap-x-[16px] text-[1.5rem]">
                <div className="text-[3rem]">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h1 className="font-[700]">Address</h1>
              </div>
              <p className="capitalize">blk 2, lot 18, east 1, canary st. springville camella homes, molino iii, bacoor city, cavite
              molino iii, bacoor, cavite, south luzon, 4102</p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact