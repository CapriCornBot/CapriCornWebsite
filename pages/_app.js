import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Sidebar2 from '../components/sidebar'
import Navbar from '../components/navbar'
// connect to socket io client
const socket = require('../socket').socket
socket.emit("auth", {"token": "public"})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}/>;
}

export default MyApp
