import React from 'react'
import DevIcon from "devicon-react-svg";
import {techs} from '../../helpers/techs'

function Technologies() {
  return (
    <div className="technologies__container" id="technologies">
      <div>
        <h1 style={{textAlign: 'center'}}>Some of the techonologies that I use</h1>
      </div>
      <div>
        {techs.map((e, idx) => {
          return (
            <div>
              <DevIcon icon={e.iconName} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Technologies
