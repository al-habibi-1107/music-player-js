import React from "react";

import './copyright.css'

function CopyrightSection(prop) {

  return(  <div className="copyright-section">
        <p>The Music in not written or composed by me , all the copyrights are to <b>Youtube</b> and <b>{prop.ytLink}</b></p>
    </div>);


}


export default CopyrightSection;