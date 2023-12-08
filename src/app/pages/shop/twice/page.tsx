import React from 'react'

// Components
import Photocard from '../../../../components/ui/Photocard'

// Items
import Nayeon from '../../../../assets/images/items/twice/nayeon.jpeg'
import Jeongyeon from '../../../../assets/images/items/twice/jeongyeon.jpeg'
import Momo from '../../../../assets/images/items/twice/momo.jpeg'
import Sana from '../../../../assets/images/items/twice/sana.jpeg'
import Jihyo from '../../../../assets/images/items/twice/jihyo.jpeg'
import Mina from '../../../../assets/images/items/twice/mina.jpeg'
import Dahyun from '../../../../assets/images/items/twice/dahyun.jpeg'
import Chaeyoung from '../../../../assets/images/items/twice/chaeyoung.jpeg'
import Tzuyu from '../../../../assets/images/items/twice/tzuyu.jpeg'

type Props = {}

const Twice = () => {
  return (
    <div className="twice-container">
      <h1 className="text-[2.5rem] font-[900] mb-4 mt-[50px]">TWICE</h1>
      <hr />
      <div className="items inline-grid grid-cols-2 gap-[10px] mt-[16px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
        <Photocard src={ Nayeon } name={ "Nayeon" } theme={ "CAN'T STOP ME" } price={ 100 } />
        <Photocard src={ Jeongyeon } name={ "Jeongyeon" } theme={ "CAN'T STOP ME" } price={ 100 } />
        <Photocard src={ Momo } name={ "Momo" } theme={ "CAN'T STOP ME" } price={ 100 } />
        <Photocard src={ Sana } name={ "Sana" } theme={ "CAN'T STOP ME" } price={ 100 } />
        <Photocard src={ Jihyo } name={ "Jihyo" } theme={ "CAN'T STOP ME" } price={ 100 } />
        <Photocard src={ Mina } name={ "Mina" } theme={ "CAN'T STOP ME" } price={ 100 } />
        <Photocard src={ Dahyun } name={ "Nayeon" } theme={ "CAN'T STOP ME" } price={ 100 } />
        <Photocard src={ Chaeyoung } name={ "Chaeyoung" } theme={ "CAN'T STOP ME" } price={ 100 } />
        <Photocard src={ Tzuyu } name={ "Tzuyu" } theme={ "CAN'T STOP ME" } price={ 100 } />
      </div>
    </div>
  )
}

export default Twice