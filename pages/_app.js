import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Sidebar2 from '../components/sidebar'
import Navbar from '../components/navbar'
import Footer from "../components/footer"
// connect to socket io client
const socket = require('../socket').socket
socket.emit("auth", {"token": "public"})

function MyApp(all) {
  console.log(all)
  return <>
    <div className="website-grid">
      <div className="sticky top-0 Navbar-container">
        <Navbar />
      </div>
      <div className="Sidebar-container">
        <Sidebar2 page={all.router.route}></Sidebar2>
      </div>
      <div className="Content-container">
        <all.Component {...all.pageProps}/>
      </div>
      <div className="Footer-container sticky bottom-0 text-white">
        <Footer></Footer>
      </div>
    </div>
  </>
}

export default MyApp
