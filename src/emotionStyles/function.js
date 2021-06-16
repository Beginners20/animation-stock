import { pcWidth, spWidth } from "./variable"

export class f {
  static vw(arg, displaySize = pcWidth) {
    return `${arg / displaySize * 100}vw`
  }
  static bp(device = "pc") {
    if(device === "pc") {
      return `@media (min-width: ${spWidth+1}px)`
    } else if(device === "sp") {
      return `@media (max-width: ${spWidth}px)`
    } else {
      console.error("The argument of function bp is just 'pc' or 'sp'.\n Please check eval")
    }
  }
}