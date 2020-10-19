// @flow

// Note: we define properties with JSdoc since documentation.js doesn't recognize
// exported types yet. See https://github.com/documentationjs/documentation/issues/680

/**
 * @property {boolean}  AA
 * @property {boolean}  AALarge
 * @property {boolean}  AAA
 * @property {boolean}  AAALarge
 */
export type ContrastScores = {|
  AA: boolean,
  AALarge: boolean,
  AAA: boolean,
  AAALarge: boolean,
|}

/**
 * @property {number | void}  red
 * @property {number | void}  green
 * @property {number | void}  blue
 * @property {number | void}  hue
 * @property {number | void}  saturation
 * @property {number | void}  lightness
 * @property {number | void}  alpha
 */
export type UnknownColor = {|
  red: number | void,
  green: number | void,
  blue: number | void,
  hue: number | void,
  saturation: number | void,
  lightness: number | void,
  alpha: number | void
|}

/**
 * @property {number}  hue
 * @property {number}  saturation
 * @property {number}  lightness
 */
export type HslColor = {|
  hue: number,
  saturation: number,
  lightness: number,
|}

/**
 * @property {number}  hue
 * @property {number}  saturation
 * @property {number}  lightness
 * @property {number}  alpha
 */
export type HslaColor = {|
  hue: number,
  saturation: number,
  lightness: number,
  alpha: number,
|}

/**
 * @property {number}  red
 * @property {number}  green
 * @property {number}  blue
 */
export type RgbColor = {|
  red: number,
  green: number,
  blue: number,
|}

/**
 * @property {number}  red
 * @property {number}  green
 * @property {number}  blue
 * @property {number}  alpha
 */
export type RgbaColor = {|
  red: number,
  green: number,
  blue: number,
  alpha: number,
|}