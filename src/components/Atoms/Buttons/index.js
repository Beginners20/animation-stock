import React from "react"
import { Link } from "gatsby"
import {css} from "@emotion/react"
import {f} from "~/emotionStyles/function"

const baseStyle = css({
  display: "inline-block",
  width: "100%",
  height: "100%",
  borderRadius: f.vw(5),
  transition: "all 0.2s ease-out",
})

export const BasicButton = ({children, bgColor, textColor, click}) => {
  const buttonWrap = css(baseStyle,{
    padding: `${f.vw(10)} 0`,
    backgroundColor: bgColor,
    border: `solid 1px ${textColor}`,
    color: textColor,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: textColor,
      color: bgColor,
    }
  })
  return(
    <div css={buttonWrap} onClick={click}>
      {children}
    </div>
  );
}

BasicButton.defaultProps = {
  bgColor: "#fff",
  textColor: "#f7882f",
  click: () => {}
}

export const LinkButton = ({href, target, children, bgColor, textColor}) => {
  return (
    <a href={href} target={target}>
      <BasicButton
        bgColor={bgColor}
        textColor={textColor}
      >
        {children}
      </BasicButton>
    </a>
  );
}

export const RouteButton = ({href, children, bgColor, textColor}) => {
  return (
    <Link to={href}>
      <BasicButton
        bgColor={bgColor}
        textColor={textColor}
      >
        {children}
      </BasicButton>
    </Link>
  );
}

LinkButton.defaultProps = {
  href: "https://google.com",
  target: "_blank",
  bgColor: "#fff",
  textColor: "#f7882f"
};

RouteButton.defaultProps = {
  href: "/",
  bgColor: "#fff",
  textColor: "#f7882f"
}