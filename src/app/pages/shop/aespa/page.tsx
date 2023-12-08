import React from 'react'

// Components
import Photocard from '../../../../components/ui/Photocard'

// Items
import aespaone from '../../../../assets/images/items/aespa/1.jpg'
import aespatwo from '../../../../assets/images/items/aespa/2.jpg'
import aespathree from '../../../../assets/images/items/aespa/3.jpg'
import aespafour from '../../../../assets/images/items/aespa/4.jpg'

type Props = {}

const Aespa = (props: Props) => {
  return (
    <div className="aespa-containter">
      <h1 className="text-[2.5rem] font-[900] mb-4 mt-[50px]">NewJeans</h1>
      <hr />
      <div className="items inline-grid grid-cols-2 gap-[10px] mt-[16px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
        <Photocard src={ aespaone } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ aespatwo } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ aespathree } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ aespafour } name={ "Name" } theme={ "GET UP" } price={ 100 } />
      </div>
    </div>
  )
}

export default Aespa