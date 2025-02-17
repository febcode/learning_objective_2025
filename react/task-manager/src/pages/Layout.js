
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="../dashboard/dashboard">TaskManager</Link>
          </li> */}
          <li>
            <Link to="/task_manager">TaskManager</Link>
          </li>
          <li>
            <Link to="/user_manager">UserManager</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
      <article>
        <Outlet />
         
      </article>
      </section>
      
    </>
  )
};

export default Layout;