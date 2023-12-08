import React from 'react'

//  Components
import Photocard from '../../../../components/ui/Photocard'

// Items
import minji from '../../../../assets/images/items/newjeans/minji.jpg'
import hanni from '../../../../assets/images/items/newjeans/hanni.jpg'
import danielle from '../../../../assets/images/items/newjeans/danielle.jpg'
import haerin from '../../../../assets/images/items/newjeans/haerin.jpg'
import hyein from '../../../../assets/images/items/newjeans/hyein.jpg'

type Props = {}

const NewJeans = (props: Props) => {
  return (
    <div className="newjeans-containter">
      <h1 className="text-[2.5rem] font-[900] mb-4 mt-[50px]">NewJeans</h1>
      <hr />
      <div className="items inline-grid grid-cols-2 gap-[10px] mt-[16px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
        <Photocard src={ minji } name={ "Minji" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ danielle } name={ "Danielle" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ haerin } name={ "Haerin" } theme={ "GET UP" } price={ 100 } />
        <Photocard src={ hyein } name={ "Hyein" } theme={ "GET UP" } price={ 100 } />
      </div>
    </div>
  )
}

export default NewJeans