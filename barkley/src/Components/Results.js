import React from 'react'
import { Link } from 'react-router-dom'

const Results = (props) => {
  const resultslist = props.data.map((obj, index) => {
    return (<tr key={index}>
      <td>
        <div className='media'>
          <figure className='image is-32x32'>
            <img src={obj.profile_pic} alt='' />
          </figure>
          <div className='media-right'>
            <Link to={`/u/${obj.username}`}>{obj.username}</Link>
          </div>
        </div>
      </td>
      <td>
        {obj.description}
      </td>
            </tr>)
  })

  return (
    <div className='results'>
      <div className='panel-block' style={{ padding: 0 + 'px' }}>
        <table className='table is-striped is-fullwidth'>
          <tbody>
            {props.data === 0 && (
              <tr><td className='has-text-centered'>There are no results</td></tr>)}
            {resultslist}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Results
