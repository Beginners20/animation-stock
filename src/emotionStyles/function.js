import { pcWidth, spWidth } from "./variable"

export class f {
  static vw(arg, displaySize = pcWidth) {
    return `${arg / displaySize * 100}vw`
  }
  static pc() {
    return `@media (min-width: ${spWidth + 1}px)`
  }
  static sp() {
      return `@media (max-width: ${spWidth}px)`
  }
}