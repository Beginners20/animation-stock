import React from "react"

export const Sample = ({children, tag}) => {
  return  (
    <div className={`is-${tag}`}>
      {children}
    </div>
  )
}

Sample.defaultProps = {
  tag: "default"
}

/*
USE
<Sample tag={"hoge"} >
  <div>
    Fuga
  </div>
</Sample>

COMPILE
<div class="is-hoge">
  <div>
    Fuga
  </div>
</div>


 */