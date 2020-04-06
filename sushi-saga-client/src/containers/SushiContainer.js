import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton' 
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis
          .slice(props.showItems-4, props.showItems)
          .map((sushi, index) => <Sushi key={index} {...sushi}/>)
        }
        <MoreButton handleShowMore={props.handleShowMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer