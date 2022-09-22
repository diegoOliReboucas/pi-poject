import { BodyLocation } from '../BodyLocation/Index'
import { BodyStatus } from '../BodyStatus/Index'
import { BodyTop } from '../BodyTop/Index'
import { BodyUltRegistros } from '../BodyUltRegistros/Index'
import * as C from './Styled'

export const Body = () => {
  return (
    <C.Main>
      <BodyTop />
      <BodyUltRegistros />
      <BodyLocation />
      <BodyStatus />
      <C.Footer> <p>Point Maker (logo)</p> </C.Footer>
    </C.Main>
  )
}