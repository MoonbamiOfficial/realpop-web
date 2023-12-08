import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Footer from '../../../components/Footer'

// Assets
import Background from '../../../components/bg/Background'

type Props = {}

const NotFound = () => {
  return (
    <>
      <Background />
      <section id="profile" className="container mx-auto  mt-[350px] pt-[100px] pb-[500px] h-full relative text-center">
        <h1 className="text-[4rem] font-[700] capitalize">page not found!</h1>
        <h3>Make sure you're in the right page</h3>
        <p>Go back to <Link to="/" className="text-electric-pink hover:underline">Home</Link>.</p>
      </section>
      <Footer />
    </>
  )
}

export default NotFound