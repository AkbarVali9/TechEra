import {Link} from 'react-router-dom'
import './index.css'

const Course = props => {
  const {details} = props
  const {id, logoUrl, name} = details

  return (
    <Link to={`/courses/${id}`} className="item-link">
      <li className="list-item">
        <img src={logoUrl} alt={name} className="course-logo" />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}

export default Course
