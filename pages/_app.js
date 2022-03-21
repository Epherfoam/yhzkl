import '../styles/globals.css'
import Footer from '../components/footer'
import NavigationBar from '../components/navigationBar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
