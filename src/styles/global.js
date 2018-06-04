import { injectGlobal } from 'emotion'

export default function globalStyles() {
  injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }`
}
