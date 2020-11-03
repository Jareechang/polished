// @flow
import lighten from '@polished/color-lighten'
import saturate from '@polished/color-saturate'
import tint from '@polished/color-tint'
import compose from '../src'

describe('compose', () => {
  it('should compose functions together bottom', () => {
    const colorFunction = compose(tint(0.3), lighten(0.3), saturate(0.2))
    const saturatedColor = saturate(0.2, '#422')
    const lightenedColor = lighten(0.3, saturatedColor)
    const tintedColor = tint(0.3, lightenedColor)
    expect({ color: colorFunction('#422') }).toEqual({
      color: tintedColor,
    })
  })
})