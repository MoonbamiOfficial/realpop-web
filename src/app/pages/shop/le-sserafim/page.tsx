import React from 'react'

// Components
import Photocard from '../../../../components/ui/Photocard'

// Items
import leone from '../../../../assets/images/items/leseraffim/1.jpg'
import letwo from '../../../../assets/images/items/leseraffim/2.jpg'
import lethree from '../../../../assets/images/items/leseraffim/3.jpg'
import lefour from '../../../../assets/images/items/leseraffim/4.jpg'
import lefive from '../../../../assets/images/items/leseraffim/5.jpg'

type Props = {}

const LeSserafim = () => {
  return (
    <div className="le-sserafim-containter">
      <h1 className="text-[2.5rem] font-[900] mb-4 mt-[50px]">NewJeans</h1>
      <hr />
      <div className="items inline-grid grid-cols-2 gap-[10px] mt-[16px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
        <Photocard src={ leone } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ letwo } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ lethree } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ lefour } name={ "Name" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ lefive } name={ "Name" } theme={ "GET UP" } price={ 100 } />
      </div>
    </div>
  )
}

export default LeSserafim