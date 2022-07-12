import Head from "next/head";
import Nav from "./Nav";

const Header = ()=>{
  return(
    <div>
      <Head>
        <title>Sahilnetic</title>
        <meta name="description" content="Hey this is Sahil. Welcome my website" />
        <link rel="icon" href="/favicon.ico" />
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="sahilnetic" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>      </Head>
    <Nav />
    </div>
  )
}

export default Header;