import React, { useState } from "react";
import "../Footer/style.css";

function Footer() {
  const date = new Date();
  const [year, setyear] = useState(date.getFullYear());

  return (
    <div className="footer">
      <div className="text-muted d-none d-md-block">PRIVACY POLICY</div>
      <div className="text-center">© {year} SPARKS BANK - ALL RIGHTS RESERVED</div>
      <div className="text-muted d-none d-md-block">TERMS OF SERVICES</div>
    </div>
  );
}

export default Footer;
