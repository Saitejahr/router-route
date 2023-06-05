import { Link } from 'react-router-dom'
import '../App.css'
const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/contact" className="link">
        Contact
      </Link>
      <Link to="/blogs" className="link">
        Blogs
      </Link>
    </div>
  )
}

export default Navigation
