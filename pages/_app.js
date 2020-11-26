import '../styles/globals.css'
import GLOBAL from '../lib/global/useContext/context';

function MyApp({ Component, pageProps }) {
  return(
    <GLOBAL>
      <Component {...pageProps} />
    </GLOBAL>
  );
    
}

export default MyApp
