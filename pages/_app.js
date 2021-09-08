import '../styles/globals.css'
// connect to socket io client
const socket = require('../socket').socket

function MyApp({ Component, pageProps }) {
  socket.emit("auth", {"token": "public"})
  return <Component {...pageProps} />
}

export default MyApp
