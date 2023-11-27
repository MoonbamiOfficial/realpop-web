import React from 'react'

// Components
import Background from '../../components/bg/Background'
import Footer from '../../components/Footer'

type Props = {}

const Profile = (props: Props) => {
  return (
    <>
      <Background />
      <section id="profile" className="container mx-auto  mt-[350px] pt-[100px] pb-[500px] h-full relative text-center">
        <h1 className="text-[4rem] font-[700] capitalize">profile coming soon...</h1>
      </section>
      <Footer />
    </>
  )
}

export default Profile