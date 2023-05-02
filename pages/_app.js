import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <footer>
      Este es el footer
    </footer>
  </div>
}
