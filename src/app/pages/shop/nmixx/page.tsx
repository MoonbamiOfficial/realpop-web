import React from 'react'

// Components
import Photocard from '../../../../components/ui/Photocard'

// Items
import one from '../../../../assets/images/items/nmixx/1.jpeg'
import two from '../../../../assets/images/items/nmixx/2.jpeg'
import three from '../../../../assets/images/items/nmixx/3.jpeg'
import four from '../../../../assets/images/items/nmixx/4.jpeg'
import five from '../../../../assets/images/items/nmixx/5.jpeg'
import six from '../../../../assets/images/items/nmixx/6.jpeg'


type Props = {}

const Nmixx = (props: Props) => {
  return (
    <div className="newjeans-containter">
      <h1 className="text-[2.5rem] font-[900] mb-4 mt-[50px]">NewJeans</h1>
      <hr />
      <div className="items inline-grid grid-cols-2 gap-[10px] mt-[16px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
        <Photocard src={ one } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ two } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ three } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ four } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ five } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ six } name={ "Name" } theme={ "GET UP" } price={ 100 } />
      </div>
    </div>
  )
}

export default Nmixx