import React from "react"
import {css} from "@emotion/react"
import {f} from "~/emotionStyles/function.js"

const Footer = () => {
  return(
    <footer css={footerWrap}>
      <p css={footerText}>Beginners20, all rights reserved.</p>
    </footer>
  );
};

const footerWrap = css({
  [f.pc()]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // left: 0,
    // bottom: 0,
    width: "100%",
    height: f.vw(75),
    backgroundColor: "#dcc7aa"
  }
})

const footerText = css({
  [f.pc()]: {
    fontSize: f.vw(15)
  }
})

export default Footer;