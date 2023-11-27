import React from 'react'

// Components
import Background from '../../components/bg/Background'
import Footer from '../../components/Footer'

type Props = {}

const Help = (props: Props) => {
  return (
    <>
      <Background />
      <section id="help" className="container mx-auto mb-[100px] mt-[350px] pt-[100px] h-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] lg:flex-row xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
        <div className="realpop-team bg-black px-[32px] py-[64px]">
          <h1 className="capitalize text-[2.50rem] font-[700] mb-5">FAQ</h1>
          <div className="team-box grid grid-cols-1 gap-[50px]">
            <div className="questions flex flex-col gap-y-[32px] pb-2">
              <hr />
              <div className="question-one">
                <h1 className="text-[1.5rem]">1. How can I pay for my photocards?</h1>
                <p className="answer"><span className="font-[700] text-electric-pink">Answer:</span> Once you have chosen your photocards, a messenger link will be provided by Realpop. It will direct you the seller's facebook messenger and discuss the payment method.</p>
              </div>
              <div className="question-two">
                <h1 className="text-[1.5rem]">2. What countries do you ship to?</h1>
                <p className="answer"><span className="font-[700] text-electric-pink">Answer:</span> We're currently only available to ship or to meet up in Philippines, Luzon so far.</p>
              </div>
              <div className="question-three">
                <h1 className="text-[1.5rem]">3. How long will it take to get my order?</h1>
                <p className="answer"><span className="font-[700] text-electric-pink">Answer:</span> It'will depend if you choose to do a shipping method or meet up.</p>
              </div>
              <div className="question-four">
                <h1 className="text-[1.5rem]">4. What payment methods do you accept?</h1>
                <p className="answer"><span className="font-[700] text-electric-pink">Answer:</span> We're currently accepting gcash or meet up</p>
              </div>
              <div className="question-five">
                <h1 className="text-[1.5rem]">5. How do I cancel/modify an order?</h1>
                <p className="answer"><span className="font-[700] text-electric-pink">Answer:</span> You can cancel orders when your having conversation with the seller.</p>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Help