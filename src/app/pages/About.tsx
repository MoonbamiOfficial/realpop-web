import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Background from '../../components/bg/Background'
import Footer from '../../components/Footer'

// Assets
import Realpop from '../../assets/images/realpop-socprev.png'
import Realpop_Team from '../../assets/images/founder-ceo.png'

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <Background />
      <section id="about" className="container mx-auto mt-[350px] py-[100px] h-full relative flex flex-col gap-y-[50px]">
        {/* About Realpop */}
          <div className="about-realpop relative flex flex-col items-center">
            <img src={ Realpop } alt="Realpop Social Preview" className="z-10 w-[400px] h-[200px] rounded-[32px] sm:w-[450px] sm:h-[225px] md:w-[500px] md:h-[250px] lg:w-[600px] lg:h-[300px]" />
            <div className="text-bg pb-[75px] mt-[-75px] flex flex-col items-center bg-opaque-black w-[450px] rounded-[32px] sm:w-[550px] md:w-[650px] lg:w-[700px]">
              <div className="text-holder mt-[75px] w-[400px] gap-y-[8px] md:w-[500px] lg:w-[600px]">
                <h1 className="capitalize text-[2.5rem] font-[700] tracking-[-0.025rem]">About Realpop</h1>
                <hr />
                <p className="mt-2 w-[400px] md:w-[500px] lg:w-[600px]">Realpop loves K-Pop just as much as you do! Listening to your favorite K-Pop artists brings us a lot of happiness in our life, but it's a little expensive to support them, isn&apos;t it? Realpop hopes our buyers will be happy with the prices of our girl group photocards from the current girl groups available. These girl groups include the TWICE,  NMIXX, NewJeans, aespa and LESSERAFIM.</p>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="about-us relative flex flex-col items-center">
            <div className="z-10 relative">
              <img src={ Realpop_Team } alt="Realpop Team" className="z-10 w-[400px] h-[200px] rounded-[32px] sm:w-[450px] sm:h-[225px] md:w-[500px] md:h-[250px] lg:w-[600px] lg:h-[300px]" />
              <div className="names absolute top-0 flex w-full justify-around text-[1.25rem] mt-1">
                <h1>Chris</h1>
                <h1>Jam</h1>
              </div>
            </div>
            <div className="text-bg pb-[75px] mt-[-75px] flex flex-col items-center bg-opaque-black w-[450px] rounded-[32px] sm:w-[550px] md:w-[650px] lg:w-[700px]">
              <div className="text-holder mt-[75px] w-[400px] gap-y-[8px] md:w-[500px] lg:w-[600px]">
                <h1 className="capitalize text-[2.5rem] font-[700] tracking-[-0.025rem]">About Us</h1>
                <hr />
                <p className="mt-2 w-[400px] md:w-[500px] lg:w-[600px]">My friend (Chris) and I really love K-Pop especially one of the most popular girl group called TWICE. One day, my instructor decided that my section have to create  project about creating a website. I immediately think about developing my own ecommerce website. That&apos;s why I talked to my friend and asked him to be my client for the website that I want to develop. Together, we created the Realpop for the K-Pop fans around the world as our benificiaries.</p>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="credits relative flex flex-col items-center">
            <img src={ Realpop } alt="Realpop Team" className="z-10 w-[400px] h-[200px] rounded-[32px] sm:w-[450px] sm:h-[225px] md:w-[500px] md:h-[250px] lg:w-[600px] lg:h-[300px]" />
            <div className="text-bg pb-[75px] mt-[-75px] flex flex-col items-center bg-opaque-black w-[450px] rounded-[32px] sm:w-[550px] md:w-[650px] lg:w-[700px]">
              <div className="text-holder mt-[75px] w-[400px] gap-y-[8px] md:w-[500px] lg:w-[600px]">
                <h1 className="capitalize text-[2.5rem] font-[700] tracking-[-0.025rem]">Credits</h1>
                <hr />
                <div className="credits-holder flex flex-col gap-y-[12px] ">
                  <h2 className="mt-2">Videos:</h2>
                  <p className="w-[400px]"><span className="text-electric-pink">●</span> JYP Entertainment. (2021, Jun 9). TWICE "Alcohol-Free" M/V [Video]. YouTube.&nbsp;
                    <Link to="https://youtu.be/XA2YEHn-A8Q?si=NjgKGzcEvwKsWjkT" className="cursor-pointer underline text-blue-400" target="_blank">https://youtu.be/XA2YEHn-A8Q?si=NjgKGzcEvwKsWjkT</Link>
                  </p>
                  <p className=""><span className="text-electric-pink">●</span> JYP Entertainment. (2023, Jul 11). NMIXX "Party O&apos;Clock" M/V [Video]. YouTube.&nbsp;
                    <Link to="https://youtu.be/Rd2wppggYxo?si=V2UK5-bSfOQd5l3H" className="cursor-pointer underline text-blue-400" target="_blank">https://youtu.be/Rd2wppggYxo?si=V2UK5-bSfOQd5l3H</Link>
                  </p>
                  <p className=""><span className="text-electric-pink">●</span> HYBE LABELS. (2023, Jul 7). NewJeans (뉴진스) 'Super Shy' Official MV [Video]. YouTube.&nbsp;
                    <Link to="https://youtu.be/ArmDp-zijuc?si=7OfACNATmgY_RPhG" className="cursor-pointer underline text-blue-400" target="_blank">https://youtu.be/ArmDp-zijuc?si=7OfACNATmgY_RPhG</Link>
                  </p>
                  <p className=""><span className="text-electric-pink">●</span> SMTOWN. (2023, May 8). aespa 에스파 'Spicy' MV [Video]. YouTube.&nbsp;
                    <Link to="https://youtu.be/Os_heh8vPfs?si=ynCR3jGJ1tc9KB0R" className="cursor-pointer underline text-blue-400" target="_blank">https://youtu.be/Os_heh8vPfs?si=ynCR3jGJ1tc9KB0R</Link>
                  </p>
                  <p className=""><span className="text-electric-pink">●</span> HYBE LABELS. (2023, May 1). LE SSERAFIM (르세라핌) 'UNFORGIVEN (feat. Nile Rodgers)' OFFICIAL M/V [Video]. YouTube.&nbsp;
                    <Link to="https://youtu.be/UBURTj20HXI?si=SjrgL7wcMiV6BMfb" className="cursor-pointer underline text-blue-400" target="_blank">https://youtu.be/UBURTj20HXI?si=SjrgL7wcMiV6BMfb</Link>
                  </p>
                  <p className=""><span className="text-electric-pink">●</span> JYP Entertainment. (2017, Dec 11). TWICE "Heart Shaker" M/V [Video]. YouTube.&nbsp;
                    <Link to="https://youtu.be/rRzxEiBLQCA?si=t0yNbbjAWo_tW_Uu" className="cursor-pointer underline text-blue-400" target="_blank">https://youtu.be/rRzxEiBLQCA?si=t0yNbbjAWo_tW_Uu</Link>
                  </p>
                  <p className=""><span className="text-electric-pink">●</span> JYP Entertainment. (2022, Sep 19). NMIXX "DICE" M/V [Video]. YouTube.&nbsp;
                    <Link to="https://youtu.be/p1bjnyDqI9k?si=JXIxHw838_H5URhz" className="cursor-pointer underline text-blue-400" target="_blank">https://youtu.be/p1bjnyDqI9k?si=JXIxHw838_H5URhz</Link>
                  </p>
                  <p className=""><span className="text-electric-pink">●</span> HYBE LABELS. (2023, Jan 3). NewJeans (뉴진스) 'OMG' Official MV (Performance ver.1) [Video]. YouTube.&nbsp;
                    <Link to="https://youtu.be/sVTy_wmn5SU?si=sYhANjSzGV6IhslZ" className="cursor-pointer underline text-blue-400" target="_blank">https://youtu.be/sVTy_wmn5SU?si=sYhANjSzGV6IhslZ</Link>
                  </p>
                  <p className=""><span className="text-electric-pink">●</span> HYBE LABELS. (2022, Oct 16). LE SSERAFIM (르세라핌) 'ANTIFRAGILE' OFFICIAL M/V [Video]. YouTube.&nbsp;
                    <Link to="https://youtu.be/pyf8cbqyfPs?si=uB4a4usdZLPq3bPP" className="cursor-pointer underline text-blue-400" target="_blank">https://youtu.be/pyf8cbqyfPs?si=uB4a4usdZLPq3bPP</Link>
                  </p>
                  <hr />
                  <h2>Assets:</h2>
                  <p className=""><span className="text-electric-pink">●</span><Link to="https://www.flaticon.com/free-icons/hand-heart" className="cursor-pointer underline text-blue-400" target="_blank">Hand-heart icons</Link> created by kerismaker - Flaticon&nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default About