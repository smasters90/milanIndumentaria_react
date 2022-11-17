import React from 'react'


function Footer() {
  return (
    <footer className="footer d-flex flex-column p-2 flex-xl-row justify-content-xl-between align-items-center">
        <h6 className="text-white text-center"> © 2022 Milan Indumentaria. Reservados hrefdos los derechos.</h6>
        <div className="footer__cont--img d-flex flex-row col-10 align-items-center justify-content-center gap-5 col-lg-6 col-md-6 col-xl-4  justify-content-xl-end pe-xl-4">
            <a href="https://www.facebook.com/" className="col-1" target="_blank"><img className="img-fluid" src='/assets/face.png' /></a>
            <a href="https://www.instagram.com/" target="_blank" className="col-1"><img className="img-fluid" src="/assets/instagram.png" /></a>
            <a href="https://www.twitter.com/" target="_blank" className="col-1"><img className="img-fluid" src="/assets/twt.png" /></a>
        </div>  
    </footer>
  )
}

export default Footer