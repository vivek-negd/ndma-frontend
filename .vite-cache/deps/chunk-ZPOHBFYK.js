import {
  clsx
} from "./chunk-LNJWJNFR.js";
import {
  CheckOutlined_default,
  CloseCircleFilled_default,
  CloseOutlined_default,
  CopyOutlined_default,
  EditOutlined_default,
  EnterOutlined_default,
  LoadingOutlined_default
} from "./chunk-7CNLDNX4.js";
import {
  require_react_is
} from "./chunk-XOUVCMTI.js";
import {
  _assertThisInitialized,
  _classCallCheck,
  _createClass,
  _getPrototypeOf,
  _inherits,
  _isNativeReflectConstruct,
  _possibleConstructorReturn,
  _setPrototypeOf,
  _toConsumableArray,
  compile,
  middleware,
  prefixer,
  serialize,
  stringify
} from "./chunk-J7F3PWWO.js";
import {
  require_react_dom
} from "./chunk-SBIUZZPA.js";
import {
  _defineProperty,
  _objectSpread2,
  _slicedToArray,
  _typeof
} from "./chunk-TXQI6IYO.js";
import {
  require_react
} from "./chunk-ROML32FH.js";
import {
  __publicField,
  __toESM
} from "./chunk-ULBN3QDT.js";

// node_modules/antd/es/typography/Paragraph.js
var React115 = __toESM(require_react());

// node_modules/antd/es/typography/Base/index.js
var React114 = __toESM(require_react());

// node_modules/antd/node_modules/@ant-design/icons/es/icons/EditOutlined.js
var React4 = __toESM(require_react());

// node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js
var React3 = __toESM(require_react());

// node_modules/antd/node_modules/@ant-design/fast-color/es/presetColors.js
var presetColors_default = {
  aliceblue: "9ehhb",
  antiquewhite: "9sgk7",
  aqua: "1ekf",
  aquamarine: "4zsno",
  azure: "9eiv3",
  beige: "9lhp8",
  bisque: "9zg04",
  black: "0",
  blanchedalmond: "9zhe5",
  blue: "73",
  blueviolet: "5e31e",
  brown: "6g016",
  burlywood: "8ouiv",
  cadetblue: "3qba8",
  chartreuse: "4zshs",
  chocolate: "87k0u",
  coral: "9yvyo",
  cornflowerblue: "3xael",
  cornsilk: "9zjz0",
  crimson: "8l4xo",
  cyan: "1ekf",
  darkblue: "3v",
  darkcyan: "rkb",
  darkgoldenrod: "776yz",
  darkgray: "6mbhl",
  darkgreen: "jr4",
  darkgrey: "6mbhl",
  darkkhaki: "7ehkb",
  darkmagenta: "5f91n",
  darkolivegreen: "3bzfz",
  darkorange: "9yygw",
  darkorchid: "5z6x8",
  darkred: "5f8xs",
  darksalmon: "9441m",
  darkseagreen: "5lwgf",
  darkslateblue: "2th1n",
  darkslategray: "1ugcv",
  darkslategrey: "1ugcv",
  darkturquoise: "14up",
  darkviolet: "5rw7n",
  deeppink: "9yavn",
  deepskyblue: "11xb",
  dimgray: "442g9",
  dimgrey: "442g9",
  dodgerblue: "16xof",
  firebrick: "6y7tu",
  floralwhite: "9zkds",
  forestgreen: "1cisi",
  fuchsia: "9y70f",
  gainsboro: "8m8kc",
  ghostwhite: "9pq0v",
  goldenrod: "8j4f4",
  gold: "9zda8",
  gray: "50i2o",
  green: "pa8",
  greenyellow: "6senj",
  grey: "50i2o",
  honeydew: "9eiuo",
  hotpink: "9yrp0",
  indianred: "80gnw",
  indigo: "2xcoy",
  ivory: "9zldc",
  khaki: "9edu4",
  lavenderblush: "9ziet",
  lavender: "90c8q",
  lawngreen: "4vk74",
  lemonchiffon: "9zkct",
  lightblue: "6s73a",
  lightcoral: "9dtog",
  lightcyan: "8s1rz",
  lightgoldenrodyellow: "9sjiq",
  lightgray: "89jo3",
  lightgreen: "5nkwg",
  lightgrey: "89jo3",
  lightpink: "9z6wx",
  lightsalmon: "9z2ii",
  lightseagreen: "19xgq",
  lightskyblue: "5arju",
  lightslategray: "4nwk9",
  lightslategrey: "4nwk9",
  lightsteelblue: "6wau6",
  lightyellow: "9zlcw",
  lime: "1edc",
  limegreen: "1zcxe",
  linen: "9shk6",
  magenta: "9y70f",
  maroon: "4zsow",
  mediumaquamarine: "40eju",
  mediumblue: "5p",
  mediumorchid: "79qkz",
  mediumpurple: "5r3rv",
  mediumseagreen: "2d9ip",
  mediumslateblue: "4tcku",
  mediumspringgreen: "1di2",
  mediumturquoise: "2uabw",
  mediumvioletred: "7rn9h",
  midnightblue: "z980",
  mintcream: "9ljp6",
  mistyrose: "9zg0x",
  moccasin: "9zfzp",
  navajowhite: "9zest",
  navy: "3k",
  oldlace: "9wq92",
  olive: "50hz4",
  olivedrab: "472ub",
  orange: "9z3eo",
  orangered: "9ykg0",
  orchid: "8iu3a",
  palegoldenrod: "9bl4a",
  palegreen: "5yw0o",
  paleturquoise: "6v4ku",
  palevioletred: "8k8lv",
  papayawhip: "9zi6t",
  peachpuff: "9ze0p",
  peru: "80oqn",
  pink: "9z8wb",
  plum: "8nba5",
  powderblue: "6wgdi",
  purple: "4zssg",
  rebeccapurple: "3zk49",
  red: "9y6tc",
  rosybrown: "7cv4f",
  royalblue: "2jvtt",
  saddlebrown: "5fmkz",
  salmon: "9rvci",
  sandybrown: "9jn1c",
  seagreen: "1tdnb",
  seashell: "9zje6",
  sienna: "6973h",
  silver: "7ir40",
  skyblue: "5arjf",
  slateblue: "45e4t",
  slategray: "4e100",
  slategrey: "4e100",
  snow: "9zke2",
  springgreen: "1egv",
  steelblue: "2r1kk",
  tan: "87yx8",
  teal: "pds",
  thistle: "8ggk8",
  tomato: "9yqfb",
  turquoise: "2j4r4",
  violet: "9b10u",
  wheat: "9ld4j",
  white: "9zldr",
  whitesmoke: "9lhpx",
  yellow: "9zl6o",
  yellowgreen: "61fzm"
};

// node_modules/antd/node_modules/@ant-design/fast-color/es/FastColor.js
var round = Math.round;
function splitColorStr(str, parseNum) {
  const match2 = str.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [];
  const numList = match2.map((item) => parseFloat(item));
  for (let i = 0; i < 3; i += 1) {
    numList[i] = parseNum(numList[i] || 0, match2[i] || "", i);
  }
  if (match2[3]) {
    numList[3] = match2[3].includes("%") ? numList[3] / 100 : numList[3];
  } else {
    numList[3] = 1;
  }
  return numList;
}
var parseHSVorHSL = (num, _, index) => index === 0 ? num : num / 100;
function limitRange(value, max) {
  const mergedMax = max || 255;
  if (value > mergedMax) {
    return mergedMax;
  }
  if (value < 0) {
    return 0;
  }
  return value;
}
var FastColor = class _FastColor {
  constructor(input) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    __publicField(this, "isValid", true);
    /**
     * Red, R in RGB
     */
    __publicField(this, "r", 0);
    /**
     * Green, G in RGB
     */
    __publicField(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    __publicField(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    __publicField(this, "a", 1);
    // HSV privates
    __publicField(this, "_h");
    __publicField(this, "_hsl_s");
    __publicField(this, "_hsv_s");
    __publicField(this, "_l");
    __publicField(this, "_v");
    // intermediate variables to calculate HSL/HSV
    __publicField(this, "_max");
    __publicField(this, "_min");
    __publicField(this, "_brightness");
    function matchFormat(str) {
      return str[0] in input && str[1] in input && str[2] in input;
    }
    if (!input) {
    } else if (typeof input === "string") {
      let matchPrefix = function(prefix) {
        return trimStr.startsWith(prefix);
      };
      const trimStr = input.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(trimStr)) {
        this.fromHexString(trimStr);
      } else if (matchPrefix("rgb")) {
        this.fromRgbString(trimStr);
      } else if (matchPrefix("hsl")) {
        this.fromHslString(trimStr);
      } else if (matchPrefix("hsv") || matchPrefix("hsb")) {
        this.fromHsvString(trimStr);
      } else {
        const presetColor = presetColors_default[trimStr.toLowerCase()];
        if (presetColor) {
          this.fromHexString(
            // Convert 36 hex to 16 hex
            parseInt(presetColor, 36).toString(16).padStart(6, "0")
          );
        }
      }
    } else if (input instanceof _FastColor) {
      this.r = input.r;
      this.g = input.g;
      this.b = input.b;
      this.a = input.a;
      this._h = input._h;
      this._hsl_s = input._hsl_s;
      this._hsv_s = input._hsv_s;
      this._l = input._l;
      this._v = input._v;
    } else if (matchFormat("rgb")) {
      this.r = limitRange(input.r);
      this.g = limitRange(input.g);
      this.b = limitRange(input.b);
      this.a = typeof input.a === "number" ? limitRange(input.a, 1) : 1;
    } else if (matchFormat("hsl")) {
      this.fromHsl(input);
    } else if (matchFormat("hsv")) {
      this.fromHsv(input);
    } else {
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(input));
    }
  }
  // ======================= Setter =======================
  setR(value) {
    return this._sc("r", value);
  }
  setG(value) {
    return this._sc("g", value);
  }
  setB(value) {
    return this._sc("b", value);
  }
  setA(value) {
    return this._sc("a", value, 1);
  }
  setHue(value) {
    const hsv = this.toHsv();
    hsv.h = value;
    return this._c(hsv);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function adjustGamma(raw) {
      const val = raw / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }
    const R = adjustGamma(this.r);
    const G = adjustGamma(this.g);
    const B = adjustGamma(this.b);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }
  getHue() {
    if (typeof this._h === "undefined") {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._h = 0;
      } else {
        this._h = round(60 * (this.r === this.getMax() ? (this.g - this.b) / delta + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / delta + 2 : (this.r - this.g) / delta + 4));
      }
    }
    return this._h;
  }
  /**
   * @deprecated should use getHSVSaturation or getHSLSaturation instead
   */
  getSaturation() {
    return this.getHSVSaturation();
  }
  getHSVSaturation() {
    if (typeof this._hsv_s === "undefined") {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._hsv_s = 0;
      } else {
        this._hsv_s = delta / this.getMax();
      }
    }
    return this._hsv_s;
  }
  getHSLSaturation() {
    if (typeof this._hsl_s === "undefined") {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._hsl_s = 0;
      } else {
        const l = this.getLightness();
        this._hsl_s = delta / 255 / (1 - Math.abs(2 * l - 1));
      }
    }
    return this._hsl_s;
  }
  getLightness() {
    if (typeof this._l === "undefined") {
      this._l = (this.getMax() + this.getMin()) / 510;
    }
    return this._l;
  }
  getValue() {
    if (typeof this._v === "undefined") {
      this._v = this.getMax() / 255;
    }
    return this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    if (typeof this._brightness === "undefined") {
      this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3;
    }
    return this._brightness;
  }
  // ======================== Func ========================
  darken(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() - amount / 100;
    if (l < 0) {
      l = 0;
    }
    return this._c({
      h,
      s,
      l,
      a: this.a
    });
  }
  lighten(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() + amount / 100;
    if (l > 1) {
      l = 1;
    }
    return this._c({
      h,
      s,
      l,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(input, amount = 50) {
    const color = this._c(input);
    const p = amount / 100;
    const calc = (key) => (color[key] - this[key]) * p + this[key];
    const rgba = {
      r: round(calc("r")),
      g: round(calc("g")),
      b: round(calc("b")),
      a: round(calc("a") * 100) / 100
    };
    return this._c(rgba);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(amount = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, amount);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(amount = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, amount);
  }
  onBackground(background) {
    const bg = this._c(background);
    const alpha = this.a + bg.a * (1 - this.a);
    const calc = (key) => {
      return round((this[key] * this.a + bg[key] * bg.a * (1 - this.a)) / alpha);
    };
    return this._c({
      r: calc("r"),
      g: calc("g"),
      b: calc("b"),
      a: alpha
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(other) {
    return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let hex2 = "#";
    const rHex = (this.r || 0).toString(16);
    hex2 += rHex.length === 2 ? rHex : "0" + rHex;
    const gHex = (this.g || 0).toString(16);
    hex2 += gHex.length === 2 ? gHex : "0" + gHex;
    const bHex = (this.b || 0).toString(16);
    hex2 += bHex.length === 2 ? bHex : "0" + bHex;
    if (typeof this.a === "number" && this.a >= 0 && this.a < 1) {
      const aHex = round(this.a * 255).toString(16);
      hex2 += aHex.length === 2 ? aHex : "0" + aHex;
    }
    return hex2;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getHSLSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const h = this.getHue();
    const s = round(this.getHSLSaturation() * 100);
    const l = round(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${h},${s}%,${l}%,${this.a})` : `hsl(${h},${s}%,${l}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getHSVSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(rgb, value, max) {
    const clone = this.clone();
    clone[rgb] = limitRange(value, max);
    return clone;
  }
  _c(input) {
    return new this.constructor(input);
  }
  getMax() {
    if (typeof this._max === "undefined") {
      this._max = Math.max(this.r, this.g, this.b);
    }
    return this._max;
  }
  getMin() {
    if (typeof this._min === "undefined") {
      this._min = Math.min(this.r, this.g, this.b);
    }
    return this._min;
  }
  fromHexString(trimStr) {
    const withoutPrefix = trimStr.replace("#", "");
    function connectNum(index1, index2) {
      return parseInt(withoutPrefix[index1] + withoutPrefix[index2 || index1], 16);
    }
    if (withoutPrefix.length < 6) {
      this.r = connectNum(0);
      this.g = connectNum(1);
      this.b = connectNum(2);
      this.a = withoutPrefix[3] ? connectNum(3) / 255 : 1;
    } else {
      this.r = connectNum(0, 1);
      this.g = connectNum(2, 3);
      this.b = connectNum(4, 5);
      this.a = withoutPrefix[6] ? connectNum(6, 7) / 255 : 1;
    }
  }
  fromHsl({
    h: _h,
    s,
    l,
    a
  }) {
    const h = (_h % 360 + 360) % 360;
    this._h = h;
    this._hsl_s = s;
    this._l = l;
    this.a = typeof a === "number" ? a : 1;
    if (s <= 0) {
      const rgb = round(l * 255);
      this.r = rgb;
      this.g = rgb;
      this.b = rgb;
      return;
    }
    let r = 0, g = 0, b = 0;
    const huePrime = h / 60;
    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
    if (huePrime >= 0 && huePrime < 1) {
      r = chroma;
      g = secondComponent;
    } else if (huePrime >= 1 && huePrime < 2) {
      r = secondComponent;
      g = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
      g = chroma;
      b = secondComponent;
    } else if (huePrime >= 3 && huePrime < 4) {
      g = secondComponent;
      b = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
      r = secondComponent;
      b = chroma;
    } else if (huePrime >= 5 && huePrime < 6) {
      r = chroma;
      b = secondComponent;
    }
    const lightnessModification = l - chroma / 2;
    this.r = round((r + lightnessModification) * 255);
    this.g = round((g + lightnessModification) * 255);
    this.b = round((b + lightnessModification) * 255);
  }
  fromHsv({
    h: _h,
    s,
    v,
    a
  }) {
    const h = (_h % 360 + 360) % 360;
    this._h = h;
    this._hsv_s = s;
    this._v = v;
    this.a = typeof a === "number" ? a : 1;
    const vv = round(v * 255);
    this.r = vv;
    this.g = vv;
    this.b = vv;
    if (s <= 0) {
      return;
    }
    const hh = h / 60;
    const i = Math.floor(hh);
    const ff = hh - i;
    const p = round(v * (1 - s) * 255);
    const q = round(v * (1 - s * ff) * 255);
    const t = round(v * (1 - s * (1 - ff)) * 255);
    switch (i) {
      case 0:
        this.g = t;
        this.b = p;
        break;
      case 1:
        this.r = q;
        this.b = p;
        break;
      case 2:
        this.r = p;
        this.b = t;
        break;
      case 3:
        this.r = p;
        this.g = q;
        break;
      case 4:
        this.r = t;
        this.g = p;
        break;
      case 5:
      default:
        this.g = p;
        this.b = q;
        break;
    }
  }
  fromHsvString(trimStr) {
    const cells = splitColorStr(trimStr, parseHSVorHSL);
    this.fromHsv({
      h: cells[0],
      s: cells[1],
      v: cells[2],
      a: cells[3]
    });
  }
  fromHslString(trimStr) {
    const cells = splitColorStr(trimStr, parseHSVorHSL);
    this.fromHsl({
      h: cells[0],
      s: cells[1],
      l: cells[2],
      a: cells[3]
    });
  }
  fromRgbString(trimStr) {
    const cells = splitColorStr(trimStr, (num, txt) => (
      // Convert percentage to number. e.g. 50% -> 128
      txt.includes("%") ? round(num / 100 * 255) : num
    ));
    this.r = cells[0];
    this.g = cells[1];
    this.b = cells[2];
    this.a = cells[3];
  }
};

// node_modules/antd/node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function getHue(hsv, i, light) {
  let hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  let saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Math.round(saturation * 100) / 100;
}
function getValue(hsv, i, light) {
  let value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  value = Math.max(0, Math.min(1, value));
  return Math.round(value * 100) / 100;
}
function generate(color, opts = {}) {
  const patterns = [];
  const pColor = new FastColor(color);
  const hsv = pColor.toHsv();
  for (let i = lightColorCount; i > 0; i -= 1) {
    const c = new FastColor({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    });
    patterns.push(c);
  }
  patterns.push(pColor);
  for (let i = 1; i <= darkColorCount; i += 1) {
    const c = new FastColor({
      h: getHue(hsv, i),
      s: getSaturation(hsv, i),
      v: getValue(hsv, i)
    });
    patterns.push(c);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(({
      index,
      amount
    }) => new FastColor(opts.backgroundColor || "#141414").mix(patterns[index], amount).toHexString());
  }
  return patterns.map((c) => c.toHexString());
}

// node_modules/antd/node_modules/@ant-design/colors/es/presets.js
var presetPrimaryColors = {
  "red": "#F5222D",
  "volcano": "#FA541C",
  "orange": "#FA8C16",
  "gold": "#FAAD14",
  "yellow": "#FADB14",
  "lime": "#A0D911",
  "green": "#52C41A",
  "cyan": "#13C2C2",
  "blue": "#1677FF",
  "geekblue": "#2F54EB",
  "purple": "#722ED1",
  "magenta": "#EB2F96",
  "grey": "#666666"
};
var red = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
red.primary = red[5];
var volcano = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
volcano.primary = volcano[5];
var orange = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
orange.primary = orange[5];
var gold = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
gold.primary = gold[5];
var yellow = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
yellow.primary = yellow[5];
var lime = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
lime.primary = lime[5];
var green = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
green.primary = green[5];
var cyan = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
cyan.primary = cyan[5];
var blue = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
blue.primary = blue[5];
var geekblue = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
geekblue.primary = geekblue[5];
var purple = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
purple.primary = purple[5];
var magenta = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
magenta.primary = magenta[5];
var grey = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
grey.primary = grey[5];
var presetPalettes = {
  red,
  volcano,
  orange,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey
};
var redDark = ["#2a1215", "#431418", "#58181c", "#791a1f", "#a61d24", "#d32029", "#e84749", "#f37370", "#f89f9a", "#fac8c3"];
redDark.primary = redDark[5];
var volcanoDark = ["#2b1611", "#441d12", "#592716", "#7c3118", "#aa3e19", "#d84a1b", "#e87040", "#f3956a", "#f8b692", "#fad4bc"];
volcanoDark.primary = volcanoDark[5];
var orangeDark = ["#2b1d11", "#442a11", "#593815", "#7c4a15", "#aa6215", "#d87a16", "#e89a3c", "#f3b765", "#f8cf8d", "#fae3b7"];
orangeDark.primary = orangeDark[5];
var goldDark = ["#2b2111", "#443111", "#594214", "#7c5914", "#aa7714", "#d89614", "#e8b339", "#f3cc62", "#f8df8b", "#faedb5"];
goldDark.primary = goldDark[5];
var yellowDark = ["#2b2611", "#443b11", "#595014", "#7c6e14", "#aa9514", "#d8bd14", "#e8d639", "#f3ea62", "#f8f48b", "#fafab5"];
yellowDark.primary = yellowDark[5];
var limeDark = ["#1f2611", "#2e3c10", "#3e4f13", "#536d13", "#6f9412", "#8bbb11", "#a9d134", "#c9e75d", "#e4f88b", "#f0fab5"];
limeDark.primary = limeDark[5];
var greenDark = ["#162312", "#1d3712", "#274916", "#306317", "#3c8618", "#49aa19", "#6abe39", "#8fd460", "#b2e58b", "#d5f2bb"];
greenDark.primary = greenDark[5];
var cyanDark = ["#112123", "#113536", "#144848", "#146262", "#138585", "#13a8a8", "#33bcb7", "#58d1c9", "#84e2d8", "#b2f1e8"];
cyanDark.primary = cyanDark[5];
var blueDark = ["#111a2c", "#112545", "#15325b", "#15417e", "#1554ad", "#1668dc", "#3c89e8", "#65a9f3", "#8dc5f8", "#b7dcfa"];
blueDark.primary = blueDark[5];
var geekblueDark = ["#131629", "#161d40", "#1c2755", "#203175", "#263ea0", "#2b4acb", "#5273e0", "#7f9ef3", "#a8c1f8", "#d2e0fa"];
geekblueDark.primary = geekblueDark[5];
var purpleDark = ["#1a1325", "#24163a", "#301c4d", "#3e2069", "#51258f", "#642ab5", "#854eca", "#ab7ae0", "#cda8f0", "#ebd7fa"];
purpleDark.primary = purpleDark[5];
var magentaDark = ["#291321", "#40162f", "#551c3b", "#75204f", "#a02669", "#cb2b83", "#e0529c", "#f37fb7", "#f8a8cc", "#fad2e3"];
magentaDark.primary = magentaDark[5];
var greyDark = ["#151515", "#1f1f1f", "#2d2d2d", "#393939", "#494949", "#5a5a5a", "#6a6a6a", "#7b7b7b", "#888888", "#969696"];
greyDark.primary = greyDark[5];

// node_modules/antd/node_modules/@ant-design/icons/es/components/Context.js
var import_react = __toESM(require_react());
var IconContext = (0, import_react.createContext)({});
var Context_default = IconContext;

// node_modules/antd/node_modules/@ant-design/icons/es/components/IconBase.js
var React2 = __toESM(require_react());

// node_modules/@rc-component/util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/@rc-component/util/es/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n);
  }
  let node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

// node_modules/@rc-component/util/es/Dom/dynamicCSS.js
var APPEND_ORDER = "data-rc-order";
var APPEND_PRIORITY = "data-rc-priority";
var MARK_KEY = `rc-util-key`;
var containerCache = /* @__PURE__ */ new Map();
function getMark({
  mark
} = {}) {
  if (mark) {
    return mark.startsWith("data-") ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter((node) => node.tagName === "STYLE");
}
function injectCSS(css, option = {}) {
  if (!canUseDom()) {
    return null;
  }
  const {
    csp,
    prepend,
    priority = 0
  } = option;
  const mergedOrder = getOrder(prepend);
  const isPrependQueue = mergedOrder === "prependQueue";
  const styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, `${priority}`);
  }
  if (csp == null ? void 0 : csp.nonce) {
    styleNode.nonce = csp == null ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  const container = getContainer(option);
  const {
    firstChild
  } = container;
  if (prepend) {
    if (isPrependQueue) {
      const existStyle = (option.styles || findStyles(container)).filter((node) => {
        if (!["prepend", "prependQueue"].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }
        const nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key, option = {}) {
  let {
    styles
  } = option;
  styles || (styles = findStyles(getContainer(option)));
  return styles.find((node) => node.getAttribute(getMark(option)) === key);
}
function removeCSS(key, option = {}) {
  const existNode = findExistNode(key, option);
  if (existNode) {
    const container = getContainer(option);
    container.removeChild(existNode);
  }
}
function syncRealContainer(container, option) {
  const cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    const placeholderStyle = injectCSS("", option);
    const {
      parentNode
    } = placeholderStyle;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key, originOption = {}) {
  var _a, _b, _c;
  const container = getContainer(originOption);
  const styles = findStyles(container);
  const option = {
    ...originOption,
    styles
  };
  syncRealContainer(container, option);
  const existNode = findExistNode(key, option);
  if (existNode) {
    if (((_a = option.csp) == null ? void 0 : _a.nonce) && existNode.nonce !== ((_b = option.csp) == null ? void 0 : _b.nonce)) {
      existNode.nonce = (_c = option.csp) == null ? void 0 : _c.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  const newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

// node_modules/@rc-component/util/es/Dom/shadow.js
function getRoot(ele) {
  var _a;
  return (_a = ele == null ? void 0 : ele.getRootNode) == null ? void 0 : _a.call(ele);
}
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

// node_modules/@rc-component/util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = (fn) => {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    const finalMessage = preWarningFns.reduce((msg, preMessageFn) => preMessageFn(msg ?? "", "warning"), message);
    if (finalMessage) {
      console.error(`Warning: ${finalMessage}`);
    }
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    const finalMessage = preWarningFns.reduce((msg, preMessageFn) => preMessageFn(msg ?? "", "note"), message);
    if (finalMessage) {
      console.warn(`Note: ${finalMessage}`);
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method4, valid, message) {
  if (!valid && !warned[message]) {
    method4(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;

// node_modules/antd/node_modules/@ant-design/icons/es/utils.js
var import_react2 = __toESM(require_react());
function camelCase(input) {
  return input.replace(/-(.)/g, (match2, g) => g.toUpperCase());
}
function warning2(valid, message) {
  warningOnce(valid, `[@ant-design/icons] ${message}`);
}
function isIconDefinition(target) {
  return typeof target === "object" && typeof target.name === "string" && typeof target.theme === "string" && (typeof target.icon === "object" || typeof target.icon === "function");
}
function normalizeAttrs(attrs = {}) {
  return Object.keys(attrs).reduce((acc, key) => {
    const val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate2(node, key, rootProps) {
  if (!rootProps) {
    return import_react2.default.createElement(node.tag, {
      key,
      ...normalizeAttrs(node.attrs)
    }, (node.children || []).map((child, index) => generate2(child, `${key}-${node.tag}-${index}`)));
  }
  return import_react2.default.createElement(node.tag, {
    key,
    ...normalizeAttrs(node.attrs),
    ...rootProps
  }, (node.children || []).map((child, index) => generate2(child, `${key}-${node.tag}-${index}`)));
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
  vertical-align: inherit;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
var useInsertStyles = (eleRef) => {
  const {
    csp,
    prefixCls,
    layer
  } = (0, import_react2.useContext)(Context_default);
  let mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  if (layer) {
    mergedStyleStr = `@layer ${layer} {
${mergedStyleStr}
}`;
  }
  (0, import_react2.useEffect)(() => {
    const ele = eleRef.current;
    const shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: !layer,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};

// node_modules/antd/node_modules/@ant-design/icons/es/components/IconBase.js
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors({
  primaryColor,
  secondaryColor
}) {
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return {
    ...twoToneColorPalette
  };
}
var IconBase = (props) => {
  const {
    icon,
    className,
    onClick,
    style: style2,
    primaryColor,
    secondaryColor,
    ...restProps
  } = props;
  const svgRef = React2.useRef(null);
  let colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  warning2(isIconDefinition(icon), `icon should be icon definiton, but got ${icon}`);
  if (!isIconDefinition(icon)) {
    return null;
  }
  let target = icon;
  if (target && typeof target.icon === "function") {
    target = {
      ...target,
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    };
  }
  return generate2(target.icon, `svg-${target.name}`, {
    className,
    onClick,
    style: style2,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...restProps,
    ref: svgRef
  });
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;

// node_modules/antd/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
function setTwoToneColor(twoToneColor) {
  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);
  return IconBase_default.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  const colors = IconBase_default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

// node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
setTwoToneColor(blue.primary);
var Icon = React3.forwardRef((props, ref) => {
  const {
    // affect outter <i>...</i>
    className,
    // affect inner <svg>...</svg>
    icon,
    spin,
    rotate,
    tabIndex,
    onClick,
    // other
    twoToneColor,
    ...restProps
  } = props;
  const {
    prefixCls = "anticon",
    rootClassName
  } = React3.useContext(Context_default);
  const classString = clsx(rootClassName, prefixCls, {
    [`${prefixCls}-${icon.name}`]: !!icon.name,
    [`${prefixCls}-spin`]: !!spin || icon.name === "loading"
  }, className);
  let iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  const svgStyle = rotate ? {
    msTransform: `rotate(${rotate}deg)`,
    transform: `rotate(${rotate}deg)`
  } : void 0;
  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);
  return React3.createElement("span", _extends({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), React3.createElement(IconBase_default, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
if (true) {
  Icon.displayName = "AntdIcon";
}
var AntdIcon_default = Icon;

// node_modules/antd/node_modules/@ant-design/icons/es/icons/EditOutlined.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var EditOutlined = (props, ref) => React4.createElement(AntdIcon_default, _extends2({}, props, {
  ref,
  icon: EditOutlined_default
}));
var RefIcon = React4.forwardRef(EditOutlined);
if (true) {
  RefIcon.displayName = "EditOutlined";
}
var EditOutlined_default2 = RefIcon;

// node_modules/@rc-component/resize-observer/es/index.js
var React13 = __toESM(require_react());

// node_modules/@rc-component/util/es/React/isFragment.js
var REACT_ELEMENT_TYPE_18 = Symbol.for("react.element");
var REACT_ELEMENT_TYPE_19 = Symbol.for("react.transitional.element");
var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function isFragment(object4) {
  return (
    // Base object type
    object4 && typeof object4 === "object" && // React Element type
    (object4.$$typeof === REACT_ELEMENT_TYPE_18 || object4.$$typeof === REACT_ELEMENT_TYPE_19) && // React Fragment type
    object4.type === REACT_FRAGMENT_TYPE
  );
}

// node_modules/@rc-component/util/es/Children/toArray.js
var import_react3 = __toESM(require_react());
function toArray(children, option = {}) {
  let ret = [];
  import_react3.default.Children.forEach(children, (child) => {
    if ((child === void 0 || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

// node_modules/@rc-component/util/es/Dom/findDOMNode.js
function isDOM(node) {
  return node instanceof HTMLElement || node instanceof SVGElement;
}
function getDOM(node) {
  if (node && typeof node === "object" && isDOM(node.nativeElement)) {
    return node.nativeElement;
  }
  if (isDOM(node)) {
    return node;
  }
  return null;
}

// node_modules/@rc-component/util/es/ref.js
var import_react4 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());

// node_modules/@rc-component/util/es/hooks/useMemo.js
var React6 = __toESM(require_react());
function useMemo(getValue3, condition, shouldUpdate) {
  const cacheRef = React6.useRef({});
  if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue3();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}

// node_modules/@rc-component/util/es/ref.js
var ReactMajorVersion = Number(import_react4.version.split(".")[0]);
var fillRef = (ref, node) => {
  if (typeof ref === "function") {
    ref(node);
  } else if (typeof ref === "object" && ref && "current" in ref) {
    ref.current = node;
  }
};
var composeRef = (...refs) => {
  const refList = refs.filter(Boolean);
  if (refList.length <= 1) {
    return refList[0];
  }
  return (node) => {
    refs.forEach((ref) => {
      fillRef(ref, node);
    });
  };
};
var useComposeRef = (...refs) => {
  return useMemo(
    () => composeRef(...refs),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
    (prev, next) => prev.length !== next.length || prev.every((ref, i) => ref !== next[i])
  );
};
var supportRef = (nodeOrComponent) => {
  var _a, _b;
  if (!nodeOrComponent) {
    return false;
  }
  if (isReactElement(nodeOrComponent) && ReactMajorVersion >= 19) {
    return true;
  }
  const type5 = (0, import_react_is.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  if (typeof type5 === "function" && !((_a = type5.prototype) == null ? void 0 : _a.render) && type5.$$typeof !== import_react_is.ForwardRef) {
    return false;
  }
  if (typeof nodeOrComponent === "function" && !((_b = nodeOrComponent.prototype) == null ? void 0 : _b.render) && nodeOrComponent.$$typeof !== import_react_is.ForwardRef) {
    return false;
  }
  return true;
};
function isReactElement(node) {
  return (0, import_react4.isValidElement)(node) && !isFragment(node);
}
var supportNodeRef = (node) => {
  return isReactElement(node) && supportRef(node);
};
var getNodeRef = (node) => {
  if (node && isReactElement(node)) {
    const ele = node;
    return ele.props.propertyIsEnumerable("ref") ? ele.props.ref : ele.ref;
  }
  return null;
};

// node_modules/@rc-component/resize-observer/es/SingleObserver/index.js
var React12 = __toESM(require_react());

// node_modules/@rc-component/resize-observer/es/Collection.js
var React7 = __toESM(require_react());
var CollectionContext = React7.createContext(null);
function Collection({
  children,
  onBatchResize
}) {
  const resizeIdRef = React7.useRef(0);
  const resizeInfosRef = React7.useRef([]);
  const onCollectionResize = React7.useContext(CollectionContext);
  const onResize2 = React7.useCallback((size, element, data) => {
    resizeIdRef.current += 1;
    const currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size,
      element,
      data
    });
    Promise.resolve().then(() => {
      if (currentId === resizeIdRef.current) {
        onBatchResize == null ? void 0 : onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });
    onCollectionResize == null ? void 0 : onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return React7.createElement(CollectionContext.Provider, {
    value: onResize2
  }, children);
}

// node_modules/@rc-component/resize-observer/es/useResizeObserver.js
var React11 = __toESM(require_react());

// node_modules/@rc-component/resize-observer/es/utils/observerUtil.js
var elementListeners = /* @__PURE__ */ new Map();
function onResize(entities) {
  entities.forEach((entity) => {
    var _a;
    const {
      target
    } = entity;
    (_a = elementListeners.get(target)) == null ? void 0 : _a.forEach((listener) => listener(target));
  });
}
var observer;
function ensureResizeObserver() {
  if (!observer) {
    observer = new ResizeObserver(onResize);
  }
  return observer;
}
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, /* @__PURE__ */ new Set());
    ensureResizeObserver().observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      ensureResizeObserver().unobserve(element);
      elementListeners.delete(element);
    }
  }
}

// node_modules/@rc-component/util/es/hooks/useEvent.js
var React8 = __toESM(require_react());
function useEvent(callback) {
  const fnRef = React8.useRef(callback);
  fnRef.current = callback;
  const memoFn = React8.useCallback((...args) => {
    var _a;
    return (_a = fnRef.current) == null ? void 0 : _a.call(fnRef, ...args);
  }, []);
  return memoFn;
}
var useEvent_default = useEvent;

// node_modules/@rc-component/util/es/hooks/useLayoutEffect.js
var React9 = __toESM(require_react());
var useInternalLayoutEffect = canUseDom() ? React9.useLayoutEffect : React9.useEffect;
var useLayoutEffect2 = (callback, deps) => {
  const firstMountRef = React9.useRef(true);
  useInternalLayoutEffect(() => {
    return callback(firstMountRef.current);
  }, deps);
  useInternalLayoutEffect(() => {
    firstMountRef.current = false;
    return () => {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = (callback, deps) => {
  useLayoutEffect2((firstMount) => {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
var useLayoutEffect_default = useLayoutEffect2;

// node_modules/@rc-component/util/es/hooks/useState.js
var React10 = __toESM(require_react());
var useSafeState = (defaultValue) => {
  const destroyRef = React10.useRef(false);
  const [value, setValue] = React10.useState(defaultValue);
  React10.useEffect(() => {
    destroyRef.current = false;
    return () => {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
};
var useState_default = useSafeState;

// node_modules/@rc-component/util/es/hooks/useControlledState.js
var import_react5 = __toESM(require_react());
function useControlledState(defaultStateValue, value) {
  const [innerValue, setInnerValue] = (0, import_react5.useState)(defaultStateValue);
  const mergedValue = value !== void 0 ? value : innerValue;
  useLayoutEffect_default((mount) => {
    if (!mount) {
      setInnerValue(value);
    }
  }, [value]);
  return [
    // Value
    mergedValue,
    // Update function
    setInnerValue
  ];
}

// node_modules/@rc-component/util/es/utils/get.js
function get(entity, path) {
  let current = entity;
  for (let i = 0; i < path.length; i += 1) {
    if (current === null || current === void 0) {
      return void 0;
    }
    current = current[path[i]];
  }
  return current;
}

// node_modules/@rc-component/util/es/utils/set.js
function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  const [path, ...restPath] = paths;
  let clone;
  if (!entity && typeof path === "number") {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = [...entity];
  } else {
    clone = {
      ...entity
    };
  }
  if (removeIfUndefined && value === void 0 && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value, removeIfUndefined = false) {
  if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
  return typeof obj === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
  return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
function mergeWith(sources, config = {}) {
  const {
    prepareArray
  } = config;
  const finalPrepareArray = prepareArray || (() => []);
  let clone = createEmpty(sources[0]);
  sources.forEach((src) => {
    function internalMerge(path, parentLoopSet) {
      const loopSet = new Set(parentLoopSet);
      const value = get(src, path);
      const isArr = Array.isArray(value);
      if (isArr || isObject(value)) {
        if (!loopSet.has(value)) {
          loopSet.add(value);
          const originValue = get(clone, path);
          if (isArr) {
            clone = set(clone, path, finalPrepareArray(originValue, value));
          } else if (!originValue || typeof originValue !== "object") {
            clone = set(clone, path, createEmpty(value));
          }
          keys(value).forEach((key) => {
            if (Object.getOwnPropertyDescriptor(value, key).enumerable) {
              internalMerge([...path, key], loopSet);
            }
          });
        }
      } else {
        clone = set(clone, path, value);
      }
    }
    internalMerge([]);
  });
  return clone;
}
function merge(...sources) {
  return mergeWith(sources);
}

// node_modules/@rc-component/util/es/omit.js
function omit(obj, fields) {
  const clone = Object.assign({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach((key) => {
      delete clone[key];
    });
  }
  return clone;
}

// node_modules/@rc-component/resize-observer/es/useResizeObserver.js
function useResizeObserver(enabled, getTarget, onDelayResize, onSyncResize) {
  const sizeRef = React11.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  const onInternalResize = useEvent_default((target) => {
    const {
      width,
      height
    } = target.getBoundingClientRect();
    const {
      offsetWidth,
      offsetHeight
    } = target;
    const fixedWidth = Math.floor(width);
    const fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      const size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth,
        offsetHeight
      };
      sizeRef.current = size;
      const mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      const mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      const sizeInfo = {
        ...size,
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      };
      onSyncResize == null ? void 0 : onSyncResize(sizeInfo, target);
      Promise.resolve().then(() => {
        onDelayResize == null ? void 0 : onDelayResize(sizeInfo, target);
      });
    }
  });
  const isFuncTarget = typeof getTarget === "function";
  React11.useEffect(() => {
    const target = isFuncTarget ? getTarget() : getTarget;
    if (target && enabled) {
      observe(target, onInternalResize);
    }
    return () => {
      if (target) {
        unobserve(target, onInternalResize);
      }
    };
  }, [
    enabled,
    // When is function, no need to watch it
    isFuncTarget ? 0 : getTarget
  ]);
}

// node_modules/@rc-component/resize-observer/es/SingleObserver/index.js
function SingleObserver(props, ref) {
  const {
    children,
    disabled,
    onResize: onResize2,
    data
  } = props;
  const elementRef = React12.useRef(null);
  const onCollectionResize = React12.useContext(CollectionContext);
  const isRenderProps = typeof children === "function";
  const mergedChildren = isRenderProps ? children(elementRef) : children;
  const canRef = !isRenderProps && React12.isValidElement(mergedChildren) && supportRef(mergedChildren);
  const originRef = canRef ? getNodeRef(mergedChildren) : null;
  const mergedRef = useComposeRef(originRef, elementRef);
  const getDomElement = () => {
    return getDOM(elementRef.current);
  };
  React12.useImperativeHandle(ref, () => getDomElement());
  useResizeObserver(!disabled, getDomElement, onResize2, (sizeInfo, target) => {
    onCollectionResize == null ? void 0 : onCollectionResize(sizeInfo, target, data);
  });
  return canRef ? React12.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren;
}
var RefSingleObserver = React12.forwardRef(SingleObserver);
if (true) {
  RefSingleObserver.displayName = "SingleObserver";
}
var SingleObserver_default = RefSingleObserver;

// node_modules/@rc-component/resize-observer/es/index.js
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
var INTERNAL_PREFIX_KEY = "rc-observer-key";
function ResizeObserver2(props, ref) {
  const {
    children
  } = props;
  const childNodes = typeof children === "function" ? [children] : toArray(children);
  if (true) {
    if (childNodes.length > 1) {
      warning(false, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.");
    } else if (childNodes.length === 0) {
      warning(false, "`children` of ResizeObserver is empty. Nothing is in observe.");
    }
  }
  return childNodes.map((child, index) => {
    const key = (child == null ? void 0 : child.key) || `${INTERNAL_PREFIX_KEY}-${index}`;
    return React13.createElement(SingleObserver_default, _extends3({}, props, {
      key,
      ref: index === 0 ? ref : void 0
    }), child);
  });
}
var RefResizeObserver = React13.forwardRef(ResizeObserver2);
if (true) {
  RefResizeObserver.displayName = "ResizeObserver";
}
RefResizeObserver.Collection = Collection;
var es_default = RefResizeObserver;

// node_modules/antd/es/_util/isNonNullable.js
var isNonNullable = (val) => {
  return val !== void 0 && val !== null;
};
var isNonNullable_default = isNonNullable;

// node_modules/@rc-component/util/es/Dom/styleChecker.js
var isStyleNameSupport = (styleName) => {
  if (canUseDom() && window.document.documentElement) {
    const styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    const {
      documentElement
    } = window.document;
    return styleNameList.some((name) => name in documentElement.style);
  }
  return false;
};
var isStyleValueSupport = (styleName, value) => {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  const ele = document.createElement("div");
  const origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== void 0) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}

// node_modules/antd/es/_util/styleChecker.js
var canUseDocElement = () => canUseDom() && window.document.documentElement;

// node_modules/antd/es/config-provider/index.js
var React57 = __toESM(require_react());

// node_modules/@emotion/hash/dist/hash.browser.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
var hash_browser_esm_default = murmur2;

// node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js
var import_react7 = __toESM(require_react());

// node_modules/@rc-component/util/es/isEqual.js
function isEqual(obj1, obj2, shallow = false) {
  const refSet = /* @__PURE__ */ new Set();
  function deepEqual(a, b, level = 1) {
    const circular = refSet.has(a);
    warning_default(!circular, "Warning: There may be circular references");
    if (circular) {
      return false;
    }
    if (a === b) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    const newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
      const keys2 = Object.keys(a);
      if (keys2.length !== Object.keys(b).length) {
        return false;
      }
      return keys2.every((key) => deepEqual(a[key], b[key], newLevel));
    }
    return false;
  }
  return deepEqual(obj1, obj2);
}
var isEqual_default = isEqual;

// node_modules/@ant-design/cssinjs/es/StyleContext.js
var React14 = __toESM(require_react());

// node_modules/@ant-design/cssinjs/es/Cache.js
var SPLIT = "%";
function pathKey(keys2) {
  return keys2.join(SPLIT);
}
var updateId = 0;
var Entity = class {
  constructor(instanceId) {
    __publicField(this, "instanceId");
    /** @private Internal cache map. Do not access this directly */
    __publicField(this, "cache", /* @__PURE__ */ new Map());
    /** @private Record update times for each key */
    __publicField(this, "updateTimes", /* @__PURE__ */ new Map());
    __publicField(this, "extracted", /* @__PURE__ */ new Set());
    this.instanceId = instanceId;
  }
  get(keys2) {
    return this.opGet(pathKey(keys2));
  }
  /** A fast get cache with `get` concat. */
  opGet(keyPathStr) {
    return this.cache.get(keyPathStr) || null;
  }
  update(keys2, valueFn) {
    return this.opUpdate(pathKey(keys2), valueFn);
  }
  /** A fast get cache with `get` concat. */
  opUpdate(keyPathStr, valueFn) {
    const prevValue = this.cache.get(keyPathStr);
    const nextValue = valueFn(prevValue);
    if (nextValue === null) {
      this.cache.delete(keyPathStr);
      this.updateTimes.delete(keyPathStr);
    } else {
      this.cache.set(keyPathStr, nextValue);
      this.updateTimes.set(keyPathStr, updateId);
      updateId += 1;
    }
  }
};
var Cache_default = Entity;

// node_modules/@ant-design/cssinjs/es/StyleContext.js
var ATTR_TOKEN = "data-token-hash";
var ATTR_MARK = "data-css-hash";
var ATTR_CACHE_PATH = "data-cache-path";
var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
  const cssinjsInstanceId = Math.random().toString(12).slice(2);
  if (typeof document !== "undefined" && document.head && document.body) {
    const styles = document.body.querySelectorAll(`style[${ATTR_MARK}]`) || [];
    const {
      firstChild
    } = document.head;
    Array.from(styles).forEach((style2) => {
      style2[CSS_IN_JS_INSTANCE] || (style2[CSS_IN_JS_INSTANCE] = cssinjsInstanceId);
      if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style2, firstChild);
      }
    });
    const styleHash = {};
    Array.from(document.querySelectorAll(`style[${ATTR_MARK}]`)).forEach((style2) => {
      var _a;
      const hash = style2.getAttribute(ATTR_MARK);
      if (styleHash[hash]) {
        if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          (_a = style2.parentNode) == null ? void 0 : _a.removeChild(style2);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new Cache_default(cssinjsInstanceId);
}
var StyleContext = React14.createContext({
  hashPriority: "low",
  cache: createCache(),
  defaultCache: true,
  autoPrefix: false
});
var StyleContext_default = StyleContext;

// node_modules/@ant-design/cssinjs/es/theme/calc/CSSCalculator.js
var CALC_UNIT = "CALC_UNIT";
var regexp = new RegExp(CALC_UNIT, "g");

// node_modules/@ant-design/cssinjs/es/theme/ThemeCache.js
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
var _ThemeCache = class _ThemeCache {
  constructor() {
    __publicField(this, "cache");
    __publicField(this, "keys");
    __publicField(this, "cacheCallTimes");
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(derivativeOption, updateCallTimes = false) {
    let cache = {
      map: this.cache
    };
    derivativeOption.forEach((derivative2) => {
      var _a;
      if (!cache) {
        cache = void 0;
      } else {
        cache = (_a = cache == null ? void 0 : cache.map) == null ? void 0 : _a.get(derivative2);
      }
    });
    if ((cache == null ? void 0 : cache.value) && updateCallTimes) {
      cache.value[1] = this.cacheCallTimes++;
    }
    return cache == null ? void 0 : cache.value;
  }
  get(derivativeOption) {
    var _a;
    return (_a = this.internalGet(derivativeOption, true)) == null ? void 0 : _a[0];
  }
  has(derivativeOption) {
    return !!this.internalGet(derivativeOption);
  }
  set(derivativeOption, value) {
    if (!this.has(derivativeOption)) {
      if (this.size() + 1 > _ThemeCache.MAX_CACHE_SIZE + _ThemeCache.MAX_CACHE_OFFSET) {
        const [targetKey] = this.keys.reduce((result, key) => {
          const [, callTimes] = result;
          if (this.internalGet(key)[1] < callTimes) {
            return [key, this.internalGet(key)[1]];
          }
          return result;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(targetKey);
      }
      this.keys.push(derivativeOption);
    }
    let cache = this.cache;
    derivativeOption.forEach((derivative2, index) => {
      if (index === derivativeOption.length - 1) {
        cache.set(derivative2, {
          value: [value, this.cacheCallTimes++]
        });
      } else {
        const cacheValue = cache.get(derivative2);
        if (!cacheValue) {
          cache.set(derivative2, {
            map: /* @__PURE__ */ new Map()
          });
        } else if (!cacheValue.map) {
          cacheValue.map = /* @__PURE__ */ new Map();
        }
        cache = cache.get(derivative2).map;
      }
    });
  }
  deleteByPath(currentCache, derivatives) {
    var _a;
    const cache = currentCache.get(derivatives[0]);
    if (derivatives.length === 1) {
      if (!cache.map) {
        currentCache.delete(derivatives[0]);
      } else {
        currentCache.set(derivatives[0], {
          map: cache.map
        });
      }
      return (_a = cache.value) == null ? void 0 : _a[0];
    }
    const result = this.deleteByPath(cache.map, derivatives.slice(1));
    if ((!cache.map || cache.map.size === 0) && !cache.value) {
      currentCache.delete(derivatives[0]);
    }
    return result;
  }
  delete(derivativeOption) {
    if (this.has(derivativeOption)) {
      this.keys = this.keys.filter((item) => !sameDerivativeOption(item, derivativeOption));
      return this.deleteByPath(this.cache, derivativeOption);
    }
    return void 0;
  }
};
__publicField(_ThemeCache, "MAX_CACHE_SIZE", 20);
__publicField(_ThemeCache, "MAX_CACHE_OFFSET", 5);
var ThemeCache = _ThemeCache;

// node_modules/@ant-design/cssinjs/es/theme/Theme.js
var uuid = 0;
var Theme = class {
  constructor(derivatives) {
    __publicField(this, "derivatives");
    __publicField(this, "id");
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      warning(derivatives.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function.");
    }
    uuid += 1;
  }
  getDerivativeToken(token) {
    return this.derivatives.reduce((result, derivative2) => derivative2(token, result), void 0);
  }
};

// node_modules/@ant-design/cssinjs/es/theme/createTheme.js
var cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}

// node_modules/@ant-design/cssinjs/es/util/index.js
var resultCache = /* @__PURE__ */ new WeakMap();
var RESULT_VALUE = {};
function memoResult(callback, deps) {
  let current = resultCache;
  for (let i = 0; i < deps.length; i += 1) {
    const dep = deps[i];
    if (!current.has(dep)) {
      current.set(dep, /* @__PURE__ */ new WeakMap());
    }
    current = current.get(dep);
  }
  if (!current.has(RESULT_VALUE)) {
    current.set(RESULT_VALUE, callback());
  }
  return current.get(RESULT_VALUE);
}
var flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token) {
  let str = flattenTokenCache.get(token) || "";
  if (!str) {
    Object.keys(token).forEach((key) => {
      const value = token[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && typeof value === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    str = hash_browser_esm_default(str);
    flattenTokenCache.set(token, str);
  }
  return str;
}
function token2key(token, salt) {
  return hash_browser_esm_default(`${salt}_${flattenToken(token)}`);
}
var randomSelectorKey = `random-${Date.now()}-${Math.random()}`.replace(/\./g, "");
var isClientSide = canUseDom();
function unit(num) {
  if (typeof num === "number") {
    return `${num}px`;
  }
  return num;
}
function toStyleStr(style2, tokenKey, styleId, customizeAttrs = {}, plain = false) {
  if (plain) {
    return style2;
  }
  const attrs = {
    ...customizeAttrs,
    [ATTR_TOKEN]: tokenKey,
    [ATTR_MARK]: styleId
  };
  const attrStr = Object.keys(attrs).map((attr) => {
    const val = attrs[attr];
    return val ? `${attr}="${val}"` : null;
  }).filter((v) => v).join(" ");
  return `<style ${attrStr}>${style2}</style>`;
}
function where(options) {
  const {
    hashCls,
    hashPriority = "low"
  } = options || {};
  if (!hashCls) {
    return "";
  }
  const hashSelector = `.${hashCls}`;
  return hashPriority === "low" ? `:where(${hashSelector})` : hashSelector;
}
var isNonNullable2 = (val) => {
  return val !== void 0 && val !== null;
};

// node_modules/@ant-design/cssinjs/es/util/css-variables.js
var token2CSSVar = (token, prefix = "") => {
  return `--${prefix ? `${prefix}-` : ""}${token}`.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
};
var serializeCSSVar = (cssVars, hashId, options) => {
  const {
    hashCls,
    hashPriority = "low",
    scope
  } = options || {};
  if (!Object.keys(cssVars).length) {
    return "";
  }
  const baseSelector = `${where({
    hashCls,
    hashPriority
  })}.${hashId}`;
  const scopes = [scope].flat().filter(Boolean);
  const selector = scopes.length ? scopes.map((s) => `${baseSelector}.${s}`).join(", ") : baseSelector;
  return `${selector}{${Object.entries(cssVars).map(([key, value]) => `${key}:${value};`).join("")}}`;
};
var transformToken = (token, themeKey, config) => {
  const {
    hashCls,
    hashPriority = "low",
    prefix,
    unitless: unitless2,
    ignore: ignore2,
    preserve: preserve2
  } = config || {};
  const cssVars = {};
  const result = {};
  Object.entries(token).forEach(([key, value]) => {
    if (preserve2 == null ? void 0 : preserve2[key]) {
      result[key] = value;
    } else if ((typeof value === "string" || typeof value === "number") && !(ignore2 == null ? void 0 : ignore2[key])) {
      const cssVar = token2CSSVar(key, prefix);
      cssVars[cssVar] = typeof value === "number" && !(unitless2 == null ? void 0 : unitless2[key]) ? `${value}px` : String(value);
      result[key] = `var(${cssVar})`;
    }
  });
  return [result, serializeCSSVar(cssVars, themeKey, {
    scope: config == null ? void 0 : config.scope,
    hashCls,
    hashPriority
  })];
};

// node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js
var React15 = __toESM(require_react());
var import_react6 = __toESM(require_react());

// node_modules/@ant-design/cssinjs/es/hooks/useHMR.js
var webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
var useHMR_default = false ? useProdHMR : useDevHMR;
if (typeof module !== "undefined" && module && module.hot && typeof window !== "undefined") {
  const win = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : null;
  if (win && typeof win.webpackHotUpdate === "function") {
    const originWebpackHotUpdate = win.webpackHotUpdate;
    win.webpackHotUpdate = (...args) => {
      webpackHMR = true;
      setTimeout(() => {
        webpackHMR = false;
      }, 0);
      return originWebpackHotUpdate(...args);
    };
  }
}

// node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js
var effectMap = /* @__PURE__ */ new Map();
function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
  const {
    cache: globalCache
  } = React15.useContext(StyleContext_default);
  const fullPath = [prefix, ...keyPath];
  const fullPathStr = pathKey(fullPath);
  const HMRUpdate = useHMR_default();
  const buildCache = (updater) => {
    globalCache.opUpdate(fullPathStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [void 0, void 0];
      let tmpCache = cache;
      if (cache && HMRUpdate) {
        onCacheRemove == null ? void 0 : onCacheRemove(tmpCache, HMRUpdate);
        tmpCache = null;
      }
      const mergedCache = tmpCache || cacheFn();
      const data = [times, mergedCache];
      return updater ? updater(data) : data;
    });
  };
  React15.useMemo(
    () => {
      buildCache();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [fullPathStr]
    /* eslint-enable */
  );
  let cacheEntity = globalCache.opGet(fullPathStr);
  if (!cacheEntity) {
    buildCache();
    cacheEntity = globalCache.opGet(fullPathStr);
  }
  const cacheContent = cacheEntity[1];
  (0, import_react6.useInsertionEffect)(() => {
    buildCache(([times, cache]) => [times + 1, cache]);
    if (!effectMap.has(fullPathStr)) {
      onCacheEffect == null ? void 0 : onCacheEffect(cacheContent);
      effectMap.set(fullPathStr, true);
      Promise.resolve().then(() => {
        effectMap.delete(fullPathStr);
      });
    }
    return () => {
      globalCache.opUpdate(fullPathStr, (prevCache) => {
        const [times = 0, cache] = prevCache || [];
        const nextCount = times - 1;
        if (nextCount === 0) {
          onCacheRemove == null ? void 0 : onCacheRemove(cache, false);
          effectMap.delete(fullPathStr);
          return null;
        }
        return [times - 1, cache];
      });
    };
  }, [fullPathStr]);
  return cacheContent;
}

// node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js
var EMPTY_OVERRIDE = {};
var hashPrefix = true ? "css-dev-only-do-not-override" : "css";
var tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== "undefined") {
    const styles = document.querySelectorAll(`style[${ATTR_TOKEN}="${key}"]`);
    styles.forEach((style2) => {
      var _a;
      if (style2[CSS_IN_JS_INSTANCE] === instanceId) {
        (_a = style2.parentNode) == null ? void 0 : _a.removeChild(style2);
      }
    });
  }
}
var TOKEN_THRESHOLD = -1;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  const cleanableKeyList = /* @__PURE__ */ new Set();
  tokenKeys.forEach((value, key) => {
    if (value <= 0) cleanableKeyList.add(key);
  });
  if (tokenKeys.size - cleanableKeyList.size > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach((key) => {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
var getComputedToken = (originToken, overrideToken, theme, format2) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  let mergedDerivativeToken = {
    ...derivativeToken,
    ...overrideToken
  };
  if (format2) {
    mergedDerivativeToken = format2(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
var TOKEN_PREFIX = "token";
function useCacheToken(theme, tokens, option) {
  const {
    cache: {
      instanceId
    },
    container,
    hashPriority
  } = (0, import_react7.useContext)(StyleContext_default);
  const {
    salt = "",
    override = EMPTY_OVERRIDE,
    formatToken: formatToken2,
    getComputedToken: compute,
    cssVar
  } = option;
  const mergedToken = memoResult(() => Object.assign({}, ...tokens), tokens);
  const tokenStr = flattenToken(mergedToken);
  const overrideTokenStr = flattenToken(override);
  const cssVarStr = flattenToken(cssVar);
  const cachedToken = useGlobalCache(TOKEN_PREFIX, [salt, theme.id, tokenStr, overrideTokenStr, cssVarStr], () => {
    const mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken(mergedToken, override, theme, formatToken2);
    const actualToken = {
      ...mergedDerivativeToken
    };
    const mergedSalt = `${salt}_${cssVar.prefix}`;
    const hashId = hash_browser_esm_default(mergedSalt);
    const hashCls = `${hashPrefix}-${hashId}`;
    actualToken._tokenKey = token2key(actualToken, mergedSalt);
    const [tokenWithCssVar, cssVarsStr] = transformToken(mergedDerivativeToken, cssVar.key, {
      prefix: cssVar.prefix,
      ignore: cssVar.ignore,
      unitless: cssVar.unitless,
      preserve: cssVar.preserve,
      hashPriority,
      hashCls: cssVar.hashed ? hashCls : void 0
    });
    tokenWithCssVar._hashId = hashId;
    recordCleanToken(cssVar.key);
    return [tokenWithCssVar, hashCls, actualToken, cssVarsStr, cssVar.key];
  }, ([, , , , themeKey]) => {
    cleanTokenStyle(themeKey, instanceId);
  }, ([, , , cssVarsStr, themeKey]) => {
    if (!cssVarsStr) {
      return;
    }
    const style2 = updateCSS(cssVarsStr, hash_browser_esm_default(`css-var-${themeKey}`), {
      mark: ATTR_MARK,
      prepend: "queue",
      attachTo: container,
      priority: -999
    });
    style2[CSS_IN_JS_INSTANCE] = instanceId;
    style2.setAttribute(ATTR_TOKEN, themeKey);
  });
  return cachedToken;
}
var extract = (cache, effectStyles, options) => {
  const [, , realToken, styleStr, cssVarKey] = cache;
  const {
    plain
  } = options || {};
  if (!styleStr) {
    return null;
  }
  const styleId = realToken._tokenKey;
  const order = -999;
  const sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": `${order}`
  };
  const styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};

// node_modules/@ant-design/cssinjs/es/hooks/useCSSVarRegister.js
var import_react8 = __toESM(require_react());

// node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js
var React16 = __toESM(require_react());

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var unitless_browser_esm_default = unitlessKeys;

// node_modules/@ant-design/cssinjs/es/linters/utils.js
function lintWarning(message, info) {
  const {
    path,
    parentSelectors
  } = info;
  warning_default(false, `[Ant Design CSS-in-JS] ${path ? `Error in ${path}: ` : ""}${message}${parentSelectors.length ? ` Selector: ${parentSelectors.join(" | ")}` : ""}`);
}

// node_modules/@ant-design/cssinjs/es/linters/contentQuotesLinter.js
var linter = (key, value, info) => {
  if (key === "content") {
    const contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    const contentValues = ["normal", "none", "initial", "inherit", "unset"];
    if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && !value.startsWith("var(") && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
      lintWarning(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${value}"'\`.`, info);
    }
  }
};
var contentQuotesLinter_default = linter;

// node_modules/@ant-design/cssinjs/es/linters/hashedAnimationLinter.js
var linter2 = (key, value, info) => {
  if (key === "animation") {
    if (info.hashId && value !== "none") {
      lintWarning(`You seem to be using hashed animation '${value}', in which case 'animationName' with Keyframe as value is recommended.`, info);
    }
  }
};
var hashedAnimationLinter_default = linter2;

// node_modules/@ant-design/cssinjs/es/util/cacheMapUtil.js
var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
var CSS_FILE_STYLE = "_FILE_STYLE__";
var cachePathMap;
var fromCSSFile = true;
function prepare() {
  var _a;
  if (!cachePathMap) {
    cachePathMap = {};
    if (canUseDom()) {
      const div = document.createElement("div");
      div.className = ATTR_CACHE_MAP;
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      div.style.top = "-9999px";
      document.body.appendChild(div);
      let content = getComputedStyle(div).content || "";
      content = content.replace(/^"/, "").replace(/"$/, "");
      content.split(";").forEach((item) => {
        const [path, hash] = item.split(":");
        cachePathMap[path] = hash;
      });
      const inlineMapStyle = document.querySelector(`style[${ATTR_CACHE_MAP}]`);
      if (inlineMapStyle) {
        fromCSSFile = false;
        (_a = inlineMapStyle.parentNode) == null ? void 0 : _a.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  const hash = cachePathMap[path];
  let styleStr = null;
  if (hash && canUseDom()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      const style2 = document.querySelector(`style[${ATTR_MARK}="${cachePathMap[path]}"]`);
      if (style2) {
        styleStr = style2.innerHTML;
      } else {
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash];
}

// node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js
var SKIP_CHECK = "_skip_check_";
var MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr, autoPrefix) {
  const serialized = autoPrefix ? serialize(compile(styleStr), middleware([prefixer, stringify])) : serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return typeof value === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority = "high") {
  if (!hashId) {
    return key;
  }
  const hashSelector = where({
    hashCls: hashId,
    hashPriority
  });
  const keys2 = key.split(",").map((k) => {
    var _a;
    const fullPath = k.trim().split(/\s+/);
    let firstPath = fullPath[0] || "";
    const htmlElement = ((_a = firstPath.match(/^\w+/)) == null ? void 0 : _a[0]) || "";
    firstPath = `${htmlElement}${hashSelector}${firstPath.slice(htmlElement.length)}`;
    return [firstPath, ...fullPath.slice(1)].join(" ");
  });
  return keys2.join(",");
}
var parseStyle = (interpolation, config = {}, {
  root,
  injectHash,
  parentSelectors
} = {
  root: true,
  parentSelectors: []
}) => {
  const {
    hashId,
    layer,
    path,
    hashPriority,
    transformers = [],
    linters = []
  } = config;
  let styleStr = "";
  let effectStyle = {};
  function parseKeyframes(keyframes) {
    const animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      const [parsedStr] = parseStyle(keyframes.style, config, {
        root: false,
        parentSelectors
      });
      effectStyle[animationName] = `@keyframes ${keyframes.getName(hashId)}${parsedStr}`;
    }
  }
  function flattenList(list, fullList = []) {
    list.forEach((item) => {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  const flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach((originStyle) => {
    const style2 = typeof originStyle === "string" && !root ? {} : originStyle;
    if (typeof style2 === "string") {
      styleStr += `${style2}
`;
    } else if (style2._keyframe) {
      parseKeyframes(style2);
    } else {
      const mergedStyle = transformers.reduce((prev, trans) => {
        var _a;
        return ((_a = trans == null ? void 0 : trans.visit) == null ? void 0 : _a.call(trans, prev)) || prev;
      }, style2);
      Object.keys(mergedStyle).forEach((key) => {
        const value = mergedStyle[key];
        if (typeof value === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          let subInjectHash = false;
          let mergedKey = key.trim();
          let nextRoot = false;
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else if (mergedKey === "&") {
              mergedKey = injectSelectorHash("", hashId, hashPriority);
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          const [parsedStr, childEffectStyle] = parseStyle(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [...parentSelectors, mergedKey]
          });
          effectStyle = {
            ...effectStyle,
            ...childEffectStyle
          };
          styleStr += `${mergedKey}${parsedStr}`;
        } else {
          let appendStyle = function(cssKey, cssValue) {
            if (typeof value !== "object" || !(value == null ? void 0 : value[SKIP_CHECK])) {
              [contentQuotesLinter_default, hashedAnimationLinter_default, ...linters].forEach((linter3) => linter3(cssKey, cssValue, {
                path,
                hashId,
                parentSelectors
              }));
            }
            const styleName = cssKey.replace(/[A-Z]/g, (match2) => `-${match2.toLowerCase()}`);
            let formatValue = cssValue;
            if (!unitless_browser_esm_default[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = `${formatValue}px`;
            }
            if (cssKey === "animationName" && (cssValue == null ? void 0 : cssValue._keyframe)) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += `${styleName}:${formatValue};`;
          };
          const actualValue = (value == null ? void 0 : value.value) ?? value;
          if (typeof value === "object" && (value == null ? void 0 : value[MULTI_VALUE]) && Array.isArray(actualValue)) {
            actualValue.forEach((item) => {
              appendStyle(key, item);
            });
          } else {
            if (isNonNullable2(actualValue)) {
              appendStyle(key, actualValue);
            }
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = `{${styleStr}}`;
  } else if (layer) {
    if (styleStr) {
      styleStr = `@layer ${layer.name} {${styleStr}}`;
    }
    if (layer.dependencies) {
      effectStyle[`@layer ${layer.name}`] = layer.dependencies.map((deps) => `@layer ${deps}, ${layer.name};`).join("\n");
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return hash_browser_esm_default(`${path.join("%")}${styleStr}`);
}
var STYLE_PREFIX = "style";
function useStyleRegister(info, styleFn) {
  const {
    path,
    hashId,
    layer,
    nonce,
    clientOnly,
    order = 0
  } = info;
  const {
    mock,
    hashPriority,
    container,
    transformers,
    linters,
    cache,
    layer: enableLayer,
    autoPrefix
  } = React16.useContext(StyleContext_default);
  const fullPath = [hashId || ""];
  if (enableLayer) {
    fullPath.push("layer");
  }
  fullPath.push(...path);
  let isMergedClientSide = isClientSide;
  if (mock !== void 0) {
    isMergedClientSide = mock === "client";
  }
  useGlobalCache(
    STYLE_PREFIX,
    fullPath,
    // Create cache if needed
    () => {
      const cachePath = fullPath.join("|");
      if (existPath(cachePath)) {
        const [inlineCacheStyleStr, styleHash] = getStyleAndHash(cachePath);
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, styleHash, {}, clientOnly, order];
        }
      }
      const styleObj = styleFn();
      const [parsedStyle, effectStyle] = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer: enableLayer ? layer : void 0,
        path: path.join("-"),
        transformers,
        linters
      });
      const styleStr = normalizeStyle(parsedStyle, autoPrefix || false);
      const styleId = uniqueHash(fullPath, styleStr);
      return [styleStr, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    (cacheValue, fromHMR) => {
      const [, styleId] = cacheValue;
      if (fromHMR && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK,
          attachTo: container
        });
      }
    },
    // Effect: Inject style here
    (cacheValue) => {
      const [styleStr, styleId, effectStyle, , priority] = cacheValue;
      if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
        const mergedCSSConfig = {
          mark: ATTR_MARK,
          prepend: enableLayer ? false : "queue",
          attachTo: container,
          priority
        };
        const nonceStr = typeof nonce === "function" ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        const effectLayerKeys = [];
        const effectRestKeys = [];
        Object.keys(effectStyle).forEach((key) => {
          if (key.startsWith("@layer")) {
            effectLayerKeys.push(key);
          } else {
            effectRestKeys.push(key);
          }
        });
        effectLayerKeys.forEach((effectKey) => {
          updateCSS(normalizeStyle(effectStyle[effectKey], autoPrefix || false), `_layer-${effectKey}`, {
            ...mergedCSSConfig,
            prepend: true
          });
        });
        const style2 = updateCSS(styleStr, styleId, mergedCSSConfig);
        style2[CSS_IN_JS_INSTANCE] = cache.instanceId;
        if (true) {
          style2.setAttribute(ATTR_CACHE_PATH, fullPath.join("|"));
        }
        effectRestKeys.forEach((effectKey) => {
          updateCSS(normalizeStyle(effectStyle[effectKey], autoPrefix || false), `_effect-${effectKey}`, mergedCSSConfig);
        });
      }
    }
  );
}
var extract2 = (cache, effectStyles, options) => {
  const [styleStr, styleId, effectStyle, clientOnly, order] = cache;
  const {
    plain,
    autoPrefix
  } = options || {};
  if (clientOnly) {
    return null;
  }
  let keyStyleText = styleStr;
  const sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": `${order}`
  };
  keyStyleText = toStyleStr(styleStr, void 0, styleId, sharedAttrs, plain);
  if (effectStyle) {
    Object.keys(effectStyle).forEach((effectKey) => {
      if (!effectStyles[effectKey]) {
        effectStyles[effectKey] = true;
        const effectStyleStr = normalizeStyle(effectStyle[effectKey], autoPrefix || false);
        const effectStyleHTML = toStyleStr(effectStyleStr, void 0, `_effect-${effectKey}`, sharedAttrs, plain);
        if (effectKey.startsWith("@layer")) {
          keyStyleText = effectStyleHTML + keyStyleText;
        } else {
          keyStyleText += effectStyleHTML;
        }
      }
    });
  }
  return [order, styleId, keyStyleText];
};

// node_modules/@ant-design/cssinjs/es/hooks/useCSSVarRegister.js
var CSS_VAR_PREFIX = "cssVar";
var useCSSVarRegister = (config, fn) => {
  const {
    key,
    prefix,
    unitless: unitless2,
    ignore: ignore2,
    token,
    hashId,
    scope
  } = config;
  const {
    cache: {
      instanceId
    },
    container,
    hashPriority
  } = (0, import_react8.useContext)(StyleContext_default);
  const {
    _tokenKey: tokenKey
  } = token;
  const scopeKey = Array.isArray(scope) ? scope.join("@@") : scope;
  const stylePath = [...config.path, key, scopeKey, tokenKey];
  const cache = useGlobalCache(CSS_VAR_PREFIX, stylePath, () => {
    const originToken = fn();
    const [mergedToken, cssVarsStr] = transformToken(originToken, key, {
      prefix,
      unitless: unitless2,
      ignore: ignore2,
      scope,
      hashPriority,
      hashCls: hashId
    });
    const styleId = uniqueHash(stylePath, cssVarsStr);
    return [mergedToken, cssVarsStr, styleId, key];
  }, ([, , styleId]) => {
    if (isClientSide) {
      removeCSS(styleId, {
        mark: ATTR_MARK,
        attachTo: container
      });
    }
  }, ([, cssVarsStr, styleId]) => {
    if (!cssVarsStr) {
      return;
    }
    const style2 = updateCSS(cssVarsStr, styleId, {
      mark: ATTR_MARK,
      prepend: "queue",
      attachTo: container,
      priority: -999
    });
    style2[CSS_IN_JS_INSTANCE] = instanceId;
    style2.setAttribute(ATTR_TOKEN, key);
  });
  return cache;
};
var extract3 = (cache, effectStyles, options) => {
  const [, styleStr, styleId, cssVarKey] = cache;
  const {
    plain
  } = options || {};
  if (!styleStr) {
    return null;
  }
  const order = -999;
  const sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": `${order}`
  };
  const styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};
var useCSSVarRegister_default = useCSSVarRegister;

// node_modules/@ant-design/cssinjs/es/extractStyle.js
var ExtractStyleFns = {
  [STYLE_PREFIX]: extract2,
  [TOKEN_PREFIX]: extract,
  [CSS_VAR_PREFIX]: extract3
};

// node_modules/@ant-design/cssinjs/es/Keyframes.js
var Keyframe = class {
  constructor(name, style2) {
    __publicField(this, "name");
    __publicField(this, "style");
    __publicField(this, "_keyframe", true);
    this.name = name;
    this.style = style2;
  }
  getName(hashId = "") {
    return hashId ? `${hashId}-${this.name}` : this.name;
  }
};
var Keyframes_default = Keyframe;

// node_modules/@ant-design/cssinjs/es/transformers/legacyLogicalProperties.js
function noSplit(list) {
  list.notSplit = true;
  return list;
}
var keyMap = {
  // Inset
  inset: ["top", "right", "bottom", "left"],
  insetBlock: ["top", "bottom"],
  insetBlockStart: ["top"],
  insetBlockEnd: ["bottom"],
  insetInline: ["left", "right"],
  insetInlineStart: ["left"],
  insetInlineEnd: ["right"],
  // Margin
  marginBlock: ["marginTop", "marginBottom"],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  marginInline: ["marginLeft", "marginRight"],
  marginInlineStart: ["marginLeft"],
  marginInlineEnd: ["marginRight"],
  // Padding
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"],
  paddingInline: ["paddingLeft", "paddingRight"],
  paddingInlineStart: ["paddingLeft"],
  paddingInlineEnd: ["paddingRight"],
  // Border
  borderBlock: noSplit(["borderTop", "borderBottom"]),
  borderBlockStart: noSplit(["borderTop"]),
  borderBlockEnd: noSplit(["borderBottom"]),
  borderInline: noSplit(["borderLeft", "borderRight"]),
  borderInlineStart: noSplit(["borderLeft"]),
  borderInlineEnd: noSplit(["borderRight"]),
  // Border width
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndWidth: ["borderBottomWidth"],
  borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
  borderInlineStartWidth: ["borderLeftWidth"],
  borderInlineEndWidth: ["borderRightWidth"],
  // Border style
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
  borderInlineStartStyle: ["borderLeftStyle"],
  borderInlineEndStyle: ["borderRightStyle"],
  // Border color
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockEndColor: ["borderBottomColor"],
  borderInlineColor: ["borderLeftColor", "borderRightColor"],
  borderInlineStartColor: ["borderLeftColor"],
  borderInlineEndColor: ["borderRightColor"],
  // Border radius
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"]
};

// node_modules/antd/es/_util/warning.js
var React17 = __toESM(require_react());
function noop() {
}
var {
  resetWarned: rcResetWarned
} = warning_default;
var deprecatedWarnList = null;
var _warning = noop;
if (true) {
  _warning = (valid, component, message) => {
    warning_default(valid, `[antd: ${component}] ${message}`);
    if (false) {
      resetWarned();
    }
  };
}
var warning3 = _warning;
var WarningContext = React17.createContext({});
var devUseWarning = true ? (component) => {
  const {
    strict
  } = React17.useContext(WarningContext);
  const typeWarning = (valid, type5, message) => {
    if (!valid) {
      if (strict === false && type5 === "deprecated") {
        const existWarning = deprecatedWarnList;
        if (!deprecatedWarnList) {
          deprecatedWarnList = {};
        }
        deprecatedWarnList[component] = deprecatedWarnList[component] || [];
        if (!deprecatedWarnList[component].includes(message || "")) {
          deprecatedWarnList[component].push(message || "");
        }
        if (!existWarning) {
          console.warn("[antd] There exists deprecated usage in your code:", deprecatedWarnList);
        }
      } else {
        true ? warning3(valid, component, message) : void 0;
      }
    }
  };
  typeWarning.deprecated = (valid, oldProp, newProp, message = "") => {
    typeWarning(valid, "deprecated", `\`${oldProp}\` is deprecated. Please use \`${newProp}\` instead.${message ? ` ${message}` : ""}`);
  };
  return typeWarning;
} : () => {
  const noopWarning = () => {
  };
  noopWarning.deprecated = noop;
  return noopWarning;
};
var warning_default2 = warning3;

// node_modules/antd/es/form/validateMessagesContext.js
var import_react9 = __toESM(require_react());
var validateMessagesContext_default = (0, import_react9.createContext)(void 0);

// node_modules/antd/es/locale/index.js
var React19 = __toESM(require_react());

// node_modules/@rc-component/pagination/es/locale/en_US.js
var locale = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
var en_US_default = locale;

// node_modules/@rc-component/picker/es/locale/common.js
var commonLocale = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: true
};

// node_modules/@rc-component/picker/es/locale/en_US.js
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof2(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var locale2 = _objectSpread(_objectSpread({}, commonLocale), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
var en_US_default2 = locale2;

// node_modules/antd/es/time-picker/locale/en_US.js
var locale3 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
var en_US_default3 = locale3;

// node_modules/antd/es/date-picker/locale/en_US.js
var locale4 = {
  lang: {
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"],
    ...en_US_default2
  },
  timePickerLocale: {
    ...en_US_default3
  }
};
var en_US_default4 = locale4;

// node_modules/antd/es/calendar/locale/en_US.js
var en_US_default5 = en_US_default4;

// node_modules/antd/es/locale/en_US.js
var typeTemplate = "${label} is not a valid ${type}";
var localeValues = {
  locale: "en",
  Pagination: en_US_default,
  DatePicker: en_US_default4,
  TimePicker: en_US_default3,
  Calendar: en_US_default5,
  global: {
    placeholder: "Please select",
    close: "Close",
    sortable: "sortable"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
var en_US_default6 = localeValues;

// node_modules/antd/es/modal/locale.js
var runtimeLocale = {
  ...en_US_default6.Modal
};
var localeList = [];
var generateLocale = () => localeList.reduce((merged, locale5) => ({
  ...merged,
  ...locale5
}), en_US_default6.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = {
      ...newLocale
    };
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter((locale5) => locale5 !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = {
    ...en_US_default6.Modal
  };
}
function getConfirmLocale() {
  return runtimeLocale;
}

// node_modules/antd/es/locale/context.js
var import_react10 = __toESM(require_react());
var LocaleContext = (0, import_react10.createContext)(void 0);
var context_default = LocaleContext;

// node_modules/antd/es/locale/useLocale.js
var React18 = __toESM(require_react());
var useLocale = (componentName, defaultLocale) => {
  const fullLocale = React18.useContext(context_default);
  const getLocale = React18.useMemo(() => {
    const locale5 = defaultLocale || en_US_default6[componentName];
    const localeFromContext = (fullLocale == null ? void 0 : fullLocale[componentName]) ?? {};
    return {
      ...typeof locale5 === "function" ? locale5() : locale5,
      ...localeFromContext || {}
    };
  }, [componentName, defaultLocale, fullLocale]);
  const getLocaleCode = React18.useMemo(() => {
    const localeCode = fullLocale == null ? void 0 : fullLocale.locale;
    if ((fullLocale == null ? void 0 : fullLocale.exist) && !localeCode) {
      return en_US_default6.locale;
    }
    return localeCode;
  }, [fullLocale]);
  return [getLocale, getLocaleCode];
};
var useLocale_default = useLocale;

// node_modules/antd/es/locale/index.js
var ANT_MARK = "internalMark";
var LocaleProvider = (props) => {
  const {
    locale: locale5 = {},
    children,
    _ANT_MARK__
  } = props;
  if (true) {
    const warning6 = devUseWarning("LocaleProvider");
    true ? warning6(_ANT_MARK__ === ANT_MARK, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale") : void 0;
  }
  React19.useEffect(() => {
    const clearLocale = changeConfirmLocale(locale5 == null ? void 0 : locale5.Modal);
    return clearLocale;
  }, [locale5]);
  const getMemoizedContextValue = React19.useMemo(() => ({
    ...locale5,
    exist: true
  }), [locale5]);
  return React19.createElement(context_default.Provider, {
    value: getMemoizedContextValue
  }, children);
};
if (true) {
  LocaleProvider.displayName = "LocaleProvider";
}
var locale_default = LocaleProvider;

// node_modules/antd/es/theme/context.js
var import_react11 = __toESM(require_react());

// node_modules/antd/es/theme/themes/seed.js
var defaultPresetColors = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
var seedToken = {
  // preset color palettes
  ...defaultPresetColors,
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false,
  // Motion
  motion: true
};
var seed_default = seedToken;

// node_modules/antd/es/theme/interface/presetColors.js
var PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];

// node_modules/antd/es/theme/themes/shared/genColorMapToken.js
function genColorMapToken(seed, {
  generateColorPalettes: generateColorPalettes2,
  generateNeutralColorPalettes: generateNeutralColorPalettes2
}) {
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes2(colorLink);
  const colorErrorBgFilledHover = new FastColor(errorColors[1]).mix(new FastColor(errorColors[3]), 50).toHexString();
  const presetColorTokens = {};
  PresetColors.forEach((colorKey) => {
    const colorBase = seed[colorKey];
    if (colorBase) {
      const colorPalette = generateColorPalettes2(colorBase);
      presetColorTokens[`${colorKey}Hover`] = colorPalette[5];
      presetColorTokens[`${colorKey}Active`] = colorPalette[7];
    }
  });
  return {
    ...neutralColors,
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBgFilledHover,
    colorErrorBgActive: errorColors[3],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],
    ...presetColorTokens,
    colorBgMask: new FastColor("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  };
}

// node_modules/antd/es/theme/themes/shared/genRadius.js
var genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
var genRadius_default = genRadius;

// node_modules/antd/es/theme/themes/shared/genCommonMapToken.js
function genCommonMapToken(token) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token;
  return {
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1,
    // radius
    ...genRadius_default(borderRadius)
  };
}

// node_modules/antd/es/theme/themes/shared/genControlHeight.js
var genControlHeight = (token) => {
  const {
    controlHeight
  } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
var genControlHeight_default = genControlHeight;

// node_modules/antd/es/theme/themes/shared/genFontSizes.js
function getLineHeight(fontSize) {
  return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
  const fontSizes = Array.from({
    length: 10
  }).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.E ** (i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => ({
    size,
    lineHeight: getLineHeight(size)
  }));
}

// node_modules/antd/es/theme/themes/shared/genFontMapToken.js
var genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  const fontSizeMD = fontSizes[1];
  const fontSizeSM = fontSizes[0];
  const fontSizeLG = fontSizes[2];
  const lineHeight = lineHeights[1];
  const lineHeightSM = lineHeights[0];
  const lineHeightLG = lineHeights[2];
  return {
    fontSizeSM,
    fontSize: fontSizeMD,
    fontSizeLG,
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight,
    lineHeightLG,
    lineHeightSM,
    fontHeight: Math.round(lineHeight * fontSizeMD),
    fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
    fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
var genFontMapToken_default = genFontMapToken;

// node_modules/antd/es/theme/themes/shared/genSizeMapToken.js
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    // 48
    sizeXL: sizeUnit * (sizeStep + 4),
    // 32
    sizeLG: sizeUnit * (sizeStep + 2),
    // 24
    sizeMD: sizeUnit * (sizeStep + 1),
    // 20
    sizeMS: sizeUnit * sizeStep,
    // 16
    size: sizeUnit * sizeStep,
    // 16
    sizeSM: sizeUnit * (sizeStep - 1),
    // 12
    sizeXS: sizeUnit * (sizeStep - 2),
    // 8
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}

// node_modules/antd/es/theme/themes/default/colorAlgorithm.js
var getAlphaColor = (baseColor, alpha) => new FastColor(baseColor).setA(alpha).toRgbString();
var getSolidColor = (baseColor, brightness) => {
  const instance = new FastColor(baseColor);
  return instance.darken(brightness).toHexString();
};

// node_modules/antd/es/theme/themes/default/colors.js
var generateColorPalettes = (baseColor) => {
  const colors = generate(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
  };
};
var generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
    colorBgSolid: getAlphaColor(colorTextBase, 1),
    colorBgSolidHover: getAlphaColor(colorTextBase, 0.75),
    colorBgSolidActive: getAlphaColor(colorTextBase, 0.95),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
    colorBgBlur: "transparent",
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderDisabled: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};

// node_modules/antd/es/theme/themes/default/index.js
function derivative(token) {
  presetPrimaryColors.pink = presetPrimaryColors.magenta;
  presetPalettes.pink = presetPalettes.magenta;
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = token[colorKey] === presetPrimaryColors[colorKey] ? presetPalettes[colorKey] : generate(token[colorKey]);
    return Array.from({
      length: 10
    }, () => 1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      prev[`${colorKey}${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = {
      ...prev,
      ...cur
    };
    return prev;
  }, {});
  return {
    ...token,
    ...colorPalettes,
    // Colors
    ...genColorMapToken(token, {
      generateColorPalettes,
      generateNeutralColorPalettes
    }),
    // Font
    ...genFontMapToken_default(token.fontSize),
    // Size
    ...genSizeMapToken(token),
    // Height
    ...genControlHeight_default(token),
    // Others
    ...genCommonMapToken(token)
  };
}

// node_modules/antd/es/theme/themes/default/theme.js
var defaultTheme = createTheme(derivative);
var theme_default = defaultTheme;

// node_modules/antd/es/theme/context.js
var defaultConfig = {
  token: seed_default,
  override: {
    override: seed_default
  },
  hashed: true
};
var DesignTokenContext = import_react11.default.createContext(defaultConfig);

// node_modules/antd/es/tooltip/UniqueProvider/index.js
var import_react21 = __toESM(require_react());

// node_modules/@rc-component/portal/es/Portal.js
var React25 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@rc-component/portal/es/Context.js
var React21 = __toESM(require_react());
var OrderContext = React21.createContext(null);
var Context_default2 = OrderContext;

// node_modules/@rc-component/portal/es/mock.js
var inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === "boolean") {
    inline = nextInline;
  }
  return inline;
}

// node_modules/@rc-component/portal/es/useDom.js
var React22 = __toESM(require_react());
var EMPTY_LIST = [];
function useDom(render, debug) {
  const [ele] = React22.useState(() => {
    if (!canUseDom()) {
      return null;
    }
    const defaultEle = document.createElement("div");
    if (debug) {
      defaultEle.setAttribute("data-debug", debug);
    }
    return defaultEle;
  });
  const appendedRef = React22.useRef(false);
  const queueCreate = React22.useContext(Context_default2);
  const [queue, setQueue] = React22.useState(EMPTY_LIST);
  const mergedQueueCreate = queueCreate || (appendedRef.current ? void 0 : (appendFn) => {
    setQueue((origin) => {
      const newQueue = [appendFn, ...origin];
      return newQueue;
    });
  });
  function append() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup2() {
    var _a;
    (_a = ele.parentElement) == null ? void 0 : _a.removeChild(ele);
    appendedRef.current = false;
  }
  useLayoutEffect_default(() => {
    if (render) {
      if (queueCreate) {
        queueCreate(append);
      } else {
        append();
      }
    } else {
      cleanup2();
    }
    return cleanup2;
  }, [render]);
  useLayoutEffect_default(() => {
    if (queue.length) {
      queue.forEach((appendFn) => appendFn());
      setQueue(EMPTY_LIST);
    }
  }, [queue]);
  return [ele, mergedQueueCreate];
}

// node_modules/@rc-component/portal/es/useScrollLocker.js
var React23 = __toESM(require_react());

// node_modules/@rc-component/util/es/getScrollBarSize.js
var cached;
function measureScrollbarSize(ele) {
  const randomId = `rc-scrollbar-measure-${Math.random().toString(36).substring(7)}`;
  const measureEle = document.createElement("div");
  measureEle.id = randomId;
  const measureStyle = measureEle.style;
  measureStyle.position = "absolute";
  measureStyle.left = "0";
  measureStyle.top = "0";
  measureStyle.width = "100px";
  measureStyle.height = "100px";
  measureStyle.overflow = "scroll";
  let fallbackWidth;
  let fallbackHeight;
  if (ele) {
    const targetStyle = getComputedStyle(ele);
    measureStyle.scrollbarColor = targetStyle.scrollbarColor;
    measureStyle.scrollbarWidth = targetStyle.scrollbarWidth;
    const webkitScrollbarStyle = getComputedStyle(ele, "::-webkit-scrollbar");
    const width = parseInt(webkitScrollbarStyle.width, 10);
    const height = parseInt(webkitScrollbarStyle.height, 10);
    try {
      const widthStyle = width ? `width: ${webkitScrollbarStyle.width};` : "";
      const heightStyle = height ? `height: ${webkitScrollbarStyle.height};` : "";
      updateCSS(`
#${randomId}::-webkit-scrollbar {
${widthStyle}
${heightStyle}
}`, randomId);
    } catch (e) {
      console.error(e);
      fallbackWidth = width;
      fallbackHeight = height;
    }
  }
  document.body.appendChild(measureEle);
  const scrollWidth = ele && fallbackWidth && !isNaN(fallbackWidth) ? fallbackWidth : measureEle.offsetWidth - measureEle.clientWidth;
  const scrollHeight = ele && fallbackHeight && !isNaN(fallbackHeight) ? fallbackHeight : measureEle.offsetHeight - measureEle.clientHeight;
  document.body.removeChild(measureEle);
  removeCSS(randomId);
  return {
    width: scrollWidth,
    height: scrollHeight
  };
}
function getScrollBarSize(fresh) {
  if (typeof document === "undefined") {
    return 0;
  }
  if (fresh || cached === void 0) {
    cached = measureScrollbarSize();
  }
  return cached.width;
}
function getTargetScrollBarSize(target) {
  if (typeof document === "undefined" || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  return measureScrollbarSize(target);
}

// node_modules/@rc-component/portal/es/util.js
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

// node_modules/@rc-component/portal/es/useScrollLocker.js
var UNIQUE_ID = `rc-util-locker-${Date.now()}`;
var uuid2 = 0;
function useScrollLocker(lock) {
  const mergedLock = !!lock;
  const [id] = React23.useState(() => {
    uuid2 += 1;
    return `${UNIQUE_ID}_${uuid2}`;
  });
  useLayoutEffect_default(() => {
    if (mergedLock) {
      const scrollbarSize = getTargetScrollBarSize(document.body).width;
      const isOverflow = isBodyOverflowing();
      updateCSS(`
html body {
  overflow-y: hidden;
  ${isOverflow ? `width: calc(100% - ${scrollbarSize}px);` : ""}
}`, id);
    } else {
      removeCSS(id);
    }
    return () => {
      removeCSS(id);
    };
  }, [mergedLock, id]);
}

// node_modules/@rc-component/util/es/hooks/useId.js
var React24 = __toESM(require_react());
function getUseId() {
  const fullClone = {
    ...React24
  };
  return fullClone.useId;
}
var uuid3 = 0;
function getId(prefix, key) {
  const keyStr = String(key);
  const sanitizedKey = keyStr.replace(/[^a-zA-Z0-9_.:-]/g, "-");
  return `${prefix}-${sanitizedKey}`;
}
var useOriginId = getUseId();
var useId_default = useOriginId ? (
  // Use React `useId`
  function useId(id) {
    const reactId = useOriginId();
    if (id) {
      return id;
    }
    if (false) {
      return "test-id";
    }
    return reactId;
  }
) : (
  // Use compatible of `useId`
  function useCompatId(id) {
    const [innerId, setInnerId] = React24.useState("ssr-id");
    React24.useEffect(() => {
      const nextId = uuid3;
      uuid3 += 1;
      setInnerId(`rc_unique_${nextId}`);
    }, []);
    if (id) {
      return id;
    }
    if (false) {
      return "test-id";
    }
    return innerId;
  }
);

// node_modules/@rc-component/portal/es/useEscKeyDown.js
var import_react12 = __toESM(require_react());
var stack = [];
var IME_LOCK_DURATION = 200;
var lastCompositionEndTime = 0;
var onGlobalKeyDown = (event) => {
  if (event.key === "Escape" && !event.isComposing) {
    const now = Date.now();
    if (now - lastCompositionEndTime < IME_LOCK_DURATION) {
      return;
    }
    const len = stack.length;
    for (let i = len - 1; i >= 0; i -= 1) {
      stack[i].onEsc({
        top: i === len - 1,
        event
      });
    }
  }
};
var onGlobalCompositionEnd = () => {
  lastCompositionEndTime = Date.now();
};
function attachGlobalEventListeners() {
  window.addEventListener("keydown", onGlobalKeyDown);
  window.addEventListener("compositionend", onGlobalCompositionEnd);
}
function detachGlobalEventListeners() {
  if (stack.length === 0) {
    window.removeEventListener("keydown", onGlobalKeyDown);
    window.removeEventListener("compositionend", onGlobalCompositionEnd);
  }
}
function useEscKeyDown(open, onEsc) {
  const id = useId_default();
  const onEventEsc = useEvent_default(onEsc);
  const ensure = () => {
    if (!stack.find((item) => item.id === id)) {
      stack.push({
        id,
        onEsc: onEventEsc
      });
    }
  };
  const clear = () => {
    stack = stack.filter((item) => item.id !== id);
  };
  (0, import_react12.useMemo)(() => {
    if (open) {
      ensure();
    } else if (!open) {
      clear();
    }
  }, [open]);
  (0, import_react12.useEffect)(() => {
    if (open) {
      ensure();
      attachGlobalEventListeners();
      return () => {
        clear();
        detachGlobalEventListeners();
      };
    }
  }, [open]);
}

// node_modules/@rc-component/portal/es/Portal.js
var getPortalContainer = (getContainer2) => {
  if (getContainer2 === false) {
    return false;
  }
  if (!canUseDom() || !getContainer2) {
    return null;
  }
  if (typeof getContainer2 === "string") {
    return document.querySelector(getContainer2);
  }
  if (typeof getContainer2 === "function") {
    return getContainer2();
  }
  return getContainer2;
};
var Portal = React25.forwardRef((props, ref) => {
  const {
    open,
    autoLock,
    getContainer: getContainer2,
    debug,
    autoDestroy = true,
    children,
    onEsc
  } = props;
  const [shouldRender, setShouldRender] = React25.useState(open);
  const mergedRender = shouldRender || open;
  if (true) {
    warning_default(canUseDom() || !open, `Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR.`);
  }
  React25.useEffect(() => {
    if (autoDestroy || open) {
      setShouldRender(open);
    }
  }, [open, autoDestroy]);
  const [innerContainer, setInnerContainer] = React25.useState(() => getPortalContainer(getContainer2));
  React25.useEffect(() => {
    const customizeContainer = getPortalContainer(getContainer2);
    setInnerContainer(() => (
      // React do the state update even the value is the same,
      // Use function call to force React to compare update
      customizeContainer ?? null
    ));
  });
  const [defaultContainer, queueCreate] = useDom(mergedRender && !innerContainer, debug);
  const mergedContainer = innerContainer ?? defaultContainer;
  useScrollLocker(autoLock && open && canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));
  useEscKeyDown(open, onEsc);
  let childRef = null;
  if (children && supportRef(children) && ref) {
    childRef = getNodeRef(children);
  }
  const mergedRef = useComposeRef(childRef, ref);
  if (!mergedRender || !canUseDom() || innerContainer === void 0) {
    return null;
  }
  const renderInline = mergedContainer === false || inlineMock();
  let reffedChildren = children;
  if (ref) {
    reffedChildren = React25.cloneElement(children, {
      ref: mergedRef
    });
  }
  return React25.createElement(Context_default2.Provider, {
    value: queueCreate
  }, renderInline ? reffedChildren : (0, import_react_dom.createPortal)(reffedChildren, mergedContainer));
});
if (true) {
  Portal.displayName = "Portal";
}
var Portal_default = Portal;

// node_modules/@rc-component/portal/es/index.js
var es_default2 = Portal_default;

// node_modules/@rc-component/trigger/es/index.js
var React46 = __toESM(require_react());

// node_modules/@rc-component/motion/es/CSSMotion.js
var React32 = __toESM(require_react());
var import_react16 = __toESM(require_react());

// node_modules/@rc-component/motion/es/context.js
var React26 = __toESM(require_react());
var Context = React26.createContext({});
function MotionProvider({
  children,
  ...props
}) {
  return React26.createElement(Context.Provider, {
    value: props
  }, children);
}

// node_modules/@rc-component/util/es/hooks/useSyncState.js
var React27 = __toESM(require_react());
function useSyncState(defaultValue) {
  const [, forceUpdate] = React27.useReducer((x) => x + 1, 0);
  const currentValueRef = React27.useRef(defaultValue);
  const getValue3 = useEvent_default(() => {
    return currentValueRef.current;
  });
  const setValue = useEvent_default((updater) => {
    currentValueRef.current = typeof updater === "function" ? updater(currentValueRef.current) : updater;
    forceUpdate();
  });
  return [getValue3, setValue];
}
var useSyncState_default = useSyncState;

// node_modules/@rc-component/motion/es/hooks/useStatus.js
var React31 = __toESM(require_react());
var import_react15 = __toESM(require_react());

// node_modules/@rc-component/motion/es/interface.js
var STATUS_NONE = "none";
var STATUS_APPEAR = "appear";
var STATUS_ENTER = "enter";
var STATUS_LEAVE = "leave";
var STEP_NONE = "none";
var STEP_PREPARE = "prepare";
var STEP_START = "start";
var STEP_ACTIVE = "active";
var STEP_ACTIVATED = "end";
var STEP_PREPARED = "prepared";

// node_modules/@rc-component/motion/es/hooks/useDomMotionEvents.js
var React28 = __toESM(require_react());
var import_react13 = __toESM(require_react());

// node_modules/@rc-component/motion/es/util/motion.js
function makePrefixMap(styleProp, eventName) {
  const prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes[`Webkit${styleProp}`] = `webkit${eventName}`;
  prefixes[`Moz${styleProp}`] = `moz${eventName}`;
  prefixes[`ms${styleProp}`] = `MS${eventName}`;
  prefixes[`O${styleProp}`] = `o${eventName.toLowerCase()}`;
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  const prefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    transitionend: makePrefixMap("Transition", "TransitionEnd")
  };
  if (domSupport) {
    if (!("AnimationEvent" in win)) {
      delete prefixes.animationend.animation;
    }
    if (!("TransitionEvent" in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
var style = {};
if (canUseDom()) {
  ({
    style
  } = document.createElement("div"));
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  const prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    const stylePropList = Object.keys(prefixMap);
    const len = stylePropList.length;
    for (let i = 0; i < len; i += 1) {
      const styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return "";
}
var internalAnimationEndName = getVendorPrefixedEventName("animationend");
var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || "animationend";
var transitionEndName = internalTransitionEndName || "transitionend";
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;
  if (typeof transitionName === "object") {
    const type5 = transitionType.replace(/-\w/g, (match2) => match2[1].toUpperCase());
    return transitionName[type5];
  }
  return `${transitionName}-${transitionType}`;
}

// node_modules/@rc-component/motion/es/hooks/useDomMotionEvents.js
var useDomMotionEvents_default = (onInternalMotionEnd) => {
  const cacheElementRef = (0, import_react13.useRef)();
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);
      cacheElementRef.current = element;
    }
  }
  React28.useEffect(() => () => {
    removeMotionEvents(cacheElementRef.current);
    cacheElementRef.current = null;
  }, []);
  return [patchMotionEvents, removeMotionEvents];
};

// node_modules/@rc-component/motion/es/hooks/useIsomorphicLayoutEffect.js
var import_react14 = __toESM(require_react());
var useIsomorphicLayoutEffect = canUseDom() ? import_react14.useLayoutEffect : import_react14.useEffect;
var useIsomorphicLayoutEffect_default = useIsomorphicLayoutEffect;

// node_modules/@rc-component/motion/es/hooks/useStepQueue.js
var React30 = __toESM(require_react());

// node_modules/@rc-component/util/es/raf.js
var raf = (callback) => +setTimeout(callback, 16);
var caf = (num) => clearTimeout(num);
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
  raf = (callback) => window.requestAnimationFrame(callback);
  caf = (handle) => window.cancelAnimationFrame(handle);
}
var rafUUID = 0;
var rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = (callback, times = 1) => {
  rafUUID += 1;
  const id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      const realId = raf(() => {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = (id) => {
  const realId = rafIds.get(id);
  cleanup(id);
  return caf(realId);
};
if (true) {
  wrapperRaf.ids = () => rafIds;
}
var raf_default = wrapperRaf;

// node_modules/@rc-component/motion/es/hooks/useNextFrame.js
var React29 = __toESM(require_react());
var useNextFrame_default = () => {
  const nextFrameRef = React29.useRef(null);
  function cancelNextFrame() {
    raf_default.cancel(nextFrameRef.current);
  }
  function nextFrame(callback, delay = 2) {
    cancelNextFrame();
    const nextFrameId = raf_default(() => {
      if (delay <= 1) {
        callback({
          isCanceled: () => nextFrameId !== nextFrameRef.current
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  React29.useEffect(() => () => {
    cancelNextFrame();
  }, []);
  return [nextFrame, cancelNextFrame];
};

// node_modules/@rc-component/motion/es/hooks/useStepQueue.js
var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
var SkipStep = false;
var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
var useStepQueue_default = (status, prepareOnly, callback) => {
  const [step, setStep] = useState_default(STEP_NONE);
  const [nextFrame, cancelNextFrame] = useNextFrame_default();
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  const STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  useIsomorphicLayoutEffect_default(() => {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      const index = STEP_QUEUE.indexOf(step);
      const nextStep = STEP_QUEUE[index + 1];
      const result = callback(step);
      if (result === SkipStep) {
        setStep(nextStep, true);
      } else if (nextStep) {
        nextFrame((info) => {
          function doNext() {
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }
          if (result === true) {
            doNext();
          } else {
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  React30.useEffect(() => () => {
    cancelNextFrame();
  }, []);
  return [startQueue, step];
};

// node_modules/@rc-component/motion/es/hooks/useStatus.js
function useStatus(supportMotion, visible, getElement, {
  motionEnter = true,
  motionAppear = true,
  motionLeave = true,
  motionDeadline,
  motionLeaveImmediately,
  onAppearPrepare,
  onEnterPrepare,
  onLeavePrepare,
  onAppearStart,
  onEnterStart,
  onLeaveStart,
  onAppearActive,
  onEnterActive,
  onLeaveActive,
  onAppearEnd,
  onEnterEnd,
  onLeaveEnd,
  onVisibleChanged
}) {
  const [asyncVisible, setAsyncVisible] = useState_default();
  const [getStatus, setStatus] = useSyncState_default(STATUS_NONE);
  const [style2, setStyle] = useState_default(null);
  const currentStatus = getStatus();
  const mountedRef = (0, import_react15.useRef)(false);
  const deadlineRef = (0, import_react15.useRef)(null);
  function getDomElement() {
    return getElement();
  }
  const activeRef = (0, import_react15.useRef)(false);
  function updateMotionEndStatus() {
    setStatus(STATUS_NONE);
    setStyle(null, true);
  }
  const onInternalMotionEnd = useEvent_default((event) => {
    const status = getStatus();
    if (status === STATUS_NONE) {
      return;
    }
    const element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      return;
    }
    const currentActive = activeRef.current;
    let canEnd;
    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd == null ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd == null ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd == null ? void 0 : onLeaveEnd(element, event);
    }
    if (currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  });
  const [patchMotionEvents] = useDomMotionEvents_default(onInternalMotionEnd);
  const getEventHandlers = (targetStatus) => {
    switch (targetStatus) {
      case STATUS_APPEAR:
        return {
          [STEP_PREPARE]: onAppearPrepare,
          [STEP_START]: onAppearStart,
          [STEP_ACTIVE]: onAppearActive
        };
      case STATUS_ENTER:
        return {
          [STEP_PREPARE]: onEnterPrepare,
          [STEP_START]: onEnterStart,
          [STEP_ACTIVE]: onEnterActive
        };
      case STATUS_LEAVE:
        return {
          [STEP_PREPARE]: onLeavePrepare,
          [STEP_START]: onLeaveStart,
          [STEP_ACTIVE]: onLeaveActive
        };
      default:
        return {};
    }
  };
  const eventHandlers = React31.useMemo(() => getEventHandlers(currentStatus), [currentStatus]);
  const [startStep, step] = useStepQueue_default(currentStatus, !supportMotion, (newStep) => {
    var _a;
    if (newStep === STEP_PREPARE) {
      const onPrepare = eventHandlers[STEP_PREPARE];
      if (!onPrepare) {
        return SkipStep;
      }
      return onPrepare(getDomElement());
    }
    if (step in eventHandlers) {
      setStyle(((_a = eventHandlers[step]) == null ? void 0 : _a.call(eventHandlers, getDomElement(), null)) || null);
    }
    if (step === STEP_ACTIVE && currentStatus !== STATUS_NONE) {
      patchMotionEvents(getDomElement());
      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(() => {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }
    if (step === STEP_PREPARED) {
      updateMotionEndStatus();
    }
    return DoStep;
  });
  const active = isActive(step);
  activeRef.current = active;
  const visibleRef = (0, import_react15.useRef)(null);
  useIsomorphicLayoutEffect_default(() => {
    if (mountedRef.current && visibleRef.current === visible) {
      return;
    }
    setAsyncVisible(visible);
    const isMounted = mountedRef.current;
    mountedRef.current = true;
    let nextStatus;
    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    }
    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    }
    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    }
    const nextEventHandlers = getEventHandlers(nextStatus);
    if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
      setStatus(nextStatus);
      startStep();
    } else {
      setStatus(STATUS_NONE);
    }
    visibleRef.current = visible;
  }, [visible]);
  (0, import_react15.useEffect)(() => {
    if (
      // Cancel appear
      currentStatus === STATUS_APPEAR && !motionAppear || // Cancel enter
      currentStatus === STATUS_ENTER && !motionEnter || // Cancel leave
      currentStatus === STATUS_LEAVE && !motionLeave
    ) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  (0, import_react15.useEffect)(() => () => {
    mountedRef.current = false;
    clearTimeout(deadlineRef.current);
  }, []);
  const firstMountChangeRef = React31.useRef(false);
  (0, import_react15.useEffect)(() => {
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }
    if (asyncVisible !== void 0 && currentStatus === STATUS_NONE) {
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged == null ? void 0 : onVisibleChanged(asyncVisible);
      }
      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, currentStatus]);
  let mergedStyle = style2;
  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = {
      transition: "none",
      ...mergedStyle
    };
  }
  return [getStatus, step, mergedStyle, asyncVisible ?? visible];
}

// node_modules/@rc-component/motion/es/CSSMotion.js
function genCSSMotion(config) {
  let transitionSupport = config;
  if (typeof config === "object") {
    ({
      transitionSupport
    } = config);
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  const CSSMotion = React32.forwardRef((props, ref) => {
    const {
      // Default config
      visible = true,
      removeOnLeave = true,
      forceRender,
      children,
      motionName,
      leavedClassName,
      eventProps
    } = props;
    const {
      motion: contextMotion
    } = React32.useContext(Context);
    const supportMotion = isSupportTransition(props, contextMotion);
    const nodeRef = (0, import_react16.useRef)();
    function getDomElement() {
      return getDOM(nodeRef.current);
    }
    const [getStatus, statusStep, statusStyle, mergedVisible] = useStatus(supportMotion, visible, getDomElement, props);
    const status = getStatus();
    const renderedRef = React32.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }
    const refObj = React32.useMemo(() => {
      const obj = {};
      Object.defineProperties(obj, {
        nativeElement: {
          enumerable: true,
          get: getDomElement
        },
        inMotion: {
          enumerable: true,
          get: () => () => getStatus() !== STATUS_NONE
        },
        enableMotion: {
          enumerable: true,
          get: () => () => supportMotion
        }
      });
      return obj;
    }, []);
    React32.useImperativeHandle(ref, () => refObj, []);
    let motionChildren;
    const mergedProps = {
      ...eventProps,
      visible
    };
    if (!children) {
      motionChildren = null;
    } else if (status === STATUS_NONE) {
      if (mergedVisible) {
        motionChildren = children({
          ...mergedProps
        }, nodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children({
          ...mergedProps,
          className: leavedClassName
        }, nodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children({
          ...mergedProps,
          style: {
            display: "none"
          }
        }, nodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      let statusSuffix;
      if (statusStep === STEP_PREPARE) {
        statusSuffix = "prepare";
      } else if (isActive(statusStep)) {
        statusSuffix = "active";
      } else if (statusStep === STEP_START) {
        statusSuffix = "start";
      }
      const motionCls = getTransitionName(motionName, `${status}-${statusSuffix}`);
      motionChildren = children({
        ...mergedProps,
        className: clsx(getTransitionName(motionName, status), {
          [motionCls]: motionCls && statusSuffix,
          [motionName]: typeof motionName === "string"
        }),
        style: statusStyle
      }, nodeRef);
    }
    if (React32.isValidElement(motionChildren) && supportRef(motionChildren)) {
      const originNodeRef = getNodeRef(motionChildren);
      if (!originNodeRef) {
        motionChildren = React32.cloneElement(motionChildren, {
          ref: nodeRef
        });
      }
    }
    return motionChildren;
  });
  CSSMotion.displayName = "CSSMotion";
  return CSSMotion;
}
var CSSMotion_default = genCSSMotion(supportTransition);

// node_modules/@rc-component/motion/es/CSSMotionList.js
var React33 = __toESM(require_react());

// node_modules/@rc-component/motion/es/util/diff.js
var STATUS_ADD = "add";
var STATUS_KEEP = "keep";
var STATUS_REMOVE = "remove";
var STATUS_REMOVED = "removed";
function wrapKeyToObject(key) {
  let keyObj;
  if (key && typeof key === "object" && "key" in key) {
    keyObj = key;
  } else {
    keyObj = {
      key
    };
  }
  return {
    ...keyObj,
    key: String(keyObj.key)
  };
}
function parseKeys(keys2 = []) {
  return keys2.map(wrapKeyToObject);
}
function diffKeys(prevKeys = [], currentKeys = []) {
  let list = [];
  let currentIndex = 0;
  const currentLen = currentKeys.length;
  const prevKeyObjects = parseKeys(prevKeys);
  const currentKeyObjects = parseKeys(currentKeys);
  prevKeyObjects.forEach((keyObj) => {
    let hit = false;
    for (let i = currentIndex; i < currentLen; i += 1) {
      const currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map((obj) => ({
            ...obj,
            status: STATUS_ADD
          })));
          currentIndex = i;
        }
        list.push({
          ...currentKeyObj,
          status: STATUS_KEEP
        });
        currentIndex += 1;
        hit = true;
        break;
      }
    }
    if (!hit) {
      list.push({
        ...keyObj,
        status: STATUS_REMOVE
      });
    }
  });
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map((obj) => ({
      ...obj,
      status: STATUS_ADD
    })));
  }
  const keys2 = {};
  list.forEach(({
    key
  }) => {
    keys2[key] = (keys2[key] || 0) + 1;
  });
  const duplicatedKeys = Object.keys(keys2).filter((key) => keys2[key] > 1);
  duplicatedKeys.forEach((matchKey) => {
    list = list.filter(({
      key,
      status
    }) => key !== matchKey || status !== STATUS_REMOVE);
    list.forEach((node) => {
      if (node.key === matchKey) {
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

// node_modules/@rc-component/motion/es/CSSMotionList.js
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function genCSSMotionList(transitionSupport, CSSMotion = CSSMotion_default) {
  class CSSMotionList extends React33.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        keyEntities: []
      });
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
      __publicField(this, "removeKey", (removeKey) => {
        this.setState((prevState) => {
          const nextKeyEntities = prevState.keyEntities.map((entity) => {
            if (entity.key !== removeKey) return entity;
            return {
              ...entity,
              status: STATUS_REMOVED
            };
          });
          return {
            keyEntities: nextKeyEntities
          };
        }, () => {
          const {
            keyEntities
          } = this.state;
          const restKeysCount = keyEntities.filter(({
            status
          }) => status !== STATUS_REMOVED).length;
          if (restKeysCount === 0 && this.props.onAllRemoved) {
            this.props.onAllRemoved();
          }
        });
      });
    }
    static getDerivedStateFromProps({
      keys: keys2
    }, {
      keyEntities
    }) {
      const parsedKeyObjects = parseKeys(keys2);
      const mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
      return {
        keyEntities: mixedKeyEntities.filter((entity) => {
          const prevEntity = keyEntities.find(({
            key
          }) => entity.key === key);
          if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
            return false;
          }
          return true;
        })
      };
    }
    render() {
      const {
        keyEntities
      } = this.state;
      const {
        component,
        children,
        onVisibleChanged,
        onAllRemoved,
        ...restProps
      } = this.props;
      const Component3 = component || React33.Fragment;
      const motionProps = {};
      MOTION_PROP_NAMES.forEach((prop) => {
        motionProps[prop] = restProps[prop];
        delete restProps[prop];
      });
      delete restProps.keys;
      return React33.createElement(Component3, restProps, keyEntities.map(({
        status,
        ...eventProps
      }, index) => {
        const visible = status === STATUS_ADD || status === STATUS_KEEP;
        return React33.createElement(CSSMotion, _extends4({}, motionProps, {
          key: eventProps.key,
          visible,
          eventProps,
          onVisibleChanged: (changedVisible) => {
            onVisibleChanged == null ? void 0 : onVisibleChanged(changedVisible, {
              key: eventProps.key
            });
            if (!changedVisible) {
              this.removeKey(eventProps.key);
            }
          }
        }), (props, ref) => children({
          ...props,
          index
        }, ref));
      }));
    }
  }
  __publicField(CSSMotionList, "defaultProps", {
    component: "div"
  });
  return CSSMotionList;
}
var CSSMotionList_default = genCSSMotionList(supportTransition);

// node_modules/@rc-component/motion/es/index.js
var es_default3 = CSSMotion_default;

// node_modules/@rc-component/trigger/es/Popup/index.js
var React37 = __toESM(require_react());

// node_modules/@rc-component/trigger/es/Popup/Arrow.js
var React34 = __toESM(require_react());
function Arrow(props) {
  const {
    prefixCls,
    align,
    arrow,
    arrowPos
  } = props;
  const {
    className,
    content,
    style: style2
  } = arrow || {};
  const {
    x = 0,
    y = 0
  } = arrowPos;
  const arrowRef = React34.useRef(null);
  if (!align || !align.points) {
    return null;
  }
  const alignStyle = {
    position: "absolute"
  };
  if (align.autoArrow !== false) {
    const popupPoints = align.points[0];
    const targetPoints = align.points[1];
    const popupTB = popupPoints[0];
    const popupLR = popupPoints[1];
    const targetTB = targetPoints[0];
    const targetLR = targetPoints[1];
    if (popupTB === targetTB || !["t", "b"].includes(popupTB)) {
      alignStyle.top = y;
    } else if (popupTB === "t") {
      alignStyle.top = 0;
    } else {
      alignStyle.bottom = 0;
    }
    if (popupLR === targetLR || !["l", "r"].includes(popupLR)) {
      alignStyle.left = x;
    } else if (popupLR === "l") {
      alignStyle.left = 0;
    } else {
      alignStyle.right = 0;
    }
  }
  return React34.createElement("div", {
    ref: arrowRef,
    className: clsx(`${prefixCls}-arrow`, className),
    style: {
      ...alignStyle,
      ...style2
    }
  }, content);
}

// node_modules/@rc-component/trigger/es/Popup/Mask.js
var React35 = __toESM(require_react());
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
function Mask(props) {
  const {
    prefixCls,
    open,
    zIndex,
    mask,
    motion,
    mobile
  } = props;
  if (!mask) {
    return null;
  }
  return React35.createElement(es_default3, _extends5({}, motion, {
    motionAppear: true,
    visible: open,
    removeOnLeave: true
  }), ({
    className
  }) => React35.createElement("div", {
    style: {
      zIndex
    },
    className: clsx(`${prefixCls}-mask`, mobile && `${prefixCls}-mobile-mask`, className)
  }));
}

// node_modules/@rc-component/trigger/es/Popup/PopupContent.js
var React36 = __toESM(require_react());
var PopupContent = React36.memo(({
  children
}) => children, (_, next) => next.cache);
if (true) {
  PopupContent.displayName = "PopupContent";
}
var PopupContent_default = PopupContent;

// node_modules/@rc-component/trigger/es/hooks/useOffsetStyle.js
function useOffsetStyle(isMobile, ready, open, align, offsetR, offsetB, offsetX, offsetY) {
  var _a;
  const AUTO = "auto";
  const offsetStyle = isMobile ? {} : {
    left: "-1000vw",
    top: "-1000vh",
    right: AUTO,
    bottom: AUTO
  };
  if (!isMobile && (ready || !open)) {
    const {
      points
    } = align;
    const dynamicInset = align.dynamicInset || ((_a = align._experimental) == null ? void 0 : _a.dynamicInset);
    const alignRight = dynamicInset && points[0][1] === "r";
    const alignBottom = dynamicInset && points[0][0] === "b";
    if (alignRight) {
      offsetStyle.right = offsetR;
      offsetStyle.left = AUTO;
    } else {
      offsetStyle.left = offsetX;
      offsetStyle.right = AUTO;
    }
    if (alignBottom) {
      offsetStyle.bottom = offsetB;
      offsetStyle.top = AUTO;
    } else {
      offsetStyle.top = offsetY;
      offsetStyle.bottom = AUTO;
    }
  }
  return offsetStyle;
}

// node_modules/@rc-component/trigger/es/Popup/index.js
function _extends6() {
  _extends6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends6.apply(this, arguments);
}
var Popup = React37.forwardRef((props, ref) => {
  const {
    onEsc,
    popup,
    className,
    prefixCls,
    style: style2,
    target,
    onVisibleChanged,
    // Open
    open,
    keepDom,
    fresh,
    // Click
    onClick,
    // Mask
    mask,
    // Arrow
    arrow,
    arrowPos,
    align,
    // Motion
    motion,
    maskMotion,
    // Mobile
    mobile,
    // Portal
    forceRender,
    getPopupContainer,
    autoDestroy,
    portal: Portal2,
    children,
    zIndex,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerDownCapture,
    ready,
    offsetX,
    offsetY,
    offsetR,
    offsetB,
    onAlign,
    onPrepare,
    // Resize
    onResize: onResize2,
    stretch,
    targetWidth,
    targetHeight
  } = props;
  const popupContent = typeof popup === "function" ? popup() : popup;
  const isNodeVisible = open || keepDom;
  const isMobile = !!mobile;
  const [mergedMask, mergedMaskMotion, mergedPopupMotion] = React37.useMemo(() => {
    if (mobile) {
      return [mobile.mask, mobile.maskMotion, mobile.motion];
    }
    return [mask, maskMotion, motion];
  }, [mobile, mask, maskMotion, motion]);
  const getPopupContainerNeedParams = (getPopupContainer == null ? void 0 : getPopupContainer.length) > 0;
  const [show, setShow] = React37.useState(!getPopupContainer || !getPopupContainerNeedParams);
  useLayoutEffect_default(() => {
    if (!show && getPopupContainerNeedParams && target) {
      setShow(true);
    }
  }, [show, getPopupContainerNeedParams, target]);
  const onInternalResize = useEvent_default((size, ele) => {
    onResize2 == null ? void 0 : onResize2(size, ele);
    onAlign();
  });
  const offsetStyle = useOffsetStyle(isMobile, ready, open, align, offsetR, offsetB, offsetX, offsetY);
  if (!show) {
    return null;
  }
  const miscStyle = {};
  if (stretch) {
    if (stretch.includes("height") && targetHeight) {
      miscStyle.height = targetHeight;
    } else if (stretch.includes("minHeight") && targetHeight) {
      miscStyle.minHeight = targetHeight;
    }
    if (stretch.includes("width") && targetWidth) {
      miscStyle.width = targetWidth;
    } else if (stretch.includes("minWidth") && targetWidth) {
      miscStyle.minWidth = targetWidth;
    }
  }
  if (!open) {
    miscStyle.pointerEvents = "none";
  }
  return React37.createElement(Portal2, {
    open: forceRender || isNodeVisible,
    getContainer: getPopupContainer && (() => getPopupContainer(target)),
    autoDestroy,
    onEsc
  }, React37.createElement(Mask, {
    prefixCls,
    open,
    zIndex,
    mask: mergedMask,
    motion: mergedMaskMotion,
    mobile: isMobile
  }), React37.createElement(es_default, {
    onResize: onInternalResize,
    disabled: !open
  }, (resizeObserverRef) => {
    return React37.createElement(es_default3, _extends6({
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      removeOnLeave: false,
      forceRender,
      leavedClassName: `${prefixCls}-hidden`
    }, mergedPopupMotion, {
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      visible: open,
      onVisibleChanged: (nextVisible) => {
        var _a;
        (_a = motion == null ? void 0 : motion.onVisibleChanged) == null ? void 0 : _a.call(motion, nextVisible);
        onVisibleChanged(nextVisible);
      }
    }), ({
      className: motionClassName,
      style: motionStyle
    }, motionRef) => {
      const cls = clsx(prefixCls, motionClassName, className, {
        [`${prefixCls}-mobile`]: isMobile
      });
      return React37.createElement("div", {
        ref: composeRef(resizeObserverRef, ref, motionRef),
        className: cls,
        style: {
          "--arrow-x": `${arrowPos.x || 0}px`,
          "--arrow-y": `${arrowPos.y || 0}px`,
          ...offsetStyle,
          ...miscStyle,
          ...motionStyle,
          boxSizing: "border-box",
          zIndex,
          ...style2
        },
        onMouseEnter,
        onMouseLeave,
        onPointerEnter,
        onClick,
        onPointerDownCapture
      }, arrow && React37.createElement(Arrow, {
        prefixCls,
        arrow,
        arrowPos,
        align
      }), React37.createElement(PopupContent_default, {
        cache: !open && !fresh
      }, popupContent));
    });
  }), children);
});
if (true) {
  Popup.displayName = "Popup";
}
var Popup_default = Popup;

// node_modules/@rc-component/trigger/es/context.js
var React38 = __toESM(require_react());
var TriggerContext = React38.createContext(null);
var context_default2 = TriggerContext;
var UniqueContext = React38.createContext(null);

// node_modules/@rc-component/trigger/es/hooks/useAction.js
var React39 = __toESM(require_react());
function toArray2(val) {
  return val ? Array.isArray(val) ? val : [val] : [];
}
function useAction(action, showAction, hideAction) {
  return React39.useMemo(() => {
    const mergedShowAction = toArray2(showAction ?? action);
    const mergedHideAction = toArray2(hideAction ?? action);
    const showActionSet = new Set(mergedShowAction);
    const hideActionSet = new Set(mergedHideAction);
    if (showActionSet.has("hover") && !showActionSet.has("click")) {
      showActionSet.add("touch");
    }
    if (hideActionSet.has("hover") && !hideActionSet.has("click")) {
      hideActionSet.add("touch");
    }
    return [showActionSet, hideActionSet];
  }, [action, showAction, hideAction]);
}

// node_modules/@rc-component/util/es/Dom/isVisible.js
var isVisible_default = (element) => {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      const {
        width,
        height
      } = element.getBBox();
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      const {
        width,
        height
      } = element.getBoundingClientRect();
      if (width || height) {
        return true;
      }
    }
  }
  return false;
};

// node_modules/@rc-component/trigger/es/hooks/useAlign.js
var React40 = __toESM(require_react());

// node_modules/@rc-component/trigger/es/util.js
function isPointsEq(a1 = [], a2 = [], isAlignPoint) {
  const getVal = (a, index) => a[index] || "";
  if (isAlignPoint) {
    return getVal(a1, 0) === getVal(a2, 0);
  }
  return getVal(a1, 0) === getVal(a2, 0) && getVal(a1, 1) === getVal(a2, 1);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var _a;
  const {
    points
  } = align;
  const placements2 = Object.keys(builtinPlacements);
  for (let i = 0; i < placements2.length; i += 1) {
    const placement = placements2[i];
    if (isPointsEq((_a = builtinPlacements[placement]) == null ? void 0 : _a.points, points, isAlignPoint)) {
      return `${prefixCls}-placement-${placement}`;
    }
  }
  return "";
}
function getWin(ele) {
  return ele.ownerDocument.defaultView;
}
function collectScroller(ele) {
  const scrollerList = [];
  let current = ele == null ? void 0 : ele.parentElement;
  const scrollStyle = ["hidden", "scroll", "clip", "auto"];
  while (current) {
    const {
      overflowX,
      overflowY,
      overflow
    } = getWin(current).getComputedStyle(current);
    if ([overflowX, overflowY, overflow].some((o) => scrollStyle.includes(o))) {
      scrollerList.push(current);
    }
    current = current.parentElement;
  }
  return scrollerList;
}
function toNum(num, defaultValue = 1) {
  return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
  return toNum(parseFloat(val), 0);
}
function getVisibleArea(initArea, scrollerList) {
  const visibleArea = {
    ...initArea
  };
  (scrollerList || []).forEach((ele) => {
    if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
      return;
    }
    const {
      overflow,
      overflowClipMargin,
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth
    } = getWin(ele).getComputedStyle(ele);
    const eleRect = ele.getBoundingClientRect();
    const {
      offsetHeight: eleOutHeight,
      clientHeight: eleInnerHeight,
      offsetWidth: eleOutWidth,
      clientWidth: eleInnerWidth
    } = ele;
    const borderTopNum = getPxValue(borderTopWidth);
    const borderBottomNum = getPxValue(borderBottomWidth);
    const borderLeftNum = getPxValue(borderLeftWidth);
    const borderRightNum = getPxValue(borderRightWidth);
    const scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1e3) / 1e3);
    const scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1e3) / 1e3);
    const eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
    const eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
    const scaledBorderTopWidth = borderTopNum * scaleY;
    const scaledBorderBottomWidth = borderBottomNum * scaleY;
    const scaledBorderLeftWidth = borderLeftNum * scaleX;
    const scaledBorderRightWidth = borderRightNum * scaleX;
    let clipMarginWidth = 0;
    let clipMarginHeight = 0;
    if (overflow === "clip") {
      const clipNum = getPxValue(overflowClipMargin);
      clipMarginWidth = clipNum * scaleX;
      clipMarginHeight = clipNum * scaleY;
    }
    const eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
    const eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
    const eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
    const eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
    visibleArea.left = Math.max(visibleArea.left, eleLeft);
    visibleArea.top = Math.max(visibleArea.top, eleTop);
    visibleArea.right = Math.min(visibleArea.right, eleRight);
    visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
  });
  return visibleArea;
}

// node_modules/@rc-component/trigger/es/hooks/useAlign.js
function getUnitOffset(size, offset = 0) {
  const offsetStr = `${offset}`;
  const cells = offsetStr.match(/^(.*)\%$/);
  if (cells) {
    return size * (parseFloat(cells[1]) / 100);
  }
  return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
  const [offsetX, offsetY] = offset || [];
  return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
}
function splitPoints(points = "") {
  return [points[0], points[1]];
}
function getAlignPoint(rect, points) {
  const topBottom = points[0];
  const leftRight = points[1];
  let x;
  let y;
  if (topBottom === "t") {
    y = rect.y;
  } else if (topBottom === "b") {
    y = rect.y + rect.height;
  } else {
    y = rect.y + rect.height / 2;
  }
  if (leftRight === "l") {
    x = rect.x;
  } else if (leftRight === "r") {
    x = rect.x + rect.width;
  } else {
    x = rect.x + rect.width / 2;
  }
  return {
    x,
    y
  };
}
function reversePoints(points, index) {
  const reverseMap = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  const clone = [...points];
  clone[index] = reverseMap[points[index]] || "c";
  return clone;
}
function flatPoints(points) {
  return points.join("");
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign, mobile) {
  const [offsetInfo, setOffsetInfo] = React40.useState({
    ready: false,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: builtinPlacements[placement] || {}
  });
  const alignCountRef = React40.useRef(0);
  const scrollerList = React40.useMemo(() => {
    if (!popupEle || mobile) {
      return [];
    }
    return collectScroller(popupEle);
  }, [popupEle]);
  const prevFlipRef = React40.useRef({});
  const resetFlipCache = () => {
    prevFlipRef.current = {};
  };
  if (!open) {
    resetFlipCache();
  }
  const onAlign = useEvent_default(() => {
    var _a, _b;
    if (popupEle && target && open && !mobile) {
      let getIntersectionVisibleArea = function(offsetX, offsetY, area = visibleArea) {
        const l = popupRect.x + offsetX;
        const t = popupRect.y + offsetY;
        const r = l + popupWidth;
        const b = t + popupHeight;
        const visibleL = Math.max(l, area.left);
        const visibleT = Math.max(t, area.top);
        const visibleR = Math.min(r, area.right);
        const visibleB = Math.min(b, area.bottom);
        return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
      }, syncNextPopupPosition = function() {
        nextPopupY = popupRect.y + nextOffsetY;
        nextPopupBottom = nextPopupY + popupHeight;
        nextPopupX = popupRect.x + nextOffsetX;
        nextPopupRight = nextPopupX + popupWidth;
      };
      const popupElement = popupEle;
      const doc = popupElement.ownerDocument;
      const win = getWin(popupElement);
      const {
        position: popupPosition
      } = win.getComputedStyle(popupElement);
      const originLeft = popupElement.style.left;
      const originTop = popupElement.style.top;
      const originRight = popupElement.style.right;
      const originBottom = popupElement.style.bottom;
      const originOverflow = popupElement.style.overflow;
      const placementInfo = {
        ...builtinPlacements[placement],
        ...popupAlign
      };
      const placeholderElement = doc.createElement("div");
      (_a = popupElement.parentElement) == null ? void 0 : _a.appendChild(placeholderElement);
      placeholderElement.style.left = `${popupElement.offsetLeft}px`;
      placeholderElement.style.top = `${popupElement.offsetTop}px`;
      placeholderElement.style.position = popupPosition;
      placeholderElement.style.height = `${popupElement.offsetHeight}px`;
      placeholderElement.style.width = `${popupElement.offsetWidth}px`;
      popupElement.style.left = "0";
      popupElement.style.top = "0";
      popupElement.style.right = "auto";
      popupElement.style.bottom = "auto";
      popupElement.style.overflow = "hidden";
      let targetRect;
      if (Array.isArray(target)) {
        targetRect = {
          x: target[0],
          y: target[1],
          width: 0,
          height: 0
        };
      } else {
        const rect = target.getBoundingClientRect();
        rect.x = rect.x ?? rect.left;
        rect.y = rect.y ?? rect.top;
        targetRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      const popupRect = popupElement.getBoundingClientRect();
      const {
        height,
        width
      } = win.getComputedStyle(popupElement);
      popupRect.x = popupRect.x ?? popupRect.left;
      popupRect.y = popupRect.y ?? popupRect.top;
      const {
        clientWidth,
        clientHeight,
        scrollWidth,
        scrollHeight,
        scrollTop,
        scrollLeft
      } = doc.documentElement;
      const popupHeight = popupRect.height;
      const popupWidth = popupRect.width;
      const targetHeight = targetRect.height;
      const targetWidth = targetRect.width;
      const visibleRegion = {
        left: 0,
        top: 0,
        right: clientWidth,
        bottom: clientHeight
      };
      const scrollRegion = {
        left: -scrollLeft,
        top: -scrollTop,
        right: scrollWidth - scrollLeft,
        bottom: scrollHeight - scrollTop
      };
      let {
        htmlRegion
      } = placementInfo;
      const VISIBLE = "visible";
      const VISIBLE_FIRST = "visibleFirst";
      if (htmlRegion !== "scroll" && htmlRegion !== VISIBLE_FIRST) {
        htmlRegion = VISIBLE;
      }
      const isVisibleFirst = htmlRegion === VISIBLE_FIRST;
      const scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
      const visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
      const visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
      const adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;
      popupElement.style.left = "auto";
      popupElement.style.top = "auto";
      popupElement.style.right = "0";
      popupElement.style.bottom = "0";
      const popupMirrorRect = popupElement.getBoundingClientRect();
      popupElement.style.left = originLeft;
      popupElement.style.top = originTop;
      popupElement.style.right = originRight;
      popupElement.style.bottom = originBottom;
      popupElement.style.overflow = originOverflow;
      (_b = popupElement.parentElement) == null ? void 0 : _b.removeChild(placeholderElement);
      const scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1e3) / 1e3);
      const scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1e3) / 1e3);
      if (scaleX === 0 || scaleY === 0 || isDOM(target) && !isVisible_default(target)) {
        return;
      }
      const {
        offset,
        targetOffset: targetOffset2
      } = placementInfo;
      let [popupOffsetX, popupOffsetY] = getNumberOffset(popupRect, offset);
      const [targetOffsetX, targetOffsetY] = getNumberOffset(targetRect, targetOffset2);
      targetRect.x -= targetOffsetX;
      targetRect.y -= targetOffsetY;
      const [popupPoint, targetPoint] = placementInfo.points || [];
      const targetPoints = splitPoints(targetPoint);
      const popupPoints = splitPoints(popupPoint);
      const targetAlignPoint = getAlignPoint(targetRect, targetPoints);
      const popupAlignPoint = getAlignPoint(popupRect, popupPoints);
      const nextAlignInfo = {
        ...placementInfo
      };
      let nextPoints = [popupPoints, targetPoints];
      let nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
      let nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
      const originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);
      const originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);
      const targetAlignPointTL = getAlignPoint(targetRect, ["t", "l"]);
      const popupAlignPointTL = getAlignPoint(popupRect, ["t", "l"]);
      const targetAlignPointBR = getAlignPoint(targetRect, ["b", "r"]);
      const popupAlignPointBR = getAlignPoint(popupRect, ["b", "r"]);
      const overflow = placementInfo.overflow || {};
      const {
        adjustX,
        adjustY,
        shiftX,
        shiftY
      } = overflow;
      const supportAdjust = (val) => {
        if (typeof val === "boolean") {
          return val;
        }
        return val >= 0;
      };
      let nextPopupY;
      let nextPopupBottom;
      let nextPopupX;
      let nextPopupRight;
      syncNextPopupPosition();
      const needAdjustY = supportAdjust(adjustY);
      const sameTB = popupPoints[0] === targetPoints[0];
      if (needAdjustY && popupPoints[0] === "t" && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
        let tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY -= popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
        }
        const newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
        const newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          newVisibleRecommendArea >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.bt = true;
          nextOffsetY = tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextPoints = [reversePoints(nextPoints[0], 0), reversePoints(nextPoints[1], 0)];
        } else {
          prevFlipRef.current.bt = false;
        }
      }
      if (needAdjustY && popupPoints[0] === "b" && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
        let tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY += popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
        }
        const newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
        const newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          newVisibleRecommendArea >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.tb = true;
          nextOffsetY = tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextPoints = [reversePoints(nextPoints[0], 0), reversePoints(nextPoints[1], 0)];
        } else {
          prevFlipRef.current.tb = false;
        }
      }
      const needAdjustX = supportAdjust(adjustX);
      const sameLR = popupPoints[1] === targetPoints[1];
      if (needAdjustX && popupPoints[1] === "l" && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
        let tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX -= popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
        }
        const newVisibleArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
        const newVisibleRecommendArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          newVisibleRecommendArea >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.rl = true;
          nextOffsetX = tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextPoints = [reversePoints(nextPoints[0], 1), reversePoints(nextPoints[1], 1)];
        } else {
          prevFlipRef.current.rl = false;
        }
      }
      if (needAdjustX && popupPoints[1] === "r" && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
        let tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX += popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
        }
        const newVisibleArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
        const newVisibleRecommendArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          newVisibleRecommendArea >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.lr = true;
          nextOffsetX = tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextPoints = [reversePoints(nextPoints[0], 1), reversePoints(nextPoints[1], 1)];
        } else {
          prevFlipRef.current.lr = false;
        }
      }
      nextAlignInfo.points = [flatPoints(nextPoints[0]), flatPoints(nextPoints[1])];
      syncNextPopupPosition();
      const numShiftX = shiftX === true ? 0 : shiftX;
      if (typeof numShiftX === "number") {
        if (nextPopupX < visibleRegionArea.left) {
          nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
          if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
          }
        }
        if (nextPopupRight > visibleRegionArea.right) {
          nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
          if (targetRect.x > visibleRegionArea.right - numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
          }
        }
      }
      const numShiftY = shiftY === true ? 0 : shiftY;
      if (typeof numShiftY === "number") {
        if (nextPopupY < visibleRegionArea.top) {
          nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;
          if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
          }
        }
        if (nextPopupBottom > visibleRegionArea.bottom) {
          nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
          if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
          }
        }
      }
      const popupLeft = popupRect.x + nextOffsetX;
      const popupRight = popupLeft + popupWidth;
      const popupTop = popupRect.y + nextOffsetY;
      const popupBottom = popupTop + popupHeight;
      const targetLeft = targetRect.x;
      const targetRight = targetLeft + targetWidth;
      const targetTop = targetRect.y;
      const targetBottom = targetTop + targetHeight;
      const maxLeft = Math.max(popupLeft, targetLeft);
      const minRight = Math.min(popupRight, targetRight);
      const xCenter = (maxLeft + minRight) / 2;
      const nextArrowX = xCenter - popupLeft;
      const maxTop = Math.max(popupTop, targetTop);
      const minBottom = Math.min(popupBottom, targetBottom);
      const yCenter = (maxTop + minBottom) / 2;
      const nextArrowY = yCenter - popupTop;
      onPopupAlign == null ? void 0 : onPopupAlign(popupEle, nextAlignInfo);
      let offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
      let offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
      if (scaleX === 1) {
        nextOffsetX = Math.floor(nextOffsetX);
        offsetX4Right = Math.floor(offsetX4Right);
      }
      if (scaleY === 1) {
        nextOffsetY = Math.floor(nextOffsetY);
        offsetY4Bottom = Math.floor(offsetY4Bottom);
      }
      const nextOffsetInfo = {
        ready: true,
        offsetX: nextOffsetX / scaleX,
        offsetY: nextOffsetY / scaleY,
        offsetR: offsetX4Right / scaleX,
        offsetB: offsetY4Bottom / scaleY,
        arrowX: nextArrowX / scaleX,
        arrowY: nextArrowY / scaleY,
        scaleX,
        scaleY,
        align: nextAlignInfo
      };
      setOffsetInfo(nextOffsetInfo);
    }
  });
  const triggerAlign = () => {
    alignCountRef.current += 1;
    const id = alignCountRef.current;
    Promise.resolve().then(() => {
      if (alignCountRef.current === id) {
        onAlign();
      }
    });
  };
  const resetReady = () => {
    setOffsetInfo((ori) => ({
      ...ori,
      ready: false
    }));
  };
  useLayoutEffect_default(resetReady, [placement]);
  useLayoutEffect_default(() => {
    if (!open) {
      resetReady();
    }
  }, [open]);
  return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
}

// node_modules/@rc-component/trigger/es/hooks/useDelay.js
var React41 = __toESM(require_react());
function useDelay() {
  const delayRef = React41.useRef(null);
  const clearDelay = () => {
    if (delayRef.current) {
      clearTimeout(delayRef.current);
      delayRef.current = null;
    }
  };
  const delayInvoke = (callback, delay) => {
    clearDelay();
    if (delay === 0) {
      callback();
    } else {
      delayRef.current = setTimeout(() => {
        callback();
      }, delay * 1e3);
    }
  };
  React41.useEffect(() => {
    return () => {
      clearDelay();
    };
  }, []);
  return delayInvoke;
}

// node_modules/@rc-component/trigger/es/hooks/useWatch.js
function useWatch(open, target, popup, onAlign, onScroll) {
  useLayoutEffect_default(() => {
    if (open && target && popup) {
      let notifyScroll = function() {
        onAlign();
        onScroll();
      };
      const targetElement = target;
      const popupElement = popup;
      const targetScrollList = collectScroller(targetElement);
      const popupScrollList = collectScroller(popupElement);
      const win = getWin(popupElement);
      const mergedList = /* @__PURE__ */ new Set([win, ...targetScrollList, ...popupScrollList]);
      mergedList.forEach((scroller) => {
        scroller.addEventListener("scroll", notifyScroll, {
          passive: true
        });
      });
      win.addEventListener("resize", notifyScroll, {
        passive: true
      });
      onAlign();
      return () => {
        mergedList.forEach((scroller) => {
          scroller.removeEventListener("scroll", notifyScroll);
          win.removeEventListener("resize", notifyScroll);
        });
      };
    }
  }, [open, target, popup]);
}

// node_modules/@rc-component/trigger/es/hooks/useWinClick.js
var React42 = __toESM(require_react());
function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
  const openRef = React42.useRef(open);
  openRef.current = open;
  const popupPointerDownRef = React42.useRef(false);
  React42.useEffect(() => {
    var _a, _b;
    if (clickToHide && popupEle && (!mask || maskClosable)) {
      const onPointerDown = () => {
        popupPointerDownRef.current = false;
      };
      const onTriggerClose = (e) => {
        var _a2, _b2;
        if (openRef.current && !inPopupOrChild(((_b2 = (_a2 = e.composedPath) == null ? void 0 : _a2.call(e)) == null ? void 0 : _b2[0]) || e.target) && !popupPointerDownRef.current) {
          triggerOpen(false);
        }
      };
      const win = getWin(popupEle);
      win.addEventListener("pointerdown", onPointerDown, true);
      win.addEventListener("mousedown", onTriggerClose, true);
      win.addEventListener("contextmenu", onTriggerClose, true);
      const targetShadowRoot = getShadowRoot(targetEle);
      if (targetShadowRoot) {
        targetShadowRoot.addEventListener("mousedown", onTriggerClose, true);
        targetShadowRoot.addEventListener("contextmenu", onTriggerClose, true);
      }
      if (targetEle) {
        const targetRoot = (_a = targetEle.getRootNode) == null ? void 0 : _a.call(targetEle);
        const popupRoot = (_b = popupEle.getRootNode) == null ? void 0 : _b.call(popupEle);
        warning(targetRoot === popupRoot, `trigger element and popup element should in same shadow root.`);
      }
      return () => {
        win.removeEventListener("pointerdown", onPointerDown, true);
        win.removeEventListener("mousedown", onTriggerClose, true);
        win.removeEventListener("contextmenu", onTriggerClose, true);
        if (targetShadowRoot) {
          targetShadowRoot.removeEventListener("mousedown", onTriggerClose, true);
          targetShadowRoot.removeEventListener("contextmenu", onTriggerClose, true);
        }
      };
    }
  }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
  function onPopupPointerDown() {
    popupPointerDownRef.current = true;
  }
  return onPopupPointerDown;
}

// node_modules/@rc-component/trigger/es/UniqueProvider/index.js
var React45 = __toESM(require_react());

// node_modules/@rc-component/trigger/es/UniqueProvider/useTargetState.js
var import_react17 = __toESM(require_react());
function useTargetState() {
  const [options, setOptions] = import_react17.default.useState(null);
  const [open, setOpen] = import_react17.default.useState(false);
  const [isAnimating, setIsAnimating] = import_react17.default.useState(false);
  const pendingOptionsRef = import_react17.default.useRef(null);
  const trigger = useEvent_default((nextOptions) => {
    if (nextOptions === false) {
      pendingOptionsRef.current = null;
      setOpen(false);
    } else {
      if (isAnimating && open) {
        pendingOptionsRef.current = nextOptions;
      } else {
        setOpen(true);
        setOptions(nextOptions);
        pendingOptionsRef.current = null;
        if (!open) {
          setIsAnimating(true);
        }
      }
    }
  });
  const onVisibleChanged = useEvent_default((visible) => {
    if (visible) {
      setIsAnimating(false);
      if (pendingOptionsRef.current) {
        setOptions(pendingOptionsRef.current);
        pendingOptionsRef.current = null;
      }
    } else {
      setIsAnimating(false);
      pendingOptionsRef.current = null;
    }
  });
  return [trigger, open, options, onVisibleChanged];
}

// node_modules/@rc-component/trigger/es/UniqueProvider/UniqueContainer.js
var import_react18 = __toESM(require_react());
function _extends7() {
  _extends7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends7.apply(this, arguments);
}
var UniqueContainer = (props) => {
  const {
    prefixCls,
    isMobile,
    ready,
    open,
    align,
    offsetR,
    offsetB,
    offsetX,
    offsetY,
    arrowPos,
    popupSize,
    motion,
    uniqueContainerClassName,
    uniqueContainerStyle
  } = props;
  const containerCls = `${prefixCls}-unique-container`;
  const [motionVisible, setMotionVisible] = import_react18.default.useState(false);
  const offsetStyle = useOffsetStyle(isMobile, ready, open, align, offsetR, offsetB, offsetX, offsetY);
  const cachedOffsetStyleRef = import_react18.default.useRef(offsetStyle);
  if (ready) {
    cachedOffsetStyleRef.current = offsetStyle;
  }
  const sizeStyle = {};
  if (popupSize) {
    sizeStyle.width = popupSize.width;
    sizeStyle.height = popupSize.height;
  }
  return import_react18.default.createElement(es_default3, _extends7({
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    removeOnLeave: false,
    leavedClassName: `${containerCls}-hidden`
  }, motion, {
    visible: open,
    onVisibleChanged: (nextVisible) => {
      setMotionVisible(nextVisible);
    }
  }), ({
    className: motionClassName,
    style: motionStyle
  }) => {
    const cls = clsx(containerCls, motionClassName, uniqueContainerClassName, {
      [`${containerCls}-visible`]: motionVisible
    });
    return import_react18.default.createElement("div", {
      className: cls,
      style: {
        "--arrow-x": `${(arrowPos == null ? void 0 : arrowPos.x) || 0}px`,
        "--arrow-y": `${(arrowPos == null ? void 0 : arrowPos.y) || 0}px`,
        ...cachedOffsetStyleRef.current,
        ...sizeStyle,
        ...motionStyle,
        ...uniqueContainerStyle
      }
    });
  });
};
var UniqueContainer_default = UniqueContainer;

// node_modules/@rc-component/trigger/es/UniqueProvider/index.js
var UniqueProvider = ({
  children,
  postTriggerProps
}) => {
  const [trigger, open, options, onTargetVisibleChanged] = useTargetState();
  const mergedOptions = React45.useMemo(() => {
    if (!options || !postTriggerProps) {
      return options;
    }
    return postTriggerProps(options);
  }, [options, postTriggerProps]);
  const [popupEle, setPopupEle] = React45.useState(null);
  const [popupSize, setPopupSize] = React45.useState(null);
  const externalPopupRef = React45.useRef(null);
  const setPopupRef = useEvent_default((node) => {
    externalPopupRef.current = node;
    if (isDOM(node) && popupEle !== node) {
      setPopupEle(node);
    }
  });
  const isOpenRef = React45.useRef(null);
  const delayInvoke = useDelay();
  const show = useEvent_default((showOptions, isOpen) => {
    isOpenRef.current = isOpen;
    delayInvoke(() => {
      trigger(showOptions);
    }, showOptions.delay);
  });
  const hide = (delay) => {
    delayInvoke(() => {
      var _a;
      if ((_a = isOpenRef.current) == null ? void 0 : _a.call(isOpenRef)) {
        return;
      }
      trigger(false);
    }, delay);
  };
  const onVisibleChanged = useEvent_default((visible) => {
    onTargetVisibleChanged(visible);
  });
  const [
    ready,
    offsetX,
    offsetY,
    offsetR,
    offsetB,
    arrowX,
    arrowY,
    // scaleX - not used in UniqueProvider
    ,
    ,
    // scaleY - not used in UniqueProvider
    alignInfo,
    onAlign
  ] = useAlign(
    open,
    popupEle,
    mergedOptions == null ? void 0 : mergedOptions.target,
    mergedOptions == null ? void 0 : mergedOptions.popupPlacement,
    (mergedOptions == null ? void 0 : mergedOptions.builtinPlacements) || {},
    mergedOptions == null ? void 0 : mergedOptions.popupAlign,
    void 0,
    // onPopupAlign
    false
    // isMobile
  );
  const alignedClassName = React45.useMemo(() => {
    var _a;
    if (!mergedOptions) {
      return "";
    }
    const baseClassName = getAlignPopupClassName(
      mergedOptions.builtinPlacements || {},
      mergedOptions.prefixCls || "",
      alignInfo,
      false
      // alignPoint is false for UniqueProvider
    );
    return clsx(baseClassName, (_a = mergedOptions.getPopupClassNameFromAlign) == null ? void 0 : _a.call(mergedOptions, alignInfo));
  }, [alignInfo, mergedOptions == null ? void 0 : mergedOptions.getPopupClassNameFromAlign, mergedOptions == null ? void 0 : mergedOptions.builtinPlacements, mergedOptions == null ? void 0 : mergedOptions.prefixCls]);
  const contextValue = React45.useMemo(() => ({
    show,
    hide
  }), []);
  React45.useEffect(() => {
    onAlign();
  }, [mergedOptions == null ? void 0 : mergedOptions.target]);
  const onPrepare = useEvent_default(() => {
    onAlign();
    return Promise.resolve();
  });
  const subPopupElements = React45.useRef({});
  const parentContext = React45.useContext(context_default2);
  const triggerContextValue = React45.useMemo(() => ({
    registerSubPopup: (id, subPopupEle) => {
      subPopupElements.current[id] = subPopupEle;
      parentContext == null ? void 0 : parentContext.registerSubPopup(id, subPopupEle);
    }
  }), [parentContext]);
  const prefixCls = mergedOptions == null ? void 0 : mergedOptions.prefixCls;
  return React45.createElement(UniqueContext.Provider, {
    value: contextValue
  }, children, mergedOptions && React45.createElement(context_default2.Provider, {
    value: triggerContextValue
  }, React45.createElement(Popup_default, {
    ref: setPopupRef,
    portal: es_default2,
    onEsc: mergedOptions.onEsc,
    prefixCls,
    popup: mergedOptions.popup,
    className: clsx(mergedOptions.popupClassName, alignedClassName, `${prefixCls}-unique-controlled`),
    style: mergedOptions.popupStyle,
    target: mergedOptions.target,
    open,
    keepDom: true,
    fresh: true,
    autoDestroy: false,
    onVisibleChanged,
    ready,
    offsetX,
    offsetY,
    offsetR,
    offsetB,
    onAlign,
    onPrepare,
    onResize: (size) => setPopupSize({
      width: size.offsetWidth,
      height: size.offsetHeight
    }),
    arrowPos: {
      x: arrowX,
      y: arrowY
    },
    align: alignInfo,
    zIndex: mergedOptions.zIndex,
    mask: mergedOptions.mask,
    arrow: mergedOptions.arrow,
    motion: mergedOptions.popupMotion,
    maskMotion: mergedOptions.maskMotion,
    getPopupContainer: mergedOptions.getPopupContainer
  }, React45.createElement(UniqueContainer_default, {
    prefixCls,
    isMobile: false,
    ready,
    open,
    align: alignInfo,
    offsetR,
    offsetB,
    offsetX,
    offsetY,
    arrowPos: {
      x: arrowX,
      y: arrowY
    },
    popupSize,
    motion: mergedOptions.popupMotion,
    uniqueContainerClassName: clsx(mergedOptions.uniqueContainerClassName, alignedClassName),
    uniqueContainerStyle: mergedOptions.uniqueContainerStyle
  }))));
};
var UniqueProvider_default = UniqueProvider;

// node_modules/@rc-component/trigger/es/index.js
var import_react_dom2 = __toESM(require_react_dom());
function generateTrigger(PortalComponent = es_default2) {
  const Trigger = React46.forwardRef((props, ref) => {
    const {
      prefixCls = "rc-trigger-popup",
      children,
      // Action
      action = "hover",
      showAction,
      hideAction,
      // Open
      popupVisible,
      defaultPopupVisible,
      onOpenChange,
      afterOpenChange,
      onPopupVisibleChange,
      afterPopupVisibleChange,
      // Delay
      mouseEnterDelay,
      mouseLeaveDelay = 0.1,
      focusDelay,
      blurDelay,
      // Mask
      mask,
      maskClosable = true,
      // Portal
      getPopupContainer,
      forceRender,
      autoDestroy,
      // Popup
      popup,
      popupClassName,
      uniqueContainerClassName,
      uniqueContainerStyle,
      popupStyle,
      popupPlacement,
      builtinPlacements = {},
      popupAlign,
      zIndex,
      stretch,
      getPopupClassNameFromAlign,
      fresh,
      unique,
      alignPoint,
      onPopupClick,
      onPopupAlign,
      // Arrow
      arrow,
      // Motion
      popupMotion,
      maskMotion,
      // Private
      mobile,
      ...restProps
    } = props;
    const mergedAutoDestroy = autoDestroy || false;
    const openUncontrolled = popupVisible === void 0;
    const isMobile = !!mobile;
    const subPopupElements = React46.useRef({});
    const parentContext = React46.useContext(context_default2);
    const context = React46.useMemo(() => {
      return {
        registerSubPopup: (id2, subPopupEle) => {
          subPopupElements.current[id2] = subPopupEle;
          parentContext == null ? void 0 : parentContext.registerSubPopup(id2, subPopupEle);
        }
      };
    }, [parentContext]);
    const uniqueContext = React46.useContext(UniqueContext);
    const id = useId_default();
    const [popupEle, setPopupEle] = React46.useState(null);
    const externalPopupRef = React46.useRef(null);
    const setPopupRef = useEvent_default((node) => {
      externalPopupRef.current = node;
      if (isDOM(node) && popupEle !== node) {
        setPopupEle(node);
      }
      parentContext == null ? void 0 : parentContext.registerSubPopup(id, node);
    });
    const [targetEle, setTargetEle] = React46.useState(null);
    const externalForwardRef = React46.useRef(null);
    const setTargetRef = useEvent_default((node) => {
      const domNode = getDOM(node);
      if (isDOM(domNode) && targetEle !== domNode) {
        setTargetEle(domNode);
        externalForwardRef.current = domNode;
      }
    });
    const cloneProps = {};
    const inPopupOrChild = useEvent_default((ele) => {
      var _a, _b;
      const childDOM = targetEle;
      return (childDOM == null ? void 0 : childDOM.contains(ele)) || ((_a = getShadowRoot(childDOM)) == null ? void 0 : _a.host) === ele || ele === childDOM || (popupEle == null ? void 0 : popupEle.contains(ele)) || ((_b = getShadowRoot(popupEle)) == null ? void 0 : _b.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some((subPopupEle) => (subPopupEle == null ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle);
    });
    const innerArrow = arrow ? {
      // true and Object likely
      ...arrow !== true ? arrow : {}
    } : null;
    const [internalOpen, setInternalOpen] = useControlledState(defaultPopupVisible || false, popupVisible);
    const mergedOpen = internalOpen || false;
    const child = React46.useMemo(() => {
      const nextChild = typeof children === "function" ? children({
        open: mergedOpen
      }) : children;
      return React46.Children.only(nextChild);
    }, [children, mergedOpen]);
    const originChildProps = (child == null ? void 0 : child.props) || {};
    const isOpen = useEvent_default(() => mergedOpen);
    const getUniqueOptions = useEvent_default((delay = 0) => ({
      popup,
      target: targetEle,
      delay,
      prefixCls,
      popupClassName,
      uniqueContainerClassName,
      uniqueContainerStyle,
      popupStyle,
      popupPlacement,
      builtinPlacements,
      popupAlign,
      zIndex,
      mask,
      maskClosable,
      popupMotion,
      maskMotion,
      arrow: innerArrow,
      getPopupContainer,
      getPopupClassNameFromAlign,
      id,
      onEsc
    }));
    useLayoutEffect_default(() => {
      if (uniqueContext && unique && targetEle && !openUncontrolled && !parentContext) {
        if (mergedOpen) {
          uniqueContext.show(getUniqueOptions(mouseEnterDelay), isOpen);
        } else {
          uniqueContext.hide(mouseLeaveDelay);
        }
      }
    }, [mergedOpen, targetEle]);
    const openRef = React46.useRef(mergedOpen);
    openRef.current = mergedOpen;
    const internalTriggerOpen = useEvent_default((nextOpen) => {
      (0, import_react_dom2.flushSync)(() => {
        if (mergedOpen !== nextOpen) {
          setInternalOpen(nextOpen);
          onOpenChange == null ? void 0 : onOpenChange(nextOpen);
          onPopupVisibleChange == null ? void 0 : onPopupVisibleChange(nextOpen);
        }
      });
    });
    const delayInvoke = useDelay();
    const triggerOpen = (nextOpen, delay = 0) => {
      if (popupVisible !== void 0) {
        delayInvoke(() => {
          internalTriggerOpen(nextOpen);
        }, delay);
        return;
      }
      if (uniqueContext && unique && openUncontrolled && !parentContext) {
        if (nextOpen) {
          uniqueContext.show(getUniqueOptions(delay), isOpen);
        } else {
          uniqueContext.hide(delay);
        }
        return;
      }
      delayInvoke(() => {
        internalTriggerOpen(nextOpen);
      }, delay);
    };
    function onEsc({
      top
    }) {
      if (top) {
        triggerOpen(false);
      }
    }
    const [inMotion, setInMotion] = React46.useState(false);
    useLayoutEffect_default((firstMount) => {
      if (!firstMount || mergedOpen) {
        setInMotion(true);
      }
    }, [mergedOpen]);
    const [motionPrepareResolve, setMotionPrepareResolve] = React46.useState(null);
    const [mousePos, setMousePos] = React46.useState(null);
    const setMousePosByEvent = (event) => {
      setMousePos([event.clientX, event.clientY]);
    };
    const [ready, offsetX, offsetY, offsetR, offsetB, arrowX, arrowY, scaleX, scaleY, alignInfo, onAlign] = useAlign(mergedOpen, popupEle, alignPoint && mousePos !== null ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign, isMobile);
    const [showActions, hideActions] = useAction(action, showAction, hideAction);
    const clickToShow = showActions.has("click");
    const clickToHide = hideActions.has("click") || hideActions.has("contextMenu");
    const triggerAlign = useEvent_default(() => {
      if (!inMotion) {
        onAlign();
      }
    });
    const onScroll = () => {
      if (openRef.current && alignPoint && clickToHide) {
        triggerOpen(false);
      }
    };
    useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
    useLayoutEffect_default(() => {
      triggerAlign();
    }, [mousePos, popupPlacement]);
    useLayoutEffect_default(() => {
      if (mergedOpen && !(builtinPlacements == null ? void 0 : builtinPlacements[popupPlacement])) {
        triggerAlign();
      }
    }, [JSON.stringify(popupAlign)]);
    const alignedClassName = React46.useMemo(() => {
      const baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
      return clsx(baseClassName, getPopupClassNameFromAlign == null ? void 0 : getPopupClassNameFromAlign(alignInfo));
    }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);
    React46.useImperativeHandle(ref, () => ({
      nativeElement: externalForwardRef.current,
      popupElement: externalPopupRef.current,
      forceAlign: triggerAlign
    }));
    const [targetWidth, setTargetWidth] = React46.useState(0);
    const [targetHeight, setTargetHeight] = React46.useState(0);
    const syncTargetSize = () => {
      if (stretch && targetEle) {
        const rect = targetEle.getBoundingClientRect();
        setTargetWidth(rect.width);
        setTargetHeight(rect.height);
      }
    };
    const onTargetResize = () => {
      syncTargetSize();
      triggerAlign();
    };
    const onVisibleChanged = (visible) => {
      setInMotion(false);
      onAlign();
      afterOpenChange == null ? void 0 : afterOpenChange(visible);
      afterPopupVisibleChange == null ? void 0 : afterPopupVisibleChange(visible);
    };
    const onPrepare = () => new Promise((resolve) => {
      syncTargetSize();
      setMotionPrepareResolve(() => resolve);
    });
    useLayoutEffect_default(() => {
      if (motionPrepareResolve) {
        onAlign();
        motionPrepareResolve();
        setMotionPrepareResolve(null);
      }
    }, [motionPrepareResolve]);
    function wrapperAction(eventName, nextOpen, delay, callback, ignoreCheck) {
      cloneProps[eventName] = (event, ...args) => {
        var _a;
        if (!ignoreCheck || !ignoreCheck()) {
          callback == null ? void 0 : callback(event);
          triggerOpen(nextOpen, delay);
        }
        (_a = originChildProps[eventName]) == null ? void 0 : _a.call(originChildProps, event, ...args);
      };
    }
    const touchToShow = showActions.has("touch");
    const touchToHide = hideActions.has("touch");
    const touchedRef = React46.useRef(false);
    if (touchToShow || touchToHide) {
      cloneProps.onTouchStart = (...args) => {
        var _a;
        touchedRef.current = true;
        if (openRef.current && touchToHide) {
          triggerOpen(false);
        } else if (!openRef.current && touchToShow) {
          triggerOpen(true);
        }
        (_a = originChildProps.onTouchStart) == null ? void 0 : _a.call(originChildProps, ...args);
      };
    }
    if (clickToShow || clickToHide) {
      cloneProps.onClick = (event, ...args) => {
        var _a;
        if (openRef.current && clickToHide) {
          triggerOpen(false);
        } else if (!openRef.current && clickToShow) {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        (_a = originChildProps.onClick) == null ? void 0 : _a.call(originChildProps, event, ...args);
        touchedRef.current = false;
      };
    }
    const onPopupPointerDown = useWinClick(mergedOpen, clickToHide || touchToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);
    const hoverToShow = showActions.has("hover");
    const hoverToHide = hideActions.has("hover");
    let onPopupMouseEnter;
    let onPopupMouseLeave;
    const ignoreMouseTrigger = () => {
      return touchedRef.current;
    };
    if (hoverToShow) {
      const onMouseEnterCallback = (event) => {
        setMousePosByEvent(event);
      };
      wrapperAction("onMouseEnter", true, mouseEnterDelay, onMouseEnterCallback, ignoreMouseTrigger);
      wrapperAction("onPointerEnter", true, mouseEnterDelay, onMouseEnterCallback, ignoreMouseTrigger);
      onPopupMouseEnter = (event) => {
        if ((mergedOpen || inMotion) && (popupEle == null ? void 0 : popupEle.contains(event.target))) {
          triggerOpen(true, mouseEnterDelay);
        }
      };
      if (alignPoint) {
        cloneProps.onMouseMove = (event) => {
          var _a;
          (_a = originChildProps.onMouseMove) == null ? void 0 : _a.call(originChildProps, event);
        };
      }
    }
    if (hoverToHide) {
      wrapperAction("onMouseLeave", false, mouseLeaveDelay, void 0, ignoreMouseTrigger);
      wrapperAction("onPointerLeave", false, mouseLeaveDelay, void 0, ignoreMouseTrigger);
      onPopupMouseLeave = () => {
        triggerOpen(false, mouseLeaveDelay);
      };
    }
    if (showActions.has("focus")) {
      wrapperAction("onFocus", true, focusDelay);
    }
    if (hideActions.has("focus")) {
      wrapperAction("onBlur", false, blurDelay);
    }
    if (showActions.has("contextMenu")) {
      cloneProps.onContextMenu = (event, ...args) => {
        var _a;
        if (openRef.current && hideActions.has("contextMenu")) {
          triggerOpen(false);
        } else {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        event.preventDefault();
        (_a = originChildProps.onContextMenu) == null ? void 0 : _a.call(originChildProps, event, ...args);
      };
    }
    const rendedRef = React46.useRef(false);
    rendedRef.current || (rendedRef.current = forceRender || mergedOpen || inMotion);
    const mergedChildrenProps = {
      ...originChildProps,
      ...cloneProps
    };
    const passedProps = {};
    const passedEventList = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    passedEventList.forEach((eventName) => {
      if (restProps[eventName]) {
        passedProps[eventName] = (...args) => {
          var _a;
          (_a = mergedChildrenProps[eventName]) == null ? void 0 : _a.call(mergedChildrenProps, ...args);
          restProps[eventName](...args);
        };
      }
    });
    const arrowPos = {
      x: arrowX,
      y: arrowY
    };
    useResizeObserver(mergedOpen, targetEle, onTargetResize);
    const mergedRef = useComposeRef(setTargetRef, getNodeRef(child));
    const triggerNode = React46.cloneElement(child, {
      ...mergedChildrenProps,
      ...passedProps,
      ref: mergedRef
    });
    return React46.createElement(React46.Fragment, null, triggerNode, rendedRef.current && (!uniqueContext || !unique) && React46.createElement(context_default2.Provider, {
      value: context
    }, React46.createElement(Popup_default, {
      portal: PortalComponent,
      ref: setPopupRef,
      prefixCls,
      popup,
      className: clsx(popupClassName, !isMobile && alignedClassName),
      style: popupStyle,
      target: targetEle,
      onMouseEnter: onPopupMouseEnter,
      onMouseLeave: onPopupMouseLeave,
      onPointerEnter: onPopupMouseEnter,
      zIndex,
      open: mergedOpen,
      keepDom: inMotion,
      fresh,
      onClick: onPopupClick,
      onPointerDownCapture: onPopupPointerDown,
      mask,
      motion: popupMotion,
      maskMotion,
      onVisibleChanged,
      onPrepare,
      forceRender,
      autoDestroy: mergedAutoDestroy,
      getPopupContainer,
      onEsc,
      align: alignInfo,
      arrow: innerArrow,
      arrowPos,
      ready,
      offsetX,
      offsetY,
      offsetR,
      offsetB,
      onAlign: triggerAlign,
      stretch,
      targetWidth: targetWidth / scaleX,
      targetHeight: targetHeight / scaleY,
      mobile
    })));
  });
  if (true) {
    Trigger.displayName = "Trigger";
  }
  return Trigger;
}
var es_default4 = generateTrigger(es_default2);

// node_modules/antd/es/tooltip/UniqueProvider/MotionContent.js
var import_react20 = __toESM(require_react());

// node_modules/antd/es/_util/reactNode.js
var import_react19 = __toESM(require_react());
function isFragment2(child) {
  return child && import_react19.default.isValidElement(child) && child.type === import_react19.default.Fragment;
}
var replaceElement = (element, replacement, props) => {
  if (!import_react19.default.isValidElement(element)) {
    return replacement;
  }
  return import_react19.default.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
};
function cloneElement5(element, props) {
  return replaceElement(element, element, props);
}

// node_modules/antd/es/config-provider/context.js
var React48 = __toESM(require_react());
var defaultPrefixCls = "ant";
var defaultIconPrefixCls = "anticon";
var Variants = ["outlined", "borderless", "filled", "underlined"];
var defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};
var ConfigContext = React48.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls
});
var {
  Consumer: ConfigConsumer
} = ConfigContext;
var EMPTY_OBJECT = {};
function useComponentConfig(propName) {
  const context = React48.useContext(ConfigContext);
  const {
    getPrefixCls,
    direction,
    getPopupContainer,
    renderEmpty
  } = context;
  const propValue = context[propName];
  return {
    classNames: EMPTY_OBJECT,
    styles: EMPTY_OBJECT,
    ...propValue,
    getPrefixCls,
    direction,
    getPopupContainer,
    renderEmpty
  };
}

// node_modules/antd/es/tooltip/UniqueProvider/MotionContent.js
var MotionContent = ({
  children
}) => {
  const {
    getPrefixCls
  } = import_react20.default.useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  if (!import_react20.default.isValidElement(children)) {
    return children;
  }
  return import_react20.default.createElement(es_default3, {
    visible: true,
    motionName: `${rootPrefixCls}-fade`,
    motionAppear: true,
    motionEnter: true,
    motionLeave: false,
    removeOnLeave: false
  }, ({
    style: motionStyle,
    className: motionClassName
  }) => {
    return cloneElement5(children, (oriProps) => ({
      className: clsx(oriProps.className, motionClassName),
      style: {
        ...oriProps.style,
        ...motionStyle
      }
    }));
  });
};
var MotionContent_default = MotionContent;

// node_modules/antd/es/tooltip/UniqueProvider/index.js
var cachedPlacements = [null, null];
function uniqueBuiltinPlacements(ori) {
  if (cachedPlacements[0] !== ori) {
    const target = {};
    Object.keys(ori).forEach((placement) => {
      target[placement] = {
        ...ori[placement],
        dynamicInset: false
      };
    });
    cachedPlacements[0] = ori;
    cachedPlacements[1] = target;
  }
  return cachedPlacements[1];
}
var UniqueProvider2 = ({
  children
}) => {
  const renderPopup = (options) => {
    const {
      id,
      builtinPlacements,
      popup
    } = options;
    const popupEle = typeof popup === "function" ? popup() : popup;
    const parsedPlacements = uniqueBuiltinPlacements(builtinPlacements);
    return {
      ...options,
      getPopupContainer: null,
      arrow: false,
      popup: import_react21.default.createElement(MotionContent_default, {
        key: id
      }, popupEle),
      builtinPlacements: parsedPlacements
    };
  };
  return import_react21.default.createElement(UniqueProvider_default, {
    postTriggerProps: renderPopup
  }, children);
};
var UniqueProvider_default2 = UniqueProvider2;

// node_modules/antd/es/config-provider/DisabledContext.js
var React51 = __toESM(require_react());
var DisabledContext = React51.createContext(false);
var DisabledContextProvider = ({
  children,
  disabled
}) => {
  const originDisabled = React51.useContext(DisabledContext);
  return React51.createElement(DisabledContext.Provider, {
    value: disabled ?? originDisabled
  }, children);
};
var DisabledContext_default = DisabledContext;

// node_modules/antd/es/config-provider/hooks/useConfig.js
var import_react22 = __toESM(require_react());

// node_modules/antd/es/config-provider/SizeContext.js
var React52 = __toESM(require_react());
var SizeContext = React52.createContext(void 0);
var SizeContextProvider = ({
  children,
  size
}) => {
  const originSize = React52.useContext(SizeContext);
  return React52.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
var SizeContext_default = SizeContext;

// node_modules/antd/es/config-provider/hooks/useConfig.js
function useConfig() {
  const componentDisabled = (0, import_react22.useContext)(DisabledContext_default);
  const componentSize = (0, import_react22.useContext)(SizeContext_default);
  return {
    componentDisabled,
    componentSize
  };
}
var useConfig_default = useConfig;

// node_modules/antd/es/config-provider/hooks/useTheme.js
var import_react27 = __toESM(require_react());

// node_modules/@ant-design/cssinjs-utils/es/util/genStyleUtils.js
var import_react24 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(t) {
  var r = _isNativeReflectConstruct();
  return function() {
    var e, o = _getPrototypeOf(t);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}

// node_modules/@ant-design/cssinjs-utils/es/util/calc/calculator.js
var AbstractCalculator = _createClass(function AbstractCalculator2() {
  _classCallCheck(this, AbstractCalculator2);
});
var calculator_default2 = AbstractCalculator;

// node_modules/@ant-design/cssinjs-utils/es/util/calc/CSSCalculator.js
var CALC_UNIT2 = "CALC_UNIT";
var regexp2 = new RegExp(CALC_UNIT2, "g");
function unit2(value) {
  if (typeof value === "number") {
    return "".concat(value).concat(CALC_UNIT2);
  }
  return value;
}
var CSSCalculator2 = function(_AbstractCalculator) {
  _inherits(CSSCalculator3, _AbstractCalculator);
  var _super = _createSuper(CSSCalculator3);
  function CSSCalculator3(num, unitlessCssVar) {
    var _this;
    _classCallCheck(this, CSSCalculator3);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "result", "");
    _defineProperty(_assertThisInitialized(_this), "unitlessCssVar", void 0);
    _defineProperty(_assertThisInitialized(_this), "lowPriority", void 0);
    var numType = _typeof(num);
    _this.unitlessCssVar = unitlessCssVar;
    if (num instanceof CSSCalculator3) {
      _this.result = "(".concat(num.result, ")");
    } else if (numType === "number") {
      _this.result = unit2(num);
    } else if (numType === "string") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(CSSCalculator3, [{
    key: "add",
    value: function add(num) {
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " + ").concat(num.getResult());
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " + ").concat(unit2(num));
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " - ").concat(num.getResult());
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " - ").concat(unit2(num));
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (this.lowPriority) {
        this.result = "(".concat(this.result, ")");
      }
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " * ").concat(num.getResult(true));
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " * ").concat(num);
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (this.lowPriority) {
        this.result = "(".concat(this.result, ")");
      }
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " / ").concat(num.getResult(true));
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " / ").concat(num);
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "getResult",
    value: function getResult(force) {
      return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function equal(options) {
      var _this2 = this;
      var _ref = options || {}, cssUnit = _ref.unit;
      var mergedUnit = true;
      if (typeof cssUnit === "boolean") {
        mergedUnit = cssUnit;
      } else if (Array.from(this.unitlessCssVar).some(function(cssVar) {
        return _this2.result.includes(cssVar);
      })) {
        mergedUnit = false;
      }
      this.result = this.result.replace(regexp2, mergedUnit ? "px" : "");
      if (typeof this.lowPriority !== "undefined") {
        return "calc(".concat(this.result, ")");
      }
      return this.result;
    }
  }]);
  return CSSCalculator3;
}(calculator_default2);

// node_modules/@ant-design/cssinjs-utils/es/util/calc/NumCalculator.js
var NumCalculator2 = function(_AbstractCalculator) {
  _inherits(NumCalculator3, _AbstractCalculator);
  var _super = _createSuper(NumCalculator3);
  function NumCalculator3(num) {
    var _this;
    _classCallCheck(this, NumCalculator3);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "result", 0);
    if (num instanceof NumCalculator3) {
      _this.result = num.result;
    } else if (typeof num === "number") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(NumCalculator3, [{
    key: "add",
    value: function add(num) {
      if (num instanceof NumCalculator3) {
        this.result += num.result;
      } else if (typeof num === "number") {
        this.result += num;
      }
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof NumCalculator3) {
        this.result -= num.result;
      } else if (typeof num === "number") {
        this.result -= num;
      }
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (num instanceof NumCalculator3) {
        this.result *= num.result;
      } else if (typeof num === "number") {
        this.result *= num;
      }
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (num instanceof NumCalculator3) {
        this.result /= num.result;
      } else if (typeof num === "number") {
        this.result /= num;
      }
      return this;
    }
  }, {
    key: "equal",
    value: function equal() {
      return this.result;
    }
  }]);
  return NumCalculator3;
}(calculator_default2);
var NumCalculator_default = NumCalculator2;

// node_modules/@ant-design/cssinjs-utils/es/util/calc/index.js
var genCalc = function genCalc2(type5, unitlessCssVar) {
  var Calculator = type5 === "css" ? CSSCalculator2 : NumCalculator_default;
  return function(num) {
    return new Calculator(num, unitlessCssVar);
  };
};
var calc_default2 = genCalc;

// node_modules/@ant-design/cssinjs-utils/es/util/getCompVarPrefix.js
var getCompVarPrefix = function getCompVarPrefix2(component, prefix) {
  return "".concat([prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
var getCompVarPrefix_default = getCompVarPrefix;

// node_modules/@ant-design/cssinjs-utils/es/util/getComponentToken.js
function getComponentToken(component, token, defaultToken, options) {
  var customToken = _objectSpread2({}, token[component]);
  if (options !== null && options !== void 0 && options.deprecatedTokens) {
    var deprecatedTokens = options.deprecatedTokens;
    deprecatedTokens.forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), oldTokenKey = _ref2[0], newTokenKey = _ref2[1];
      if (true) {
        warning_default(!(customToken !== null && customToken !== void 0 && customToken[oldTokenKey]), "Component Token `".concat(String(oldTokenKey), "` of ").concat(String(component), " is deprecated. Please use `").concat(String(newTokenKey), "` instead."));
      }
      if (customToken !== null && customToken !== void 0 && customToken[oldTokenKey] || customToken !== null && customToken !== void 0 && customToken[newTokenKey]) {
        var _customToken$newToken;
        (_customToken$newToken = customToken[newTokenKey]) !== null && _customToken$newToken !== void 0 ? _customToken$newToken : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
      }
    });
  }
  var mergedToken = _objectSpread2(_objectSpread2({}, defaultToken), customToken);
  Object.keys(mergedToken).forEach(function(key) {
    if (mergedToken[key] === token[key]) {
      delete mergedToken[key];
    }
  });
  return mergedToken;
}
var getComponentToken_default = getComponentToken;

// node_modules/@ant-design/cssinjs-utils/es/util/statistic.js
var enableStatistic = true;
var recording = true;
function merge2() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  var ret = {};
  objs.forEach(function(obj) {
    if (_typeof(obj) !== "object") {
      return;
    }
    var keys2 = Object.keys(obj);
    keys2.forEach(function(key) {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: function get2() {
          return obj[key];
        }
      });
    });
  });
  recording = true;
  return ret;
}
var statistic = {};
function noop2() {
}
var statisticToken = function statisticToken2(token) {
  var tokenKeys2;
  var proxy = token;
  var flush = noop2;
  if (enableStatistic && typeof Proxy !== "undefined") {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token, {
      get: function get2(obj, prop) {
        if (recording) {
          var _tokenKeys;
          (_tokenKeys = tokenKeys2) === null || _tokenKeys === void 0 || _tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = function flush2(componentName, componentToken) {
      var _statistic$componentN;
      statistic[componentName] = {
        global: Array.from(tokenKeys2),
        component: _objectSpread2(_objectSpread2({}, (_statistic$componentN = statistic[componentName]) === null || _statistic$componentN === void 0 ? void 0 : _statistic$componentN.component), componentToken)
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush
  };
};
var statistic_default = statisticToken;

// node_modules/@ant-design/cssinjs-utils/es/util/getDefaultComponentToken.js
function getDefaultComponentToken(component, token, getDefaultToken) {
  if (typeof getDefaultToken === "function") {
    var _token$component;
    return getDefaultToken(merge2(token, (_token$component = token[component]) !== null && _token$component !== void 0 ? _token$component : {}));
  }
  return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
}
var getDefaultComponentToken_default = getDefaultComponentToken;

// node_modules/@ant-design/cssinjs-utils/es/util/maxmin.js
function genMaxMin(type5) {
  if (type5 === "js") {
    return {
      max: Math.max,
      min: Math.min
    };
  }
  return {
    max: function max() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return "max(".concat(args.map(function(value) {
        return unit(value);
      }).join(","), ")");
    },
    min: function min() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return "min(".concat(args.map(function(value) {
        return unit(value);
      }).join(","), ")");
    }
  };
}
var maxmin_default = genMaxMin;

// node_modules/@ant-design/cssinjs-utils/es/_util/hooks/useUniqueMemo.js
var import_react23 = __toESM(require_react());
var BEAT_LIMIT = 1e3 * 60 * 10;
var ArrayKeyMap = function() {
  function ArrayKeyMap2() {
    _classCallCheck(this, ArrayKeyMap2);
    _defineProperty(this, "map", /* @__PURE__ */ new Map());
    _defineProperty(this, "objectIDMap", /* @__PURE__ */ new WeakMap());
    _defineProperty(this, "nextID", 0);
    _defineProperty(this, "lastAccessBeat", /* @__PURE__ */ new Map());
    _defineProperty(this, "accessBeat", 0);
  }
  _createClass(ArrayKeyMap2, [{
    key: "set",
    value: function set2(keys2, value) {
      this.clear();
      var compositeKey = this.getCompositeKey(keys2);
      this.map.set(compositeKey, value);
      this.lastAccessBeat.set(compositeKey, Date.now());
    }
  }, {
    key: "get",
    value: function get2(keys2) {
      var compositeKey = this.getCompositeKey(keys2);
      var cache = this.map.get(compositeKey);
      this.lastAccessBeat.set(compositeKey, Date.now());
      this.accessBeat += 1;
      return cache;
    }
  }, {
    key: "getCompositeKey",
    value: function getCompositeKey(keys2) {
      var _this = this;
      var ids = keys2.map(function(key) {
        if (key && _typeof(key) === "object") {
          return "obj_".concat(_this.getObjectID(key));
        }
        return "".concat(_typeof(key), "_").concat(key);
      });
      return ids.join("|");
    }
  }, {
    key: "getObjectID",
    value: function getObjectID(obj) {
      if (this.objectIDMap.has(obj)) {
        return this.objectIDMap.get(obj);
      }
      var id = this.nextID;
      this.objectIDMap.set(obj, id);
      this.nextID += 1;
      return id;
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;
      if (this.accessBeat > 1e4) {
        var now = Date.now();
        this.lastAccessBeat.forEach(function(beat, key) {
          if (now - beat > BEAT_LIMIT) {
            _this2.map.delete(key);
            _this2.lastAccessBeat.delete(key);
          }
        });
        this.accessBeat = 0;
      }
    }
  }]);
  return ArrayKeyMap2;
}();
var uniqueMap = new ArrayKeyMap();
function useUniqueMemo(memoFn, deps) {
  return import_react23.default.useMemo(function() {
    var cachedValue = uniqueMap.get(deps);
    if (cachedValue) {
      return cachedValue;
    }
    var newValue = memoFn();
    uniqueMap.set(deps, newValue);
    return newValue;
  }, deps);
}
var useUniqueMemo_default = useUniqueMemo;

// node_modules/@ant-design/cssinjs-utils/es/hooks/useCSP.js
var useDefaultCSP = function useDefaultCSP2() {
  return {};
};
var useCSP_default = useDefaultCSP;

// node_modules/@ant-design/cssinjs-utils/es/util/genStyleUtils.js
function genStyleUtils(config) {
  var _config$useCSP = config.useCSP, useCSP = _config$useCSP === void 0 ? useCSP_default : _config$useCSP, useToken2 = config.useToken, usePrefix = config.usePrefix, getResetStyles2 = config.getResetStyles, getCommonStyle = config.getCommonStyle, getCompUnitless = config.getCompUnitless;
  function genStyleHooks2(component, styleFn, getDefaultToken, options) {
    var componentName = Array.isArray(component) ? component[0] : component;
    function prefixToken(key) {
      return "".concat(String(componentName)).concat(key.slice(0, 1).toUpperCase()).concat(key.slice(1));
    }
    var originUnitless = (options === null || options === void 0 ? void 0 : options.unitless) || {};
    var originCompUnitless = typeof getCompUnitless === "function" ? getCompUnitless(component) : {};
    var compUnitless = _objectSpread2(_objectSpread2({}, originCompUnitless), {}, _defineProperty({}, prefixToken("zIndexPopup"), true));
    Object.keys(originUnitless).forEach(function(key) {
      compUnitless[prefixToken(key)] = originUnitless[key];
    });
    var mergedOptions = _objectSpread2(_objectSpread2({}, options), {}, {
      unitless: compUnitless,
      prefixToken
    });
    var useStyle = genComponentStyleHook2(component, styleFn, getDefaultToken, mergedOptions);
    var useCSSVar = genCSSVarRegister(componentName, getDefaultToken, mergedOptions);
    return function(prefixCls) {
      var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
      var hashId = useStyle(prefixCls, rootCls);
      var extraPrefixCls = options === null || options === void 0 ? void 0 : options.extraCssVarPrefixCls;
      var resolvedExtraPrefixCls = typeof extraPrefixCls === "function" ? extraPrefixCls({
        prefixCls,
        rootCls
      }) : extraPrefixCls;
      var cssVarCls = useCSSVar(resolvedExtraPrefixCls !== null && resolvedExtraPrefixCls !== void 0 && resolvedExtraPrefixCls.length ? [rootCls].concat(_toConsumableArray(resolvedExtraPrefixCls)) : rootCls);
      return [hashId, cssVarCls];
    };
  }
  function genCSSVarRegister(component, getDefaultToken, options) {
    var compUnitless = options.unitless, prefixToken = options.prefixToken, ignore2 = options.ignore;
    return function(rootCls) {
      var _useToken = useToken2(), cssVar = _useToken.cssVar, realToken = _useToken.realToken;
      useCSSVarRegister_default({
        path: [component],
        prefix: cssVar.prefix,
        key: cssVar.key,
        unitless: compUnitless,
        ignore: ignore2,
        token: realToken,
        scope: rootCls
      }, function() {
        var defaultToken = getDefaultComponentToken_default(component, realToken, getDefaultToken);
        var componentToken = getComponentToken_default(component, realToken, defaultToken, {
          deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
        });
        if (defaultToken) {
          Object.keys(defaultToken).forEach(function(key) {
            componentToken[prefixToken(key)] = componentToken[key];
            delete componentToken[key];
          });
        }
        return componentToken;
      });
      return cssVar === null || cssVar === void 0 ? void 0 : cssVar.key;
    };
  }
  function genComponentStyleHook2(componentName, styleFn, getDefaultToken) {
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
    var _cells = _slicedToArray(cells, 1), component = _cells[0];
    var concatComponent = cells.join("-");
    var mergedLayer = config.layer || {
      name: "antd"
    };
    return function(prefixCls) {
      var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
      var _useToken2 = useToken2(), theme = _useToken2.theme, realToken = _useToken2.realToken, hashId = _useToken2.hashId, token = _useToken2.token, cssVar = _useToken2.cssVar, zeroRuntime = _useToken2.zeroRuntime;
      var memoizedZeroRuntime = (0, import_react24.useMemo)(function() {
        return zeroRuntime;
      }, []);
      if (memoizedZeroRuntime) {
        return hashId;
      }
      var _usePrefix = usePrefix(), rootPrefixCls = _usePrefix.rootPrefixCls, iconPrefixCls = _usePrefix.iconPrefixCls;
      var csp = useCSP();
      var type5 = "css";
      var calc = useUniqueMemo_default(function() {
        var unitlessCssVar = /* @__PURE__ */ new Set();
        Object.keys(options.unitless || {}).forEach(function(key) {
          unitlessCssVar.add(token2CSSVar(key, cssVar.prefix));
          unitlessCssVar.add(token2CSSVar(key, getCompVarPrefix_default(component, cssVar.prefix)));
        });
        return calc_default2(type5, unitlessCssVar);
      }, [type5, component, cssVar === null || cssVar === void 0 ? void 0 : cssVar.prefix]);
      var _genMaxMin = maxmin_default(type5), max = _genMaxMin.max, min = _genMaxMin.min;
      var sharedConfig = {
        theme,
        token,
        hashId,
        nonce: function nonce() {
          return csp.nonce;
        },
        clientOnly: options.clientOnly,
        layer: mergedLayer,
        // antd is always at top of styles
        order: options.order || -999
      };
      if (typeof getResetStyles2 === "function") {
        useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
          clientOnly: false,
          path: ["Shared", rootPrefixCls]
        }), function() {
          return getResetStyles2(token, {
            prefix: {
              rootPrefixCls,
              iconPrefixCls
            },
            csp
          });
        });
      }
      useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
        path: [concatComponent, prefixCls, iconPrefixCls]
      }), function() {
        if (options.injectStyle === false) {
          return [];
        }
        var _statisticToken = statistic_default(token), proxyToken = _statisticToken.token, flush = _statisticToken.flush;
        var defaultComponentToken = getDefaultComponentToken_default(component, realToken, getDefaultToken);
        var componentCls = ".".concat(prefixCls);
        var componentToken = getComponentToken_default(component, realToken, defaultComponentToken, {
          deprecatedTokens: options.deprecatedTokens
        });
        if (defaultComponentToken && _typeof(defaultComponentToken) === "object") {
          Object.keys(defaultComponentToken).forEach(function(key) {
            defaultComponentToken[key] = "var(".concat(token2CSSVar(key, getCompVarPrefix_default(component, cssVar.prefix)), ")");
          });
        }
        var mergedToken = merge2(proxyToken, {
          componentCls,
          prefixCls,
          iconCls: ".".concat(iconPrefixCls),
          antCls: ".".concat(rootPrefixCls),
          calc,
          max,
          min
        }, defaultComponentToken);
        var styleInterpolation = styleFn(mergedToken, {
          hashId,
          prefixCls,
          rootPrefixCls,
          iconPrefixCls
        });
        flush(component, componentToken);
        var commonStyle = typeof getCommonStyle === "function" ? getCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont) : null;
        return [options.resetStyle === false ? null : commonStyle, styleInterpolation];
      });
      return hashId;
    };
  }
  function genSubStyleComponent2(componentName, styleFn, getDefaultToken) {
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var useStyle = genComponentStyleHook2(componentName, styleFn, getDefaultToken, _objectSpread2({
      resetStyle: false,
      // Sub Style should default after root one
      order: -998
    }, options));
    var StyledComponent = function StyledComponent2(_ref) {
      var prefixCls = _ref.prefixCls, _ref$rootCls = _ref.rootCls, rootCls = _ref$rootCls === void 0 ? prefixCls : _ref$rootCls;
      useStyle(prefixCls, rootCls);
      return null;
    };
    if (true) {
      StyledComponent.displayName = "SubStyle_".concat(String(Array.isArray(componentName) ? componentName.join(".") : componentName));
    }
    return StyledComponent;
  }
  return {
    genStyleHooks: genStyleHooks2,
    genSubStyleComponent: genSubStyleComponent2,
    genComponentStyleHook: genComponentStyleHook2
  };
}
var genStyleUtils_default = genStyleUtils;

// node_modules/antd/es/theme/useToken.js
var import_react25 = __toESM(require_react());

// node_modules/antd/es/version/version.js
var version_default = "6.3.0";

// node_modules/antd/es/version/index.js
var version_default2 = version_default;

// node_modules/antd/es/theme/util/getAlphaColor.js
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor2(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new FastColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new FastColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new FastColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new FastColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var getAlphaColor_default = getAlphaColor2;

// node_modules/antd/es/theme/util/alias.js
function formatToken(derivativeToken) {
  const {
    override,
    ...restToken
  } = derivativeToken;
  const overrideTokens = {
    ...override
  };
  Object.keys(seed_default).forEach((token) => {
    delete overrideTokens[token];
  });
  const mergedToken = {
    ...restToken,
    ...overrideTokens
  };
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  const screenXXXL = 1920;
  if (mergedToken.motion === false) {
    const fastDuration = "0s";
    mergedToken.motionDurationFast = fastDuration;
    mergedToken.motionDurationMid = fastDuration;
    mergedToken.motionDurationSlow = fastDuration;
  }
  const aliasToken = {
    ...mergedToken,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor_default(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor_default(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor_default(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Line
    lineWidthFocus: mergedToken.lineWidth * 3,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor_default(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    screenXXLMax: screenXXXL - 1,
    screenXXXL,
    screenXXXLMin: screenXXXL,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new FastColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new FastColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new FastColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
    // Override AliasToken
    ...overrideTokens
  };
  return aliasToken;
}

// node_modules/antd/es/theme/useToken.js
var unitless = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true,
  opacityImage: true
};
var ignore = {
  motionBase: true,
  motionUnit: true
};
var preserve = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true
};
var getComputedToken2 = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const {
    override,
    ...components
  } = overrideToken;
  let mergedDerivativeToken = {
    ...derivativeToken,
    override
  };
  mergedDerivativeToken = formatToken(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach(([key, value]) => {
      const {
        theme: componentTheme,
        ...componentTokens
      } = value;
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken2({
          ...mergedDerivativeToken,
          ...componentTokens
        }, {
          override: componentTokens
        }, componentTheme);
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
function useToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    override,
    cssVar: ctxCssVar,
    zeroRuntime
  } = import_react25.default.useContext(DesignTokenContext);
  const cssVar = {
    prefix: (ctxCssVar == null ? void 0 : ctxCssVar.prefix) ?? "ant",
    key: (ctxCssVar == null ? void 0 : ctxCssVar.key) ?? "css-var-root"
  };
  const salt = `${version_default2}-${hashed || ""}`;
  const mergedTheme = theme || theme_default;
  const [token, hashId, realToken] = useCacheToken(mergedTheme, [seed_default, rootDesignToken], {
    salt,
    override,
    getComputedToken: getComputedToken2,
    cssVar: {
      ...cssVar,
      unitless,
      ignore,
      preserve
    }
  });
  return [mergedTheme, realToken, hashed ? hashId : "", token, cssVar, !!zeroRuntime];
}

// node_modules/antd/es/theme/util/genStyleUtils.js
var import_react26 = __toESM(require_react());

// node_modules/antd/es/style/index.js
var textEllipsis = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
var resetComponent = (token, needInheritFontFamily = false) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: needInheritFontFamily ? "inherit" : token.fontFamily
});
var resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
});
var clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
});
var genLinkStyle = (token) => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${token.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: token.colorLinkHover
    },
    "&:active": {
      color: token.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
var genCommonStyle = (token, componentPrefixCls, rootCls, resetFont) => {
  const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
  const resetStyle = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let resetFontStyle = {};
  if (resetFont !== false) {
    resetFontStyle = {
      fontFamily: token.fontFamily,
      fontSize: token.fontSize
    };
  }
  return {
    [rootPrefixSelector]: {
      ...resetFontStyle,
      ...resetStyle,
      [prefixSelector]: resetStyle
    }
  };
};
var genFocusOutline = (token, offset) => ({
  outline: `${unit(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`,
  outlineOffset: offset ?? 1,
  transition: [`outline-offset`, `outline`].map((prop) => `${prop} 0s`).join(", ")
});
var genFocusStyle = (token, offset) => ({
  "&:focus-visible": genFocusOutline(token, offset)
});
var genIconStyle = (iconPrefixCls) => ({
  [`.${iconPrefixCls}`]: {
    ...resetIcon(),
    [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
      display: "block"
    }
  }
});
var operationUnit = (token) => ({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: token.colorLink,
  textDecoration: token.linkDecoration,
  outline: "none",
  cursor: "pointer",
  transition: `all ${token.motionDurationSlow}`,
  border: 0,
  padding: 0,
  background: "none",
  userSelect: "none",
  ...genFocusStyle(token),
  "&:hover": {
    color: token.colorLinkHover,
    textDecoration: token.linkHoverDecoration
  },
  "&:focus": {
    color: token.colorLinkHover,
    textDecoration: token.linkFocusDecoration
  },
  "&:active": {
    color: token.colorLinkActive,
    textDecoration: token.linkHoverDecoration
  }
});

// node_modules/antd/es/theme/util/genStyleUtils.js
var {
  genStyleHooks,
  genComponentStyleHook,
  genSubStyleComponent
} = genStyleUtils_default({
  usePrefix: () => {
    const {
      getPrefixCls,
      iconPrefixCls
    } = (0, import_react26.useContext)(ConfigContext);
    const rootPrefixCls = getPrefixCls();
    return {
      rootPrefixCls,
      iconPrefixCls
    };
  },
  useToken: () => {
    const [theme, realToken, hashId, token, cssVar, zeroRuntime] = useToken();
    return {
      theme,
      realToken,
      hashId,
      token,
      cssVar,
      zeroRuntime
    };
  },
  useCSP: () => {
    const {
      csp
    } = (0, import_react26.useContext)(ConfigContext);
    return csp ?? {};
  },
  getResetStyles: (token, config) => {
    const linkStyle = genLinkStyle(token);
    return [linkStyle, {
      "&": linkStyle
    }, genIconStyle((config == null ? void 0 : config.prefix.iconPrefixCls) ?? defaultIconPrefixCls)];
  },
  getCommonStyle: genCommonStyle,
  getCompUnitless: () => unitless
});
var genCssVar = (antCls, component) => {
  const cssPrefix = `--${antCls.replace(/\./g, "")}-${component}-`;
  const varName = (name) => {
    return `${cssPrefix}${name}`;
  };
  const varRef = (name, fallback) => {
    return fallback ? `var(${cssPrefix}${name}, ${fallback})` : `var(${cssPrefix}${name})`;
  };
  return [varName, varRef];
};

// node_modules/antd/es/theme/util/genPresetColor.js
function genPresetColor(token, genCss) {
  return PresetColors.reduce((prev, colorKey) => {
    const lightColor = token[`${colorKey}1`];
    const lightBorderColor = token[`${colorKey}3`];
    const darkColor = token[`${colorKey}6`];
    const textColor = token[`${colorKey}7`];
    return {
      ...prev,
      ...genCss(colorKey, {
        lightColor,
        lightBorderColor,
        darkColor,
        textColor
      })
    };
  }, {});
}

// node_modules/antd/es/theme/util/useResetIconStyle.js
var useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token] = useToken();
  return useStyleRegister({
    theme,
    token,
    hashId: "",
    path: ["ant-design-icons", iconPrefixCls],
    nonce: () => csp == null ? void 0 : csp.nonce,
    layer: {
      name: "antd"
    }
  }, () => genIconStyle(iconPrefixCls));
};
var useResetIconStyle_default = useResetIconStyle;

// node_modules/antd/es/config-provider/hooks/useTheme.js
function useTheme(theme, parentTheme, config) {
  var _a;
  const warning6 = devUseWarning("ConfigProvider");
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? {
    ...defaultConfig,
    hashed: (parentTheme == null ? void 0 : parentTheme.hashed) ?? defaultConfig.hashed,
    cssVar: parentTheme == null ? void 0 : parentTheme.cssVar
  } : parentTheme;
  const themeKey = (0, import_react27.useId)();
  if (true) {
    const cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
    const validKey = !!(typeof themeConfig.cssVar === "object" && ((_a = themeConfig.cssVar) == null ? void 0 : _a.key) || themeKey);
    true ? warning6(!cssVarEnabled || validKey, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.") : void 0;
  }
  return useMemo(() => {
    var _a2;
    if (!theme) {
      return parentTheme;
    }
    const mergedComponents = {
      ...parentThemeConfig.components
    };
    Object.keys(theme.components || {}).forEach((componentName) => {
      mergedComponents[componentName] = {
        ...mergedComponents[componentName],
        ...theme.components[componentName]
      };
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
    const mergedCssVar = {
      prefix: config == null ? void 0 : config.prefixCls,
      // Same as prefixCls by default
      ...parentThemeConfig.cssVar,
      ...themeConfig.cssVar,
      key: ((_a2 = themeConfig.cssVar) == null ? void 0 : _a2.key) || cssVarKey
    };
    return {
      ...parentThemeConfig,
      ...themeConfig,
      token: {
        ...parentThemeConfig.token,
        ...themeConfig.token
      },
      components: mergedComponents,
      cssVar: mergedCssVar
    };
  }, [themeConfig, parentThemeConfig], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !isEqual_default(prevTheme, nextTheme, true);
  }));
}

// node_modules/antd/es/config-provider/MotionWrapper.js
var React55 = __toESM(require_react());
var MotionCacheContext = React55.createContext(true);
if (true) {
  MotionCacheContext.displayName = "MotionCacheContext";
}
function MotionWrapper(props) {
  const parentMotion = React55.useContext(MotionCacheContext);
  const {
    children
  } = props;
  const [, token] = useToken();
  const {
    motion
  } = token;
  const needWrapMotionProviderRef = React55.useRef(false);
  needWrapMotionProviderRef.current || (needWrapMotionProviderRef.current = parentMotion !== motion);
  if (needWrapMotionProviderRef.current) {
    return React55.createElement(MotionCacheContext.Provider, {
      value: motion
    }, React55.createElement(MotionProvider, {
      motion
    }, children));
  }
  return children;
}

// node_modules/antd/es/config-provider/PropWarning.js
var React56 = __toESM(require_react());
var PropWarning = React56.memo(({
  dropdownMatchSelectWidth
}) => {
  const warning6 = devUseWarning("ConfigProvider");
  warning6.deprecated(dropdownMatchSelectWidth === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth");
  return null;
});
if (true) {
  PropWarning.displayName = "PropWarning";
}
var PropWarning_default = true ? PropWarning : () => null;

// node_modules/antd/es/config-provider/index.js
var IconStyle = ({
  iconPrefixCls,
  csp
}) => {
  useResetIconStyle_default(iconPrefixCls, csp);
  return null;
};
var existThemeConfig = false;
var warnContext = true ? (componentName) => {
  true ? warning_default2(!existThemeConfig, componentName, `Static function can not consume context like dynamic theme. Please use 'App' component instead.`) : void 0;
} : (
  /* istanbul ignore next */
  null
);
var PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
var globalPrefixCls;
var globalIconPrefixCls;
var globalTheme;
var globalHolderRender;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
}
var setGlobalConfig = (props) => {
  const {
    prefixCls,
    iconPrefixCls,
    theme,
    holderRender
  } = props;
  if (prefixCls !== void 0) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== void 0) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if ("holderRender" in props) {
    globalHolderRender = holderRender;
  }
  if (theme) {
    globalTheme = theme;
  }
};
var globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme,
  holderRender: globalHolderRender
});
var ProviderChildren = (props) => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    affix,
    anchor,
    app,
    form,
    locale: locale5,
    componentSize,
    direction,
    space,
    splitter,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic: statistic2,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    masonry,
    menu,
    pagination,
    input,
    textArea,
    otp,
    empty,
    badge,
    radio,
    rate,
    ribbon,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    cardMeta,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    tooltip,
    popover,
    popconfirm,
    qrcode,
    floatButton,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect,
    watermark
  } = props;
  const getPrefixCls = React57.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
  const csp = customCsp || parentContext.csp;
  const mergedTheme = useTheme(theme, parentContext.theme, {
    prefixCls: getPrefixCls("")
  });
  if (true) {
    existThemeConfig = existThemeConfig || !!mergedTheme;
  }
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    affix,
    anchor,
    app,
    locale: locale5 || legacyLocale,
    direction,
    space,
    splitter,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth ?? dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic: statistic2,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    textArea,
    otp,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    masonry,
    menu,
    pagination,
    empty,
    badge,
    radio,
    rate,
    ribbon,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    cardMeta,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    tooltip,
    popover,
    popconfirm,
    qrcode,
    floatButton,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect,
    watermark
  };
  if (true) {
    const warningFn = devUseWarning("ConfigProvider");
    warningFn(!("autoInsertSpaceInButton" in props), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  }
  const config = {
    ...parentContext
  };
  Object.keys(baseConfig).forEach((key) => {
    if (baseConfig[key] !== void 0) {
      config[key] = baseConfig[key];
    }
  });
  PASSED_PROPS.forEach((propName) => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  if (typeof autoInsertSpaceInButton !== "undefined") {
    config.button = {
      autoInsertSpace: autoInsertSpaceInButton,
      ...config.button
    };
  }
  const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
  });
  const {
    layer
  } = React57.useContext(StyleContext_default);
  const memoIconContextValue = React57.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp,
    layer: layer ? "antd" : void 0
  }), [iconPrefixCls, csp, layer]);
  let childNode = React57.createElement(React57.Fragment, null, React57.createElement(IconStyle, {
    iconPrefixCls,
    csp
  }), React57.createElement(PropWarning_default, {
    dropdownMatchSelectWidth
  }), children);
  const validateMessages = React57.useMemo(() => {
    var _a, _b, _c, _d;
    return merge(((_a = en_US_default6.Form) == null ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) == null ? void 0 : _b.Form) == null ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) == null ? void 0 : _d.validateMessages) || {}, (form == null ? void 0 : form.validateMessages) || {});
  }, [memoedConfig, form == null ? void 0 : form.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = React57.createElement(validateMessagesContext_default.Provider, {
      value: validateMessages
    }, childNode);
  }
  if (locale5) {
    childNode = React57.createElement(locale_default, {
      locale: locale5,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = React57.createElement(Context_default.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = React57.createElement(SizeContextProvider, {
      size: componentSize
    }, childNode);
  }
  childNode = React57.createElement(MotionWrapper, null, childNode);
  if (tooltip == null ? void 0 : tooltip.unique) {
    childNode = React57.createElement(UniqueProvider_default2, null, childNode);
  }
  const memoTheme = React57.useMemo(() => {
    const {
      algorithm,
      token,
      components,
      cssVar,
      ...rest
    } = mergedTheme || {};
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : theme_default;
    const parsedComponents = {};
    Object.entries(components || {}).forEach(([componentName, componentToken]) => {
      const parsedToken = {
        ...componentToken
      };
      if ("algorithm" in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === "function") {
          parsedToken.theme = createTheme(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = {
      ...seed_default,
      ...token
    };
    return {
      ...rest,
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: {
        override: mergedToken,
        ...parsedComponents
      },
      cssVar
    };
  }, [mergedTheme]);
  if (theme) {
    childNode = React57.createElement(DesignTokenContext.Provider, {
      value: memoTheme
    }, childNode);
  }
  if (memoedConfig.warning) {
    childNode = React57.createElement(WarningContext.Provider, {
      value: memoedConfig.warning
    }, childNode);
  }
  if (componentDisabled !== void 0) {
    childNode = React57.createElement(DisabledContextProvider, {
      disabled: componentDisabled
    }, childNode);
  }
  return React57.createElement(ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};
var ConfigProvider = (props) => {
  const context = React57.useContext(ConfigContext);
  const antLocale = React57.useContext(context_default);
  return React57.createElement(ProviderChildren, {
    parentContext: context,
    legacyLocale: antLocale,
    ...props
  });
};
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext_default;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = useConfig_default;
Object.defineProperty(ConfigProvider, "SizeContext", {
  get: () => {
    true ? warning_default2(false, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.") : void 0;
    return SizeContext_default;
  }
});
if (true) {
  ConfigProvider.displayName = "ConfigProvider";
}
var config_provider_default = ConfigProvider;

// node_modules/antd/es/tooltip/index.js
var React92 = __toESM(require_react());

// node_modules/@rc-component/tooltip/es/Popup.js
var React58 = __toESM(require_react());
var Popup2 = (props) => {
  const {
    children,
    prefixCls,
    id,
    classNames,
    styles,
    className,
    style: style2
  } = props;
  return React58.createElement("div", {
    id,
    className: clsx(`${prefixCls}-container`, classNames == null ? void 0 : classNames.container, className),
    style: {
      ...styles == null ? void 0 : styles.container,
      ...style2
    },
    role: "tooltip"
  }, typeof children === "function" ? children() : children);
};
var Popup_default2 = Popup2;

// node_modules/@rc-component/tooltip/es/Tooltip.js
var React59 = __toESM(require_react());
var import_react28 = __toESM(require_react());

// node_modules/@rc-component/tooltip/es/placements.js
var autoAdjustOverflowTopBottom = {
  shiftX: 64,
  adjustY: 1
};
var autoAdjustOverflowLeftRight = {
  adjustX: 1,
  shiftY: true
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ["cr", "cl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  },
  right: {
    points: ["cl", "cr"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  top: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  }
};

// node_modules/@rc-component/tooltip/es/Tooltip.js
function _extends8() {
  _extends8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends8.apply(this, arguments);
}
var Tooltip = React59.forwardRef((props, ref) => {
  const {
    trigger = ["hover"],
    mouseEnterDelay = 0,
    mouseLeaveDelay = 0.1,
    prefixCls = "rc-tooltip",
    children,
    onVisibleChange,
    afterVisibleChange,
    motion,
    placement = "right",
    align = {},
    destroyOnHidden = false,
    defaultVisible,
    getTooltipContainer,
    arrowContent,
    overlay,
    id,
    showArrow = true,
    classNames,
    styles,
    ...restProps
  } = props;
  const mergedId = useId_default(id);
  const triggerRef = (0, import_react28.useRef)(null);
  (0, import_react28.useImperativeHandle)(ref, () => triggerRef.current);
  const extraProps = {
    ...restProps
  };
  if ("visible" in props) {
    extraProps.popupVisible = props.visible;
  }
  const mergedArrow = React59.useMemo(() => {
    if (!showArrow) {
      return false;
    }
    const arrowConfig = showArrow === true ? {} : showArrow;
    return {
      ...arrowConfig,
      className: clsx(arrowConfig.className, classNames == null ? void 0 : classNames.arrow),
      style: {
        ...arrowConfig.style,
        ...styles == null ? void 0 : styles.arrow
      },
      content: arrowConfig.content ?? arrowContent
    };
  }, [showArrow, classNames == null ? void 0 : classNames.arrow, styles == null ? void 0 : styles.arrow, arrowContent]);
  const getChildren = ({
    open
  }) => {
    const child = React59.Children.only(children);
    const ariaProps = {
      "aria-describedby": overlay && open ? mergedId : void 0
    };
    return React59.cloneElement(child, ariaProps);
  };
  return React59.createElement(es_default4, _extends8({
    popupClassName: classNames == null ? void 0 : classNames.root,
    prefixCls,
    popup: React59.createElement(Popup_default2, {
      key: "content",
      prefixCls,
      id: mergedId,
      classNames,
      styles
    }, overlay),
    action: trigger,
    builtinPlacements: placements,
    popupPlacement: placement,
    ref: triggerRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onOpenChange: onVisibleChange,
    afterOpenChange: afterVisibleChange,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    autoDestroy: destroyOnHidden,
    mouseLeaveDelay,
    popupStyle: styles == null ? void 0 : styles.root,
    mouseEnterDelay,
    arrow: mergedArrow,
    uniqueContainerClassName: classNames == null ? void 0 : classNames.uniqueContainer,
    uniqueContainerStyle: styles == null ? void 0 : styles.uniqueContainer
  }, extraProps), getChildren);
});
var Tooltip_default = Tooltip;

// node_modules/@rc-component/tooltip/es/index.js
var es_default5 = Tooltip_default;

// node_modules/antd/es/_util/ContextIsolator.js
var import_react39 = __toESM(require_react());

// node_modules/antd/es/form/context.js
var React69 = __toESM(require_react());

// node_modules/@rc-component/form/es/index.js
var React68 = __toESM(require_react());

// node_modules/@rc-component/form/es/Field.js
var React63 = __toESM(require_react());

// node_modules/@rc-component/form/es/FieldContext.js
var React60 = __toESM(require_react());
var HOOK_MARK = "RC_FORM_INTERNAL_HOOKS";
var warningFunc = () => {
  warning_default(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
};
var Context2 = React60.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: () => {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
var FieldContext_default = Context2;

// node_modules/@rc-component/form/es/ListContext.js
var React61 = __toESM(require_react());
var ListContext = React61.createContext(null);
var ListContext_default = ListContext;

// node_modules/@rc-component/form/es/utils/typeUtil.js
function toArray3(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function isFormInstance(form) {
  return form && !!form._init;
}

// node_modules/@rc-component/async-validator/es/messages.js
function newMessages() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      tel: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

// node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}

// node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

// node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper2(t2) {
    if (null === t2 || !_isNativeFunction(t2)) return t2;
    if ("function" != typeof t2) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t2)) return r.get(t2);
      r.set(t2, Wrapper);
    }
    function Wrapper() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf(Wrapper, t2);
  }, _wrapNativeSuper(t);
}

// node_modules/@rc-component/async-validator/es/util.js
var formatRegExp = /%[sdj%]/g;
var warning4 = function warning5() {
};
if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
  warning4 = function warning6(type5, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors.every(function(e) {
        return typeof e === "string";
      })) {
        console.warn(type5, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type5) {
  return type5 === "string" || type5 === "url" || type5 === "hex" || type5 === "email" || type5 === "date" || type5 === "pattern" || type5 === "tel";
}
function isEmptyValue(value, type5) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type5 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type5) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, _toConsumableArray(errors || []));
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, _toConsumableArray(objArr[k] || []));
  });
  return ret;
}
var AsyncValidationError = function(_Error) {
  _inherits(AsyncValidationError2, _Error);
  var _super = _createSuper(AsyncValidationError2);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _classCallCheck(this, AsyncValidationError2);
    _this = _super.call(this, "Async Validation Error");
    _defineProperty(_assertThisInitialized(_this), "errors", void 0);
    _defineProperty(_assertThisInitialized(_this), "fields", void 0);
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return _createClass(AsyncValidationError2);
}(_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending.catch(function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending.catch(function(e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue2(value, path) {
  var v = value;
  for (var i = 0; i < path.length; i++) {
    if (v == void 0) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue2(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (_typeof(value) === "object" && _typeof(target[s]) === "object") {
          target[s] = _objectSpread2(_objectSpread2({}, target[s]), value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

// node_modules/@rc-component/async-validator/es/rule/enum.js
var ENUM = "enum";
var enumerable = function enumerable2(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
  }
};
var enum_default = enumerable;

// node_modules/@rc-component/async-validator/es/rule/pattern.js
var pattern = function pattern2(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var pattern_default = pattern;

// node_modules/@rc-component/async-validator/es/rule/range.js
var range = function range2(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var range_default = range;

// node_modules/@rc-component/async-validator/es/rule/required.js
var required = function required2(rule, value, source, errors, options, type5) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type5 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
var required_default = required;

// node_modules/@rc-component/async-validator/es/rule/url.js
var urlReg;
var url_default = function() {
  if (urlReg) {
    return urlReg;
  }
  var word = "[a-fA-F\\d:]";
  var b = function b2(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(word, ")|(?<=").concat(word, ")(?=\\s|$))") : "";
  };
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6List = [
    "(?:".concat(v6seg, ":){7}(?:").concat(v6seg, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(v6seg, ":){6}(?:").concat(v4, "|:").concat(v6seg, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(v6seg, ":){5}(?::").concat(v4, "|(?::").concat(v6seg, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(v6seg, ":){4}(?:(?::").concat(v6seg, "){0,1}:").concat(v4, "|(?::").concat(v6seg, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(v6seg, ":){3}(?:(?::").concat(v6seg, "){0,2}:").concat(v4, "|(?::").concat(v6seg, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(v6seg, ":){2}(?:(?::").concat(v6seg, "){0,3}:").concat(v4, "|(?::").concat(v6seg, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(v6seg, ":){1}(?:(?::").concat(v6seg, "){0,4}:").concat(v4, "|(?::").concat(v6seg, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(v6seg, "){0,5}:").concat(v4, "|(?::").concat(v6seg, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ];
  var v6Eth0 = "(?:%[0-9a-zA-Z]{1,})?";
  var v6 = "(?:".concat(v6List.join("|"), ")").concat(v6Eth0);
  var v46Exact = new RegExp("(?:^".concat(v4, "$)|(?:^").concat(v6, "$)"));
  var v4exact = new RegExp("^".concat(v4, "$"));
  var v6exact = new RegExp("^".concat(v6, "$"));
  var ip = function ip2(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:".concat(b(options)).concat(v4).concat(b(options), ")|(?:").concat(b(options)).concat(v6).concat(b(options), ")"), "g");
  };
  ip.v4 = function(options) {
    return options && options.exact ? v4exact : new RegExp("".concat(b(options)).concat(v4).concat(b(options)), "g");
  };
  ip.v6 = function(options) {
    return options && options.exact ? v6exact : new RegExp("".concat(b(options)).concat(v6).concat(b(options)), "g");
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:".concat(protocol, "|www\\.)").concat(auth, "(?:localhost|").concat(ipv4, "|").concat(ipv6, "|").concat(host).concat(domain).concat(tld, ")").concat(port).concat(path);
  urlReg = new RegExp("(?:^".concat(regex, "$)"), "i");
  return urlReg;
};

// node_modules/@rc-component/async-validator/es/rule/type.js
var pattern3 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  /**
   * Phone number regex, support country code, brackets, spaces, and dashes (or non-breaking hyphen \u2011).
   * @see https://regexr.com/3c53v
   * @see https://ihateregex.io/expr/phone/
   * @see https://developers.google.com/style/phone-numbers using non-breaking hyphen \u2011
   */
  tel: /^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp3(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return _typeof(value) === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern3.email);
  },
  tel: function tel(value) {
    return typeof value === "string" && value.length <= 32 && !!value.match(pattern3.tel);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(url_default());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern3.hex);
  }
};
var type = function type2(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required_default(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "tel", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && _typeof(value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var type_default = type;

// node_modules/@rc-component/async-validator/es/rule/whitespace.js
var whitespace = function whitespace2(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
var whitespace_default = whitespace;

// node_modules/@rc-component/async-validator/es/rule/index.js
var rule_default = {
  required: required_default,
  whitespace: whitespace_default,
  type: type_default,
  range: range_default,
  enum: enum_default,
  pattern: pattern_default
};

// node_modules/@rc-component/async-validator/es/validator/any.js
var any = function any2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
  }
  callback(errors);
};
var any_default = any;

// node_modules/@rc-component/async-validator/es/validator/array.js
var array2 = function array3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var array_default = array2;

// node_modules/@rc-component/async-validator/es/validator/boolean.js
var boolean = function boolean2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var boolean_default = boolean;

// node_modules/@rc-component/async-validator/es/validator/date.js
var date2 = function date3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rule_default.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rule_default.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
var date_default = date2;

// node_modules/@rc-component/async-validator/es/validator/enum.js
var ENUM2 = "enum";
var enumerable3 = function enumerable4(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default[ENUM2](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var enum_default2 = enumerable3;

// node_modules/@rc-component/async-validator/es/validator/float.js
var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var float_default = floatFn;

// node_modules/@rc-component/async-validator/es/validator/integer.js
var integer2 = function integer3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var integer_default = integer2;

// node_modules/@rc-component/async-validator/es/validator/method.js
var method2 = function method3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var method_default = method2;

// node_modules/@rc-component/async-validator/es/validator/number.js
var number2 = function number3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var number_default = number2;

// node_modules/@rc-component/async-validator/es/validator/object.js
var object2 = function object3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var object_default = object2;

// node_modules/@rc-component/async-validator/es/validator/pattern.js
var pattern4 = function pattern5(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rule_default.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var pattern_default2 = pattern4;

// node_modules/@rc-component/async-validator/es/validator/regexp.js
var regexp4 = function regexp5(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var regexp_default = regexp4;

// node_modules/@rc-component/async-validator/es/validator/required.js
var required3 = function required4(rule, value, callback, source, options) {
  var errors = [];
  var type5 = Array.isArray(value) ? "array" : _typeof(value);
  rule_default.required(rule, value, source, errors, options, type5);
  callback(errors);
};
var required_default2 = required3;

// node_modules/@rc-component/async-validator/es/validator/string.js
var string = function string2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
      rule_default.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rule_default.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
var string_default = string;

// node_modules/@rc-component/async-validator/es/validator/type.js
var type3 = function type4(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var type_default2 = type3;

// node_modules/@rc-component/async-validator/es/validator/index.js
var validator_default = {
  string: string_default,
  method: method_default,
  number: number_default,
  boolean: boolean_default,
  regexp: regexp_default,
  integer: integer_default,
  float: float_default,
  array: array_default,
  object: object_default,
  enum: enum_default2,
  pattern: pattern_default2,
  date: date_default,
  url: type_default2,
  hex: type_default2,
  email: type_default2,
  tel: type_default2,
  required: required_default2,
  any: any_default
};

// node_modules/@rc-component/async-validator/es/index.js
var Schema = function() {
  function Schema2(descriptor) {
    _classCallCheck(this, Schema2);
    _defineProperty(this, "rules", null);
    _defineProperty(this, "_messages", messages);
    this.define(descriptor);
  }
  _createClass(Schema2, [{
    key: "define",
    value: function define(rules) {
      var _this = this;
      if (!rules) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (_typeof(rules) !== "object" || Array.isArray(rules)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      Object.keys(rules).forEach(function(name) {
        var item = rules[name];
        _this.rules[name] = Array.isArray(item) ? item : [item];
      });
    }
  }, {
    key: "messages",
    value: function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge(newMessages(), _messages);
      }
      return this._messages;
    }
  }, {
    key: "validate",
    value: function validate(source_) {
      var _this2 = this;
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var oc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      };
      var source = source_;
      var options = o;
      var callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback(null, source);
        }
        return Promise.resolve(source);
      }
      function complete(results) {
        var errors = [];
        var fields = {};
        function add(e) {
          if (Array.isArray(e)) {
            var _errors;
            errors = (_errors = errors).concat.apply(_errors, _toConsumableArray(e));
          } else {
            errors.push(e);
          }
        }
        for (var i = 0; i < results.length; i++) {
          add(results[i]);
        }
        if (!errors.length) {
          callback(null, source);
        } else {
          fields = convertFieldsError(errors);
          callback(errors, fields);
        }
      }
      if (options.messages) {
        var messages2 = this.messages();
        if (messages2 === messages) {
          messages2 = newMessages();
        }
        deepMerge(messages2, options.messages);
        options.messages = messages2;
      } else {
        options.messages = this.messages();
      }
      var series = {};
      var keys2 = options.keys || Object.keys(this.rules);
      keys2.forEach(function(z) {
        var arr = _this2.rules[z];
        var value = source[z];
        arr.forEach(function(r) {
          var rule = r;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = _objectSpread2({}, source);
            }
            value = source[z] = rule.transform(value);
            if (value !== void 0 && value !== null) {
              rule.type = rule.type || (Array.isArray(value) ? "array" : _typeof(value));
            }
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = _objectSpread2({}, rule);
          }
          rule.validator = _this2.getValidationMethod(rule);
          if (!rule.validator) {
            return;
          }
          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this2.getType(rule);
          series[z] = series[z] || [];
          series[z].push({
            rule,
            value,
            source,
            field: z
          });
        });
      });
      var errorFields = {};
      return asyncMap(series, options, function(data, doIt) {
        var rule = data.rule;
        var deep = (rule.type === "object" || rule.type === "array") && (_typeof(rule.fields) === "object" || _typeof(rule.defaultField) === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullField(key, schema) {
          return _objectSpread2(_objectSpread2({}, schema), {}, {
            fullField: "".concat(rule.fullField, ".").concat(key),
            fullFields: rule.fullFields ? [].concat(_toConsumableArray(rule.fullFields), [key]) : [key]
          });
        }
        function cb() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          var errorList = Array.isArray(e) ? e : [e];
          if (!options.suppressWarning && errorList.length) {
            Schema2.warning("async-validator:", errorList);
          }
          if (errorList.length && rule.message !== void 0 && rule.message !== null) {
            errorList = [].concat(rule.message);
          }
          var filledErrors = errorList.map(complementError(rule, source));
          if (options.first && filledErrors.length) {
            errorFields[rule.field] = 1;
            return doIt(filledErrors);
          }
          if (!deep) {
            doIt(filledErrors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message !== void 0) {
                filledErrors = [].concat(rule.message).map(complementError(rule, source));
              } else if (options.error) {
                filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
              }
              return doIt(filledErrors);
            }
            var fieldsSchema = {};
            if (rule.defaultField) {
              Object.keys(data.value).map(function(key) {
                fieldsSchema[key] = rule.defaultField;
              });
            }
            fieldsSchema = _objectSpread2(_objectSpread2({}, fieldsSchema), data.rule.fields);
            var paredFieldsSchema = {};
            Object.keys(fieldsSchema).forEach(function(field) {
              var fieldSchema = fieldsSchema[field];
              var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
              paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
            });
            var schema = new Schema2(paredFieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, function(errs) {
              var finalErrors = [];
              if (filledErrors && filledErrors.length) {
                finalErrors.push.apply(finalErrors, _toConsumableArray(filledErrors));
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, _toConsumableArray(errs));
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        var res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          try {
            res = rule.validator(rule, data.value, cb, data.source, options);
          } catch (error) {
            var _console$error, _console;
            (_console$error = (_console = console).error) === null || _console$error === void 0 || _console$error.call(_console, error);
            if (!options.suppressValidatorError) {
              setTimeout(function() {
                throw error;
              }, 0);
            }
            cb(error.message);
          }
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || "".concat(rule.fullField || rule.field, " fails"));
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(function() {
            return cb();
          }, function(e) {
            return cb(e);
          });
        }
      }, function(results) {
        complete(results);
      }, source);
    }
  }, {
    key: "getType",
    value: function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validator_default.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      var keys2 = Object.keys(rule);
      var messageIndex = keys2.indexOf("message");
      if (messageIndex !== -1) {
        keys2.splice(messageIndex, 1);
      }
      if (keys2.length === 1 && keys2[0] === "required") {
        return validator_default.required;
      }
      return validator_default[this.getType(rule)] || void 0;
    }
  }]);
  return Schema2;
}();
_defineProperty(Schema, "register", function register(type5, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validator_default[type5] = validator;
});
_defineProperty(Schema, "warning", warning4);
_defineProperty(Schema, "messages", messages);
_defineProperty(Schema, "validators", validator_default);
var es_default6 = Schema;

// node_modules/@rc-component/form/es/utils/validateUtil.js
var React62 = __toESM(require_react());

// node_modules/@rc-component/form/es/utils/messages.js
var typeTemplate2 = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate2,
    method: typeTemplate2,
    array: typeTemplate2,
    object: typeTemplate2,
    number: typeTemplate2,
    date: typeTemplate2,
    boolean: typeTemplate2,
    integer: typeTemplate2,
    float: typeTemplate2,
    regexp: typeTemplate2,
    email: typeTemplate2,
    tel: typeTemplate2,
    url: typeTemplate2,
    hex: typeTemplate2
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};

// node_modules/@rc-component/form/es/utils/validateUtil.js
var AsyncValidator = es_default6;
function replaceMessage(template, kv) {
  return template.replace(/\\?\$\{\w+\}/g, (str) => {
    if (str.startsWith("\\")) {
      return str.slice(1);
    }
    const key = str.slice(2, -1);
    return kv[key];
  });
}
var CODE_LOGIC_ERROR = "CODE_LOGIC_ERROR";
async function validateRule(name, value, rule, options, messageVariables) {
  const cloneRule = {
    ...rule
  };
  delete cloneRule.ruleIndex;
  AsyncValidator.warning = () => void 0;
  if (cloneRule.validator) {
    const originValidator = cloneRule.validator;
    cloneRule.validator = (...args) => {
      try {
        return originValidator(...args);
      } catch (error) {
        console.error(error);
        return Promise.reject(CODE_LOGIC_ERROR);
      }
    };
  }
  let subRuleField = null;
  if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
    subRuleField = cloneRule.defaultField;
    delete cloneRule.defaultField;
  }
  const validator = new AsyncValidator({
    [name]: [cloneRule]
  });
  const messages2 = merge(defaultValidateMessages, options.validateMessages);
  validator.messages(messages2);
  let result = [];
  try {
    await Promise.resolve(validator.validate({
      [name]: value
    }, {
      ...options
    }));
  } catch (errObj) {
    if (errObj.errors) {
      result = errObj.errors.map(({
        message
      }, index) => {
        const mergedMessage = message === CODE_LOGIC_ERROR ? messages2.default : message;
        return React62.isValidElement(mergedMessage) ? (
          // Wrap ReactNode with `key`
          React62.cloneElement(mergedMessage, {
            key: `error_${index}`
          })
        ) : mergedMessage;
      });
    }
  }
  if (!result.length && subRuleField && Array.isArray(value) && value.length > 0) {
    const subResults = await Promise.all(value.map((subValue, i) => validateRule(`${name}.${i}`, subValue, subRuleField, options, messageVariables)));
    return subResults.reduce((prev, errors) => [...prev, ...errors], []);
  }
  const kv = {
    ...rule,
    name,
    enum: (rule.enum || []).join(", "),
    ...messageVariables
  };
  const fillVariableResult = result.map((error) => {
    if (typeof error === "string") {
      return replaceMessage(error, kv);
    }
    return error;
  });
  return fillVariableResult;
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  const name = namePath.join(".");
  const filledRules = rules.map((currentRule, ruleIndex) => {
    const originValidatorFunc = currentRule.validator;
    const cloneRule = {
      ...currentRule,
      ruleIndex
    };
    if (originValidatorFunc) {
      cloneRule.validator = (rule, val, callback) => {
        let hasPromise = false;
        const wrappedCallback = (...args) => {
          Promise.resolve().then(() => {
            warning_default(!hasPromise, "Your validator function has already return a promise. `callback` will be ignored.");
            if (!hasPromise) {
              callback(...args);
            }
          });
        };
        const promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
        warning_default(hasPromise, "`callback` is deprecated. Please return a promise instead.");
        if (hasPromise) {
          promise.then(() => {
            callback();
          }).catch((err) => {
            callback(err || " ");
          });
        }
      };
    }
    return cloneRule;
  }).sort(({
    warningOnly: w1,
    ruleIndex: i1
  }, {
    warningOnly: w2,
    ruleIndex: i2
  }) => {
    if (!!w1 === !!w2) {
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });
  let summaryPromise;
  if (validateFirst === true) {
    summaryPromise = new Promise(async (resolve, reject) => {
      for (let i = 0; i < filledRules.length; i += 1) {
        const rule = filledRules[i];
        const errors = await validateRule(name, value, rule, options, messageVariables);
        if (errors.length) {
          reject([{
            errors,
            rule
          }]);
          return;
        }
      }
      resolve([]);
    });
  } else {
    const rulePromises = filledRules.map((rule) => validateRule(name, value, rule, options, messageVariables).then((errors) => ({
      errors,
      rule
    })));
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then((errors) => {
      return Promise.reject(errors);
    });
  }
  summaryPromise.catch((e) => e);
  return summaryPromise;
}
async function finishOnAllFailed(rulePromises) {
  return Promise.all(rulePromises).then((errorsList) => {
    const errors = [].concat(...errorsList);
    return errors;
  });
}
async function finishOnFirstFailed(rulePromises) {
  let count = 0;
  return new Promise((resolve) => {
    rulePromises.forEach((promise) => {
      promise.then((ruleError) => {
        if (ruleError.errors.length) {
          resolve([ruleError]);
        }
        count += 1;
        if (count === rulePromises.length) {
          resolve([]);
        }
      });
    });
  });
}

// node_modules/@rc-component/form/es/utils/valueUtil.js
function getNamePath(path) {
  return toArray3(path);
}
function cloneByNamePathList(store, namePathList) {
  let newStore = {};
  namePathList.forEach((namePath) => {
    const value = get(store, namePath);
    newStore = set(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath, partialMatch = false) {
  return namePathList && namePathList.some((path) => matchNamePath(namePath, path, partialMatch));
}
function matchNamePath(namePath, subNamePath, partialMatch = false) {
  if (!namePath || !subNamePath) {
    return false;
  }
  if (!partialMatch && namePath.length !== subNamePath.length) {
    return false;
  }
  return subNamePath.every((nameUnit, i) => namePath[i] === nameUnit);
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if (!source && target || source && !target) {
    return false;
  }
  if (!source || !target || typeof source !== "object" || typeof target !== "object") {
    return false;
  }
  const sourceKeys = Object.keys(source);
  const targetKeys = Object.keys(target);
  const keys2 = /* @__PURE__ */ new Set([...sourceKeys, ...targetKeys]);
  return [...keys2].every((key) => {
    const sourceValue = source[key];
    const targetValue = target[key];
    if (typeof sourceValue === "function" && typeof targetValue === "function") {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && typeof event.target === "object" && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}
function move(array4, moveIndex, toIndex) {
  const {
    length
  } = array4;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array4;
  }
  const item = array4[moveIndex];
  const diff = moveIndex - toIndex;
  if (diff > 0) {
    return [...array4.slice(0, toIndex), item, ...array4.slice(toIndex, moveIndex), ...array4.slice(moveIndex + 1, length)];
  }
  if (diff < 0) {
    return [...array4.slice(0, moveIndex), ...array4.slice(moveIndex + 1, toIndex + 1), item, ...array4.slice(toIndex + 1, length)];
  }
  return array4;
}

// node_modules/@rc-component/form/es/Field.js
function _extends9() {
  _extends9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends9.apply(this, arguments);
}
var EMPTY_ERRORS = [];
var EMPTY_WARNINGS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === "function") {
    return shouldUpdate(prev, next, "source" in info ? {
      source: info.source
    } : {});
  }
  return prevValue !== nextValue;
}
var Field = class extends React63.Component {
  // ============================== Subscriptions ==============================
  constructor(props) {
    super(props);
    __publicField(this, "state", {
      resetCount: 0
    });
    __publicField(this, "cancelRegisterFunc", null);
    __publicField(this, "mounted", false);
    /**
     * Follow state should not management in State since it will async update by React.
     * This makes first render of form can not get correct state value.
     */
    __publicField(this, "touched", false);
    /**
     * Mark when touched & validated. Currently only used for `dependencies`.
     * Note that we do not think field with `initialValue` is dirty
     * but this will be by `isFieldDirty` func.
     */
    __publicField(this, "dirty", false);
    __publicField(this, "validatePromise");
    __publicField(this, "prevValidating");
    __publicField(this, "errors", EMPTY_ERRORS);
    __publicField(this, "warnings", EMPTY_WARNINGS);
    __publicField(this, "cancelRegister", () => {
      const {
        preserve: preserve2,
        isListField,
        name
      } = this.props;
      if (this.cancelRegisterFunc) {
        this.cancelRegisterFunc(isListField, preserve2, getNamePath(name));
      }
      this.cancelRegisterFunc = null;
    });
    // ================================== Utils ==================================
    __publicField(this, "getNamePath", () => {
      const {
        name,
        fieldContext
      } = this.props;
      const {
        prefixName = []
      } = fieldContext;
      return name !== void 0 ? [...prefixName, ...name] : [];
    });
    __publicField(this, "getRules", () => {
      const {
        rules = [],
        fieldContext
      } = this.props;
      return rules.map((rule) => {
        if (typeof rule === "function") {
          return rule(fieldContext);
        }
        return rule;
      });
    });
    __publicField(this, "refresh", () => {
      if (!this.mounted) return;
      this.setState(({
        resetCount
      }) => ({
        resetCount: resetCount + 1
      }));
    });
    // Event should only trigger when meta changed
    __publicField(this, "metaCache", null);
    __publicField(this, "triggerMetaEvent", (destroy) => {
      const {
        onMetaChange
      } = this.props;
      if (onMetaChange) {
        const meta = {
          ...this.getMeta(),
          destroy
        };
        if (!isEqual_default(this.metaCache, meta)) {
          onMetaChange(meta);
        }
        this.metaCache = meta;
      } else {
        this.metaCache = null;
      }
    });
    // ========================= Field Entity Interfaces =========================
    // Trigger by store update. Check if need update the component
    __publicField(this, "onStoreChange", (prevStore, namePathList, info) => {
      const {
        shouldUpdate,
        dependencies = [],
        onReset
      } = this.props;
      const {
        store
      } = info;
      const namePath = this.getNamePath();
      const prevValue = this.getValue(prevStore);
      const curValue = this.getValue(store);
      const namePathMatch = namePathList && containsNamePath(namePathList, namePath);
      if (info.type === "valueUpdate" && info.source === "external" && !isEqual_default(prevValue, curValue)) {
        this.touched = true;
        this.dirty = true;
        this.validatePromise = null;
        this.errors = EMPTY_ERRORS;
        this.warnings = EMPTY_WARNINGS;
        this.triggerMetaEvent();
      }
      switch (info.type) {
        case "reset":
          if (!namePathList || namePathMatch) {
            this.touched = false;
            this.dirty = false;
            this.validatePromise = void 0;
            this.errors = EMPTY_ERRORS;
            this.warnings = EMPTY_WARNINGS;
            this.triggerMetaEvent();
            onReset == null ? void 0 : onReset();
            this.refresh();
            return;
          }
          break;
        case "remove": {
          if (shouldUpdate && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            this.reRender();
            return;
          }
          break;
        }
        case "setField": {
          const {
            data
          } = info;
          if (namePathMatch) {
            if ("touched" in data) {
              this.touched = data.touched;
            }
            if ("validating" in data && !("originRCField" in data)) {
              this.validatePromise = data.validating ? Promise.resolve([]) : null;
            }
            if ("errors" in data) {
              this.errors = data.errors || EMPTY_ERRORS;
            }
            if ("warnings" in data) {
              this.warnings = data.warnings || EMPTY_WARNINGS;
            }
            this.dirty = true;
            this.triggerMetaEvent();
            this.reRender();
            return;
          } else if ("value" in data && containsNamePath(namePathList, namePath, true)) {
            this.reRender();
            return;
          }
          if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            this.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          const dependencyList = dependencies.map(getNamePath);
          if (dependencyList.some((dependency) => containsNamePath(info.relatedFields, dependency))) {
            this.reRender();
            return;
          }
          break;
        }
        default:
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            this.reRender();
            return;
          }
          break;
      }
      if (shouldUpdate === true) {
        this.reRender();
      }
    });
    __publicField(this, "validateRules", (options) => {
      const namePath = this.getNamePath();
      const currentValue = this.getValue();
      const {
        triggerName,
        validateOnly = false
      } = options || {};
      const rootPromise = Promise.resolve().then(async () => {
        if (!this.mounted) {
          return [];
        }
        const {
          validateFirst = false,
          messageVariables,
          validateDebounce
        } = this.props;
        let filteredRules = this.getRules();
        if (triggerName) {
          filteredRules = filteredRules.filter((rule) => rule).filter((rule) => {
            const {
              validateTrigger
            } = rule;
            if (!validateTrigger) {
              return true;
            }
            const triggerList = toArray3(validateTrigger);
            return triggerList.includes(triggerName);
          });
        }
        if (validateDebounce && triggerName) {
          await new Promise((resolve) => {
            setTimeout(resolve, validateDebounce);
          });
          if (this.validatePromise !== rootPromise) {
            return [];
          }
        }
        const promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
        promise.catch((e) => e).then((ruleErrors = EMPTY_ERRORS) => {
          var _a;
          if (this.validatePromise === rootPromise) {
            this.validatePromise = null;
            const nextErrors = [];
            const nextWarnings = [];
            (_a = ruleErrors.forEach) == null ? void 0 : _a.call(ruleErrors, ({
              rule: {
                warningOnly
              },
              errors = EMPTY_ERRORS
            }) => {
              if (warningOnly) {
                nextWarnings.push(...errors);
              } else {
                nextErrors.push(...errors);
              }
            });
            this.errors = nextErrors;
            this.warnings = nextWarnings;
            this.triggerMetaEvent();
            this.reRender();
          }
        });
        return promise;
      });
      if (validateOnly) {
        return rootPromise;
      }
      this.validatePromise = rootPromise;
      this.dirty = true;
      this.errors = EMPTY_ERRORS;
      this.warnings = EMPTY_WARNINGS;
      this.triggerMetaEvent();
      this.reRender();
      return rootPromise;
    });
    __publicField(this, "isFieldValidating", () => !!this.validatePromise);
    __publicField(this, "isFieldTouched", () => this.touched);
    __publicField(this, "isFieldDirty", () => {
      if (this.dirty || this.props.initialValue !== void 0) {
        return true;
      }
      const {
        fieldContext
      } = this.props;
      const {
        getInitialValue
      } = fieldContext.getInternalHooks(HOOK_MARK);
      if (getInitialValue(this.getNamePath()) !== void 0) {
        return true;
      }
      return false;
    });
    __publicField(this, "getErrors", () => this.errors);
    __publicField(this, "getWarnings", () => this.warnings);
    __publicField(this, "isListField", () => this.props.isListField);
    __publicField(this, "isList", () => this.props.isList);
    __publicField(this, "isPreserve", () => this.props.preserve);
    // ============================= Child Component =============================
    __publicField(this, "getMeta", () => {
      this.prevValidating = this.isFieldValidating();
      const meta = {
        touched: this.isFieldTouched(),
        validating: this.prevValidating,
        errors: this.errors,
        warnings: this.warnings,
        name: this.getNamePath(),
        validated: this.validatePromise === null
      };
      return meta;
    });
    // Only return validate child node. If invalidate, will do nothing about field.
    __publicField(this, "getOnlyChild", (children) => {
      if (typeof children === "function") {
        const meta = this.getMeta();
        return {
          ...this.getOnlyChild(children(this.getControlled(), meta, this.props.fieldContext)),
          isFunction: true
        };
      }
      const childList = toArray(children);
      if (childList.length !== 1 || !React63.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }
      return {
        child: childList[0],
        isFunction: false
      };
    });
    // ============================== Field Control ==============================
    __publicField(this, "getValue", (store) => {
      const {
        getFieldsValue
      } = this.props.fieldContext;
      const namePath = this.getNamePath();
      return get(store || getFieldsValue(true), namePath);
    });
    __publicField(this, "getControlled", (childProps = {}) => {
      const {
        name,
        trigger = "onChange",
        validateTrigger,
        getValueFromEvent,
        normalize: normalize2,
        valuePropName = "value",
        getValueProps,
        fieldContext
      } = this.props;
      const mergedValidateTrigger = validateTrigger !== void 0 ? validateTrigger : fieldContext.validateTrigger;
      const namePath = this.getNamePath();
      const {
        getInternalHooks,
        getFieldsValue
      } = fieldContext;
      const {
        dispatch
      } = getInternalHooks(HOOK_MARK);
      const value = this.getValue();
      const mergedGetValueProps = getValueProps || ((val) => ({
        [valuePropName]: val
      }));
      const originTriggerFunc = childProps[trigger];
      const valueProps = name !== void 0 ? mergedGetValueProps(value) : {};
      if (valueProps) {
        Object.keys(valueProps).forEach((key) => {
          warning_default(typeof valueProps[key] !== "function", `It's not recommended to generate dynamic function prop by \`getValueProps\`. Please pass it to child component directly (prop: ${key})`);
        });
      }
      const control = {
        ...childProps,
        ...valueProps
      };
      control[trigger] = (...args) => {
        this.touched = true;
        this.dirty = true;
        this.triggerMetaEvent();
        let newValue;
        if (getValueFromEvent) {
          newValue = getValueFromEvent(...args);
        } else {
          newValue = defaultGetValueFromEvent(valuePropName, ...args);
        }
        if (normalize2) {
          newValue = normalize2(newValue, value, getFieldsValue(true));
        }
        if (newValue !== value) {
          dispatch({
            type: "updateValue",
            namePath,
            value: newValue
          });
        }
        if (originTriggerFunc) {
          originTriggerFunc(...args);
        }
      };
      const validateTriggerList = toArray3(mergedValidateTrigger || []);
      validateTriggerList.forEach((triggerName) => {
        const originTrigger = control[triggerName];
        control[triggerName] = (...args) => {
          if (originTrigger) {
            originTrigger(...args);
          }
          const {
            rules
          } = this.props;
          if (rules && rules.length) {
            dispatch({
              type: "validateField",
              namePath,
              triggerName
            });
          }
        };
      });
      return control;
    });
    if (props.fieldContext) {
      const {
        getInternalHooks
      } = props.fieldContext;
      const {
        initEntityValue
      } = getInternalHooks(HOOK_MARK);
      initEntityValue(this);
    }
  }
  componentDidMount() {
    const {
      shouldUpdate,
      fieldContext
    } = this.props;
    this.mounted = true;
    if (fieldContext) {
      const {
        getInternalHooks
      } = fieldContext;
      const {
        registerField
      } = getInternalHooks(HOOK_MARK);
      this.cancelRegisterFunc = registerField(this);
    }
    if (shouldUpdate === true) {
      this.reRender();
    }
  }
  componentWillUnmount() {
    this.cancelRegister();
    this.triggerMetaEvent(true);
    this.mounted = false;
  }
  reRender() {
    if (!this.mounted) return;
    this.forceUpdate();
  }
  render() {
    const {
      resetCount
    } = this.state;
    const {
      children
    } = this.props;
    const {
      child,
      isFunction
    } = this.getOnlyChild(children);
    let returnChildNode;
    if (isFunction) {
      returnChildNode = child;
    } else if (React63.isValidElement(child)) {
      returnChildNode = React63.cloneElement(child, this.getControlled(child.props));
    } else {
      warning_default(!child, "`children` of Field is not validate ReactElement.");
      returnChildNode = child;
    }
    return React63.createElement(React63.Fragment, {
      key: resetCount
    }, returnChildNode);
  }
};
__publicField(Field, "contextType", FieldContext_default);
function WrapperField({
  name,
  ...restProps
}) {
  const fieldContext = React63.useContext(FieldContext_default);
  const listContext = React63.useContext(ListContext_default);
  const namePath = name !== void 0 ? getNamePath(name) : void 0;
  const isMergedListField = restProps.isListField ?? !!listContext;
  let key = "keep";
  if (!isMergedListField) {
    key = `_${(namePath || []).join("_")}`;
  }
  if (restProps.preserve === false && isMergedListField && namePath.length <= 1) {
    warning_default(false, "`preserve` should not apply on Form.List fields.");
  }
  return React63.createElement(Field, _extends9({
    key,
    name: namePath,
    isListField: isMergedListField
  }, restProps, {
    fieldContext
  }));
}
var Field_default = WrapperField;

// node_modules/@rc-component/form/es/List.js
var React64 = __toESM(require_react());
function List({
  name,
  initialValue,
  children,
  rules,
  validateTrigger,
  isListField
}) {
  const context = React64.useContext(FieldContext_default);
  const wrapperListContext = React64.useContext(ListContext_default);
  const keyRef = React64.useRef({
    keys: [],
    id: 0
  });
  const keyManager = keyRef.current;
  const prefixName = React64.useMemo(() => {
    const parentPrefixName = getNamePath(context.prefixName) || [];
    return [...parentPrefixName, ...getNamePath(name)];
  }, [context.prefixName, name]);
  const fieldContext = React64.useMemo(() => ({
    ...context,
    prefixName
  }), [context, prefixName]);
  const listContext = React64.useMemo(() => ({
    getKey: (namePath) => {
      const len = prefixName.length;
      const pathName = namePath[len];
      return [keyManager.keys[pathName], namePath.slice(len + 1)];
    }
  }), [keyManager, prefixName]);
  if (typeof children !== "function") {
    warning_default(false, "Form.List only accepts function as children.");
    return null;
  }
  const shouldUpdate = (prevValue, nextValue, {
    source
  }) => {
    if (source === "internal") {
      return false;
    }
    return prevValue !== nextValue;
  };
  return React64.createElement(ListContext_default.Provider, {
    value: listContext
  }, React64.createElement(FieldContext_default.Provider, {
    value: fieldContext
  }, React64.createElement(Field_default, {
    name: [],
    shouldUpdate,
    rules,
    validateTrigger,
    initialValue,
    isList: true,
    isListField: isListField ?? !!wrapperListContext
  }, ({
    value = [],
    onChange
  }, meta) => {
    const {
      getFieldValue
    } = context;
    const getNewValue = () => {
      const values = getFieldValue(prefixName || []);
      return values || [];
    };
    const operations = {
      add: (defaultValue, index) => {
        const newValue = getNewValue();
        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [...keyManager.keys.slice(0, index), keyManager.id, ...keyManager.keys.slice(index)];
          onChange([...newValue.slice(0, index), defaultValue, ...newValue.slice(index)]);
        } else {
          if (index < 0 || index > newValue.length) {
            warning_default(false, "The second parameter of the add function should be a valid positive number.");
          }
          keyManager.keys = [...keyManager.keys, keyManager.id];
          onChange([...newValue, defaultValue]);
        }
        keyManager.id += 1;
      },
      remove: (index) => {
        const newValue = getNewValue();
        const indexSet = new Set(Array.isArray(index) ? index : [index]);
        if (indexSet.size <= 0) {
          return;
        }
        keyManager.keys = keyManager.keys.filter((_, keysIndex) => !indexSet.has(keysIndex));
        onChange(newValue.filter((_, valueIndex) => !indexSet.has(valueIndex)));
      },
      move(from, to) {
        if (from === to) {
          return;
        }
        const newValue = getNewValue();
        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }
        keyManager.keys = move(keyManager.keys, from, to);
        onChange(move(newValue, from, to));
      }
    };
    let listValue = value || [];
    if (!Array.isArray(listValue)) {
      listValue = [];
      if (true) {
        warning_default(false, `Current value of '${prefixName.join(" > ")}' is not an array type.`);
      }
    }
    return children(listValue.map((__, index) => {
      let key = keyManager.keys[index];
      if (key === void 0) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }
      return {
        name: index,
        key,
        isListField: true
      };
    }), operations, meta);
  })));
}
var List_default = List;

// node_modules/@rc-component/form/es/hooks/useForm.js
var React65 = __toESM(require_react());

// node_modules/@rc-component/form/es/utils/asyncUtil.js
function allPromiseFinish(promiseList) {
  let hasError = false;
  let count = promiseList.length;
  const results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise.catch((e) => {
        hasError = true;
        return e;
      }).then((result) => {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}

// node_modules/@rc-component/form/es/utils/NameMap.js
var SPLIT2 = "__@field_split__";
function normalize(namePath) {
  return namePath.map((cell) => `${typeof cell}:${cell}`).join(SPLIT2);
}
var NameMap = class {
  constructor() {
    __publicField(this, "kvs", /* @__PURE__ */ new Map());
  }
  set(key, value) {
    this.kvs.set(normalize(key), value);
  }
  get(key) {
    return this.kvs.get(normalize(key));
  }
  getAsPrefix(key) {
    const normalizedKey = normalize(key);
    const normalizedPrefix = normalizedKey + SPLIT2;
    const results = [];
    const current = this.kvs.get(normalizedKey);
    if (current !== void 0) {
      results.push(current);
    }
    this.kvs.forEach((value, itemNormalizedKey) => {
      if (itemNormalizedKey.startsWith(normalizedPrefix)) {
        results.push(value);
      }
    });
    return results;
  }
  update(key, updater) {
    const origin = this.get(key);
    const next = updater(origin);
    if (!next) {
      this.delete(key);
    } else {
      this.set(key, next);
    }
  }
  delete(key) {
    this.kvs.delete(normalize(key));
  }
  // Since we only use this in test, let simply realize this
  map(callback) {
    return [...this.kvs.entries()].map(([key, value]) => {
      const cells = key.split(SPLIT2);
      return callback({
        key: cells.map((cell) => {
          const [, type5, unit3] = cell.match(/^([^:]*):(.*)$/);
          return type5 === "number" ? Number(unit3) : unit3;
        }),
        value
      });
    });
  }
  toJSON() {
    const json = {};
    this.map(({
      key,
      value
    }) => {
      json[key.join(".")] = value;
      return null;
    });
    return json;
  }
};
var NameMap_default = NameMap;

// node_modules/@rc-component/form/es/hooks/useNotifyWatch.js
var macroTask = (fn) => {
  const channel = new MessageChannel();
  channel.port1.onmessage = fn;
  channel.port2.postMessage(null);
};
var WatcherCenter = class {
  constructor(form) {
    __publicField(this, "namePathList", []);
    __publicField(this, "taskId", 0);
    __publicField(this, "watcherList", /* @__PURE__ */ new Set());
    __publicField(this, "form");
    this.form = form;
  }
  register(callback) {
    this.watcherList.add(callback);
    return () => {
      this.watcherList.delete(callback);
    };
  }
  notify(namePath) {
    namePath.forEach((path) => {
      if (this.namePathList.every((exist) => !matchNamePath(exist, path))) {
        this.namePathList.push(path);
      }
    });
    this.doBatch();
  }
  doBatch() {
    this.taskId += 1;
    const currentId = this.taskId;
    macroTask(() => {
      if (currentId === this.taskId && this.watcherList.size) {
        const formInst = this.form.getForm();
        const values = formInst.getFieldsValue();
        const allValues = formInst.getFieldsValue(true);
        this.watcherList.forEach((callback) => {
          callback(values, allValues, this.namePathList);
        });
        this.namePathList = [];
      }
    });
  }
};

// node_modules/@rc-component/form/es/hooks/useForm.js
var FormStore = class {
  constructor(forceRootUpdate) {
    __publicField(this, "formHooked", false);
    __publicField(this, "forceRootUpdate");
    __publicField(this, "subscribable", true);
    __publicField(this, "store", {});
    __publicField(this, "fieldEntities", []);
    __publicField(this, "initialValues", {});
    __publicField(this, "callbacks", {});
    __publicField(this, "validateMessages", null);
    __publicField(this, "preserve", null);
    __publicField(this, "lastValidatePromise", null);
    __publicField(this, "watcherCenter", new WatcherCenter(this));
    __publicField(this, "getForm", () => ({
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      getFieldError: this.getFieldError,
      getFieldWarning: this.getFieldWarning,
      getFieldsError: this.getFieldsError,
      isFieldsTouched: this.isFieldsTouched,
      isFieldTouched: this.isFieldTouched,
      isFieldValidating: this.isFieldValidating,
      isFieldsValidating: this.isFieldsValidating,
      resetFields: this.resetFields,
      setFields: this.setFields,
      setFieldValue: this.setFieldValue,
      setFieldsValue: this.setFieldsValue,
      validateFields: this.validateFields,
      submit: this.submit,
      _init: true,
      getInternalHooks: this.getInternalHooks
    }));
    // ======================== Internal Hooks ========================
    __publicField(this, "getInternalHooks", (key) => {
      if (key === HOOK_MARK) {
        this.formHooked = true;
        return {
          dispatch: this.dispatch,
          initEntityValue: this.initEntityValue,
          registerField: this.registerField,
          useSubscribe: this.useSubscribe,
          setInitialValues: this.setInitialValues,
          destroyForm: this.destroyForm,
          setCallbacks: this.setCallbacks,
          setValidateMessages: this.setValidateMessages,
          getFields: this.getFields,
          setPreserve: this.setPreserve,
          getInitialValue: this.getInitialValue,
          registerWatch: this.registerWatch
        };
      }
      warning_default(false, "`getInternalHooks` is internal usage. Should not call directly.");
      return null;
    });
    __publicField(this, "useSubscribe", (subscribable) => {
      this.subscribable = subscribable;
    });
    /**
     * Record prev Form unmount fieldEntities which config preserve false.
     * This need to be refill with initialValues instead of store value.
     */
    __publicField(this, "prevWithoutPreserves", null);
    /**
     * First time `setInitialValues` should update store with initial value
     */
    __publicField(this, "setInitialValues", (initialValues, init) => {
      var _a;
      this.initialValues = initialValues || {};
      if (init) {
        let nextStore = merge(initialValues, this.store);
        (_a = this.prevWithoutPreserves) == null ? void 0 : _a.map(({
          key: namePath
        }) => {
          nextStore = set(nextStore, namePath, get(initialValues, namePath));
        });
        this.prevWithoutPreserves = null;
        this.updateStore(nextStore);
      }
    });
    __publicField(this, "destroyForm", (clearOnDestroy) => {
      if (clearOnDestroy) {
        this.updateStore({});
      } else {
        const prevWithoutPreserves = new NameMap_default();
        this.getFieldEntities(true).forEach((entity) => {
          if (!this.isMergedPreserve(entity.isPreserve())) {
            prevWithoutPreserves.set(entity.getNamePath(), true);
          }
        });
        this.prevWithoutPreserves = prevWithoutPreserves;
      }
    });
    __publicField(this, "getInitialValue", (namePath) => {
      const initValue = get(this.initialValues, namePath);
      return namePath.length ? merge(initValue) : initValue;
    });
    __publicField(this, "setCallbacks", (callbacks) => {
      this.callbacks = callbacks;
    });
    __publicField(this, "setValidateMessages", (validateMessages) => {
      this.validateMessages = validateMessages;
    });
    __publicField(this, "setPreserve", (preserve2) => {
      this.preserve = preserve2;
    });
    // ============================= Watch ============================
    __publicField(this, "registerWatch", (callback) => {
      return this.watcherCenter.register(callback);
    });
    __publicField(this, "notifyWatch", (namePath = []) => {
      this.watcherCenter.notify(namePath);
    });
    // ========================== Dev Warning =========================
    __publicField(this, "timeoutId", null);
    __publicField(this, "warningUnhooked", () => {
      if (!this.timeoutId && typeof window !== "undefined") {
        this.timeoutId = setTimeout(() => {
          this.timeoutId = null;
          if (!this.formHooked) {
            warning_default(false, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
          }
        });
      }
    });
    // ============================ Store =============================
    __publicField(this, "updateStore", (nextStore) => {
      this.store = nextStore;
    });
    // ============================ Fields ============================
    /**
     * Get registered field entities.
     * @param pure Only return field which has a `name`. Default: false
     */
    __publicField(this, "getFieldEntities", (pure = false) => {
      if (!pure) {
        return this.fieldEntities;
      }
      return this.fieldEntities.filter((field) => field.getNamePath().length);
    });
    /**
     * Get a map of registered field entities with their name path as the key.
     * @param pure Only include fields which have a `name`. Default: false
     * @returns A NameMap containing field entities indexed by their name paths
     */
    __publicField(this, "getFieldsMap", (pure = false) => {
      const cache = new NameMap_default();
      this.getFieldEntities(pure).forEach((field) => {
        const namePath = field.getNamePath();
        cache.set(namePath, field);
      });
      return cache;
    });
    /**
     * Get field entities based on a list of name paths.
     * @param nameList - Array of name paths to search for. If not provided, returns all field entities with names.
     * @param includesSubNamePath - Whether to include fields that have the given name path as a prefix.
     */
    __publicField(this, "getFieldEntitiesForNamePathList", (nameList, includesSubNamePath = false) => {
      if (!nameList) {
        return this.getFieldEntities(true);
      }
      const cache = this.getFieldsMap(true);
      if (!includesSubNamePath) {
        return nameList.map((name) => {
          const namePath = getNamePath(name);
          return cache.get(namePath) || {
            INVALIDATE_NAME_PATH: getNamePath(name)
          };
        });
      }
      return nameList.flatMap((name) => {
        const namePath = getNamePath(name);
        const fields = cache.getAsPrefix(namePath);
        if (fields.length) {
          return fields;
        }
        return [{
          INVALIDATE_NAME_PATH: namePath
        }];
      });
    });
    __publicField(this, "getFieldsValue", (nameList, filterFunc) => {
      this.warningUnhooked();
      let mergedNameList;
      let mergedFilterFunc;
      if (nameList === true || Array.isArray(nameList)) {
        mergedNameList = nameList;
        mergedFilterFunc = filterFunc;
      } else if (nameList && typeof nameList === "object") {
        mergedFilterFunc = nameList.filter;
      }
      if (mergedNameList === true && !mergedFilterFunc) {
        return this.store;
      }
      const fieldEntities = this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null, true);
      const filteredNameList = [];
      const listNamePaths = [];
      fieldEntities.forEach((entity) => {
        var _a;
        const namePath = entity.INVALIDATE_NAME_PATH || entity.getNamePath();
        if ((_a = entity.isList) == null ? void 0 : _a.call(entity)) {
          listNamePaths.push(namePath);
          return;
        }
        if (!mergedFilterFunc) {
          filteredNameList.push(namePath);
        } else {
          const meta = "getMeta" in entity ? entity.getMeta() : null;
          if (mergedFilterFunc(meta)) {
            filteredNameList.push(namePath);
          }
        }
      });
      let mergedValues = cloneByNamePathList(this.store, filteredNameList.map(getNamePath));
      listNamePaths.forEach((namePath) => {
        if (!get(mergedValues, namePath)) {
          mergedValues = set(mergedValues, namePath, []);
        }
      });
      return mergedValues;
    });
    __publicField(this, "getFieldValue", (name) => {
      this.warningUnhooked();
      const namePath = getNamePath(name);
      return get(this.store, namePath);
    });
    __publicField(this, "getFieldsError", (nameList) => {
      this.warningUnhooked();
      const fieldEntities = this.getFieldEntitiesForNamePathList(nameList);
      return fieldEntities.map((entity, index) => {
        if (entity && !entity.INVALIDATE_NAME_PATH) {
          return {
            name: entity.getNamePath(),
            errors: entity.getErrors(),
            warnings: entity.getWarnings()
          };
        }
        return {
          name: getNamePath(nameList[index]),
          errors: [],
          warnings: []
        };
      });
    });
    __publicField(this, "getFieldError", (name) => {
      this.warningUnhooked();
      const namePath = getNamePath(name);
      const fieldError = this.getFieldsError([namePath])[0];
      return fieldError.errors;
    });
    __publicField(this, "getFieldWarning", (name) => {
      this.warningUnhooked();
      const namePath = getNamePath(name);
      const fieldError = this.getFieldsError([namePath])[0];
      return fieldError.warnings;
    });
    __publicField(this, "isFieldsTouched", (...args) => {
      this.warningUnhooked();
      const [arg0, arg1] = args;
      let namePathList;
      let isAllFieldsTouched = false;
      if (args.length === 0) {
        namePathList = null;
      } else if (args.length === 1) {
        if (Array.isArray(arg0)) {
          namePathList = arg0.map(getNamePath);
          isAllFieldsTouched = false;
        } else {
          namePathList = null;
          isAllFieldsTouched = arg0;
        }
      } else {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = arg1;
      }
      const fieldEntities = this.getFieldEntities(true);
      const isFieldTouched = (field) => field.isFieldTouched();
      if (!namePathList) {
        return isAllFieldsTouched ? fieldEntities.every((entity) => isFieldTouched(entity) || entity.isList()) : fieldEntities.some(isFieldTouched);
      }
      const map = new NameMap_default();
      namePathList.forEach((shortNamePath) => {
        map.set(shortNamePath, []);
      });
      fieldEntities.forEach((field) => {
        const fieldNamePath = field.getNamePath();
        namePathList.forEach((shortNamePath) => {
          if (shortNamePath.every((nameUnit, i) => fieldNamePath[i] === nameUnit)) {
            map.update(shortNamePath, (list) => [...list, field]);
          }
        });
      });
      const isNamePathListTouched = (entities) => entities.some(isFieldTouched);
      const namePathListEntities = map.map(({
        value
      }) => value);
      return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
    });
    __publicField(this, "isFieldTouched", (name) => {
      this.warningUnhooked();
      return this.isFieldsTouched([name]);
    });
    __publicField(this, "isFieldsValidating", (nameList) => {
      this.warningUnhooked();
      const fieldEntities = this.getFieldEntities();
      if (!nameList) {
        return fieldEntities.some((testField) => testField.isFieldValidating());
      }
      const namePathList = nameList.map(getNamePath);
      return fieldEntities.some((testField) => {
        const fieldNamePath = testField.getNamePath();
        return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
      });
    });
    __publicField(this, "isFieldValidating", (name) => {
      this.warningUnhooked();
      return this.isFieldsValidating([name]);
    });
    /**
     * Reset Field with field `initialValue` prop.
     * Can pass `entities` or `namePathList` or just nothing.
     */
    __publicField(this, "resetWithFieldInitialValue", (info = {}) => {
      const cache = new NameMap_default();
      const fieldEntities = this.getFieldEntities(true);
      fieldEntities.forEach((field) => {
        const {
          initialValue
        } = field.props;
        const namePath = field.getNamePath();
        if (initialValue !== void 0) {
          const records = cache.get(namePath) || /* @__PURE__ */ new Set();
          records.add({
            entity: field,
            value: initialValue
          });
          cache.set(namePath, records);
        }
      });
      const resetWithFields = (entities) => {
        entities.forEach((field) => {
          const {
            initialValue
          } = field.props;
          if (initialValue !== void 0) {
            const namePath = field.getNamePath();
            const formInitialValue = this.getInitialValue(namePath);
            if (formInitialValue !== void 0) {
              warning_default(false, `Form already set 'initialValues' with path '${namePath.join(".")}'. Field can not overwrite it.`);
            } else {
              const records = cache.get(namePath);
              if (records && records.size > 1) {
                warning_default(false, `Multiple Field with path '${namePath.join(".")}' set 'initialValue'. Can not decide which one to pick.`);
              } else if (records) {
                const originValue = this.getFieldValue(namePath);
                const isListField = field.isListField();
                if (!isListField && (!info.skipExist || originValue === void 0)) {
                  this.updateStore(set(this.store, namePath, [...records][0].value));
                }
              }
            }
          }
        });
      };
      let requiredFieldEntities;
      if (info.entities) {
        requiredFieldEntities = info.entities;
      } else if (info.namePathList) {
        requiredFieldEntities = [];
        info.namePathList.forEach((namePath) => {
          const records = cache.get(namePath);
          if (records) {
            requiredFieldEntities.push(...[...records].map((r) => r.entity));
          }
        });
      } else {
        requiredFieldEntities = fieldEntities;
      }
      resetWithFields(requiredFieldEntities);
    });
    __publicField(this, "resetFields", (nameList) => {
      this.warningUnhooked();
      const prevStore = this.store;
      if (!nameList) {
        this.updateStore(merge(this.initialValues));
        this.resetWithFieldInitialValue();
        this.notifyObservers(prevStore, null, {
          type: "reset"
        });
        this.notifyWatch();
        return;
      }
      const namePathList = nameList.map(getNamePath);
      namePathList.forEach((namePath) => {
        const initialValue = this.getInitialValue(namePath);
        this.updateStore(set(this.store, namePath, initialValue));
      });
      this.resetWithFieldInitialValue({
        namePathList
      });
      this.notifyObservers(prevStore, namePathList, {
        type: "reset"
      });
      this.notifyWatch(namePathList);
    });
    __publicField(this, "setFields", (fields) => {
      this.warningUnhooked();
      const prevStore = this.store;
      const namePathList = [];
      fields.forEach((fieldData) => {
        const {
          name,
          ...data
        } = fieldData;
        const namePath = getNamePath(name);
        namePathList.push(namePath);
        if ("value" in data) {
          this.updateStore(set(this.store, namePath, data.value));
        }
        this.notifyObservers(prevStore, [namePath], {
          type: "setField",
          data: fieldData
        });
      });
      this.notifyWatch(namePathList);
    });
    __publicField(this, "getFields", () => {
      const entities = this.getFieldEntities(true);
      const fields = entities.map((field) => {
        const namePath = field.getNamePath();
        const meta = field.getMeta();
        const fieldData = {
          ...meta,
          name: namePath,
          value: this.getFieldValue(namePath)
        };
        Object.defineProperty(fieldData, "originRCField", {
          value: true
        });
        return fieldData;
      });
      return fields;
    });
    // =========================== Observer ===========================
    /**
     * This only trigger when a field is on constructor to avoid we get initialValue too late
     */
    __publicField(this, "initEntityValue", (entity) => {
      const {
        initialValue
      } = entity.props;
      if (initialValue !== void 0) {
        const namePath = entity.getNamePath();
        const prevValue = get(this.store, namePath);
        if (prevValue === void 0) {
          this.updateStore(set(this.store, namePath, initialValue));
        }
      }
    });
    __publicField(this, "isMergedPreserve", (fieldPreserve) => {
      const mergedPreserve = fieldPreserve !== void 0 ? fieldPreserve : this.preserve;
      return mergedPreserve ?? true;
    });
    __publicField(this, "registerField", (entity) => {
      this.fieldEntities.push(entity);
      const namePath = entity.getNamePath();
      this.notifyWatch([namePath]);
      if (entity.props.initialValue !== void 0) {
        const prevStore = this.store;
        this.resetWithFieldInitialValue({
          entities: [entity],
          skipExist: true
        });
        this.notifyObservers(prevStore, [entity.getNamePath()], {
          type: "valueUpdate",
          source: "internal"
        });
      }
      return (isListField, preserve2, subNamePath = []) => {
        this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
        if (!this.isMergedPreserve(preserve2) && (!isListField || subNamePath.length > 1)) {
          const defaultValue = isListField ? void 0 : this.getInitialValue(namePath);
          if (namePath.length && this.getFieldValue(namePath) !== defaultValue && this.fieldEntities.every((field) => (
            // Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          ))) {
            const prevStore = this.store;
            this.updateStore(set(prevStore, namePath, defaultValue, true));
            this.notifyObservers(prevStore, [namePath], {
              type: "remove"
            });
            this.triggerDependenciesUpdate(prevStore, namePath);
          }
        }
        this.notifyWatch([namePath]);
      };
    });
    __publicField(this, "dispatch", (action) => {
      switch (action.type) {
        case "updateValue": {
          const {
            namePath,
            value
          } = action;
          this.updateValue(namePath, value);
          break;
        }
        case "validateField": {
          const {
            namePath,
            triggerName
          } = action;
          this.validateFields([namePath], {
            triggerName
          });
          break;
        }
        default:
      }
    });
    __publicField(this, "notifyObservers", (prevStore, namePathList, info) => {
      if (this.subscribable) {
        const mergedInfo = {
          ...info,
          store: this.getFieldsValue(true)
        };
        this.getFieldEntities().forEach(({
          onStoreChange
        }) => {
          onStoreChange(prevStore, namePathList, mergedInfo);
        });
      } else {
        this.forceRootUpdate();
      }
    });
    /**
     * Notify dependencies children with parent update
     * We need delay to trigger validate in case Field is under render props
     */
    __publicField(this, "triggerDependenciesUpdate", (prevStore, namePath) => {
      const childrenFields = this.getDependencyChildrenFields(namePath);
      if (childrenFields.length) {
        this.validateFields(childrenFields);
      }
      this.notifyObservers(prevStore, childrenFields, {
        type: "dependenciesUpdate",
        relatedFields: [namePath, ...childrenFields]
      });
      return childrenFields;
    });
    __publicField(this, "updateValue", (name, value) => {
      const namePath = getNamePath(name);
      const prevStore = this.store;
      this.updateStore(set(this.store, namePath, value));
      this.notifyObservers(prevStore, [namePath], {
        type: "valueUpdate",
        source: "internal"
      });
      this.notifyWatch([namePath]);
      const childrenFields = this.triggerDependenciesUpdate(prevStore, namePath);
      const {
        onValuesChange
      } = this.callbacks;
      if (onValuesChange) {
        const fieldEntity = this.getFieldsMap(true).get(namePath);
        const changedValues = cloneByNamePathList(this.store, [namePath]);
        const allValues = this.getFieldsValue();
        const mergedAllValues = mergeWith([allValues, changedValues], {
          // When value is array, it means trigger by Form.List which should replace directly
          prepareArray: (current) => (fieldEntity == null ? void 0 : fieldEntity.isList()) ? [] : [...current || []]
        });
        onValuesChange(changedValues, mergedAllValues);
      }
      this.triggerOnFieldsChange([namePath, ...childrenFields]);
    });
    // Let all child Field get update.
    __publicField(this, "setFieldsValue", (store) => {
      this.warningUnhooked();
      const prevStore = this.store;
      if (store) {
        const nextStore = merge(this.store, store);
        this.updateStore(nextStore);
      }
      this.notifyObservers(prevStore, null, {
        type: "valueUpdate",
        source: "external"
      });
      this.notifyWatch();
    });
    __publicField(this, "setFieldValue", (name, value) => {
      this.setFields([{
        name,
        value,
        errors: [],
        warnings: [],
        touched: true
      }]);
    });
    __publicField(this, "getDependencyChildrenFields", (rootNamePath) => {
      const children = /* @__PURE__ */ new Set();
      const childrenFields = [];
      const dependencies2fields = new NameMap_default();
      this.getFieldEntities().forEach((field) => {
        const {
          dependencies
        } = field.props;
        (dependencies || []).forEach((dependency) => {
          const dependencyNamePath = getNamePath(dependency);
          dependencies2fields.update(dependencyNamePath, (fields = /* @__PURE__ */ new Set()) => {
            fields.add(field);
            return fields;
          });
        });
      });
      const fillChildren = (namePath) => {
        const fields = dependencies2fields.get(namePath) || /* @__PURE__ */ new Set();
        fields.forEach((field) => {
          if (!children.has(field)) {
            children.add(field);
            const fieldNamePath = field.getNamePath();
            if (field.isFieldDirty() && fieldNamePath.length) {
              childrenFields.push(fieldNamePath);
              fillChildren(fieldNamePath);
            }
          }
        });
      };
      fillChildren(rootNamePath);
      return childrenFields;
    });
    __publicField(this, "triggerOnFieldsChange", (namePathList, filedErrors) => {
      const {
        onFieldsChange
      } = this.callbacks;
      if (onFieldsChange) {
        const fields = this.getFields();
        if (filedErrors) {
          const cache = new NameMap_default();
          filedErrors.forEach(({
            name,
            errors
          }) => {
            cache.set(name, errors);
          });
          fields.forEach((field) => {
            field.errors = cache.get(field.name) || field.errors;
          });
        }
        const changedFields = fields.filter(({
          name: fieldName
        }) => containsNamePath(namePathList, fieldName));
        if (changedFields.length) {
          onFieldsChange(changedFields, fields);
        }
      }
    });
    // =========================== Validate ===========================
    __publicField(this, "validateFields", (arg1, arg2) => {
      this.warningUnhooked();
      let nameList;
      let options;
      if (Array.isArray(arg1) || typeof arg1 === "string" || typeof arg2 === "string") {
        nameList = arg1;
        options = arg2;
      } else {
        options = arg1;
      }
      const provideNameList = !!nameList;
      const namePathList = provideNameList ? nameList.map(getNamePath) : [];
      const finalValueNamePathList = [...namePathList];
      const promiseList = [];
      const TMP_SPLIT = String(Date.now());
      const validateNamePathList = /* @__PURE__ */ new Set();
      const {
        recursive,
        dirty
      } = options || {};
      this.getFieldEntities(true).forEach((field) => {
        const fieldNamePath = field.getNamePath();
        if (!provideNameList) {
          if (
            // If is field, pass directly
            !field.isList() || // If is list, do not add if already exist sub field in the namePathList
            !namePathList.some((name) => matchNamePath(name, fieldNamePath, true))
          ) {
            finalValueNamePathList.push(fieldNamePath);
          }
          namePathList.push(fieldNamePath);
        }
        if (!field.props.rules || !field.props.rules.length) {
          return;
        }
        if (dirty && !field.isFieldDirty()) {
          return;
        }
        validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));
        if (!provideNameList || containsNamePath(namePathList, fieldNamePath, recursive)) {
          const promise = field.validateRules({
            validateMessages: {
              ...defaultValidateMessages,
              ...this.validateMessages
            },
            ...options
          });
          promiseList.push(promise.then(() => ({
            name: fieldNamePath,
            errors: [],
            warnings: []
          })).catch((ruleErrors) => {
            var _a;
            const mergedErrors = [];
            const mergedWarnings = [];
            (_a = ruleErrors.forEach) == null ? void 0 : _a.call(ruleErrors, ({
              rule: {
                warningOnly
              },
              errors
            }) => {
              if (warningOnly) {
                mergedWarnings.push(...errors);
              } else {
                mergedErrors.push(...errors);
              }
            });
            if (mergedErrors.length) {
              return Promise.reject({
                name: fieldNamePath,
                errors: mergedErrors,
                warnings: mergedWarnings
              });
            }
            return {
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            };
          }));
        }
      });
      const summaryPromise = allPromiseFinish(promiseList);
      this.lastValidatePromise = summaryPromise;
      summaryPromise.catch((results) => results).then((results) => {
        const resultNamePathList = results.map(({
          name
        }) => name);
        this.notifyObservers(this.store, resultNamePathList, {
          type: "validateFinish"
        });
        this.triggerOnFieldsChange(resultNamePathList, results);
      });
      const returnPromise = summaryPromise.then(() => {
        if (this.lastValidatePromise === summaryPromise) {
          return Promise.resolve(this.getFieldsValue(finalValueNamePathList));
        }
        return Promise.reject([]);
      }).catch((results) => {
        var _a, _b;
        const errorList = results.filter((result) => result && result.errors.length);
        const errorMessage = (_b = (_a = errorList[0]) == null ? void 0 : _a.errors) == null ? void 0 : _b[0];
        return Promise.reject({
          message: errorMessage,
          values: this.getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: this.lastValidatePromise !== summaryPromise
        });
      });
      returnPromise.catch((e) => e);
      const triggerNamePathList = namePathList.filter((namePath) => validateNamePathList.has(namePath.join(TMP_SPLIT)));
      this.triggerOnFieldsChange(triggerNamePathList);
      return returnPromise;
    });
    // ============================ Submit ============================
    __publicField(this, "submit", () => {
      this.warningUnhooked();
      this.validateFields().then((values) => {
        const {
          onFinish
        } = this.callbacks;
        if (onFinish) {
          try {
            onFinish(values);
          } catch (err) {
            console.error(err);
          }
        }
      }).catch((e) => {
        const {
          onFinishFailed
        } = this.callbacks;
        if (onFinishFailed) {
          onFinishFailed(e);
        }
      });
    });
    this.forceRootUpdate = forceRootUpdate;
  }
};
function useForm(form) {
  const formRef = React65.useRef(null);
  const [, forceUpdate] = React65.useState({});
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const forceReRender = () => {
        forceUpdate({});
      };
      const formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
var useForm_default = useForm;

// node_modules/@rc-component/form/es/Form.js
var React67 = __toESM(require_react());

// node_modules/@rc-component/form/es/FormContext.js
var React66 = __toESM(require_react());
var FormContext = React66.createContext({
  triggerFormChange: () => {
  },
  triggerFormFinish: () => {
  },
  registerForm: () => {
  },
  unregisterForm: () => {
  }
});
var FormProvider = ({
  validateMessages,
  onFormChange,
  onFormFinish,
  children
}) => {
  const formContext = React66.useContext(FormContext);
  const formsRef = React66.useRef({});
  return React66.createElement(FormContext.Provider, {
    value: {
      ...formContext,
      validateMessages: {
        ...formContext.validateMessages,
        ...validateMessages
      },
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: (name, changedFields) => {
        if (onFormChange) {
          onFormChange(name, {
            changedFields,
            forms: formsRef.current
          });
        }
        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: (name, values) => {
        if (onFormFinish) {
          onFormFinish(name, {
            values,
            forms: formsRef.current
          });
        }
        formContext.triggerFormFinish(name, values);
      },
      registerForm: (name, form) => {
        if (name) {
          formsRef.current = {
            ...formsRef.current,
            [name]: form
          };
        }
        formContext.registerForm(name, form);
      },
      unregisterForm: (name) => {
        const newForms = {
          ...formsRef.current
        };
        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    }
  }, children);
};
var FormContext_default = FormContext;

// node_modules/@rc-component/form/es/Form.js
function _extends10() {
  _extends10 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends10.apply(this, arguments);
}
var Form = ({
  name,
  initialValues,
  fields,
  form,
  preserve: preserve2,
  children,
  component: Component3 = "form",
  validateMessages,
  validateTrigger = "onChange",
  onValuesChange,
  onFieldsChange,
  onFinish,
  onFinishFailed,
  clearOnDestroy,
  ...restProps
}, ref) => {
  const nativeElementRef = React67.useRef(null);
  const formContext = React67.useContext(FormContext_default);
  const [formInstance] = useForm_default(form);
  const {
    useSubscribe,
    setInitialValues,
    setCallbacks,
    setValidateMessages,
    setPreserve,
    destroyForm
  } = formInstance.getInternalHooks(HOOK_MARK);
  React67.useImperativeHandle(ref, () => ({
    ...formInstance,
    nativeElement: nativeElementRef.current
  }));
  React67.useEffect(() => {
    formContext.registerForm(name, formInstance);
    return () => {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]);
  setValidateMessages({
    ...formContext.validateMessages,
    ...validateMessages
  });
  setCallbacks({
    onValuesChange,
    onFieldsChange: (changedFields, ...rest) => {
      formContext.triggerFormChange(name, changedFields);
      if (onFieldsChange) {
        onFieldsChange(changedFields, ...rest);
      }
    },
    onFinish: (values) => {
      formContext.triggerFormFinish(name, values);
      if (onFinish) {
        onFinish(values);
      }
    },
    onFinishFailed
  });
  setPreserve(preserve2);
  const mountRef = React67.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  React67.useEffect(
    () => () => destroyForm(clearOnDestroy),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  let childrenNode;
  const childrenRenderProps = typeof children === "function";
  if (childrenRenderProps) {
    const values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } else {
    childrenNode = children;
  }
  useSubscribe(!childrenRenderProps);
  const prevFieldsRef = React67.useRef(null);
  React67.useEffect(() => {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }
    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  const formContextValue = React67.useMemo(() => ({
    ...formInstance,
    validateTrigger
  }), [formInstance, validateTrigger]);
  const wrapperNode = React67.createElement(ListContext_default.Provider, {
    value: null
  }, React67.createElement(FieldContext_default.Provider, {
    value: formContextValue
  }, childrenNode));
  if (Component3 === false) {
    return wrapperNode;
  }
  return React67.createElement(Component3, _extends10({}, restProps, {
    ref: nativeElementRef,
    onSubmit: (event) => {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: (event) => {
      var _a;
      event.preventDefault();
      formInstance.resetFields();
      (_a = restProps.onReset) == null ? void 0 : _a.call(restProps, event);
    }
  }), wrapperNode);
};
var Form_default = Form;

// node_modules/@rc-component/form/es/hooks/useWatch.js
var import_react29 = __toESM(require_react());
function stringify2(value) {
  try {
    return JSON.stringify(value);
  } catch {
    return Math.random();
  }
}
function useWatch2(...args) {
  const [dependencies, _form = {}] = args;
  const options = isFormInstance(_form) ? {
    form: _form
  } : _form;
  const form = options.form;
  const [value, setValue] = (0, import_react29.useState)(() => typeof dependencies === "function" ? dependencies({}) : void 0);
  const valueStr = (0, import_react29.useMemo)(() => stringify2(value), [value]);
  const valueStrRef = (0, import_react29.useRef)(valueStr);
  valueStrRef.current = valueStr;
  const fieldContext = (0, import_react29.useContext)(FieldContext_default);
  const formInstance = form || fieldContext;
  const isValidForm = formInstance && formInstance._init;
  if (true) {
    warning_default(args.length === 2 ? form ? isValidForm : true : isValidForm, "useWatch requires a form instance since it can not auto detect from context.");
  }
  const {
    getFieldsValue,
    getInternalHooks
  } = formInstance;
  const {
    registerWatch
  } = getInternalHooks(HOOK_MARK);
  const triggerUpdate = useEvent_default((values, allValues) => {
    const watchValue = options.preserve ? allValues ?? getFieldsValue(true) : values ?? getFieldsValue();
    const nextValue = typeof dependencies === "function" ? dependencies(watchValue) : get(watchValue, getNamePath(dependencies));
    if (stringify2(value) !== stringify2(nextValue)) {
      setValue(nextValue);
    }
  });
  const flattenDeps = typeof dependencies === "function" ? dependencies : JSON.stringify(dependencies);
  (0, import_react29.useEffect)(() => {
    if (!isValidForm) {
      return;
    }
    triggerUpdate();
  }, [isValidForm, flattenDeps]);
  (0, import_react29.useEffect)(() => {
    if (!isValidForm) {
      return;
    }
    const cancelRegister = registerWatch((values, allValues) => {
      triggerUpdate(values, allValues);
    });
    return cancelRegister;
  }, [isValidForm]);
  return value;
}
var useWatch_default = useWatch2;

// node_modules/@rc-component/form/es/index.js
var InternalForm = React68.forwardRef(Form_default);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = Field_default;
RefForm.List = List_default;
RefForm.useForm = useForm_default;
RefForm.useWatch = useWatch_default;
var es_default7 = RefForm;

// node_modules/antd/es/form/context.js
var FormContext2 = React69.createContext({
  labelAlign: "right",
  layout: "horizontal",
  itemRef: () => {
  }
});
var NoStyleItemContext = React69.createContext(null);
var FormProvider2 = (props) => {
  const providerProps = omit(props, ["prefixCls"]);
  return React69.createElement(FormProvider, {
    ...providerProps
  });
};
var FormItemPrefixContext = React69.createContext({
  prefixCls: ""
});
var FormItemInputContext = React69.createContext({});
if (true) {
  FormItemInputContext.displayName = "FormItemInputContext";
}
var NoFormStyle = ({
  children,
  status,
  override
}) => {
  const formItemInputContext = React69.useContext(FormItemInputContext);
  const newFormItemInputContext = React69.useMemo(() => {
    const newContext = {
      ...formItemInputContext
    };
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return React69.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
var VariantContext = React69.createContext(void 0);

// node_modules/antd/es/space/Compact.js
var React79 = __toESM(require_react());

// node_modules/antd/es/_util/hooks/useClosable.js
var import_react30 = __toESM(require_react());

// node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var React70 = __toESM(require_react());
function _extends11() {
  _extends11 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends11.apply(this, arguments);
}
var CloseOutlined = (props, ref) => React70.createElement(AntdIcon_default, _extends11({}, props, {
  ref,
  icon: CloseOutlined_default
}));
var RefIcon2 = React70.forwardRef(CloseOutlined);
if (true) {
  RefIcon2.displayName = "CloseOutlined";
}
var CloseOutlined_default2 = RefIcon2;

// node_modules/@rc-component/util/es/pickAttrs.js
var attributes = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`;
var eventsName = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`;
var propList = `${attributes} ${eventsName}`.split(/[\s\n]+/);
var ariaPrefix = "aria-";
var dataPrefix = "data-";
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
function pickAttrs(props, ariaOnly = false) {
  let mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = {
      ...ariaOnly
    };
  }
  const attrs = {};
  Object.keys(props).forEach((key) => {
    if (
      // Aria
      mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
      mergedConfig.data && match(key, dataPrefix) || // Attr
      mergedConfig.attr && propList.includes(key)
    ) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

// node_modules/antd/es/_util/extendsObject.js
function mergeProps(...items) {
  const ret = {};
  items.forEach((item) => {
    if (item) {
      Object.keys(item).forEach((key) => {
        if (item[key] !== void 0) {
          ret[key] = item[key];
        }
      });
    }
  });
  return ret;
}
var extendsObject_default = mergeProps;

// node_modules/antd/es/_util/hooks/useClosable.js
var pickClosable = (context) => {
  if (!context) {
    return void 0;
  }
  const {
    closable,
    closeIcon
  } = context;
  return {
    closable,
    closeIcon
  };
};
var EmptyFallbackCloseCollection = {};
var computeClosableConfig = (closable, closeIcon) => {
  if (!closable && (closable === false || closeIcon === false || closeIcon === null)) {
    return false;
  }
  if (closable === void 0 && closeIcon === void 0) {
    return null;
  }
  let closableConfig = {
    closeIcon: typeof closeIcon !== "boolean" && closeIcon !== null ? closeIcon : void 0
  };
  if (closable && typeof closable === "object") {
    closableConfig = {
      ...closableConfig,
      ...closable
    };
  }
  return closableConfig;
};
var mergeClosableConfigs = (propConfig, contextConfig, fallbackConfig) => {
  if (propConfig === false) {
    return false;
  }
  if (propConfig) {
    return extendsObject_default(fallbackConfig, contextConfig, propConfig);
  }
  if (contextConfig === false) {
    return false;
  }
  if (contextConfig) {
    return extendsObject_default(fallbackConfig, contextConfig);
  }
  return fallbackConfig.closable ? fallbackConfig : false;
};
var computeCloseIcon = (mergedConfig, fallbackCloseCollection, closeLabel) => {
  const {
    closeIconRender
  } = fallbackCloseCollection;
  const {
    closeIcon,
    ...restConfig
  } = mergedConfig;
  let finalCloseIcon = closeIcon;
  const ariaOrDataProps = pickAttrs(restConfig, true);
  if (isNonNullable_default(finalCloseIcon)) {
    if (closeIconRender) {
      finalCloseIcon = closeIconRender(finalCloseIcon);
    }
    finalCloseIcon = import_react30.default.isValidElement(finalCloseIcon) ? import_react30.default.cloneElement(finalCloseIcon, {
      "aria-label": closeLabel,
      ...finalCloseIcon.props,
      ...ariaOrDataProps
    }) : import_react30.default.createElement("span", {
      "aria-label": closeLabel,
      ...ariaOrDataProps
    }, finalCloseIcon);
  }
  return [finalCloseIcon, ariaOrDataProps];
};
var computeClosable = (propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection, closeLabel = "Close") => {
  const propConfig = computeClosableConfig(propCloseCollection == null ? void 0 : propCloseCollection.closable, propCloseCollection == null ? void 0 : propCloseCollection.closeIcon);
  const contextConfig = computeClosableConfig(contextCloseCollection == null ? void 0 : contextCloseCollection.closable, contextCloseCollection == null ? void 0 : contextCloseCollection.closeIcon);
  const mergedFallback = {
    closeIcon: import_react30.default.createElement(CloseOutlined_default2, null),
    ...fallbackCloseCollection
  };
  const mergedConfig = mergeClosableConfigs(propConfig, contextConfig, mergedFallback);
  const closeBtnIsDisabled = typeof mergedConfig !== "boolean" ? !!(mergedConfig == null ? void 0 : mergedConfig.disabled) : false;
  if (mergedConfig === false) {
    return [false, null, closeBtnIsDisabled, {}];
  }
  const [closeIcon, ariaProps] = computeCloseIcon(mergedConfig, mergedFallback, closeLabel);
  return [true, closeIcon, closeBtnIsDisabled, ariaProps];
};
var useClosable = (propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection) => {
  const [contextLocale] = useLocale_default("global", en_US_default6.global);
  return import_react30.default.useMemo(() => {
    return computeClosable(propCloseCollection, contextCloseCollection, {
      closeIcon: import_react30.default.createElement(CloseOutlined_default2, null),
      ...fallbackCloseCollection
    }, contextLocale.close);
  }, [propCloseCollection, contextCloseCollection, fallbackCloseCollection, contextLocale.close]);
};

// node_modules/antd/es/_util/hooks/useForceUpdate.js
var import_react31 = __toESM(require_react());
var useForceUpdate = () => {
  return import_react31.default.useReducer((ori) => ori + 1, 0);
};

// node_modules/antd/es/_util/hooks/useMergedMask.js
var import_react32 = __toESM(require_react());
var normalizeMaskConfig = (mask, maskClosable) => {
  let maskConfig = {};
  if (mask && typeof mask === "object") {
    maskConfig = mask;
  }
  if (typeof mask === "boolean") {
    maskConfig = {
      enabled: mask
    };
  }
  if (maskConfig.closable === void 0 && maskClosable !== void 0) {
    maskConfig.closable = maskClosable;
  }
  return maskConfig;
};
var useMergedMask = (mask, contextMask, prefixCls, maskClosable) => {
  return (0, import_react32.useMemo)(() => {
    const maskConfig = normalizeMaskConfig(mask, maskClosable);
    const contextMaskConfig = normalizeMaskConfig(contextMask);
    const mergedConfig = {
      blur: false,
      ...contextMaskConfig,
      ...maskConfig,
      closable: maskConfig.closable ?? maskClosable ?? contextMaskConfig.closable ?? true
    };
    const className = mergedConfig.blur ? `${prefixCls}-mask-blur` : void 0;
    return [mergedConfig.enabled !== false, {
      mask: className
    }, !!mergedConfig.closable];
  }, [mask, contextMask, prefixCls, maskClosable]);
};

// node_modules/antd/es/_util/hooks/useMergeSemantic.js
var React73 = __toESM(require_react());
var mergeClassNames = (schema, ...classNames) => {
  const mergedSchema = schema || {};
  return classNames.filter(Boolean).reduce((acc, cur) => {
    Object.keys(cur || {}).forEach((key) => {
      const keySchema = mergedSchema[key];
      const curVal = cur[key];
      if (keySchema && typeof keySchema === "object") {
        if (curVal && typeof curVal === "object") {
          acc[key] = mergeClassNames(keySchema, acc[key], curVal);
        } else {
          const {
            _default: defaultField
          } = keySchema;
          if (defaultField) {
            acc[key] = acc[key] || {};
            acc[key][defaultField] = clsx(acc[key][defaultField], curVal);
          }
        }
      } else {
        acc[key] = clsx(acc[key], curVal);
      }
    });
    return acc;
  }, {});
};
var useSemanticClassNames = (schema, ...classNames) => {
  return React73.useMemo(() => mergeClassNames.apply(void 0, [schema].concat(classNames)), [schema].concat(classNames));
};
var mergeStyles = (...styles) => {
  return styles.filter(Boolean).reduce((acc, cur = {}) => {
    Object.keys(cur).forEach((key) => {
      acc[key] = {
        ...acc[key],
        ...cur[key]
      };
    });
    return acc;
  }, {});
};
var useSemanticStyles = (...styles) => {
  return React73.useMemo(() => mergeStyles.apply(void 0, styles), [].concat(styles));
};
var fillObjectBySchema = (obj, schema) => {
  const newObj = {
    ...obj
  };
  Object.keys(schema).forEach((key) => {
    if (key !== "_default") {
      const nestSchema = schema[key];
      const nextValue = newObj[key] || {};
      newObj[key] = nestSchema ? fillObjectBySchema(nextValue, nestSchema) : nextValue;
    }
  });
  return newObj;
};
var resolveStyleOrClass = (value, info) => {
  return typeof value === "function" ? value(info) : value;
};
var useMergeSemantic = (classNamesList, stylesList, info, schema) => {
  const resolvedClassNamesList = classNamesList.map((classNames) => classNames ? resolveStyleOrClass(classNames, info) : void 0);
  const resolvedStylesList = stylesList.map((styles) => styles ? resolveStyleOrClass(styles, info) : void 0);
  const mergedClassNames = useSemanticClassNames.apply(void 0, [schema].concat(_toConsumableArray(resolvedClassNamesList)));
  const mergedStyles = useSemanticStyles.apply(void 0, _toConsumableArray(resolvedStylesList));
  return React73.useMemo(() => {
    if (!schema) {
      return [mergedClassNames, mergedStyles];
    }
    return [fillObjectBySchema(mergedClassNames, schema), fillObjectBySchema(mergedStyles, schema)];
  }, [mergedClassNames, mergedStyles, schema]);
};

// node_modules/antd/es/_util/hooks/useMultipleSelect.js
var import_react33 = __toESM(require_react());
var useMultipleSelect = (getKey) => {
  const [prevSelectedIndex, setPrevSelectedIndex] = (0, import_react33.useState)(null);
  const multipleSelect = (0, import_react33.useCallback)((currentSelectedIndex, data, selectedKeys) => {
    const configPrevSelectedIndex = prevSelectedIndex ?? currentSelectedIndex;
    const startIndex = Math.min(configPrevSelectedIndex || 0, currentSelectedIndex);
    const endIndex = Math.max(configPrevSelectedIndex || 0, currentSelectedIndex);
    const rangeKeys = data.slice(startIndex, endIndex + 1).map(getKey);
    const shouldSelected = rangeKeys.some((rangeKey) => !selectedKeys.has(rangeKey));
    const changedKeys = [];
    rangeKeys.forEach((item) => {
      if (shouldSelected) {
        if (!selectedKeys.has(item)) {
          changedKeys.push(item);
        }
        selectedKeys.add(item);
      } else {
        selectedKeys.delete(item);
        changedKeys.push(item);
      }
    });
    setPrevSelectedIndex(shouldSelected ? endIndex : null);
    return changedKeys;
  }, [prevSelectedIndex]);
  return [multipleSelect, setPrevSelectedIndex];
};

// node_modules/antd/es/_util/hooks/useOrientation.js
var import_react34 = __toESM(require_react());
var isValidOrientation = (orientation) => {
  return orientation === "horizontal" || orientation === "vertical";
};
var useOrientation = (orientation, vertical, legacyDirection) => {
  return (0, import_react34.useMemo)(() => {
    const validOrientation = isValidOrientation(orientation);
    let mergedOrientation;
    if (validOrientation) {
      mergedOrientation = orientation;
    } else if (typeof vertical === "boolean") {
      mergedOrientation = vertical ? "vertical" : "horizontal";
    } else {
      const validLegacyDirection = isValidOrientation(legacyDirection);
      mergedOrientation = validLegacyDirection ? legacyDirection : "horizontal";
    }
    return [mergedOrientation, mergedOrientation === "vertical"];
  }, [legacyDirection, orientation, vertical]);
};

// node_modules/antd/es/_util/hooks/usePatchElement.js
var React74 = __toESM(require_react());
var usePatchElement = () => {
  const [elements, setElements] = React74.useState([]);
  const patchElement = React74.useCallback((element) => {
    setElements((originElements) => [].concat(_toConsumableArray(originElements), [element]));
    return () => {
      setElements((originElements) => originElements.filter((ele) => ele !== element));
    };
  }, []);
  return [elements, patchElement];
};

// node_modules/antd/es/_util/hooks/useProxyImperativeHandle.js
var import_react35 = __toESM(require_react());
var fillProxy = (element, handler) => {
  element._antProxy = element._antProxy || {};
  Object.keys(handler).forEach((key) => {
    if (!(key in element._antProxy)) {
      const ori = element[key];
      element._antProxy[key] = ori;
      element[key] = handler[key];
    }
  });
  return element;
};
var useProxyImperativeHandle = (ref, init) => {
  return (0, import_react35.useImperativeHandle)(ref, () => {
    const refObj = init();
    const {
      nativeElement
    } = refObj;
    if (typeof Proxy !== "undefined") {
      return new Proxy(nativeElement, {
        get(obj, prop) {
          if (refObj[prop]) {
            return refObj[prop];
          }
          return Reflect.get(obj, prop);
        }
      });
    }
    return fillProxy(nativeElement, refObj);
  });
};

// node_modules/antd/es/_util/hooks/useSyncState.js
var React75 = __toESM(require_react());
var useSyncState2 = (initialValue) => {
  const ref = React75.useRef(initialValue);
  const [, forceUpdate] = useForceUpdate();
  return [() => ref.current, (newValue) => {
    ref.current = newValue;
    forceUpdate();
  }];
};

// node_modules/antd/es/_util/hooks/useZIndex.js
var import_react37 = __toESM(require_react());

// node_modules/antd/es/_util/zindexContext.js
var import_react36 = __toESM(require_react());
var ZIndexContext = import_react36.default.createContext(void 0);
if (true) {
  ZIndexContext.displayName = "ZIndexContext";
}
var zindexContext_default = ZIndexContext;

// node_modules/antd/es/_util/hooks/useZIndex.js
var CONTAINER_OFFSET = 100;
var CONTAINER_OFFSET_MAX_COUNT = 10;
var CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
var CONTAINER_MAX_OFFSET_WITH_CHILDREN = CONTAINER_MAX_OFFSET + CONTAINER_OFFSET;
var containerBaseZIndexOffset = {
  Modal: CONTAINER_OFFSET,
  Drawer: CONTAINER_OFFSET,
  Popover: CONTAINER_OFFSET,
  Popconfirm: CONTAINER_OFFSET,
  Tooltip: CONTAINER_OFFSET,
  Tour: CONTAINER_OFFSET,
  FloatButton: CONTAINER_OFFSET
};
var consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
var isContainerType = (type5) => {
  return type5 in containerBaseZIndexOffset;
};
var useZIndex = (componentType, customZIndex) => {
  const [, token] = useToken();
  const parentZIndex = import_react37.default.useContext(zindexContext_default);
  const isContainer = isContainerType(componentType);
  let result;
  if (customZIndex !== void 0) {
    result = [customZIndex, customZIndex];
  } else {
    let zIndex = parentZIndex ?? 0;
    if (isContainer) {
      zIndex += // Use preset token zIndex by default but not stack when has parent container
      (parentZIndex ? 0 : token.zIndexPopupBase) + // Container offset
      containerBaseZIndexOffset[componentType];
    } else {
      zIndex += consumerBaseZIndexOffset[componentType];
    }
    result = [parentZIndex === void 0 ? customZIndex : zIndex, zIndex];
  }
  if (true) {
    const warning6 = devUseWarning(componentType);
    const maxZIndex = token.zIndexPopupBase + CONTAINER_MAX_OFFSET_WITH_CHILDREN;
    const currentZIndex = result[0] || 0;
    true ? warning6(customZIndex !== void 0 || currentZIndex <= maxZIndex, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.") : void 0;
  }
  return result;
};

// node_modules/antd/es/config-provider/hooks/useSize.js
var import_react38 = __toESM(require_react());
var useSize = (customSize) => {
  const size = import_react38.default.useContext(SizeContext_default);
  const mergedSize = import_react38.default.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === "string") {
      return customSize ?? size;
    }
    if (typeof customSize === "function") {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
var useSize_default = useSize;

// node_modules/antd/es/space/style/compact.js
var genSpaceCompactStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
};
var compact_default = genStyleHooks(["Space", "Compact"], (token) => [genSpaceCompactStyle(token)], () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
});

// node_modules/antd/es/space/Compact.js
var SpaceCompactItemContext = React79.createContext(null);
var useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = React79.useContext(SpaceCompactItemContext);
  const compactItemClassnames = React79.useMemo(() => {
    if (!compactItemContext) {
      return "";
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return clsx(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext == null ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext == null ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
var NoCompactStyle = (props) => {
  const {
    children
  } = props;
  return React79.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
var CompactItem = (props) => {
  const {
    children,
    ...others
  } = props;
  return React79.createElement(SpaceCompactItemContext.Provider, {
    value: React79.useMemo(() => others, [others])
  }, children);
};
var Compact = (props) => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = React79.useContext(ConfigContext);
  const {
    size,
    direction,
    orientation,
    block,
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    vertical,
    ...restProps
  } = props;
  if (true) {
    const warning6 = devUseWarning("Space.Compact");
    warning6.deprecated(!direction, "direction", "orientation");
  }
  const [mergedOrientation, mergedVertical] = useOrientation(orientation, vertical, direction);
  const mergedSize = useSize_default((ctx) => size ?? ctx);
  const prefixCls = getPrefixCls("space-compact", customizePrefixCls);
  const [hashId] = compact_default(prefixCls);
  const clx = clsx(prefixCls, hashId, {
    [`${prefixCls}-rtl`]: directionConfig === "rtl",
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-vertical`]: mergedVertical
  }, className, rootClassName);
  const compactItemContext = React79.useContext(SpaceCompactItemContext);
  const childNodes = toArray(children);
  const nodes = React79.useMemo(() => childNodes.map((child, i) => {
    const key = (child == null ? void 0 : child.key) || `${prefixCls}-item-${i}`;
    return React79.createElement(CompactItem, {
      key,
      compactSize: mergedSize,
      compactDirection: mergedOrientation,
      isFirstItem: i === 0 && (!compactItemContext || (compactItemContext == null ? void 0 : compactItemContext.isFirstItem)),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext == null ? void 0 : compactItemContext.isLastItem))
    }, child);
  }), [childNodes, compactItemContext, mergedOrientation, mergedSize, prefixCls]);
  if (childNodes.length === 0) {
    return null;
  }
  return React79.createElement("div", {
    className: clx,
    ...restProps
  }, nodes);
};
var Compact_default = Compact;

// node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = (props) => {
  const {
    space,
    form,
    children
  } = props;
  if (!isNonNullable_default(children)) {
    return null;
  }
  let result = children;
  if (form) {
    result = import_react39.default.createElement(NoFormStyle, {
      override: true,
      status: true
    }, result);
  }
  if (space) {
    result = import_react39.default.createElement(NoCompactStyle, null, result);
  }
  return result;
};
var ContextIsolator_default = ContextIsolator;

// node_modules/antd/es/_util/motion.js
var getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
var getRealHeight = (node) => {
  const {
    scrollHeight
  } = node;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
var getCurrentHeight = (node) => ({
  height: node ? node.offsetHeight : 0
});
var skipOpacityTransition = (_, event) => (event == null ? void 0 : event.deadline) === true || event.propertyName === "height";
var initCollapseMotion = (rootCls = defaultPrefixCls) => ({
  motionName: `${rootCls}-motion-collapse`,
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
});
var getTransitionName2 = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== void 0) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};
var motion_default = initCollapseMotion;

// node_modules/antd/es/style/roundedArrow.js
function getArrowToken(token) {
  const {
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter
  } = token;
  const unitWidth = sizePopupArrow / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = borderRadiusOuter * 1 / Math.sqrt(2);
  const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
  const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
  const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
  const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
  const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
  return {
    arrowShadowWidth: shadowWidth,
    arrowPath,
    arrowPolygon
  };
}
var genRoundedArrow = (token, bgColor, boxShadow) => {
  const {
    sizePopupArrow,
    arrowPolygon,
    arrowPath,
    arrowShadowWidth,
    borderRadiusXS,
    calc
  } = token;
  return {
    pointerEvents: "none",
    width: sizePopupArrow,
    height: sizePopupArrow,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: sizePopupArrow,
      height: calc(sizePopupArrow).div(2).equal(),
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [arrowPolygon, arrowPath]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: arrowShadowWidth,
      height: arrowShadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${unit(borderRadiusXS)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow,
      zIndex: 0,
      background: "transparent"
    }
  };
};

// node_modules/antd/es/style/placementArrow.js
var MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
  const {
    contentRadius,
    limitVerticalRadius
  } = options;
  const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
  return {
    arrowOffsetHorizontal: arrowOffset,
    arrowOffsetVertical
  };
}
function isInject(valid, code) {
  if (!valid) {
    return {};
  }
  return code;
}
var getArrowStyle = (token, colorBg, options) => {
  const {
    componentCls,
    boxShadowPopoverArrow,
    arrowOffsetVertical,
    arrowOffsetHorizontal,
    antCls
  } = token;
  const [varName] = genCssVar(antCls, "tooltip");
  const {
    arrowDistance = 0,
    arrowPlacement = {
      left: true,
      right: true,
      top: true,
      bottom: true
    }
  } = options || {};
  return {
    [componentCls]: {
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [{
        position: "absolute",
        zIndex: 1,
        // lift it up so the menu wouldn't cask shadow on it
        display: "block",
        ...genRoundedArrow(token, colorBg, boxShadowPopoverArrow),
        "&:before": {
          background: colorBg
        }
      }],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      ...isInject(!!arrowPlacement.top, {
        [[`&-placement-top > ${componentCls}-arrow`, `&-placement-topLeft > ${componentCls}-arrow`, `&-placement-topRight > ${componentCls}-arrow`].join(",")]: {
          bottom: arrowDistance,
          transform: "translateY(100%) rotate(180deg)"
        },
        [`&-placement-top > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateX(-50%) translateY(100%) rotate(180deg)"
        },
        "&-placement-topLeft": {
          [varName("arrow-offset-x")]: arrowOffsetHorizontal,
          [`> ${componentCls}-arrow`]: {
            left: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        },
        "&-placement-topRight": {
          [varName("arrow-offset-x")]: `calc(100% - ${unit(arrowOffsetHorizontal)})`,
          [`> ${componentCls}-arrow`]: {
            right: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        }
      }),
      // >>>>> Bottom
      ...isInject(!!arrowPlacement.bottom, {
        [[`&-placement-bottom > ${componentCls}-arrow`, `&-placement-bottomLeft > ${componentCls}-arrow`, `&-placement-bottomRight > ${componentCls}-arrow`].join(",")]: {
          top: arrowDistance,
          transform: `translateY(-100%)`
        },
        [`&-placement-bottom > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: `translateX(-50%) translateY(-100%)`
        },
        "&-placement-bottomLeft": {
          [varName("arrow-offset-x")]: arrowOffsetHorizontal,
          [`> ${componentCls}-arrow`]: {
            left: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        },
        "&-placement-bottomRight": {
          [varName("arrow-offset-x")]: `calc(100% - ${unit(arrowOffsetHorizontal)})`,
          [`> ${componentCls}-arrow`]: {
            right: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        }
      }),
      // >>>>> Left
      ...isInject(!!arrowPlacement.left, {
        [[`&-placement-left > ${componentCls}-arrow`, `&-placement-leftTop > ${componentCls}-arrow`, `&-placement-leftBottom > ${componentCls}-arrow`].join(",")]: {
          right: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(100%) rotate(90deg)"
        },
        [`&-placement-left > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(100%) rotate(90deg)"
        },
        [`&-placement-leftTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical
        },
        [`&-placement-leftBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical
        }
      }),
      // >>>>> Right
      ...isInject(!!arrowPlacement.right, {
        [[`&-placement-right > ${componentCls}-arrow`, `&-placement-rightTop > ${componentCls}-arrow`, `&-placement-rightBottom > ${componentCls}-arrow`].join(",")]: {
          left: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-right > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-rightTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical
        },
        [`&-placement-rightBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical
        }
      })
    }
  };
};
var placementArrow_default = getArrowStyle;

// node_modules/antd/es/_util/placements.js
function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false
    };
  }
  const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === "object" ? autoAdjustOverflow : {};
  const baseOverflow = {};
  switch (placement) {
    case "top":
    case "bottom":
      baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
      baseOverflow.shiftY = true;
      baseOverflow.adjustY = true;
      break;
    case "left":
    case "right":
      baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
      baseOverflow.shiftX = true;
      baseOverflow.adjustX = true;
      break;
  }
  const mergedOverflow = {
    ...baseOverflow,
    ...overflow
  };
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
var PlacementAlignMap = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
};
var ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
};
var DisableAutoArrowList = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function getPlacements(config) {
  const {
    arrowWidth,
    autoAdjustOverflow,
    arrowPointAtCenter,
    offset,
    borderRadius,
    visibleFirst
  } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  const arrowOffset = getArrowOffsetToken({
    contentRadius: borderRadius,
    limitVerticalRadius: true
  });
  Object.keys(PlacementAlignMap).forEach((key) => {
    const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
    const placementInfo = {
      ...template,
      offset: [0, 0],
      dynamicInset: true
    };
    placementMap[key] = placementInfo;
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    switch (key) {
      case "top":
      case "topLeft":
      case "topRight":
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    if (arrowPointAtCenter) {
      switch (key) {
        case "topLeft":
        case "bottomLeft":
          placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
          break;
        case "topRight":
        case "bottomRight":
          placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
          break;
        case "leftTop":
        case "rightTop":
          placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
          break;
        case "leftBottom":
        case "rightBottom":
          placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
          break;
      }
    }
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
    if (visibleFirst) {
      placementInfo.htmlRegion = "visibleFirst";
    }
  });
  return placementMap;
}

// node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = (prefixCls) => `${prefixCls}-css-var`;
var useCSSVarCls_default = useCSSVarCls;

// node_modules/antd/es/tooltip/hook/useMergedArrow.js
var import_react40 = __toESM(require_react());
var useMergedArrow = (providedArrow, providedContextArrow) => {
  const toConfig = (arrow) => typeof arrow === "boolean" ? {
    show: arrow
  } : arrow || {};
  return import_react40.default.useMemo(() => {
    const arrowConfig = toConfig(providedArrow);
    const contextArrowConfig = toConfig(providedContextArrow);
    return {
      ...contextArrowConfig,
      ...arrowConfig,
      show: arrowConfig.show ?? contextArrowConfig.show ?? true
    };
  }, [providedArrow, providedContextArrow]);
};
var useMergedArrow_default = useMergedArrow;

// node_modules/antd/es/tooltip/PurePanel.js
var React91 = __toESM(require_react());

// node_modules/antd/es/style/motion/collapse.js
var genCollapseMotion = (token) => {
  const {
    componentCls,
    antCls,
    motionDurationMid,
    motionEaseInOut
  } = token;
  return {
    [componentCls]: {
      // For common/openAnimation
      [`${antCls}-motion-collapse-legacy`]: {
        overflow: "hidden",
        "&-active": {
          transition: `${["height", "opacity"].map((prop) => `${prop} ${motionDurationMid} ${motionEaseInOut}`).join(", ")} !important`
        }
      },
      [`${antCls}-motion-collapse`]: {
        overflow: "hidden",
        transition: `${["height", "opacity"].map((prop) => `${prop} ${motionDurationMid} ${motionEaseInOut}`).join(", ")} !important`
      }
    }
  };
};
var collapse_default = genCollapseMotion;

// node_modules/antd/es/style/motion/motion.js
var initMotionCommon = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
var initMotionCommonLeave = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
var initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false) => {
  const sameLevelPrefix = sameLevel ? "&" : "";
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: {
      ...initMotionCommon(duration),
      animationPlayState: "paused"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      ...initMotionCommonLeave(duration),
      animationPlayState: "paused"
    },
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: "running"
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};

// node_modules/antd/es/style/motion/fade.js
var fadeIn = new Keyframes_default("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
var fadeOut = new Keyframes_default("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
});
var initFadeMotion = (token, sameLevel = false) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return [initMotion(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};

// node_modules/antd/es/style/motion/move.js
var moveDownIn = new Keyframes_default("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveDownOut = new Keyframes_default("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveLeftIn = new Keyframes_default("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveLeftOut = new Keyframes_default("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveRightIn = new Keyframes_default("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveRightOut = new Keyframes_default("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveUpIn = new Keyframes_default("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveUpOut = new Keyframes_default("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
var initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};

// node_modules/antd/es/style/motion/slide.js
var slideUpIn = new Keyframes_default("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
var slideUpOut = new Keyframes_default("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
var slideDownIn = new Keyframes_default("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
var slideDownOut = new Keyframes_default("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
var slideLeftIn = new Keyframes_default("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
var slideLeftOut = new Keyframes_default("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
var slideRightIn = new Keyframes_default("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
var slideRightOut = new Keyframes_default("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
var slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
var initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};

// node_modules/antd/es/style/motion/zoom.js
var zoomIn = new Keyframes_default("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
var zoomOut = new Keyframes_default("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
});
var zoomBigIn = new Keyframes_default("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
var zoomBigOut = new Keyframes_default("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
});
var zoomUpIn = new Keyframes_default("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
});
var zoomUpOut = new Keyframes_default("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
});
var zoomLeftIn = new Keyframes_default("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
});
var zoomLeftOut = new Keyframes_default("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
});
var zoomRightIn = new Keyframes_default("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
});
var zoomRightOut = new Keyframes_default("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
});
var zoomDownIn = new Keyframes_default("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
});
var zoomDownOut = new Keyframes_default("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
});
var zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  "zoom-big": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-big-fast": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-left": {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  "zoom-right": {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  "zoom-up": {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  "zoom-down": {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
var initZoomMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, motionName === "zoom-big-fast" ? token.motionDurationFast : token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};

// node_modules/antd/es/tooltip/style/index.js
var FALL_BACK_ORIGIN = "50%";
var genTooltipStyle = (token) => {
  const {
    calc,
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    boxShadowSecondary,
    paddingSM,
    paddingXS,
    arrowOffsetHorizontal,
    sizePopupArrow,
    antCls
  } = token;
  const [varName, varRef] = genCssVar(antCls, "tooltip");
  const edgeAlignMinWidth = calc(tooltipBorderRadius).add(sizePopupArrow).add(arrowOffsetHorizontal).equal();
  const centerAlignMinWidth = calc(tooltipBorderRadius).mul(2).add(sizePopupArrow).equal();
  const sharedBodyStyle = {
    minWidth: centerAlignMinWidth,
    minHeight: controlHeight,
    padding: `${unit(token.calc(paddingSM).div(2).equal())} ${unit(paddingXS)}`,
    color: varRef("overlay-color", tooltipColor),
    textAlign: "start",
    textDecoration: "none",
    wordWrap: "break-word",
    backgroundColor: tooltipBg,
    borderRadius: tooltipBorderRadius,
    boxShadow: boxShadowSecondary,
    boxSizing: "border-box"
  };
  const sharedTransformOrigin = {
    // When use `autoArrow`, origin will follow the arrow position
    [varName("valid-offset-x")]: varRef("arrow-offset-x", "var(--arrow-x)"),
    transformOrigin: [varRef("valid-offset-x", FALL_BACK_ORIGIN), `var(--arrow-y, ${FALL_BACK_ORIGIN})`].join(" ")
  };
  return [
    {
      [componentCls]: {
        ...resetComponent(token),
        position: "absolute",
        zIndex: zIndexPopup,
        display: "block",
        width: "max-content",
        maxWidth: tooltipMaxWidth,
        visibility: "visible",
        ...sharedTransformOrigin,
        "&-hidden": {
          display: "none"
        },
        [varName("arrow-background-color")]: tooltipBg,
        // Wrapper for the tooltip content
        [`${componentCls}-container`]: [sharedBodyStyle, initFadeMotion(token, true)],
        [`&:has(~ ${componentCls}-unique-container)`]: {
          [`${componentCls}-container`]: {
            border: "none",
            background: "transparent",
            boxShadow: "none"
          }
        },
        // Align placement should have another min width
        [[`&-placement-topLeft`, `&-placement-topRight`, `&-placement-bottomLeft`, `&-placement-bottomRight`].join(",")]: {
          minWidth: edgeAlignMinWidth
        },
        // Limit left and right placement radius
        [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(",")]: {
          [`${componentCls}-inner`]: {
            borderRadius: token.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
          }
        },
        [`${componentCls}-content`]: {
          position: "relative"
        },
        // generator for preset color
        ...genPresetColor(token, (colorKey, {
          darkColor
        }) => ({
          [`&${componentCls}-${colorKey}`]: {
            [`${componentCls}-container`]: {
              backgroundColor: darkColor
            },
            [`${componentCls}-arrow`]: {
              [varName("arrow-background-color")]: darkColor
            }
          }
        })),
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      }
    },
    // Arrow Style
    placementArrow_default(token, varRef("arrow-background-color")),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: token.sizePopupArrow
      }
    },
    // Unique Body
    {
      [`${componentCls}-unique-container`]: {
        ...sharedBodyStyle,
        ...sharedTransformOrigin,
        position: "absolute",
        zIndex: calc(zIndexPopup).sub(1).equal(),
        "&-hidden": {
          display: "none"
        },
        "&-visible": {
          transition: `all ${token.motionDurationSlow}`
        }
      }
    }
  ];
};
var prepareComponentToken = (token) => ({
  zIndexPopup: token.zIndexPopupBase + 70,
  maxWidth: 250,
  ...getArrowOffsetToken({
    contentRadius: token.borderRadius,
    limitVerticalRadius: true
  }),
  ...getArrowToken(merge2(token, {
    borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
  }))
});
var style_default = (prefixCls, rootCls, injectStyle = true) => {
  const useStyle = genStyleHooks("Tooltip", (token) => {
    const {
      borderRadius,
      colorTextLightSolid,
      colorBgSpotlight,
      maxWidth
    } = token;
    const TooltipToken = merge2(token, {
      // default variables
      tooltipMaxWidth: maxWidth,
      tooltipColor: colorTextLightSolid,
      tooltipBorderRadius: borderRadius,
      tooltipBg: colorBgSpotlight
    });
    return [genTooltipStyle(TooltipToken), initZoomMotion(token, "zoom-big-fast")];
  }, prepareComponentToken, {
    resetStyle: false,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle
  });
  return useStyle(prefixCls, rootCls);
};

// node_modules/antd/es/_util/colors.js
var inverseColors = PresetColors.map((color) => `${color}-inverse`);
var PresetStatusColors = ["success", "processing", "error", "default", "warning"];
function isPresetColor(color, includeInverse = true) {
  if (includeInverse) {
    return [].concat(_toConsumableArray(inverseColors), _toConsumableArray(PresetColors)).includes(color);
  }
  return PresetColors.includes(color);
}
function isPresetStatusColor(color) {
  return PresetStatusColors.includes(color);
}

// node_modules/@rc-component/color-picker/es/ColorPicker.js
var import_react50 = __toESM(require_react());

// node_modules/@rc-component/color-picker/node_modules/@ant-design/fast-color/es/presetColors.js
var presetColors_default2 = {
  aliceblue: "9ehhb",
  antiquewhite: "9sgk7",
  aqua: "1ekf",
  aquamarine: "4zsno",
  azure: "9eiv3",
  beige: "9lhp8",
  bisque: "9zg04",
  black: "0",
  blanchedalmond: "9zhe5",
  blue: "73",
  blueviolet: "5e31e",
  brown: "6g016",
  burlywood: "8ouiv",
  cadetblue: "3qba8",
  chartreuse: "4zshs",
  chocolate: "87k0u",
  coral: "9yvyo",
  cornflowerblue: "3xael",
  cornsilk: "9zjz0",
  crimson: "8l4xo",
  cyan: "1ekf",
  darkblue: "3v",
  darkcyan: "rkb",
  darkgoldenrod: "776yz",
  darkgray: "6mbhl",
  darkgreen: "jr4",
  darkgrey: "6mbhl",
  darkkhaki: "7ehkb",
  darkmagenta: "5f91n",
  darkolivegreen: "3bzfz",
  darkorange: "9yygw",
  darkorchid: "5z6x8",
  darkred: "5f8xs",
  darksalmon: "9441m",
  darkseagreen: "5lwgf",
  darkslateblue: "2th1n",
  darkslategray: "1ugcv",
  darkslategrey: "1ugcv",
  darkturquoise: "14up",
  darkviolet: "5rw7n",
  deeppink: "9yavn",
  deepskyblue: "11xb",
  dimgray: "442g9",
  dimgrey: "442g9",
  dodgerblue: "16xof",
  firebrick: "6y7tu",
  floralwhite: "9zkds",
  forestgreen: "1cisi",
  fuchsia: "9y70f",
  gainsboro: "8m8kc",
  ghostwhite: "9pq0v",
  goldenrod: "8j4f4",
  gold: "9zda8",
  gray: "50i2o",
  green: "pa8",
  greenyellow: "6senj",
  grey: "50i2o",
  honeydew: "9eiuo",
  hotpink: "9yrp0",
  indianred: "80gnw",
  indigo: "2xcoy",
  ivory: "9zldc",
  khaki: "9edu4",
  lavenderblush: "9ziet",
  lavender: "90c8q",
  lawngreen: "4vk74",
  lemonchiffon: "9zkct",
  lightblue: "6s73a",
  lightcoral: "9dtog",
  lightcyan: "8s1rz",
  lightgoldenrodyellow: "9sjiq",
  lightgray: "89jo3",
  lightgreen: "5nkwg",
  lightgrey: "89jo3",
  lightpink: "9z6wx",
  lightsalmon: "9z2ii",
  lightseagreen: "19xgq",
  lightskyblue: "5arju",
  lightslategray: "4nwk9",
  lightslategrey: "4nwk9",
  lightsteelblue: "6wau6",
  lightyellow: "9zlcw",
  lime: "1edc",
  limegreen: "1zcxe",
  linen: "9shk6",
  magenta: "9y70f",
  maroon: "4zsow",
  mediumaquamarine: "40eju",
  mediumblue: "5p",
  mediumorchid: "79qkz",
  mediumpurple: "5r3rv",
  mediumseagreen: "2d9ip",
  mediumslateblue: "4tcku",
  mediumspringgreen: "1di2",
  mediumturquoise: "2uabw",
  mediumvioletred: "7rn9h",
  midnightblue: "z980",
  mintcream: "9ljp6",
  mistyrose: "9zg0x",
  moccasin: "9zfzp",
  navajowhite: "9zest",
  navy: "3k",
  oldlace: "9wq92",
  olive: "50hz4",
  olivedrab: "472ub",
  orange: "9z3eo",
  orangered: "9ykg0",
  orchid: "8iu3a",
  palegoldenrod: "9bl4a",
  palegreen: "5yw0o",
  paleturquoise: "6v4ku",
  palevioletred: "8k8lv",
  papayawhip: "9zi6t",
  peachpuff: "9ze0p",
  peru: "80oqn",
  pink: "9z8wb",
  plum: "8nba5",
  powderblue: "6wgdi",
  purple: "4zssg",
  rebeccapurple: "3zk49",
  red: "9y6tc",
  rosybrown: "7cv4f",
  royalblue: "2jvtt",
  saddlebrown: "5fmkz",
  salmon: "9rvci",
  sandybrown: "9jn1c",
  seagreen: "1tdnb",
  seashell: "9zje6",
  sienna: "6973h",
  silver: "7ir40",
  skyblue: "5arjf",
  slateblue: "45e4t",
  slategray: "4e100",
  slategrey: "4e100",
  snow: "9zke2",
  springgreen: "1egv",
  steelblue: "2r1kk",
  tan: "87yx8",
  teal: "pds",
  thistle: "8ggk8",
  tomato: "9yqfb",
  turquoise: "2j4r4",
  violet: "9b10u",
  wheat: "9ld4j",
  white: "9zldr",
  whitesmoke: "9lhpx",
  yellow: "9zl6o",
  yellowgreen: "61fzm"
};

// node_modules/@rc-component/color-picker/node_modules/@ant-design/fast-color/es/FastColor.js
var round2 = Math.round;
function splitColorStr2(str, parseNum) {
  const match2 = str.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [];
  const numList = match2.map((item) => parseFloat(item));
  for (let i = 0; i < 3; i += 1) {
    numList[i] = parseNum(numList[i] || 0, match2[i] || "", i);
  }
  if (match2[3]) {
    numList[3] = match2[3].includes("%") ? numList[3] / 100 : numList[3];
  } else {
    numList[3] = 1;
  }
  return numList;
}
var parseHSVorHSL2 = (num, _, index) => index === 0 ? num : num / 100;
function limitRange2(value, max) {
  const mergedMax = max || 255;
  if (value > mergedMax) {
    return mergedMax;
  }
  if (value < 0) {
    return 0;
  }
  return value;
}
var FastColor2 = class _FastColor {
  constructor(input) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    __publicField(this, "isValid", true);
    /**
     * Red, R in RGB
     */
    __publicField(this, "r", 0);
    /**
     * Green, G in RGB
     */
    __publicField(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    __publicField(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    __publicField(this, "a", 1);
    // HSV privates
    __publicField(this, "_h");
    __publicField(this, "_hsl_s");
    __publicField(this, "_hsv_s");
    __publicField(this, "_l");
    __publicField(this, "_v");
    // intermediate variables to calculate HSL/HSV
    __publicField(this, "_max");
    __publicField(this, "_min");
    __publicField(this, "_brightness");
    function matchFormat(str) {
      return str[0] in input && str[1] in input && str[2] in input;
    }
    if (!input) {
    } else if (typeof input === "string") {
      let matchPrefix = function(prefix) {
        return trimStr.startsWith(prefix);
      };
      const trimStr = input.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(trimStr)) {
        this.fromHexString(trimStr);
      } else if (matchPrefix("rgb")) {
        this.fromRgbString(trimStr);
      } else if (matchPrefix("hsl")) {
        this.fromHslString(trimStr);
      } else if (matchPrefix("hsv") || matchPrefix("hsb")) {
        this.fromHsvString(trimStr);
      } else {
        const presetColor = presetColors_default2[trimStr.toLowerCase()];
        if (presetColor) {
          this.fromHexString(
            // Convert 36 hex to 16 hex
            parseInt(presetColor, 36).toString(16).padStart(6, "0")
          );
        }
      }
    } else if (input instanceof _FastColor) {
      this.r = input.r;
      this.g = input.g;
      this.b = input.b;
      this.a = input.a;
      this._h = input._h;
      this._hsl_s = input._hsl_s;
      this._hsv_s = input._hsv_s;
      this._l = input._l;
      this._v = input._v;
    } else if (matchFormat("rgb")) {
      this.r = limitRange2(input.r);
      this.g = limitRange2(input.g);
      this.b = limitRange2(input.b);
      this.a = typeof input.a === "number" ? limitRange2(input.a, 1) : 1;
    } else if (matchFormat("hsl")) {
      this.fromHsl(input);
    } else if (matchFormat("hsv")) {
      this.fromHsv(input);
    } else {
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(input));
    }
  }
  // ======================= Setter =======================
  setR(value) {
    return this._sc("r", value);
  }
  setG(value) {
    return this._sc("g", value);
  }
  setB(value) {
    return this._sc("b", value);
  }
  setA(value) {
    return this._sc("a", value, 1);
  }
  setHue(value) {
    const hsv = this.toHsv();
    hsv.h = value;
    return this._c(hsv);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function adjustGamma(raw) {
      const val = raw / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }
    const R = adjustGamma(this.r);
    const G = adjustGamma(this.g);
    const B = adjustGamma(this.b);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }
  getHue() {
    if (typeof this._h === "undefined") {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._h = 0;
      } else {
        this._h = round2(60 * (this.r === this.getMax() ? (this.g - this.b) / delta + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / delta + 2 : (this.r - this.g) / delta + 4));
      }
    }
    return this._h;
  }
  /**
   * @deprecated should use getHSVSaturation or getHSLSaturation instead
   */
  getSaturation() {
    return this.getHSVSaturation();
  }
  getHSVSaturation() {
    if (typeof this._hsv_s === "undefined") {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._hsv_s = 0;
      } else {
        this._hsv_s = delta / this.getMax();
      }
    }
    return this._hsv_s;
  }
  getHSLSaturation() {
    if (typeof this._hsl_s === "undefined") {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._hsl_s = 0;
      } else {
        const l = this.getLightness();
        this._hsl_s = delta / 255 / (1 - Math.abs(2 * l - 1));
      }
    }
    return this._hsl_s;
  }
  getLightness() {
    if (typeof this._l === "undefined") {
      this._l = (this.getMax() + this.getMin()) / 510;
    }
    return this._l;
  }
  getValue() {
    if (typeof this._v === "undefined") {
      this._v = this.getMax() / 255;
    }
    return this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    if (typeof this._brightness === "undefined") {
      this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3;
    }
    return this._brightness;
  }
  // ======================== Func ========================
  darken(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() - amount / 100;
    if (l < 0) {
      l = 0;
    }
    return this._c({
      h,
      s,
      l,
      a: this.a
    });
  }
  lighten(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() + amount / 100;
    if (l > 1) {
      l = 1;
    }
    return this._c({
      h,
      s,
      l,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(input, amount = 50) {
    const color = this._c(input);
    const p = amount / 100;
    const calc = (key) => (color[key] - this[key]) * p + this[key];
    const rgba = {
      r: round2(calc("r")),
      g: round2(calc("g")),
      b: round2(calc("b")),
      a: round2(calc("a") * 100) / 100
    };
    return this._c(rgba);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(amount = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, amount);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(amount = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, amount);
  }
  onBackground(background) {
    const bg = this._c(background);
    const alpha = this.a + bg.a * (1 - this.a);
    const calc = (key) => {
      return round2((this[key] * this.a + bg[key] * bg.a * (1 - this.a)) / alpha);
    };
    return this._c({
      r: calc("r"),
      g: calc("g"),
      b: calc("b"),
      a: alpha
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(other) {
    return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let hex2 = "#";
    const rHex = (this.r || 0).toString(16);
    hex2 += rHex.length === 2 ? rHex : "0" + rHex;
    const gHex = (this.g || 0).toString(16);
    hex2 += gHex.length === 2 ? gHex : "0" + gHex;
    const bHex = (this.b || 0).toString(16);
    hex2 += bHex.length === 2 ? bHex : "0" + bHex;
    if (typeof this.a === "number" && this.a >= 0 && this.a < 1) {
      const aHex = round2(this.a * 255).toString(16);
      hex2 += aHex.length === 2 ? aHex : "0" + aHex;
    }
    return hex2;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getHSLSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const h = this.getHue();
    const s = round2(this.getHSLSaturation() * 100);
    const l = round2(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${h},${s}%,${l}%,${this.a})` : `hsl(${h},${s}%,${l}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getHSVSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(rgb, value, max) {
    const clone = this.clone();
    clone[rgb] = limitRange2(value, max);
    return clone;
  }
  _c(input) {
    return new this.constructor(input);
  }
  getMax() {
    if (typeof this._max === "undefined") {
      this._max = Math.max(this.r, this.g, this.b);
    }
    return this._max;
  }
  getMin() {
    if (typeof this._min === "undefined") {
      this._min = Math.min(this.r, this.g, this.b);
    }
    return this._min;
  }
  fromHexString(trimStr) {
    const withoutPrefix = trimStr.replace("#", "");
    function connectNum(index1, index2) {
      return parseInt(withoutPrefix[index1] + withoutPrefix[index2 || index1], 16);
    }
    if (withoutPrefix.length < 6) {
      this.r = connectNum(0);
      this.g = connectNum(1);
      this.b = connectNum(2);
      this.a = withoutPrefix[3] ? connectNum(3) / 255 : 1;
    } else {
      this.r = connectNum(0, 1);
      this.g = connectNum(2, 3);
      this.b = connectNum(4, 5);
      this.a = withoutPrefix[6] ? connectNum(6, 7) / 255 : 1;
    }
  }
  fromHsl({
    h: _h,
    s,
    l,
    a
  }) {
    const h = (_h % 360 + 360) % 360;
    this._h = h;
    this._hsl_s = s;
    this._l = l;
    this.a = typeof a === "number" ? a : 1;
    if (s <= 0) {
      const rgb = round2(l * 255);
      this.r = rgb;
      this.g = rgb;
      this.b = rgb;
      return;
    }
    let r = 0, g = 0, b = 0;
    const huePrime = h / 60;
    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
    if (huePrime >= 0 && huePrime < 1) {
      r = chroma;
      g = secondComponent;
    } else if (huePrime >= 1 && huePrime < 2) {
      r = secondComponent;
      g = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
      g = chroma;
      b = secondComponent;
    } else if (huePrime >= 3 && huePrime < 4) {
      g = secondComponent;
      b = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
      r = secondComponent;
      b = chroma;
    } else if (huePrime >= 5 && huePrime < 6) {
      r = chroma;
      b = secondComponent;
    }
    const lightnessModification = l - chroma / 2;
    this.r = round2((r + lightnessModification) * 255);
    this.g = round2((g + lightnessModification) * 255);
    this.b = round2((b + lightnessModification) * 255);
  }
  fromHsv({
    h: _h,
    s,
    v,
    a
  }) {
    const h = (_h % 360 + 360) % 360;
    this._h = h;
    this._hsv_s = s;
    this._v = v;
    this.a = typeof a === "number" ? a : 1;
    const vv = round2(v * 255);
    this.r = vv;
    this.g = vv;
    this.b = vv;
    if (s <= 0) {
      return;
    }
    const hh = h / 60;
    const i = Math.floor(hh);
    const ff = hh - i;
    const p = round2(v * (1 - s) * 255);
    const q = round2(v * (1 - s * ff) * 255);
    const t = round2(v * (1 - s * (1 - ff)) * 255);
    switch (i) {
      case 0:
        this.g = t;
        this.b = p;
        break;
      case 1:
        this.r = q;
        this.b = p;
        break;
      case 2:
        this.r = p;
        this.b = t;
        break;
      case 3:
        this.r = p;
        this.g = q;
        break;
      case 4:
        this.r = t;
        this.g = p;
        break;
      case 5:
      default:
        this.g = p;
        this.b = q;
        break;
    }
  }
  fromHsvString(trimStr) {
    const cells = splitColorStr2(trimStr, parseHSVorHSL2);
    this.fromHsv({
      h: cells[0],
      s: cells[1],
      v: cells[2],
      a: cells[3]
    });
  }
  fromHslString(trimStr) {
    const cells = splitColorStr2(trimStr, parseHSVorHSL2);
    this.fromHsl({
      h: cells[0],
      s: cells[1],
      l: cells[2],
      a: cells[3]
    });
  }
  fromRgbString(trimStr) {
    const cells = splitColorStr2(trimStr, (num, txt) => (
      // Convert percentage to number. e.g. 50% -> 128
      txt.includes("%") ? round2(num / 100 * 255) : num
    ));
    this.r = cells[0];
    this.g = cells[1];
    this.b = cells[2];
    this.a = cells[3];
  }
};

// node_modules/@rc-component/color-picker/es/color.js
var getRoundNumber = (value) => Math.round(Number(value || 0));
var convertHsb2Hsv = (color) => {
  if (color instanceof FastColor2) {
    return color;
  }
  if (color && typeof color === "object" && "h" in color && "b" in color) {
    const {
      b,
      ...resets
    } = color;
    return {
      ...resets,
      v: b
    };
  }
  if (typeof color === "string" && /hsb/.test(color)) {
    return color.replace(/hsb/, "hsv");
  }
  return color;
};
var Color = class extends FastColor2 {
  constructor(color) {
    super(convertHsb2Hsv(color));
  }
  toHsbString() {
    const hsb = this.toHsb();
    const saturation = getRoundNumber(hsb.s * 100);
    const lightness = getRoundNumber(hsb.b * 100);
    const hue = getRoundNumber(hsb.h);
    const alpha = hsb.a;
    const hsbString = `hsb(${hue}, ${saturation}%, ${lightness}%)`;
    const hsbaString = `hsba(${hue}, ${saturation}%, ${lightness}%, ${alpha.toFixed(alpha === 0 ? 0 : 2)})`;
    return alpha === 1 ? hsbString : hsbaString;
  }
  toHsb() {
    const {
      v,
      ...resets
    } = this.toHsv();
    return {
      ...resets,
      b: v,
      a: this.a
    };
  }
};

// node_modules/@rc-component/color-picker/es/util.js
var ColorPickerPrefixCls = "rc-color-picker";
var generateColor = (color) => {
  if (color instanceof Color) {
    return color;
  }
  return new Color(color);
};
var defaultColor = generateColor("#1677ff");
var calculateColor = (props) => {
  const {
    offset,
    targetRef,
    containerRef,
    color,
    type: type5
  } = props;
  const {
    width,
    height
  } = containerRef.current.getBoundingClientRect();
  const {
    width: targetWidth,
    height: targetHeight
  } = targetRef.current.getBoundingClientRect();
  const centerOffsetX = targetWidth / 2;
  const centerOffsetY = targetHeight / 2;
  const saturation = (offset.x + centerOffsetX) / width;
  const bright = 1 - (offset.y + centerOffsetY) / height;
  const hsb = color.toHsb();
  const alphaOffset = saturation;
  const hueOffset = (offset.x + centerOffsetX) / width * 360;
  if (type5) {
    switch (type5) {
      case "hue":
        return generateColor({
          ...hsb,
          h: hueOffset <= 0 ? 0 : hueOffset
        });
      case "alpha":
        return generateColor({
          ...hsb,
          a: alphaOffset <= 0 ? 0 : alphaOffset
        });
    }
  }
  return generateColor({
    h: hsb.h,
    s: saturation <= 0 ? 0 : saturation,
    b: bright >= 1 ? 1 : bright,
    a: hsb.a
  });
};
var calcOffset = (color, type5) => {
  const hsb = color.toHsb();
  switch (type5) {
    case "hue":
      return {
        x: hsb.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: color.a * 100,
        y: 50
      };
    default:
      return {
        x: hsb.s * 100,
        y: (1 - hsb.b) * 100
      };
  }
};

// node_modules/@rc-component/color-picker/es/components/ColorBlock.js
var import_react41 = __toESM(require_react());
var ColorBlock = ({
  color,
  prefixCls,
  className,
  style: style2,
  innerClassName,
  innerStyle,
  onClick
}) => {
  const colorBlockCls = `${prefixCls}-color-block`;
  return import_react41.default.createElement("div", {
    className: clsx(colorBlockCls, className),
    style: style2,
    onClick
  }, import_react41.default.createElement("div", {
    className: clsx(`${colorBlockCls}-inner`, innerClassName),
    style: {
      background: color,
      ...innerStyle
    }
  }));
};
var ColorBlock_default = ColorBlock;

// node_modules/@rc-component/color-picker/es/components/Picker.js
var import_react46 = __toESM(require_react());

// node_modules/@rc-component/color-picker/es/hooks/useColorDrag.js
var import_react42 = __toESM(require_react());
function getPosition(e) {
  const obj = "touches" in e ? e.touches[0] : e;
  const scrollXOffset = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset;
  const scrollYOffset = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: obj.pageX - scrollXOffset,
    pageY: obj.pageY - scrollYOffset
  };
}
function useColorDrag(props) {
  const {
    targetRef,
    containerRef,
    direction,
    onDragChange,
    onDragChangeComplete,
    calculate,
    color,
    disabledDrag
  } = props;
  const [offsetValue, setOffsetValue] = (0, import_react42.useState)({
    x: 0,
    y: 0
  });
  const mouseMoveRef = (0, import_react42.useRef)(null);
  const mouseUpRef = (0, import_react42.useRef)(null);
  (0, import_react42.useEffect)(() => {
    setOffsetValue(calculate());
  }, [color]);
  (0, import_react42.useEffect)(() => () => {
    document.removeEventListener("mousemove", mouseMoveRef.current);
    document.removeEventListener("mouseup", mouseUpRef.current);
    document.removeEventListener("touchmove", mouseMoveRef.current);
    document.removeEventListener("touchend", mouseUpRef.current);
    mouseMoveRef.current = null;
    mouseUpRef.current = null;
  }, []);
  const updateOffset = (e) => {
    const {
      pageX,
      pageY
    } = getPosition(e);
    const {
      x: rectX,
      y: rectY,
      width,
      height
    } = containerRef.current.getBoundingClientRect();
    const {
      width: targetWidth,
      height: targetHeight
    } = targetRef.current.getBoundingClientRect();
    const centerOffsetX = targetWidth / 2;
    const centerOffsetY = targetHeight / 2;
    const offsetX = Math.max(0, Math.min(pageX - rectX, width)) - centerOffsetX;
    const offsetY = Math.max(0, Math.min(pageY - rectY, height)) - centerOffsetY;
    const calcOffset2 = {
      x: offsetX,
      y: direction === "x" ? offsetValue.y : offsetY
    };
    if (targetWidth === 0 && targetHeight === 0 || targetWidth !== targetHeight) {
      return false;
    }
    onDragChange == null ? void 0 : onDragChange(calcOffset2);
  };
  const onDragMove = (e) => {
    e.preventDefault();
    updateOffset(e);
  };
  const onDragStop = (e) => {
    e.preventDefault();
    document.removeEventListener("mousemove", mouseMoveRef.current);
    document.removeEventListener("mouseup", mouseUpRef.current);
    document.removeEventListener("touchmove", mouseMoveRef.current);
    document.removeEventListener("touchend", mouseUpRef.current);
    mouseMoveRef.current = null;
    mouseUpRef.current = null;
    onDragChangeComplete == null ? void 0 : onDragChangeComplete();
  };
  const onDragStart = (e) => {
    document.removeEventListener("mousemove", mouseMoveRef.current);
    document.removeEventListener("mouseup", mouseUpRef.current);
    if (disabledDrag) {
      return;
    }
    updateOffset(e);
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragStop);
    document.addEventListener("touchmove", onDragMove);
    document.addEventListener("touchend", onDragStop);
    mouseMoveRef.current = onDragMove;
    mouseUpRef.current = onDragStop;
  };
  return [offsetValue, onDragStart];
}
var useColorDrag_default = useColorDrag;

// node_modules/@rc-component/color-picker/es/components/Handler.js
var import_react43 = __toESM(require_react());
var Handler = ({
  size = "default",
  color,
  prefixCls
}) => {
  return import_react43.default.createElement("div", {
    className: clsx(`${prefixCls}-handler`, {
      [`${prefixCls}-handler-sm`]: size === "small"
    }),
    style: {
      backgroundColor: color
    }
  });
};
var Handler_default = Handler;

// node_modules/@rc-component/color-picker/es/components/Palette.js
var import_react44 = __toESM(require_react());
var Palette = ({
  children,
  style: style2,
  prefixCls
}) => {
  return import_react44.default.createElement("div", {
    className: `${prefixCls}-palette`,
    style: {
      position: "relative",
      ...style2
    }
  }, children);
};
var Palette_default = Palette;

// node_modules/@rc-component/color-picker/es/components/Transform.js
var import_react45 = __toESM(require_react());
var Transform = (0, import_react45.forwardRef)((props, ref) => {
  const {
    children,
    x,
    y
  } = props;
  return import_react45.default.createElement("div", {
    ref,
    style: {
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, children);
});
var Transform_default = Transform;

// node_modules/@rc-component/color-picker/es/components/Picker.js
var Picker = ({
  color,
  onChange,
  prefixCls,
  onChangeComplete,
  disabled
}) => {
  const pickerRef = (0, import_react46.useRef)();
  const transformRef = (0, import_react46.useRef)();
  const colorRef = (0, import_react46.useRef)(color);
  const onDragChange = useEvent_default((offsetValue) => {
    const calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: pickerRef,
      color
    });
    colorRef.current = calcColor;
    onChange(calcColor);
  });
  const [offset, dragStartHandle] = useColorDrag_default({
    color,
    containerRef: pickerRef,
    targetRef: transformRef,
    calculate: () => calcOffset(color),
    onDragChange,
    onDragChangeComplete: () => onChangeComplete == null ? void 0 : onChangeComplete(colorRef.current),
    disabledDrag: disabled
  });
  return import_react46.default.createElement("div", {
    ref: pickerRef,
    className: `${prefixCls}-select`,
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, import_react46.default.createElement(Palette_default, {
    prefixCls
  }, import_react46.default.createElement(Transform_default, {
    x: offset.x,
    y: offset.y,
    ref: transformRef
  }, import_react46.default.createElement(Handler_default, {
    color: color.toRgbString(),
    prefixCls
  })), import_react46.default.createElement("div", {
    className: `${prefixCls}-saturation`,
    style: {
      backgroundColor: `hsl(${color.toHsb().h},100%, 50%)`,
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
};
var Picker_default = Picker;

// node_modules/@rc-component/color-picker/es/hooks/useColorState.js
var import_react47 = __toESM(require_react());
var useColorState = (defaultValue, value) => {
  const [mergedValue, setValue] = useControlledState(defaultValue, value);
  const color = (0, import_react47.useMemo)(() => generateColor(mergedValue), [mergedValue]);
  return [color, setValue];
};
var useColorState_default = useColorState;

// node_modules/@rc-component/color-picker/es/hooks/useComponent.js
var React89 = __toESM(require_react());

// node_modules/@rc-component/color-picker/es/components/Slider.js
var import_react49 = __toESM(require_react());

// node_modules/@rc-component/color-picker/es/components/Gradient.js
var import_react48 = __toESM(require_react());
var Gradient = ({
  colors,
  children,
  direction = "to right",
  type: type5,
  prefixCls
}) => {
  const gradientColors = (0, import_react48.useMemo)(() => colors.map((color, idx) => {
    let result = generateColor(color);
    if (type5 === "alpha" && idx === colors.length - 1) {
      result = new Color(result.setA(1));
    }
    return result.toRgbString();
  }).join(","), [colors, type5]);
  return import_react48.default.createElement("div", {
    className: `${prefixCls}-gradient`,
    style: {
      position: "absolute",
      inset: 0,
      background: `linear-gradient(${direction}, ${gradientColors})`
    }
  }, children);
};
var Gradient_default = Gradient;

// node_modules/@rc-component/color-picker/es/components/Slider.js
var Slider = (props) => {
  const {
    prefixCls,
    colors,
    disabled,
    onChange,
    onChangeComplete,
    color,
    type: type5
  } = props;
  const sliderRef = (0, import_react49.useRef)(null);
  const transformRef = (0, import_react49.useRef)(null);
  const colorRef = (0, import_react49.useRef)(color);
  const getValue3 = (c) => {
    return type5 === "hue" ? c.getHue() : c.a * 100;
  };
  const onDragChange = useEvent_default((offsetValue) => {
    const calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: sliderRef,
      color,
      type: type5
    });
    colorRef.current = calcColor;
    onChange(getValue3(calcColor));
  });
  const [offset, dragStartHandle] = useColorDrag_default({
    color,
    targetRef: transformRef,
    containerRef: sliderRef,
    calculate: () => calcOffset(color, type5),
    onDragChange,
    onDragChangeComplete() {
      onChangeComplete(getValue3(colorRef.current));
    },
    direction: "x",
    disabledDrag: disabled
  });
  const handleColor = import_react49.default.useMemo(() => {
    if (type5 === "hue") {
      const hsb = color.toHsb();
      hsb.s = 1;
      hsb.b = 1;
      hsb.a = 1;
      const lightColor = new Color(hsb);
      return lightColor;
    }
    return color;
  }, [color, type5]);
  const gradientList = import_react49.default.useMemo(() => colors.map((info) => `${info.color} ${info.percent}%`), [colors]);
  return import_react49.default.createElement("div", {
    ref: sliderRef,
    className: clsx(`${prefixCls}-slider`, `${prefixCls}-slider-${type5}`),
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, import_react49.default.createElement(Palette_default, {
    prefixCls
  }, import_react49.default.createElement(Transform_default, {
    x: offset.x,
    y: offset.y,
    ref: transformRef
  }, import_react49.default.createElement(Handler_default, {
    size: "small",
    color: handleColor.toHexString(),
    prefixCls
  })), import_react49.default.createElement(Gradient_default, {
    colors: gradientList,
    type: type5,
    prefixCls
  })));
};
var Slider_default = Slider;

// node_modules/@rc-component/color-picker/es/hooks/useComponent.js
function useComponent(components) {
  return React89.useMemo(() => {
    const {
      slider
    } = components || {};
    return [slider || Slider_default];
  }, [components]);
}

// node_modules/@rc-component/color-picker/es/ColorPicker.js
function _extends12() {
  _extends12 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends12.apply(this, arguments);
}
var HUE_COLORS = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}];
var ColorPicker = (0, import_react50.forwardRef)((props, ref) => {
  const {
    value,
    defaultValue,
    prefixCls = ColorPickerPrefixCls,
    onChange,
    onChangeComplete,
    className,
    style: style2,
    panelRender,
    disabledAlpha = false,
    disabled = false,
    components
  } = props;
  const [Slider2] = useComponent(components);
  const [colorValue, setColorValue] = useColorState_default(defaultValue || defaultColor, value);
  const alphaColor = (0, import_react50.useMemo)(() => colorValue.setA(1).toRgbString(), [colorValue]);
  const handleChange = (data, type5) => {
    if (!value) {
      setColorValue(data);
    }
    onChange == null ? void 0 : onChange(data, type5);
  };
  const getHueColor = (hue) => new Color(colorValue.setHue(hue));
  const getAlphaColor3 = (alpha) => new Color(colorValue.setA(alpha / 100));
  const onHueChange = (hue) => {
    handleChange(getHueColor(hue), {
      type: "hue",
      value: hue
    });
  };
  const onAlphaChange = (alpha) => {
    handleChange(getAlphaColor3(alpha), {
      type: "alpha",
      value: alpha
    });
  };
  const onHueChangeComplete = (hue) => {
    if (onChangeComplete) {
      onChangeComplete(getHueColor(hue));
    }
  };
  const onAlphaChangeComplete = (alpha) => {
    if (onChangeComplete) {
      onChangeComplete(getAlphaColor3(alpha));
    }
  };
  const mergeCls = clsx(`${prefixCls}-panel`, className, {
    [`${prefixCls}-panel-disabled`]: disabled
  });
  const sharedSliderProps = {
    prefixCls,
    disabled,
    color: colorValue
  };
  const defaultPanel = import_react50.default.createElement(import_react50.default.Fragment, null, import_react50.default.createElement(Picker_default, _extends12({
    onChange: handleChange
  }, sharedSliderProps, {
    onChangeComplete
  })), import_react50.default.createElement("div", {
    className: `${prefixCls}-slider-container`
  }, import_react50.default.createElement("div", {
    className: clsx(`${prefixCls}-slider-group`, {
      [`${prefixCls}-slider-group-disabled-alpha`]: disabledAlpha
    })
  }, import_react50.default.createElement(Slider2, _extends12({}, sharedSliderProps, {
    type: "hue",
    colors: HUE_COLORS,
    min: 0,
    max: 359,
    value: colorValue.getHue(),
    onChange: onHueChange,
    onChangeComplete: onHueChangeComplete
  })), !disabledAlpha && import_react50.default.createElement(Slider2, _extends12({}, sharedSliderProps, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: alphaColor
    }],
    min: 0,
    max: 100,
    value: colorValue.a * 100,
    onChange: onAlphaChange,
    onChangeComplete: onAlphaChangeComplete
  }))), import_react50.default.createElement(ColorBlock_default, {
    color: colorValue.toRgbString(),
    prefixCls
  })));
  return import_react50.default.createElement("div", {
    className: mergeCls,
    style: style2,
    ref
  }, typeof panelRender === "function" ? panelRender(defaultPanel) : defaultPanel);
});
if (true) {
  ColorPicker.displayName = "ColorPicker";
}
var ColorPicker_default = ColorPicker;

// node_modules/@rc-component/color-picker/es/index.js
var es_default8 = ColorPicker_default;

// node_modules/antd/es/color-picker/color.js
var toHexFormat = (value, alpha) => (value == null ? void 0 : value.replace(/[^0-9a-f]/gi, "").slice(0, alpha ? 8 : 6)) || "";
var getHex = (value, alpha) => value ? toHexFormat(value, alpha) : "";
var AggregationColor = function() {
  function AggregationColor2(color) {
    var _a;
    _classCallCheck(this, AggregationColor2);
    this.cleared = false;
    if (color instanceof AggregationColor2) {
      this.metaColor = color.metaColor.clone();
      this.colors = (_a = color.colors) == null ? void 0 : _a.map((info) => ({
        color: new AggregationColor2(info.color),
        percent: info.percent
      }));
      this.cleared = color.cleared;
      return;
    }
    const isArray = Array.isArray(color);
    if (isArray && color.length) {
      this.colors = color.map(({
        color: c,
        percent
      }) => ({
        color: new AggregationColor2(c),
        percent
      }));
      this.metaColor = new Color(this.colors[0].color.metaColor);
    } else {
      this.metaColor = new Color(isArray ? "" : color);
    }
    if (!color || isArray && !this.colors) {
      this.metaColor = this.metaColor.setA(0);
      this.cleared = true;
    }
  }
  return _createClass(AggregationColor2, [{
    key: "toHsb",
    value: function toHsb() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function toHsbString() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function toHex() {
      return getHex(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function toHexString() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function toRgbString() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function isGradient() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function getColors() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function toCssString() {
      const {
        colors
      } = this;
      if (colors) {
        const colorsStr = colors.map((c) => `${c.color.toRgbString()} ${c.percent}%`).join(", ");
        return `linear-gradient(90deg, ${colorsStr})`;
      }
      return this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function equals(color) {
      if (!color || this.isGradient() !== color.isGradient()) {
        return false;
      }
      if (!this.isGradient()) {
        return this.toHexString() === color.toHexString();
      }
      return this.colors.length === color.colors.length && this.colors.every((c, i) => {
        const target = color.colors[i];
        return c.percent === target.percent && c.color.equals(target.color);
      });
    }
  }]);
}();

// node_modules/antd/es/color-picker/util.js
var generateColor2 = (color) => {
  if (color instanceof AggregationColor) {
    return color;
  }
  return new AggregationColor(color);
};
var getRoundNumber2 = (value) => Math.round(Number(value || 0));
var getColorAlpha = (color) => getRoundNumber2(color.toHsb().a * 100);
var genAlphaColor = (color, alpha) => {
  const rgba = color.toRgb();
  if (!rgba.r && !rgba.g && !rgba.b) {
    const hsba = color.toHsb();
    hsba.a = alpha || 1;
    return generateColor2(hsba);
  }
  rgba.a = alpha || 1;
  return generateColor2(rgba);
};
var getGradientPercentColor = (colors, percent) => {
  const filledColors = [{
    percent: 0,
    color: colors[0].color
  }].concat(_toConsumableArray(colors), [{
    percent: 100,
    color: colors[colors.length - 1].color
  }]);
  for (let i = 0; i < filledColors.length - 1; i += 1) {
    const startPtg = filledColors[i].percent;
    const endPtg = filledColors[i + 1].percent;
    const startColor = filledColors[i].color;
    const endColor = filledColors[i + 1].color;
    if (startPtg <= percent && percent <= endPtg) {
      const dist = endPtg - startPtg;
      if (dist === 0) {
        return startColor;
      }
      const ratio = (percent - startPtg) / dist * 100;
      const startRcColor = new Color(startColor);
      const endRcColor = new Color(endColor);
      return startRcColor.mix(endRcColor, ratio).toRgbString();
    }
  }
  return "";
};

// node_modules/antd/es/tooltip/util.js
var parseColor = (rootPrefixCls, prefixCls, color) => {
  const isInternalColor = isPresetColor(color);
  const [varName] = genCssVar(rootPrefixCls, "tooltip");
  const className = clsx({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  const rgb = generateColor2(color).toRgb();
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  const textColor = luminance < 0.5 ? "#FFF" : "#000";
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    overlayStyle[varName("overlay-color")] = textColor;
    arrowStyle[varName("arrow-background-color")] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle
  };
};

// node_modules/antd/es/tooltip/PurePanel.js
var PurePanel = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    placement = "top",
    title,
    color,
    overlayInnerStyle,
    classNames,
    styles
  } = props;
  const {
    getPrefixCls
  } = React91.useContext(ConfigContext);
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const rootCls = useCSSVarCls_default(prefixCls);
  const [hashId, cssVarCls] = style_default(prefixCls, rootCls);
  const colorInfo = parseColor(rootPrefixCls, prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const innerStyles = React91.useMemo(() => {
    const mergedStyle = {
      ...overlayInnerStyle,
      ...colorInfo.overlayStyle
    };
    return {
      container: mergedStyle
    };
  }, [overlayInnerStyle, colorInfo.overlayStyle]);
  const mergedProps = {
    ...props,
    placement
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([classNames], [innerStyles, styles], {
    props: mergedProps
  });
  const rootClassName = clsx(rootCls, hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
  return React91.createElement("div", {
    className: rootClassName,
    style: arrowContentStyle
  }, React91.createElement("div", {
    className: `${prefixCls}-arrow`
  }), React91.createElement(Popup_default2, {
    ...props,
    className: hashId,
    prefixCls,
    classNames: mergedClassNames,
    styles: mergedStyles
  }, title));
};
var PurePanel_default = PurePanel;

// node_modules/antd/es/tooltip/index.js
var InternalTooltip = React92.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    openClassName,
    getTooltipContainer,
    color,
    children,
    afterOpenChange,
    arrow: tooltipArrow,
    destroyTooltipOnHide,
    destroyOnHidden,
    title,
    overlay,
    trigger,
    builtinPlacements,
    autoAdjustOverflow = true,
    motion,
    getPopupContainer,
    placement = "top",
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    rootClassName,
    styles,
    classNames,
    onOpenChange,
    // Legacy
    overlayInnerStyle,
    overlayStyle,
    overlayClassName,
    ...restProps
  } = props;
  const [, token] = useToken();
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    arrow: contextArrow,
    trigger: contextTrigger
  } = useComponentConfig("tooltip");
  const mergedArrow = useMergedArrow_default(tooltipArrow, contextArrow);
  const mergedShowArrow = mergedArrow.show;
  const mergedTrigger = trigger || contextTrigger || "hover";
  const warning6 = devUseWarning("Tooltip");
  const tooltipRef = React92.useRef(null);
  const forceAlign = () => {
    var _a;
    (_a = tooltipRef.current) == null ? void 0 : _a.forceAlign();
  };
  React92.useImperativeHandle(ref, () => {
    var _a, _b;
    return {
      forceAlign,
      nativeElement: (_a = tooltipRef.current) == null ? void 0 : _a.nativeElement,
      popupElement: (_b = tooltipRef.current) == null ? void 0 : _b.popupElement
    };
  });
  if (true) {
    [["overlayStyle", "styles.root"], ["overlayInnerStyle", "styles.container"], ["overlayClassName", "classNames.root"], ["destroyTooltipOnHide", "destroyOnHidden"]].forEach(([deprecatedName, newName]) => {
      warning6.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
    true ? warning6(!destroyTooltipOnHide || typeof destroyTooltipOnHide === "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.") : void 0;
  }
  const [open, setOpen] = useControlledState(props.defaultOpen ?? false, props.open);
  const noTitle = !title && !overlay && title !== 0;
  const onInternalOpenChange = (vis) => {
    setOpen(noTitle ? false : vis);
    if (!noTitle && onOpenChange) {
      onOpenChange(vis);
    }
  };
  const tooltipPlacements = React92.useMemo(() => {
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: (mergedArrow == null ? void 0 : mergedArrow.pointAtCenter) ?? false,
      autoAdjustOverflow,
      arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
      borderRadius: token.borderRadius,
      offset: token.marginXXS,
      visibleFirst: true
    });
  }, [mergedArrow, builtinPlacements, token, mergedShowArrow, autoAdjustOverflow]);
  const memoOverlay = React92.useMemo(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || "";
  }, [overlay, title]);
  const memoOverlayWrapper = React92.createElement(ContextIsolator_default, {
    space: true,
    form: true
  }, typeof memoOverlay === "function" ? memoOverlay() : memoOverlay);
  const mergedProps = {
    ...props,
    trigger: mergedTrigger,
    color,
    placement,
    builtinPlacements,
    openClassName,
    arrow: tooltipArrow,
    autoAdjustOverflow,
    getPopupContainer,
    children,
    destroyTooltipOnHide,
    destroyOnHidden
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const injectFromPopover = props["data-popover-inject"];
  let tempOpen = open;
  if (!("open" in props) && noTitle) {
    tempOpen = false;
  }
  const child = React92.isValidElement(children) && !isFragment2(children) ? children : React92.createElement("span", null, children);
  const childProps = child.props;
  const childCls = !childProps.className || typeof childProps.className === "string" ? clsx(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
  const rootCls = useCSSVarCls_default(prefixCls);
  const [hashId, cssVarCls] = style_default(prefixCls, rootCls, !injectFromPopover);
  const colorInfo = parseColor(rootPrefixCls, prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const themeCls = clsx(rootCls, hashId, cssVarCls);
  const rootClassNames = clsx(overlayClassName, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, colorInfo.className, rootClassName, themeCls, contextClassName, mergedClassNames.root);
  const [zIndex, contextZIndex] = useZIndex("Tooltip", restProps.zIndex);
  const containerStyle = {
    ...mergedStyles.container,
    ...overlayInnerStyle,
    ...colorInfo.overlayStyle
  };
  const content = React92.createElement(es_default5, {
    unique: true,
    ...restProps,
    trigger: mergedTrigger,
    zIndex,
    showArrow: mergedShowArrow,
    placement,
    mouseEnterDelay,
    mouseLeaveDelay,
    prefixCls,
    classNames: {
      root: rootClassNames,
      container: mergedClassNames.container,
      arrow: mergedClassNames.arrow,
      uniqueContainer: clsx(themeCls, mergedClassNames.container)
    },
    styles: {
      root: {
        ...arrowContentStyle,
        ...mergedStyles.root,
        ...contextStyle,
        ...overlayStyle
      },
      container: containerStyle,
      uniqueContainer: containerStyle,
      arrow: mergedStyles.arrow
    },
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: tooltipRef,
    builtinPlacements: tooltipPlacements,
    overlay: memoOverlayWrapper,
    visible: tempOpen,
    onVisibleChange: onInternalOpenChange,
    afterVisibleChange: afterOpenChange,
    arrowContent: React92.createElement("span", {
      className: `${prefixCls}-arrow-content`
    }),
    motion: {
      motionName: getTransitionName2(rootPrefixCls, "zoom-big-fast", typeof (motion == null ? void 0 : motion.motionName) === "string" ? motion == null ? void 0 : motion.motionName : void 0),
      motionDeadline: 1e3
    },
    destroyOnHidden: destroyOnHidden ?? !!destroyTooltipOnHide
  }, tempOpen ? cloneElement5(child, {
    className: childCls
  }) : child);
  return React92.createElement(zindexContext_default.Provider, {
    value: contextZIndex
  }, content);
});
var Tooltip2 = InternalTooltip;
if (true) {
  Tooltip2.displayName = "Tooltip";
}
Tooltip2._InternalPanelDoNotUseOrYouWillBeFired = PurePanel_default;
Tooltip2.UniqueProvider = UniqueProvider_default2;
var tooltip_default = Tooltip2;

// node_modules/antd/es/typography/Editable.js
var React104 = __toESM(require_react());

// node_modules/antd/node_modules/@ant-design/icons/es/icons/EnterOutlined.js
var React93 = __toESM(require_react());
function _extends13() {
  _extends13 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends13.apply(this, arguments);
}
var EnterOutlined = (props, ref) => React93.createElement(AntdIcon_default, _extends13({}, props, {
  ref,
  icon: EnterOutlined_default
}));
var RefIcon3 = React93.forwardRef(EnterOutlined);
if (true) {
  RefIcon3.displayName = "EnterOutlined";
}
var EnterOutlined_default2 = RefIcon3;

// node_modules/@rc-component/util/es/KeyCode.js
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    const {
      keyCode
    } = e;
    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  },
  isEditableTarget: function isEditableTarget(e) {
    const target = e.target;
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    const tagName = target.tagName;
    if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT" || target.isContentEditable) {
      return true;
    }
    return false;
  }
};
var KeyCode_default = KeyCode;

// node_modules/antd/es/input/TextArea.js
var React103 = __toESM(require_react());
var import_react58 = __toESM(require_react());

// node_modules/@rc-component/input/es/BaseInput.js
var import_react51 = __toESM(require_react());

// node_modules/@rc-component/input/es/utils/commonUtils.js
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
function cloneEvent(event, target, value) {
  const currentTarget = target.cloneNode(true);
  const newEvent = Object.create(event, {
    target: {
      value: currentTarget
    },
    currentTarget: {
      value: currentTarget
    }
  });
  currentTarget.value = value;
  if (typeof target.selectionStart === "number" && typeof target.selectionEnd === "number") {
    currentTarget.selectionStart = target.selectionStart;
    currentTarget.selectionEnd = target.selectionEnd;
  }
  currentTarget.setSelectionRange = (...args) => {
    target.setSelectionRange(...args);
  };
  return newEvent;
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  let event = e;
  if (e.type === "click") {
    event = cloneEvent(e, target, "");
    onChange(event);
    return;
  }
  if (target.type !== "file" && targetValue !== void 0) {
    event = cloneEvent(e, target, targetValue);
    onChange(event);
    return;
  }
  onChange(event);
}

// node_modules/@rc-component/input/es/BaseInput.js
function _extends14() {
  _extends14 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends14.apply(this, arguments);
}
var BaseInput = import_react51.default.forwardRef((props, ref) => {
  var _a, _b, _c;
  const {
    inputElement: inputEl,
    children,
    prefixCls,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    className,
    style: style2,
    disabled,
    readOnly,
    focused,
    triggerFocus: triggerFocus2,
    allowClear,
    value,
    handleReset,
    hidden,
    classes,
    classNames,
    dataAttrs,
    styles,
    components,
    onClear
  } = props;
  const inputElement = children ?? inputEl;
  const AffixWrapperComponent = (components == null ? void 0 : components.affixWrapper) || "span";
  const GroupWrapperComponent = (components == null ? void 0 : components.groupWrapper) || "span";
  const WrapperComponent = (components == null ? void 0 : components.wrapper) || "span";
  const GroupAddonComponent = (components == null ? void 0 : components.groupAddon) || "span";
  const containerRef = (0, import_react51.useRef)(null);
  const onInputClick = (e) => {
    var _a2;
    if ((_a2 = containerRef.current) == null ? void 0 : _a2.contains(e.target)) {
      triggerFocus2 == null ? void 0 : triggerFocus2();
    }
  };
  const hasAffix = hasPrefixSuffix(props);
  let element = (0, import_react51.cloneElement)(inputElement, {
    value,
    className: clsx((_a = inputElement.props) == null ? void 0 : _a.className, !hasAffix && (classNames == null ? void 0 : classNames.variant)) || null
  });
  const groupRef = (0, import_react51.useRef)(null);
  import_react51.default.useImperativeHandle(ref, () => ({
    nativeElement: groupRef.current || containerRef.current
  }));
  if (hasAffix) {
    let clearIcon = null;
    if (allowClear) {
      const needClear = !disabled && !readOnly && value;
      const clearIconCls = `${prefixCls}-clear-icon`;
      const iconNode = typeof allowClear === "object" && (allowClear == null ? void 0 : allowClear.clearIcon) ? allowClear.clearIcon : "✖";
      clearIcon = import_react51.default.createElement("button", {
        type: "button",
        tabIndex: -1,
        onClick: (event) => {
          handleReset == null ? void 0 : handleReset(event);
          onClear == null ? void 0 : onClear();
        },
        onMouseDown: (e) => e.preventDefault(),
        className: clsx(clearIconCls, {
          [`${clearIconCls}-hidden`]: !needClear,
          [`${clearIconCls}-has-suffix`]: !!suffix
        })
      }, iconNode);
    }
    const affixWrapperPrefixCls = `${prefixCls}-affix-wrapper`;
    const affixWrapperCls = clsx(affixWrapperPrefixCls, {
      [`${prefixCls}-disabled`]: disabled,
      [`${affixWrapperPrefixCls}-disabled`]: disabled,
      // Not used, but keep it
      [`${affixWrapperPrefixCls}-focused`]: focused,
      // Not used, but keep it
      [`${affixWrapperPrefixCls}-readonly`]: readOnly,
      [`${affixWrapperPrefixCls}-input-with-clear-btn`]: suffix && allowClear && value
    }, classes == null ? void 0 : classes.affixWrapper, classNames == null ? void 0 : classNames.affixWrapper, classNames == null ? void 0 : classNames.variant);
    const suffixNode = (suffix || allowClear) && import_react51.default.createElement("span", {
      className: clsx(`${prefixCls}-suffix`, classNames == null ? void 0 : classNames.suffix),
      style: styles == null ? void 0 : styles.suffix
    }, clearIcon, suffix);
    element = import_react51.default.createElement(AffixWrapperComponent, _extends14({
      className: affixWrapperCls,
      style: styles == null ? void 0 : styles.affixWrapper,
      onClick: onInputClick
    }, dataAttrs == null ? void 0 : dataAttrs.affixWrapper, {
      ref: containerRef
    }), prefix && import_react51.default.createElement("span", {
      className: clsx(`${prefixCls}-prefix`, classNames == null ? void 0 : classNames.prefix),
      style: styles == null ? void 0 : styles.prefix
    }, prefix), element, suffixNode);
  }
  if (hasAddon(props)) {
    const wrapperCls = `${prefixCls}-group`;
    const addonCls = `${wrapperCls}-addon`;
    const groupWrapperCls = `${wrapperCls}-wrapper`;
    const mergedWrapperClassName = clsx(`${prefixCls}-wrapper`, wrapperCls, classes == null ? void 0 : classes.wrapper, classNames == null ? void 0 : classNames.wrapper);
    const mergedGroupClassName = clsx(groupWrapperCls, {
      [`${groupWrapperCls}-disabled`]: disabled
    }, classes == null ? void 0 : classes.group, classNames == null ? void 0 : classNames.groupWrapper);
    element = import_react51.default.createElement(GroupWrapperComponent, {
      className: mergedGroupClassName,
      ref: groupRef
    }, import_react51.default.createElement(WrapperComponent, {
      className: mergedWrapperClassName
    }, addonBefore && import_react51.default.createElement(GroupAddonComponent, {
      className: addonCls
    }, addonBefore), element, addonAfter && import_react51.default.createElement(GroupAddonComponent, {
      className: addonCls
    }, addonAfter)));
  }
  return import_react51.default.cloneElement(element, {
    className: clsx((_b = element.props) == null ? void 0 : _b.className, className) || null,
    style: {
      ...(_c = element.props) == null ? void 0 : _c.style,
      ...style2
    },
    hidden
  });
});
var BaseInput_default = BaseInput;

// node_modules/@rc-component/input/es/Input.js
var import_react53 = __toESM(require_react());

// node_modules/@rc-component/input/es/hooks/useCount.js
var React95 = __toESM(require_react());
function useCount(count, showCount) {
  return React95.useMemo(() => {
    let mergedConfig = {};
    if (showCount) {
      mergedConfig.show = typeof showCount === "object" && showCount.formatter ? showCount.formatter : !!showCount;
    }
    mergedConfig = {
      ...mergedConfig,
      ...count
    };
    const {
      show,
      ...rest
    } = mergedConfig;
    return {
      ...rest,
      show: !!show,
      showFormatter: typeof show === "function" ? show : void 0,
      strategy: rest.strategy || ((value) => value.length)
    };
  }, [count, showCount]);
}

// node_modules/@rc-component/util/es/Dom/focus.js
var import_react52 = __toESM(require_react());
function focusable(node, includePositive = false) {
  if (isVisible_default(node)) {
    const nodeName = node.nodeName.toLowerCase();
    const isFocusableElement = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(nodeName) || // Editable element
      node.isContentEditable || // Anchor with href element
      nodeName === "a" && !!node.getAttribute("href")
    );
    const tabIndexAttr = node.getAttribute("tabindex");
    const tabIndexNum = Number(tabIndexAttr);
    let tabIndex = null;
    if (tabIndexAttr && !Number.isNaN(tabIndexNum)) {
      tabIndex = tabIndexNum;
    } else if (isFocusableElement && tabIndex === null) {
      tabIndex = 0;
    }
    if (isFocusableElement && node.disabled) {
      tabIndex = null;
    }
    return tabIndex !== null && (tabIndex >= 0 || includePositive && tabIndex < 0);
  }
  return false;
}
function getFocusNodeList(node, includePositive = false) {
  const res = [...node.querySelectorAll("*")].filter((child) => {
    return focusable(child, includePositive);
  });
  if (focusable(node, includePositive)) {
    res.unshift(node);
  }
  return res;
}
function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option);
  const {
    cursor
  } = option || {};
  if (cursor && (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) {
    const len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
var lastFocusElement = null;
var focusElements = [];
var idToElementMap = /* @__PURE__ */ new Map();
var ignoredElementMap = /* @__PURE__ */ new Map();
function getLastElement() {
  return focusElements[focusElements.length - 1];
}
function isIgnoredElement(element) {
  const lastElement = getLastElement();
  if (element && lastElement) {
    let lockId;
    for (const [id, ele] of idToElementMap.entries()) {
      if (ele === lastElement) {
        lockId = id;
        break;
      }
    }
    const ignoredEle = ignoredElementMap.get(lockId);
    return !!ignoredEle && (ignoredEle === element || ignoredEle.contains(element));
  }
  return false;
}
function hasFocus(element) {
  const {
    activeElement
  } = document;
  return element === activeElement || element.contains(activeElement);
}
function syncFocus() {
  const lastElement = getLastElement();
  const {
    activeElement
  } = document;
  if (isIgnoredElement(activeElement)) {
    return;
  }
  if (lastElement && !hasFocus(lastElement)) {
    const focusableList = getFocusNodeList(lastElement);
    const matchElement = focusableList.includes(lastFocusElement) ? lastFocusElement : focusableList[0];
    matchElement == null ? void 0 : matchElement.focus({
      preventScroll: true
    });
  } else {
    lastFocusElement = activeElement;
  }
}
function onWindowKeyDown(e) {
  if (e.key === "Tab") {
    const {
      activeElement
    } = document;
    const lastElement = getLastElement();
    const focusableList = getFocusNodeList(lastElement);
    const last = focusableList[focusableList.length - 1];
    if (e.shiftKey && activeElement === focusableList[0]) {
      lastFocusElement = last;
    } else if (!e.shiftKey && activeElement === last) {
      lastFocusElement = focusableList[0];
    }
  }
}
function lockFocus(element, id) {
  if (element) {
    idToElementMap.set(id, element);
    focusElements = focusElements.filter((ele) => ele !== element);
    focusElements.push(element);
    window.addEventListener("focusin", syncFocus);
    window.addEventListener("keydown", onWindowKeyDown, true);
    syncFocus();
  }
  return () => {
    lastFocusElement = null;
    focusElements = focusElements.filter((ele) => ele !== element);
    idToElementMap.delete(id);
    ignoredElementMap.delete(id);
    if (focusElements.length === 0) {
      window.removeEventListener("focusin", syncFocus);
      window.removeEventListener("keydown", onWindowKeyDown, true);
    }
  };
}
function useLockFocus(lock, getElement) {
  const id = useId_default();
  (0, import_react52.useEffect)(() => {
    if (lock) {
      const element = getElement();
      if (element) {
        return lockFocus(element, id);
      }
    }
  }, [lock, id]);
  const ignoreElement = (ele) => {
    if (ele) {
      ignoredElementMap.set(id, ele);
    }
  };
  return [ignoreElement];
}

// node_modules/@rc-component/input/es/Input.js
function _extends15() {
  _extends15 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends15.apply(this, arguments);
}
var Input = (0, import_react53.forwardRef)((props, ref) => {
  const {
    autoComplete,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    onKeyDown,
    onKeyUp,
    prefixCls = "rc-input",
    disabled,
    htmlSize,
    className,
    maxLength,
    suffix,
    showCount,
    count,
    type: type5 = "text",
    classes,
    classNames,
    styles,
    onCompositionStart,
    onCompositionEnd,
    ...rest
  } = props;
  const [focused, setFocused] = (0, import_react53.useState)(false);
  const compositionRef = (0, import_react53.useRef)(false);
  const keyLockRef = (0, import_react53.useRef)(false);
  const inputRef = (0, import_react53.useRef)(null);
  const holderRef = (0, import_react53.useRef)(null);
  const focus = (option) => {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
  };
  const [value, setValue] = useControlledState(props.defaultValue, props.value);
  const formatValue = value === void 0 || value === null ? "" : String(value);
  const [selection, setSelection] = (0, import_react53.useState)(null);
  const countConfig = useCount(count, showCount);
  const mergedMax = countConfig.max || maxLength;
  const valueLength = countConfig.strategy(formatValue);
  const isOutOfRange = !!mergedMax && valueLength > mergedMax;
  (0, import_react53.useImperativeHandle)(ref, () => {
    var _a;
    return {
      focus,
      blur: () => {
        var _a2;
        (_a2 = inputRef.current) == null ? void 0 : _a2.blur();
      },
      setSelectionRange: (start, end, direction) => {
        var _a2;
        (_a2 = inputRef.current) == null ? void 0 : _a2.setSelectionRange(start, end, direction);
      },
      select: () => {
        var _a2;
        (_a2 = inputRef.current) == null ? void 0 : _a2.select();
      },
      input: inputRef.current,
      nativeElement: ((_a = holderRef.current) == null ? void 0 : _a.nativeElement) || inputRef.current
    };
  });
  (0, import_react53.useEffect)(() => {
    if (keyLockRef.current) {
      keyLockRef.current = false;
    }
    setFocused((prev) => prev && disabled ? false : prev);
  }, [disabled]);
  const triggerChange = (e, currentValue, info) => {
    var _a, _b;
    let cutValue = currentValue;
    if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
      cutValue = countConfig.exceedFormatter(currentValue, {
        max: countConfig.max
      });
      if (currentValue !== cutValue) {
        setSelection([((_a = inputRef.current) == null ? void 0 : _a.selectionStart) || 0, ((_b = inputRef.current) == null ? void 0 : _b.selectionEnd) || 0]);
      }
    } else if (info.source === "compositionEnd") {
      return;
    }
    setValue(cutValue);
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange, cutValue);
    }
  };
  (0, import_react53.useEffect)(() => {
    var _a;
    if (selection) {
      (_a = inputRef.current) == null ? void 0 : _a.setSelectionRange(...selection);
    }
  }, [selection]);
  const onInternalChange = (e) => {
    triggerChange(e, e.target.value, {
      source: "change"
    });
  };
  const onInternalCompositionEnd = (e) => {
    compositionRef.current = false;
    triggerChange(e, e.currentTarget.value, {
      source: "compositionEnd"
    });
    onCompositionEnd == null ? void 0 : onCompositionEnd(e);
  };
  const handleKeyDown = (e) => {
    if (onPressEnter && e.key === "Enter" && !keyLockRef.current && !e.nativeEvent.isComposing) {
      keyLockRef.current = true;
      onPressEnter(e);
    }
    onKeyDown == null ? void 0 : onKeyDown(e);
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      keyLockRef.current = false;
    }
    onKeyUp == null ? void 0 : onKeyUp(e);
  };
  const handleFocus = (e) => {
    setFocused(true);
    onFocus == null ? void 0 : onFocus(e);
  };
  const handleBlur = (e) => {
    if (keyLockRef.current) {
      keyLockRef.current = false;
    }
    setFocused(false);
    onBlur == null ? void 0 : onBlur(e);
  };
  const handleReset = (e) => {
    setValue("");
    focus();
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };
  const outOfRangeCls = isOutOfRange && `${prefixCls}-out-of-range`;
  const getInputElement = () => {
    const otherProps = omit(props, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames",
      "onClear"
    ]);
    return import_react53.default.createElement("input", _extends15({
      autoComplete
    }, otherProps, {
      onChange: onInternalChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      className: clsx(prefixCls, {
        [`${prefixCls}-disabled`]: disabled
      }, classNames == null ? void 0 : classNames.input),
      style: styles == null ? void 0 : styles.input,
      ref: inputRef,
      size: htmlSize,
      type: type5,
      onCompositionStart: (e) => {
        compositionRef.current = true;
        onCompositionStart == null ? void 0 : onCompositionStart(e);
      },
      onCompositionEnd: onInternalCompositionEnd
    }));
  };
  const getSuffix = () => {
    const hasMaxLength = Number(mergedMax) > 0;
    if (suffix || countConfig.show) {
      const dataCount = countConfig.showFormatter ? countConfig.showFormatter({
        value: formatValue,
        count: valueLength,
        maxLength: mergedMax
      }) : `${valueLength}${hasMaxLength ? ` / ${mergedMax}` : ""}`;
      return import_react53.default.createElement(import_react53.default.Fragment, null, countConfig.show && import_react53.default.createElement("span", {
        className: clsx(`${prefixCls}-show-count-suffix`, {
          [`${prefixCls}-show-count-has-suffix`]: !!suffix
        }, classNames == null ? void 0 : classNames.count),
        style: {
          ...styles == null ? void 0 : styles.count
        }
      }, dataCount), suffix);
    }
    return null;
  };
  return import_react53.default.createElement(BaseInput_default, _extends15({}, rest, {
    prefixCls,
    className: clsx(className, outOfRangeCls),
    handleReset,
    value: formatValue,
    focused,
    triggerFocus: focus,
    suffix: getSuffix(),
    disabled,
    classes,
    classNames,
    styles,
    ref: holderRef
  }), getInputElement());
});
var Input_default = Input;

// node_modules/@rc-component/input/es/index.js
var es_default9 = Input_default;

// node_modules/@rc-component/textarea/es/TextArea.js
var import_react54 = __toESM(require_react());

// node_modules/@rc-component/textarea/es/ResizableTextArea.js
var React97 = __toESM(require_react());

// node_modules/@rc-component/textarea/es/calculateNodeHeight.js
var HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`;
var SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node, useCache = false) {
  const nodeRef = node.getAttribute("id") || node.getAttribute("data-reactid") || node.getAttribute("name");
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  const style2 = window.getComputedStyle(node);
  const boxSizing = style2.getPropertyValue("box-sizing") || style2.getPropertyValue("-moz-box-sizing") || style2.getPropertyValue("-webkit-box-sizing");
  const paddingSize = parseFloat(style2.getPropertyValue("padding-bottom")) + parseFloat(style2.getPropertyValue("padding-top"));
  const borderSize = parseFloat(style2.getPropertyValue("border-bottom-width")) + parseFloat(style2.getPropertyValue("border-top-width"));
  const sizingStyle = SIZING_STYLE.map((name) => `${name}:${style2.getPropertyValue(name)}`).join(";");
  const nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode, useCache = false, minRows = null, maxRows = null) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tab-index", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    hiddenTextarea.setAttribute("name", "hiddenTextarea");
    document.body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  const {
    paddingSize,
    borderSize,
    boxSizing,
    sizingStyle
  } = calculateNodeStyling(uiTextNode, useCache);
  hiddenTextarea.setAttribute("style", `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  let minHeight = void 0;
  let maxHeight = void 0;
  let overflowY;
  let height = hiddenTextarea.scrollHeight;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  const style2 = {
    height,
    overflowY,
    resize: "none"
  };
  if (minHeight) {
    style2.minHeight = minHeight;
  }
  if (maxHeight) {
    style2.maxHeight = maxHeight;
  }
  return style2;
}

// node_modules/@rc-component/textarea/es/ResizableTextArea.js
function _extends16() {
  _extends16 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends16.apply(this, arguments);
}
var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = React97.forwardRef((props, ref) => {
  const {
    prefixCls,
    defaultValue,
    value,
    autoSize,
    onResize: onResize2,
    className,
    style: style2,
    disabled,
    onChange,
    // Test only
    onInternalAutoSize,
    ...restProps
  } = props;
  const [internalValue, setMergedValue] = useControlledState(defaultValue, value);
  const mergedValue = internalValue ?? "";
  const onInternalChange = (event) => {
    setMergedValue(event.target.value);
    onChange == null ? void 0 : onChange(event);
  };
  const textareaRef = React97.useRef();
  React97.useImperativeHandle(ref, () => ({
    textArea: textareaRef.current
  }));
  const [minRows, maxRows] = React97.useMemo(() => {
    if (autoSize && typeof autoSize === "object") {
      return [autoSize.minRows, autoSize.maxRows];
    }
    return [];
  }, [autoSize]);
  const needAutoSize = !!autoSize;
  const [resizeState, setResizeState] = React97.useState(RESIZE_STABLE);
  const [autoSizeStyle, setAutoSizeStyle] = React97.useState();
  const startResize = () => {
    setResizeState(RESIZE_START);
    if (false) {
      onInternalAutoSize == null ? void 0 : onInternalAutoSize();
    }
  };
  useLayoutEffect_default(() => {
    if (needAutoSize) {
      startResize();
    }
  }, [value, minRows, maxRows, needAutoSize]);
  useLayoutEffect_default(() => {
    if (resizeState === RESIZE_START) {
      setResizeState(RESIZE_MEASURING);
    } else if (resizeState === RESIZE_MEASURING) {
      const textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);
      setResizeState(RESIZE_STABLE);
      setAutoSizeStyle(textareaStyles);
    } else {
    }
  }, [resizeState]);
  const resizeRafRef = React97.useRef();
  const cleanRaf = () => {
    raf_default.cancel(resizeRafRef.current);
  };
  const onInternalResize = (size) => {
    if (resizeState === RESIZE_STABLE) {
      onResize2 == null ? void 0 : onResize2(size);
      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = raf_default(() => {
          startResize();
        });
      }
    }
  };
  React97.useEffect(() => cleanRaf, []);
  const mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
  const mergedStyle = {
    ...style2,
    ...mergedAutoSizeStyle
  };
  if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
    mergedStyle.overflowY = "hidden";
    mergedStyle.overflowX = "hidden";
  }
  return React97.createElement(es_default, {
    onResize: onInternalResize,
    disabled: !(autoSize || onResize2)
  }, React97.createElement("textarea", _extends16({}, restProps, {
    ref: textareaRef,
    style: mergedStyle,
    className: clsx(prefixCls, className, {
      [`${prefixCls}-disabled`]: disabled
    }),
    disabled,
    value: mergedValue,
    onChange: onInternalChange
  })));
});
var ResizableTextArea_default = ResizableTextArea;

// node_modules/@rc-component/textarea/es/TextArea.js
function _extends17() {
  _extends17 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends17.apply(this, arguments);
}
var TextArea = import_react54.default.forwardRef(({
  defaultValue,
  value: customValue,
  onFocus,
  onBlur,
  onChange,
  allowClear,
  maxLength,
  onCompositionStart,
  onCompositionEnd,
  suffix,
  prefixCls = "rc-textarea",
  showCount,
  count,
  className,
  style: style2,
  disabled,
  hidden,
  classNames,
  styles,
  onResize: onResize2,
  onClear,
  onPressEnter,
  readOnly,
  autoSize,
  onKeyDown,
  ...rest
}, ref) => {
  const [value, setValue] = useControlledState(defaultValue, customValue);
  const formatValue = value === void 0 || value === null ? "" : String(value);
  const [focused, setFocused] = import_react54.default.useState(false);
  const compositionRef = import_react54.default.useRef(false);
  const [textareaResized, setTextareaResized] = import_react54.default.useState(null);
  const holderRef = (0, import_react54.useRef)(null);
  const resizableTextAreaRef = (0, import_react54.useRef)(null);
  const getTextArea = () => {
    var _a;
    return (_a = resizableTextAreaRef.current) == null ? void 0 : _a.textArea;
  };
  const focus = () => {
    getTextArea().focus();
  };
  (0, import_react54.useImperativeHandle)(ref, () => {
    var _a;
    return {
      resizableTextArea: resizableTextAreaRef.current,
      focus,
      blur: () => {
        getTextArea().blur();
      },
      nativeElement: ((_a = holderRef.current) == null ? void 0 : _a.nativeElement) || getTextArea()
    };
  });
  (0, import_react54.useEffect)(() => {
    setFocused((prev) => !disabled && prev);
  }, [disabled]);
  const [selection, setSelection] = import_react54.default.useState(null);
  import_react54.default.useEffect(() => {
    if (selection) {
      getTextArea().setSelectionRange(...selection);
    }
  }, [selection]);
  const countConfig = useCount(count, showCount);
  const mergedMax = countConfig.max ?? maxLength;
  const hasMaxLength = Number(mergedMax) > 0;
  const valueLength = countConfig.strategy(formatValue);
  const isOutOfRange = !!mergedMax && valueLength > mergedMax;
  const triggerChange = (e, currentValue) => {
    let cutValue = currentValue;
    if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
      cutValue = countConfig.exceedFormatter(currentValue, {
        max: countConfig.max
      });
      if (currentValue !== cutValue) {
        setSelection([getTextArea().selectionStart || 0, getTextArea().selectionEnd || 0]);
      }
    }
    setValue(cutValue);
    resolveOnChange(e.currentTarget, e, onChange, cutValue);
  };
  const onInternalCompositionStart = (e) => {
    compositionRef.current = true;
    onCompositionStart == null ? void 0 : onCompositionStart(e);
  };
  const onInternalCompositionEnd = (e) => {
    compositionRef.current = false;
    triggerChange(e, e.currentTarget.value);
    onCompositionEnd == null ? void 0 : onCompositionEnd(e);
  };
  const onInternalChange = (e) => {
    triggerChange(e, e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onPressEnter && !e.nativeEvent.isComposing) {
      onPressEnter(e);
    }
    onKeyDown == null ? void 0 : onKeyDown(e);
  };
  const handleFocus = (e) => {
    setFocused(true);
    onFocus == null ? void 0 : onFocus(e);
  };
  const handleBlur = (e) => {
    setFocused(false);
    onBlur == null ? void 0 : onBlur(e);
  };
  const handleReset = (e) => {
    setValue("");
    focus();
    resolveOnChange(getTextArea(), e, onChange);
  };
  let suffixNode = suffix;
  let dataCount;
  if (countConfig.show) {
    if (countConfig.showFormatter) {
      dataCount = countConfig.showFormatter({
        value: formatValue,
        count: valueLength,
        maxLength: mergedMax
      });
    } else {
      dataCount = `${valueLength}${hasMaxLength ? ` / ${mergedMax}` : ""}`;
    }
    suffixNode = import_react54.default.createElement(import_react54.default.Fragment, null, suffixNode, import_react54.default.createElement("span", {
      className: clsx(`${prefixCls}-data-count`, classNames == null ? void 0 : classNames.count),
      style: styles == null ? void 0 : styles.count
    }, dataCount));
  }
  const handleResize = (size) => {
    var _a;
    onResize2 == null ? void 0 : onResize2(size);
    if ((_a = getTextArea()) == null ? void 0 : _a.style.height) {
      setTextareaResized(true);
    }
  };
  const isPureTextArea = !autoSize && !showCount && !allowClear;
  return import_react54.default.createElement(BaseInput_default, {
    ref: holderRef,
    value: formatValue,
    allowClear,
    handleReset,
    suffix: suffixNode,
    prefixCls,
    classNames: {
      ...classNames,
      affixWrapper: clsx(classNames == null ? void 0 : classNames.affixWrapper, {
        [`${prefixCls}-show-count`]: showCount,
        [`${prefixCls}-textarea-allow-clear`]: allowClear
      })
    },
    disabled,
    focused,
    className: clsx(className, isOutOfRange && `${prefixCls}-out-of-range`),
    style: {
      ...style2,
      ...textareaResized && !isPureTextArea ? {
        height: "auto"
      } : {}
    },
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof dataCount === "string" ? dataCount : void 0
      }
    },
    hidden,
    readOnly,
    onClear
  }, import_react54.default.createElement(ResizableTextArea_default, _extends17({}, rest, {
    autoSize,
    maxLength,
    onKeyDown: handleKeyDown,
    onChange: onInternalChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onCompositionStart: onInternalCompositionStart,
    onCompositionEnd: onInternalCompositionEnd,
    className: clsx(classNames == null ? void 0 : classNames.textarea),
    style: {
      resize: style2 == null ? void 0 : style2.resize,
      ...styles == null ? void 0 : styles.textarea
    },
    disabled,
    prefixCls,
    onResize: handleResize,
    ref: resizableTextAreaRef,
    readOnly
  })));
});
var TextArea_default = TextArea;

// node_modules/@rc-component/textarea/es/index.js
var es_default10 = TextArea_default;

// node_modules/antd/es/_util/getAllowClear.js
var import_react55 = __toESM(require_react());

// node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js
var React99 = __toESM(require_react());
function _extends18() {
  _extends18 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends18.apply(this, arguments);
}
var CloseCircleFilled = (props, ref) => React99.createElement(AntdIcon_default, _extends18({}, props, {
  ref,
  icon: CloseCircleFilled_default
}));
var RefIcon4 = React99.forwardRef(CloseCircleFilled);
if (true) {
  RefIcon4.displayName = "CloseCircleFilled";
}
var CloseCircleFilled_default2 = RefIcon4;

// node_modules/antd/es/_util/getAllowClear.js
var getAllowClear = (allowClear) => {
  let mergedAllowClear;
  if (typeof allowClear === "object" && (allowClear == null ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: import_react55.default.createElement(CloseCircleFilled_default2, null)
    };
  }
  return mergedAllowClear;
};
var getAllowClear_default = getAllowClear;

// node_modules/antd/es/_util/statusUtils.js
var getStatusClassNames = (prefixCls, status, hasFeedback) => {
  return clsx({
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
};
var getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;

// node_modules/antd/es/form/hooks/useVariants.js
var React101 = __toESM(require_react());
var useVariant = (component, variant, legacyBordered) => {
  const {
    variant: configVariant,
    [component]: componentConfig
  } = React101.useContext(ConfigContext);
  const ctxVariant = React101.useContext(VariantContext);
  const configComponentVariant = componentConfig == null ? void 0 : componentConfig.variant;
  let mergedVariant;
  if (typeof variant !== "undefined") {
    mergedVariant = variant;
  } else if (legacyBordered === false) {
    mergedVariant = "borderless";
  } else {
    mergedVariant = ctxVariant ?? configComponentVariant ?? configVariant ?? "outlined";
  }
  const enableVariantCls = Variants.includes(mergedVariant);
  return [mergedVariant, enableVariantCls];
};
var useVariants_default = useVariant;

// node_modules/antd/es/input/Input.js
var import_react57 = __toESM(require_react());

// node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js
var import_react56 = __toESM(require_react());
function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  const removePasswordTimeoutRef = (0, import_react56.useRef)([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(setTimeout(() => {
      var _a, _b, _c, _d;
      if (((_a = inputRef.current) == null ? void 0 : _a.input) && ((_b = inputRef.current) == null ? void 0 : _b.input.getAttribute("type")) === "password" && ((_c = inputRef.current) == null ? void 0 : _c.input.hasAttribute("value"))) {
        (_d = inputRef.current) == null ? void 0 : _d.input.removeAttribute("value");
      }
    }));
  };
  (0, import_react56.useEffect)(() => {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return () => removePasswordTimeoutRef.current.forEach((timer) => {
      if (timer) {
        clearTimeout(timer);
      }
    });
  }, []);
  return removePasswordTimeout;
}

// node_modules/antd/es/style/compact-item.js
function compactItemBorder(token, parentCls, options, prefixCls) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n) => `&:${n} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${prefixCls}-status-success)`]: {
      zIndex: 2
    },
    "&-item": {
      [hoverEffects]: {
        zIndex: 3
      },
      ...focusElCls ? {
        [`&${focusElCls}`]: {
          zIndex: 3
        }
      } : {},
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token, options = {
  focus: true
}) {
  const {
    componentCls
  } = token;
  const {
    componentCls: customizePrefixCls
  } = options;
  const mergedComponentCls = customizePrefixCls || componentCls;
  const compactCls = `${mergedComponentCls}-compact`;
  return {
    [compactCls]: {
      ...compactItemBorder(token, compactCls, options, mergedComponentCls),
      ...compactItemBorderRadius(mergedComponentCls, compactCls, options)
    }
  };
}

// node_modules/antd/es/input/style/token.js
function initInputToken(token) {
  return merge2(token, {
    inputAffixPadding: token.paddingXXS
  });
}
var initComponentToken = (token) => {
  const {
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    controlHeightSM,
    controlHeightLG,
    fontSizeLG,
    lineHeightLG,
    paddingSM,
    controlPaddingHorizontalSM,
    controlPaddingHorizontal,
    colorFillAlter,
    colorPrimaryHover,
    colorPrimary,
    controlOutlineWidth,
    controlOutline,
    colorErrorOutline,
    colorWarningOutline,
    colorBgContainer,
    inputFontSize,
    inputFontSizeLG,
    inputFontSizeSM
  } = token;
  const mergedFontSize = inputFontSize || fontSize;
  const mergedFontSizeSM = inputFontSizeSM || mergedFontSize;
  const mergedFontSizeLG = inputFontSizeLG || fontSizeLG;
  const paddingBlock = Math.round((controlHeight - mergedFontSize * lineHeight) / 2 * 10) / 10 - lineWidth;
  const paddingBlockSM = Math.round((controlHeightSM - mergedFontSizeSM * lineHeight) / 2 * 10) / 10 - lineWidth;
  const paddingBlockLG = Math.ceil((controlHeightLG - mergedFontSizeLG * lineHeightLG) / 2 * 10) / 10 - lineWidth;
  return {
    paddingBlock: Math.max(paddingBlock, 0),
    paddingBlockSM: Math.max(paddingBlockSM, 0),
    paddingBlockLG: Math.max(paddingBlockLG, 0),
    paddingInline: paddingSM - lineWidth,
    paddingInlineSM: controlPaddingHorizontalSM - lineWidth,
    paddingInlineLG: controlPaddingHorizontal - lineWidth,
    addonBg: colorFillAlter,
    activeBorderColor: colorPrimary,
    hoverBorderColor: colorPrimaryHover,
    activeShadow: `0 0 0 ${controlOutlineWidth}px ${controlOutline}`,
    errorActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorErrorOutline}`,
    warningActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorWarningOutline}`,
    hoverBg: colorBgContainer,
    activeBg: colorBgContainer,
    inputFontSize: mergedFontSize,
    inputFontSizeLG: mergedFontSizeLG,
    inputFontSizeSM: mergedFontSizeSM
  };
};

// node_modules/antd/es/input/style/variants.js
var genHoverStyle = (token) => ({
  borderColor: token.hoverBorderColor,
  backgroundColor: token.hoverBg
});
var genDisabledStyle = (token) => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": {
    ...genHoverStyle(merge2(token, {
      hoverBorderColor: token.colorBorder,
      hoverBg: token.colorBgContainerDisabled
    }))
  }
});
var genBaseOutlinedStyle = (token, options) => ({
  background: token.colorBgContainer,
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: options.borderColor,
  "&:hover": {
    borderColor: options.hoverBorderColor,
    backgroundColor: token.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: options.activeBorderColor,
    boxShadow: options.activeShadow,
    outline: 0,
    backgroundColor: token.activeBg
  }
});
var genOutlinedStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
    ...genBaseOutlinedStyle(token, options),
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  },
  [`&${token.componentCls}-status-${options.status}${token.componentCls}-disabled`]: {
    borderColor: options.borderColor
  }
});
var genOutlinedStyle = (token, extraStyles) => ({
  "&-outlined": {
    ...genBaseOutlinedStyle(token, {
      borderColor: token.colorBorder,
      hoverBorderColor: token.hoverBorderColor,
      activeBorderColor: token.activeBorderColor,
      activeShadow: token.activeShadow
    }),
    [`&${token.componentCls}-disabled, &[disabled]`]: {
      ...genDisabledStyle(token)
    },
    ...genOutlinedStatusStyle(token, {
      status: "error",
      borderColor: token.colorError,
      hoverBorderColor: token.colorErrorBorderHover,
      activeBorderColor: token.colorError,
      activeShadow: token.errorActiveShadow,
      affixColor: token.colorError
    }),
    ...genOutlinedStatusStyle(token, {
      status: "warning",
      borderColor: token.colorWarning,
      hoverBorderColor: token.colorWarningBorderHover,
      activeBorderColor: token.colorWarning,
      activeShadow: token.warningActiveShadow,
      affixColor: token.colorWarning
    }),
    ...extraStyles
  }
});
var genOutlinedGroupStatusStyle = (token, options) => ({
  [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
    [`${token.componentCls}-group-addon`]: {
      borderColor: options.addonBorderColor,
      color: options.addonColor
    }
  }
});
var genOutlinedGroupStyle = (token) => ({
  "&-outlined": {
    [`${token.componentCls}-group`]: {
      "&-addon": {
        background: token.addonBg,
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    ...genOutlinedGroupStatusStyle(token, {
      status: "error",
      addonBorderColor: token.colorError,
      addonColor: token.colorErrorText
    }),
    ...genOutlinedGroupStatusStyle(token, {
      status: "warning",
      addonBorderColor: token.colorWarning,
      addonColor: token.colorWarningText
    }),
    [`&${token.componentCls}-group-wrapper-disabled`]: {
      [`${token.componentCls}-group-addon`]: {
        ...genDisabledStyle(token)
      }
    }
  }
});
var genBorderlessStyle = (token, extraStyles) => {
  const {
    componentCls
  } = token;
  return {
    "&-borderless": {
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${componentCls}-disabled, &[disabled]`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${componentCls}-status-error`]: {
        "&, & input, & textarea": {
          color: token.colorError
        }
      },
      [`&${componentCls}-status-warning`]: {
        "&, & input, & textarea": {
          color: token.colorWarning
        }
      },
      ...extraStyles
    }
  };
};
var genBaseFilledStyle = (token, options) => ({
  background: options.bg,
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: (options == null ? void 0 : options.inputColor) ?? "unset"
  },
  "&:hover": {
    background: options.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: options.activeBorderColor,
    backgroundColor: token.activeBg
  }
});
var genFilledStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
    ...genBaseFilledStyle(token, options),
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  }
});
var genFilledStyle = (token, extraStyles) => ({
  "&-filled": {
    ...genBaseFilledStyle(token, {
      bg: token.colorFillTertiary,
      hoverBg: token.colorFillSecondary,
      activeBorderColor: token.activeBorderColor,
      inputColor: token.colorText
    }),
    [`&${token.componentCls}-disabled, &[disabled]`]: {
      ...genDisabledStyle(token)
    },
    ...genFilledStatusStyle(token, {
      status: "error",
      bg: token.colorErrorBg,
      hoverBg: token.colorErrorBgHover,
      activeBorderColor: token.colorError,
      inputColor: token.colorErrorText,
      affixColor: token.colorError
    }),
    ...genFilledStatusStyle(token, {
      status: "warning",
      bg: token.colorWarningBg,
      hoverBg: token.colorWarningBgHover,
      activeBorderColor: token.colorWarning,
      inputColor: token.colorWarningText,
      affixColor: token.colorWarning
    }),
    ...extraStyles
  }
});
var genFilledGroupStatusStyle = (token, options) => ({
  [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
    [`${token.componentCls}-group-addon`]: {
      background: options.addonBg,
      color: options.addonColor
    }
  }
});
var genFilledGroupStyle = (token) => ({
  "&-filled": {
    [`${token.componentCls}-group-addon`]: {
      background: token.colorFillTertiary,
      "&:last-child": {
        position: "static"
      }
    },
    ...genFilledGroupStatusStyle(token, {
      status: "error",
      addonBg: token.colorErrorBg,
      addonColor: token.colorErrorText
    }),
    ...genFilledGroupStatusStyle(token, {
      status: "warning",
      addonBg: token.colorWarningBg,
      addonColor: token.colorWarningText
    }),
    [`&${token.componentCls}-group-wrapper-disabled`]: {
      [`${token.componentCls}-group`]: {
        "&-addon": {
          background: token.colorFillTertiary,
          color: token.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        }
      }
    }
  }
});
var genBaseUnderlinedStyle = (token, options) => ({
  background: token.colorBgContainer,
  borderWidth: `${unit(token.lineWidth)} 0`,
  borderStyle: `${token.lineType} none`,
  borderColor: `transparent transparent ${options.borderColor} transparent`,
  borderRadius: 0,
  "&:hover": {
    borderColor: `transparent transparent ${options.hoverBorderColor} transparent`,
    backgroundColor: token.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: `transparent transparent ${options.activeBorderColor} transparent`,
    outline: 0,
    backgroundColor: token.activeBg
  }
});
var genUnderlinedStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
    ...genBaseUnderlinedStyle(token, options),
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  },
  [`&${token.componentCls}-status-${options.status}${token.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${options.borderColor} transparent`
  }
});
var genUnderlinedStyle = (token, extraStyles) => ({
  "&-underlined": {
    ...genBaseUnderlinedStyle(token, {
      borderColor: token.colorBorder,
      hoverBorderColor: token.hoverBorderColor,
      activeBorderColor: token.activeBorderColor,
      activeShadow: token.activeShadow
    }),
    // >>>>> Disabled
    [`&${token.componentCls}-disabled, &[disabled]`]: {
      color: token.colorTextDisabled,
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: `transparent transparent ${token.colorBorder} transparent`
      }
    },
    "input[disabled], textarea[disabled]": {
      cursor: "not-allowed"
    },
    ...genUnderlinedStatusStyle(token, {
      status: "error",
      borderColor: token.colorError,
      hoverBorderColor: token.colorErrorBorderHover,
      activeBorderColor: token.colorError,
      activeShadow: token.errorActiveShadow,
      affixColor: token.colorError
    }),
    ...genUnderlinedStatusStyle(token, {
      status: "warning",
      borderColor: token.colorWarning,
      hoverBorderColor: token.colorWarningBorderHover,
      activeBorderColor: token.colorWarning,
      activeShadow: token.warningActiveShadow,
      affixColor: token.colorWarning
    }),
    ...extraStyles
  }
});

// node_modules/antd/es/input/style/index.js
var genPlaceholderStyle = (color) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
});
var genInputLargeStyle = (token) => {
  const {
    paddingBlockLG,
    lineHeightLG,
    borderRadiusLG,
    paddingInlineLG
  } = token;
  return {
    padding: `${unit(paddingBlockLG)} ${unit(paddingInlineLG)}`,
    fontSize: token.inputFontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
var genInputSmallStyle = (token) => ({
  padding: `${unit(token.paddingBlockSM)} ${unit(token.paddingInlineSM)}`,
  fontSize: token.inputFontSizeSM,
  borderRadius: token.borderRadiusSM
});
var genBasicInputStyle = (token, option = {}) => ({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${unit(token.paddingBlock)} ${unit(token.paddingInline)}`,
  color: token.colorText,
  fontSize: token.inputFontSize,
  lineHeight: token.lineHeight,
  borderRadius: token.borderRadius,
  transition: `all ${token.motionDurationMid}`,
  ...genPlaceholderStyle(token.colorTextPlaceholder),
  // Size
  "&-lg": {
    ...genInputLargeStyle(token),
    ...option.largeStyle
  },
  "&-sm": {
    ...genInputSmallStyle(token),
    ...option.smallStyle
  },
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
});
var genInputGroupStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: token.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: {
      ...genInputLargeStyle(token)
    },
    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: {
      ...genInputSmallStyle(token)
    },
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${antCls}-select-single`]: {
      height: token.controlHeightLG
    },
    [`&-sm ${antCls}-select-single`]: {
      height: token.controlHeightSM
    },
    [`> ${componentCls}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${componentCls}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${unit(token.paddingInline)}`,
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.inputFontSize,
        textAlign: "center",
        borderRadius: token.borderRadius,
        transition: `all ${token.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${antCls}-select`]: {
          margin: `${unit(token.calc(token.paddingBlock).add(1).mul(-1).equal())} ${unit(token.calc(token.paddingInline).mul(-1).equal())}`,
          [`&${antCls}-select-single:not(${antCls}-select-customize-input):not(${antCls}-pagination-size-changer)`]: {
            backgroundColor: "inherit",
            border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
            boxShadow: "none"
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${antCls}-cascader-picker`]: {
          margin: `-9px ${unit(token.calc(token.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${antCls}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [componentCls]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1
      }
    },
    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${componentCls}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      },
      "&:not(:first-child)": {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${componentCls}-group-compact`]: {
      display: "block",
      ...clearFix(),
      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: token.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${componentCls}-affix-wrapper,
        & > ${componentCls}-number-affix-wrapper,
        & > ${antCls}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: token.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [componentCls]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${antCls}-select,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${antCls}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${antCls}-select:first-child,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius
      },
      [`& > *:last-child,
      & > ${antCls}-select:last-child,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderStartEndRadius: token.borderRadius,
        borderEndEndRadius: token.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: "top"
      },
      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
        [`${componentCls}-affix-wrapper`]: {
          // borderRadius: 0,
        }
      }
    }
  };
};
var genInputStyle = (token) => {
  const {
    componentCls,
    controlHeightSM,
    lineWidth,
    calc
  } = token;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = calc(controlHeightSM).sub(calc(lineWidth).mul(2)).sub(FIXED_CHROME_COLOR_HEIGHT).div(2).equal();
  return {
    [componentCls]: {
      ...resetComponent(token),
      ...genBasicInputStyle(token),
      // Variants
      ...genOutlinedStyle(token),
      ...genFilledStyle(token),
      ...genBorderlessStyle(token),
      ...genUnderlinedStyle(token),
      '&[type="color"]': {
        height: token.controlHeight,
        [`&${componentCls}-lg`]: {
          height: token.controlHeightLG
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        appearance: "none"
      }
    }
  };
};
var genAllowClearStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${token.motionDurationSlow}`,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      "&:hover": {
        color: token.colorIcon
      },
      "&:active": {
        color: token.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${unit(token.inputAffixPadding)}`
      }
    }
  };
};
var genAffixStyle = (token) => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
    iconCls
  } = token;
  const affixCls = `${componentCls}-affix-wrapper`;
  const affixClsDisabled = `${componentCls}-affix-wrapper-disabled`;
  return {
    [affixCls]: {
      ...genBasicInputStyle(token),
      display: "inline-flex",
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${componentCls}`]: {
        padding: 0
      },
      [`> input${componentCls}, > textarea${componentCls}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [componentCls]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: token.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: colorTextDescription,
          direction: "ltr"
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: token.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: inputAffixPadding
        },
        "&-suffix": {
          marginInlineStart: inputAffixPadding
        }
      },
      ...genAllowClearStyle(token),
      // password
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "pointer",
        transition: `all ${motionDurationSlow}`,
        "&:hover": {
          color: colorIconHover
        }
      }
    },
    // 覆盖 affix-wrapper borderRadius！
    [`${componentCls}-underlined`]: {
      borderRadius: 0
    },
    [affixClsDisabled]: {
      // password disabled
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "not-allowed",
        "&:hover": {
          color: colorIcon
        }
      }
    }
  };
};
var genGroupStyle = (token) => {
  const {
    componentCls,
    borderRadiusLG,
    borderRadiusSM
  } = token;
  return {
    [`${componentCls}-group`]: {
      // Style for input-group: input with label, with button or dropdown...
      ...resetComponent(token),
      ...genInputGroupStyle(token),
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design/issues/6403
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusLG,
            fontSize: token.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusSM
          }
        },
        // Variants
        ...genOutlinedGroupStyle(token),
        ...genFilledGroupStyle(token),
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        // Fix the issue of input use `addonAfter` param in space compact mode
        // https://github.com/ant-design/ant-design/issues/52483
        [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-item`]: {
          [`${componentCls}-affix-wrapper`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      }
    }
  };
};
var genRangeStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-out-of-range`]: {
      [`&, & input, & textarea, ${componentCls}-show-count-suffix, ${componentCls}-data-count`]: {
        color: token.colorError
      }
    }
  };
};
var useSharedStyle = genStyleHooks(["Input", "Shared"], (token) => {
  const inputToken = merge2(token, initInputToken(token));
  return [genInputStyle(inputToken), genAffixStyle(inputToken)];
}, initComponentToken, {
  resetFont: false
});
var style_default2 = genStyleHooks(["Input", "Component"], (token) => {
  const inputToken = merge2(token, initInputToken(token));
  return [
    genGroupStyle(inputToken),
    genRangeStyle(inputToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(inputToken, {
      focus: true,
      focusElCls: `${inputToken.componentCls}-affix-wrapper-focused`
    })
  ];
}, initComponentToken, {
  resetFont: false
});

// node_modules/antd/es/input/utils.js
function hasPrefixSuffix2(props) {
  return !!(props.prefix || props.suffix || props.allowClear || props.showCount);
}

// node_modules/antd/es/input/Input.js
var Input2 = (0, import_react57.forwardRef)((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    status: customStatus,
    size: customSize,
    disabled: customDisabled,
    onBlur,
    onFocus,
    suffix,
    allowClear,
    addonAfter,
    addonBefore,
    className,
    style: style2,
    styles,
    rootClassName,
    onChange,
    classNames,
    variant: customVariant,
    ...rest
  } = props;
  if (true) {
    const {
      deprecated
    } = devUseWarning("Input");
    [["bordered", "variant"], ["addonAfter", "Space.Compact"], ["addonBefore", "Space.Compact"]].forEach(([prop, newProp]) => {
      deprecated(!(prop in props), prop, newProp);
    });
  }
  const {
    getPrefixCls,
    direction,
    allowClear: contextAllowClear,
    autoComplete: contextAutoComplete,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("input");
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const inputRef = (0, import_react57.useRef)(null);
  const rootCls = useCSSVarCls_default(prefixCls);
  const [hashId, cssVarCls] = useSharedStyle(prefixCls, rootClassName);
  style_default2(prefixCls, rootCls);
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const mergedSize = useSize_default((ctx) => customSize ?? compactSize ?? ctx);
  const disabled = import_react57.default.useContext(DisabledContext_default);
  const mergedDisabled = customDisabled ?? disabled;
  const mergedProps = {
    ...props,
    size: mergedSize,
    disabled: mergedDisabled
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = (0, import_react57.useContext)(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const inputHasPrefixSuffix = hasPrefixSuffix2(props) || !!hasFeedback;
  const prevHasPrefixSuffix = (0, import_react57.useRef)(inputHasPrefixSuffix);
  if (true) {
    const warning6 = devUseWarning("Input");
    (0, import_react57.useEffect)(() => {
      var _a;
      if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) {
        true ? warning6(document.activeElement === ((_a = inputRef.current) == null ? void 0 : _a.input), "usage", `When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ`) : void 0;
      }
      prevHasPrefixSuffix.current = inputHasPrefixSuffix;
    }, [inputHasPrefixSuffix]);
  }
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);
  const handleBlur = (e) => {
    removePasswordTimeout();
    onBlur == null ? void 0 : onBlur(e);
  };
  const handleFocus = (e) => {
    removePasswordTimeout();
    onFocus == null ? void 0 : onFocus(e);
  };
  const handleChange = (e) => {
    removePasswordTimeout();
    onChange == null ? void 0 : onChange(e);
  };
  const suffixNode = (hasFeedback || suffix) && import_react57.default.createElement(import_react57.default.Fragment, null, suffix, hasFeedback && feedbackIcon);
  const mergedAllowClear = getAllowClear_default(allowClear ?? contextAllowClear);
  const [variant, enableVariantCls] = useVariants_default("input", customVariant, bordered);
  return import_react57.default.createElement(es_default9, {
    ref: composeRef(ref, inputRef),
    prefixCls,
    autoComplete: contextAutoComplete,
    ...rest,
    disabled: mergedDisabled,
    onBlur: handleBlur,
    onFocus: handleFocus,
    style: {
      ...mergedStyles.root,
      ...contextStyle,
      ...style2
    },
    styles: mergedStyles,
    suffix: suffixNode,
    allowClear: mergedAllowClear,
    className: clsx(className, rootClassName, cssVarCls, rootCls, compactItemClassnames, contextClassName, mergedClassNames.root),
    onChange: handleChange,
    addonBefore: addonBefore && import_react57.default.createElement(ContextIsolator_default, {
      form: true,
      space: true
    }, addonBefore),
    addonAfter: addonAfter && import_react57.default.createElement(ContextIsolator_default, {
      form: true,
      space: true
    }, addonAfter),
    classNames: {
      ...mergedClassNames,
      input: clsx({
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large",
        [`${prefixCls}-rtl`]: direction === "rtl"
      }, mergedClassNames.input, hashId),
      variant: clsx({
        [`${prefixCls}-${variant}`]: enableVariantCls
      }, getStatusClassNames(prefixCls, mergedStatus)),
      affixWrapper: clsx({
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl"
      }, hashId),
      wrapper: clsx({
        [`${prefixCls}-group-rtl`]: direction === "rtl"
      }, hashId),
      groupWrapper: clsx({
        [`${prefixCls}-group-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-group-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-group-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-group-wrapper-${variant}`]: enableVariantCls
      }, getStatusClassNames(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback), hashId)
    }
  });
});
if (true) {
  Input2.displayName = "Input";
}
var Input_default2 = Input2;

// node_modules/antd/es/input/style/textarea.js
var genTextAreaStyle = (token) => {
  const {
    componentCls,
    paddingLG
  } = token;
  const textareaPrefixCls = `${componentCls}-textarea`;
  return {
    // Raw Textarea
    [`textarea${componentCls}`]: {
      maxWidth: "100%",
      // prevent textarea resize from coming out of its container
      height: "auto",
      minHeight: token.controlHeight,
      lineHeight: token.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${token.motionDurationSlow}`,
      resize: "vertical",
      [`&${componentCls}-mouse-active`]: {
        transition: `all ${token.motionDurationSlow}, height 0s, width 0s`
      }
    },
    // Wrapper for resize
    [`${componentCls}-textarea-affix-wrapper-resize-dirty`]: {
      width: "auto"
    },
    [textareaPrefixCls]: {
      position: "relative",
      "&-show-count": {
        [`${componentCls}-data-count`]: {
          position: "absolute",
          bottom: token.calc(token.fontSize).mul(token.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: token.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${componentCls},
        &-affix-wrapper${textareaPrefixCls}-has-feedback ${componentCls}
      `]: {
        paddingInlineEnd: paddingLG
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${componentCls}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          minHeight: token.calc(token.controlHeight).sub(token.calc(token.lineWidth).mul(2)).equal(),
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${componentCls}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${componentCls}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: token.paddingInline,
            insetBlockStart: token.paddingXS
          },
          // Feedback Icon
          [`${textareaPrefixCls}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: token.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper-rtl`]: {
        [`${componentCls}-suffix`]: {
          [`${componentCls}-data-count`]: {
            direction: "ltr",
            insetInlineStart: 0
          }
        }
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper-sm`]: {
        [`${componentCls}-suffix`]: {
          [`${componentCls}-clear-icon`]: {
            insetInlineEnd: token.paddingInlineSM
          }
        }
      }
    }
  };
};
var textarea_default = genStyleHooks(["Input", "TextArea"], (token) => {
  const inputToken = merge2(token, initInputToken(token));
  return genTextAreaStyle(inputToken);
}, initComponentToken, {
  resetFont: false
});

// node_modules/antd/es/input/TextArea.js
var TextArea2 = (0, import_react58.forwardRef)((props, ref) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    size: customizeSize,
    disabled: customDisabled,
    status: customStatus,
    allowClear,
    classNames,
    rootClassName,
    className,
    style: style2,
    styles,
    variant: customVariant,
    showCount,
    onMouseDown,
    onResize: onResize2,
    ...rest
  } = props;
  if (true) {
    const {
      deprecated
    } = devUseWarning("TextArea");
    deprecated(!("bordered" in props), "bordered", "variant");
  }
  const {
    getPrefixCls,
    direction,
    allowClear: contextAllowClear,
    autoComplete: contextAutoComplete,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("textArea");
  const disabled = React103.useContext(DisabledContext_default);
  const mergedDisabled = customDisabled ?? disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = React103.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props
  });
  const innerRef = React103.useRef(null);
  React103.useImperativeHandle(ref, () => {
    var _a2, _b;
    return {
      resizableTextArea: (_a2 = innerRef.current) == null ? void 0 : _a2.resizableTextArea,
      focus: (option) => {
        var _a3, _b2;
        triggerFocus((_b2 = (_a3 = innerRef.current) == null ? void 0 : _a3.resizableTextArea) == null ? void 0 : _b2.textArea, option);
      },
      blur: () => {
        var _a3;
        return (_a3 = innerRef.current) == null ? void 0 : _a3.blur();
      },
      nativeElement: ((_b = innerRef.current) == null ? void 0 : _b.nativeElement) || null
    };
  });
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const rootCls = useCSSVarCls_default(prefixCls);
  const [hashId, cssVarCls] = useSharedStyle(prefixCls, rootClassName);
  textarea_default(prefixCls, rootCls);
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const mergedSize = useSize_default((ctx) => customizeSize ?? compactSize ?? ctx);
  const [variant, enableVariantCls] = useVariants_default("textArea", customVariant, bordered);
  const mergedAllowClear = getAllowClear_default(allowClear ?? contextAllowClear);
  const [isMouseDown, setIsMouseDown] = React103.useState(false);
  const [resizeDirty, setResizeDirty] = React103.useState(false);
  const onInternalMouseDown = (e) => {
    setIsMouseDown(true);
    onMouseDown == null ? void 0 : onMouseDown(e);
    const onMouseUp = () => {
      setIsMouseDown(false);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mouseup", onMouseUp);
  };
  const onInternalResize = (size) => {
    var _a2, _b;
    onResize2 == null ? void 0 : onResize2(size);
    if (isMouseDown && typeof getComputedStyle === "function") {
      const ele = (_b = (_a2 = innerRef.current) == null ? void 0 : _a2.nativeElement) == null ? void 0 : _b.querySelector("textarea");
      if (ele && getComputedStyle(ele).resize === "both") {
        setResizeDirty(true);
      }
    }
  };
  return React103.createElement(es_default10, {
    autoComplete: contextAutoComplete,
    ...rest,
    style: {
      ...mergedStyles.root,
      ...contextStyle,
      ...style2
    },
    styles: mergedStyles,
    disabled: mergedDisabled,
    allowClear: mergedAllowClear,
    className: clsx(
      cssVarCls,
      rootCls,
      className,
      rootClassName,
      compactItemClassnames,
      contextClassName,
      mergedClassNames.root,
      // Only for wrapper
      {
        [`${prefixCls}-textarea-affix-wrapper-resize-dirty`]: resizeDirty
      }
    ),
    classNames: {
      ...mergedClassNames,
      textarea: clsx({
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large"
      }, hashId, mergedClassNames.textarea, isMouseDown && `${prefixCls}-mouse-active`),
      variant: clsx({
        [`${prefixCls}-${variant}`]: enableVariantCls
      }, getStatusClassNames(prefixCls, mergedStatus)),
      affixWrapper: clsx(`${prefixCls}-textarea-affix-wrapper`, {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-textarea-show-count`]: showCount || ((_a = props.count) == null ? void 0 : _a.show)
      }, hashId)
    },
    prefixCls,
    suffix: hasFeedback && React103.createElement("span", {
      className: `${prefixCls}-textarea-suffix`
    }, feedbackIcon),
    showCount,
    ref: innerRef,
    onResize: onInternalResize,
    onMouseDown: onInternalMouseDown
  });
});
var TextArea_default2 = TextArea2;

// node_modules/antd/es/typography/style/mixins.js
var getTitleStyle = (fontSize, lineHeight, color, token) => {
  const {
    titleMarginBottom,
    fontWeightStrong
  } = token;
  return {
    marginBottom: titleMarginBottom,
    color,
    fontWeight: fontWeightStrong,
    fontSize,
    lineHeight
  };
};
var getTitleStyles = (token) => {
  const headings = [1, 2, 3, 4, 5];
  const styles = {};
  headings.forEach((headingLevel) => {
    styles[`
      h${headingLevel}&,
      div&-h${headingLevel},
      div&-h${headingLevel} > textarea,
      h${headingLevel}
    `] = getTitleStyle(token[`fontSizeHeading${headingLevel}`], token[`lineHeightHeading${headingLevel}`], token.colorTextHeading, token);
  });
  return styles;
};
var getLinkStyles = (token) => {
  const {
    componentCls
  } = token;
  const linkCls = `${componentCls}-link`;
  return {
    [`&${linkCls}`]: {
      ...operationUnit(token),
      userSelect: "text",
      [`&[disabled], &${componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: token.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    }
  };
};
var getResetStyles = (token) => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    fontFamily: token.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    fontFamily: token.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: gold[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: token.fontWeightStrong
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    fontFamily: token.fontFamilyCode,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
});
var getEditableStyles = (token) => {
  const {
    componentCls,
    paddingSM
  } = token;
  const inputShift = paddingSM;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: token.calc(token.paddingSM).mul(-1).equal(),
        insetBlockStart: token.calc(inputShift).div(-2).add(1).equal(),
        marginBottom: token.calc(inputShift).div(2).sub(2).equal()
      },
      [`${componentCls}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: token.calc(token.marginXS).add(2).equal(),
        insetBlockEnd: token.marginXS,
        color: token.colorIcon,
        // default style
        fontWeight: "normal",
        fontSize: token.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
};
var getCopyableStyles = (token) => ({
  [`${token.componentCls}-copy-success`]: {
    [`
    &,
    &:hover,
    &:focus`]: {
      color: token.colorSuccess
    }
  },
  [`${token.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
});
var getEllipsisStyles = () => ({
  [`
  a&-ellipsis,
  span&-ellipsis
  `]: {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-ellipsis-single-line": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    },
    "> code": {
      paddingBlock: 0,
      maxWidth: "calc(100% - 1.2em)",
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      verticalAlign: "bottom",
      // https://github.com/ant-design/ant-design/issues/45953
      boxSizing: "content-box"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
});

// node_modules/antd/es/typography/style/index.js
var genTypographyStyle = (token) => {
  const {
    componentCls,
    titleMarginTop
  } = token;
  return {
    [componentCls]: {
      color: token.colorText,
      wordBreak: "break-word",
      lineHeight: token.lineHeight,
      [`&${componentCls}-secondary, &${componentCls}-link${componentCls}-secondary`]: {
        color: token.colorTextDescription
      },
      [`&${componentCls}-success, &${componentCls}-link${componentCls}-success`]: {
        color: token.colorSuccessText
      },
      [`&${componentCls}-warning, &${componentCls}-link${componentCls}-warning`]: {
        color: token.colorWarningText
      },
      [`&${componentCls}-danger, &${componentCls}-link${componentCls}-danger`]: {
        color: token.colorErrorText,
        [`&${componentCls}-link:active, &${componentCls}-link:focus`]: {
          color: token.colorErrorTextActive
        },
        [`&${componentCls}-link:hover`]: {
          color: token.colorErrorTextHover
        }
      },
      [`&${componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      [`
        div&,
        p
      `]: {
        marginBottom: "1em"
      },
      ...getTitleStyles(token),
      [`
      & + h1${componentCls},
      & + h2${componentCls},
      & + h3${componentCls},
      & + h4${componentCls},
      & + h5${componentCls}
      `]: {
        marginTop: titleMarginTop
      },
      [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
        [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: {
          marginTop: titleMarginTop
        }
      },
      ...getResetStyles(token),
      ...getLinkStyles(token),
      // Operation
      [`
        ${componentCls}-expand,
        ${componentCls}-collapse,
        ${componentCls}-edit,
        ${componentCls}-copy
      `]: {
        ...operationUnit(token),
        marginInlineStart: token.marginXXS
      },
      ...getEditableStyles(token),
      ...getCopyableStyles(token),
      ...getEllipsisStyles(),
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
};
var prepareComponentToken2 = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
});
var style_default3 = genStyleHooks("Typography", genTypographyStyle, prepareComponentToken2);

// node_modules/antd/es/typography/Editable.js
var Editable = (props) => {
  const {
    prefixCls,
    "aria-label": ariaLabel,
    className,
    style: style2,
    direction,
    maxLength,
    autoSize = true,
    value,
    onSave,
    onCancel,
    onEnd,
    component,
    enterIcon = React104.createElement(EnterOutlined_default2, null)
  } = props;
  const ref = React104.useRef(null);
  const inComposition = React104.useRef(false);
  const lastKeyCode = React104.useRef(null);
  const [current, setCurrent] = React104.useState(value);
  React104.useEffect(() => {
    setCurrent(value);
  }, [value]);
  React104.useEffect(() => {
    var _a;
    if ((_a = ref.current) == null ? void 0 : _a.resizableTextArea) {
      const {
        textArea
      } = ref.current.resizableTextArea;
      textArea.focus();
      const {
        length
      } = textArea.value;
      textArea.setSelectionRange(length, length);
    }
  }, []);
  const onChange = ({
    target
  }) => {
    setCurrent(target.value.replace(/[\n\r]/g, ""));
  };
  const onCompositionStart = () => {
    inComposition.current = true;
  };
  const onCompositionEnd = () => {
    inComposition.current = false;
  };
  const onKeyDown = ({
    keyCode
  }) => {
    if (inComposition.current) {
      return;
    }
    lastKeyCode.current = keyCode;
  };
  const confirmChange = () => {
    onSave(current.trim());
  };
  const onKeyUp = ({
    keyCode,
    ctrlKey,
    altKey,
    metaKey,
    shiftKey
  }) => {
    if (lastKeyCode.current !== keyCode || inComposition.current || ctrlKey || altKey || metaKey || shiftKey) {
      return;
    }
    if (keyCode === KeyCode_default.ENTER) {
      confirmChange();
      onEnd == null ? void 0 : onEnd();
    } else if (keyCode === KeyCode_default.ESC) {
      onCancel();
    }
  };
  const onBlur = () => {
    confirmChange();
  };
  const [hashId, cssVarCls] = style_default3(prefixCls);
  const textAreaClassName = clsx(prefixCls, `${prefixCls}-edit-content`, {
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-${component}`]: !!component
  }, className, hashId, cssVarCls);
  return React104.createElement("div", {
    className: textAreaClassName,
    style: style2
  }, React104.createElement(TextArea_default2, {
    ref,
    maxLength,
    value: current,
    onChange,
    onKeyDown,
    onKeyUp,
    onCompositionStart,
    onCompositionEnd,
    onBlur,
    "aria-label": ariaLabel,
    rows: 1,
    autoSize
  }), enterIcon !== null ? cloneElement5(enterIcon, {
    className: `${prefixCls}-edit-content-confirm`
  }) : null);
};
var Editable_default = Editable;

// node_modules/antd/es/typography/hooks/useCopyClick.js
var React105 = __toESM(require_react());

// node_modules/antd/es/_util/copy.js
var execCopy = (text, isHtmlFormat) => {
  let copySuccess = false;
  const onCopy = (event) => {
    var _a, _b, _c;
    event.stopPropagation();
    event.preventDefault();
    (_a = event.clipboardData) == null ? void 0 : _a.clearData();
    (_b = event.clipboardData) == null ? void 0 : _b.setData("text/plain", text);
    if (isHtmlFormat) {
      (_c = event.clipboardData) == null ? void 0 : _c.setData("text/html", text);
    }
    copySuccess = true;
  };
  try {
    document.addEventListener("copy", onCopy, {
      capture: true
    });
    document.execCommand("copy");
    return copySuccess;
  } catch {
    return false;
  } finally {
    document.removeEventListener("copy", onCopy, {
      capture: true
    });
  }
};
var asyncCopy = async (text, isHtmlFormat) => {
  try {
    if (isHtmlFormat) {
      await navigator.clipboard.write([new ClipboardItem({
        "text/html": new Blob([text], {
          type: "text/html"
        }),
        "text/plain": new Blob([text], {
          type: "text/plain"
        })
      })]);
    } else {
      await navigator.clipboard.writeText(text);
    }
    return true;
  } catch {
    return false;
  }
};
async function copy(text, config) {
  if (typeof text !== "string") {
    true ? warning_default2(false, "The clipboard content must be of string type", "") : void 0;
    return false;
  }
  const isHtmlFormat = (config == null ? void 0 : config.format) === "text/html";
  if (await asyncCopy(text, isHtmlFormat)) {
    return true;
  }
  if (execCopy(text, isHtmlFormat)) {
    return true;
  }
  return false;
}
var copy_default = copy;

// node_modules/antd/es/_util/toList.js
var toList = (candidate, skipEmpty = false) => {
  if (skipEmpty && !isNonNullable_default(candidate)) {
    return [];
  }
  return Array.isArray(candidate) ? candidate : [candidate];
};
var toList_default = toList;

// node_modules/antd/es/typography/hooks/useCopyClick.js
var useCopyClick = ({
  copyConfig,
  children
}) => {
  const [copied, setCopied] = React105.useState(false);
  const [copyLoading, setCopyLoading] = React105.useState(false);
  const copyIdRef = React105.useRef(null);
  const cleanCopyId = () => {
    if (copyIdRef.current) {
      clearTimeout(copyIdRef.current);
    }
  };
  const copyOptions = {};
  if (copyConfig.format) {
    copyOptions.format = copyConfig.format;
  }
  React105.useEffect(() => cleanCopyId, []);
  const onClick = useEvent_default(async (e) => {
    var _a;
    e == null ? void 0 : e.preventDefault();
    e == null ? void 0 : e.stopPropagation();
    setCopyLoading(true);
    try {
      const text = typeof copyConfig.text === "function" ? await copyConfig.text() : copyConfig.text;
      await copy_default(text || toList_default(children, true).join("") || "", copyOptions);
      setCopyLoading(false);
      setCopied(true);
      cleanCopyId();
      copyIdRef.current = setTimeout(() => {
        setCopied(false);
      }, 3e3);
      (_a = copyConfig.onCopy) == null ? void 0 : _a.call(copyConfig, e);
    } catch (error) {
      setCopyLoading(false);
      throw error;
    }
  });
  return {
    copied,
    copyLoading,
    onClick
  };
};
var useCopyClick_default = useCopyClick;

// node_modules/antd/es/typography/hooks/useMergedConfig.js
var React106 = __toESM(require_react());
function useMergedConfig(propConfig, templateConfig) {
  return React106.useMemo(() => {
    const support = !!propConfig;
    return [support, {
      ...templateConfig,
      ...support && typeof propConfig === "object" ? propConfig : null
    }];
  }, [propConfig]);
}

// node_modules/antd/es/typography/hooks/usePrevious.js
var import_react59 = __toESM(require_react());
var usePrevious = (value) => {
  const ref = (0, import_react59.useRef)(void 0);
  (0, import_react59.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
};
var usePrevious_default = usePrevious;

// node_modules/antd/es/typography/hooks/useTooltipProps.js
var import_react60 = __toESM(require_react());
var useTooltipProps = (tooltip, editConfigText, children) => (0, import_react60.useMemo)(() => {
  if (tooltip === true) {
    return {
      title: editConfigText ?? children
    };
  }
  if ((0, import_react60.isValidElement)(tooltip)) {
    return {
      title: tooltip
    };
  }
  if (typeof tooltip === "object") {
    return {
      title: editConfigText ?? children,
      ...tooltip
    };
  }
  return {
    title: tooltip
  };
}, [tooltip, editConfigText, children]);
var useTooltipProps_default = useTooltipProps;

// node_modules/antd/es/typography/Typography.js
var React107 = __toESM(require_react());
var Typography = React107.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    component: Component3 = "article",
    className,
    rootClassName,
    children,
    direction: typographyDirection,
    style: style2,
    ...restProps
  } = props;
  const {
    getPrefixCls,
    direction: contextDirection,
    className: contextClassName,
    style: contextStyle
  } = useComponentConfig("typography");
  const direction = typographyDirection ?? contextDirection;
  const prefixCls = getPrefixCls("typography", customizePrefixCls);
  const [hashId, cssVarCls] = style_default3(prefixCls);
  const componentClassName = clsx(prefixCls, contextClassName, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId, cssVarCls);
  const mergedStyle = {
    ...contextStyle,
    ...style2
  };
  return (
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    React107.createElement(Component3, {
      className: componentClassName,
      style: mergedStyle,
      ref,
      ...restProps
    }, children)
  );
});
if (true) {
  Typography.displayName = "Typography";
}
var Typography_default = Typography;

// node_modules/antd/es/typography/Base/CopyBtn.js
var React111 = __toESM(require_react());

// node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckOutlined.js
var React108 = __toESM(require_react());
function _extends19() {
  _extends19 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends19.apply(this, arguments);
}
var CheckOutlined = (props, ref) => React108.createElement(AntdIcon_default, _extends19({}, props, {
  ref,
  icon: CheckOutlined_default
}));
var RefIcon5 = React108.forwardRef(CheckOutlined);
if (true) {
  RefIcon5.displayName = "CheckOutlined";
}
var CheckOutlined_default2 = RefIcon5;

// node_modules/antd/node_modules/@ant-design/icons/es/icons/CopyOutlined.js
var React109 = __toESM(require_react());
function _extends20() {
  _extends20 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends20.apply(this, arguments);
}
var CopyOutlined = (props, ref) => React109.createElement(AntdIcon_default, _extends20({}, props, {
  ref,
  icon: CopyOutlined_default
}));
var RefIcon6 = React109.forwardRef(CopyOutlined);
if (true) {
  RefIcon6.displayName = "CopyOutlined";
}
var CopyOutlined_default2 = RefIcon6;

// node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
var React110 = __toESM(require_react());
function _extends21() {
  _extends21 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends21.apply(this, arguments);
}
var LoadingOutlined = (props, ref) => React110.createElement(AntdIcon_default, _extends21({}, props, {
  ref,
  icon: LoadingOutlined_default
}));
var RefIcon7 = React110.forwardRef(LoadingOutlined);
if (true) {
  RefIcon7.displayName = "LoadingOutlined";
}
var LoadingOutlined_default2 = RefIcon7;

// node_modules/antd/es/typography/Base/util.js
function toList2(val) {
  if (val === false) {
    return [false, false];
  }
  return Array.isArray(val) ? val : [val];
}
function getNode(dom, defaultNode, needDom) {
  if (dom === true || dom === void 0) {
    return defaultNode;
  }
  return dom || needDom && defaultNode;
}
function isEleEllipsis(ele) {
  const childDiv = document.createElement("em");
  ele.appendChild(childDiv);
  if (true) {
    childDiv.className = "ant-typography-css-ellipsis-content-measure";
  }
  const rect = ele.getBoundingClientRect();
  const childRect = childDiv.getBoundingClientRect();
  ele.removeChild(childDiv);
  return (
    // Horizontal out of range
    rect.left > childRect.left || childRect.right > rect.right || // Vertical out of range
    rect.top > childRect.top || childRect.bottom > rect.bottom
  );
}
var isValidText = (val) => ["string", "number"].includes(typeof val);

// node_modules/antd/es/typography/Base/CopyBtn.js
var CopyBtn = ({
  prefixCls,
  copied,
  locale: locale5,
  iconOnly,
  tooltips,
  icon,
  tabIndex,
  onCopy,
  loading: btnLoading
}) => {
  const tooltipNodes = toList2(tooltips);
  const iconNodes = toList2(icon);
  const {
    copied: copiedText,
    copy: copyText
  } = locale5 ?? {};
  const systemStr = copied ? copiedText : copyText;
  const copyTitle = getNode(tooltipNodes[copied ? 1 : 0], systemStr);
  const ariaLabel = typeof copyTitle === "string" ? copyTitle : systemStr;
  return React111.createElement(tooltip_default, {
    title: copyTitle
  }, React111.createElement("button", {
    type: "button",
    className: clsx(`${prefixCls}-copy`, {
      [`${prefixCls}-copy-success`]: copied,
      [`${prefixCls}-copy-icon-only`]: iconOnly
    }),
    onClick: onCopy,
    "aria-label": ariaLabel,
    tabIndex
  }, copied ? getNode(iconNodes[1], React111.createElement(CheckOutlined_default2, null), true) : getNode(iconNodes[0], btnLoading ? React111.createElement(LoadingOutlined_default2, null) : React111.createElement(CopyOutlined_default2, null), true)));
};
var CopyBtn_default = CopyBtn;

// node_modules/antd/es/typography/Base/Ellipsis.js
var React112 = __toESM(require_react());
var MeasureText = React112.forwardRef(({
  style: style2,
  children
}, ref) => {
  const spanRef = React112.useRef(null);
  React112.useImperativeHandle(ref, () => ({
    isExceed: () => {
      const span = spanRef.current;
      return span.scrollHeight > span.clientHeight;
    },
    getHeight: () => spanRef.current.clientHeight
  }));
  return React112.createElement("span", {
    "aria-hidden": true,
    ref: spanRef,
    style: {
      position: "fixed",
      display: "block",
      left: 0,
      top: 0,
      pointerEvents: "none",
      backgroundColor: "rgba(255, 0, 0, 0.65)",
      ...style2
    }
  }, children);
});
var getNodesLen = (nodeList) => nodeList.reduce((totalLen, node) => totalLen + (isValidText(node) ? String(node).length : 1), 0);
function sliceNodes(nodeList, len) {
  let currLen = 0;
  const currentNodeList = [];
  for (let i = 0; i < nodeList.length; i += 1) {
    if (currLen === len) {
      return currentNodeList;
    }
    const node = nodeList[i];
    const canCut = isValidText(node);
    const nodeLen = canCut ? String(node).length : 1;
    const nextLen = currLen + nodeLen;
    if (nextLen > len) {
      const restLen = len - currLen;
      currentNodeList.push(String(node).slice(0, restLen));
      return currentNodeList;
    }
    currentNodeList.push(node);
    currLen = nextLen;
  }
  return nodeList;
}
var STATUS_MEASURE_NONE = 0;
var STATUS_MEASURE_PREPARE = 1;
var STATUS_MEASURE_START = 2;
var STATUS_MEASURE_NEED_ELLIPSIS = 3;
var STATUS_MEASURE_NO_NEED_ELLIPSIS = 4;
var lineClipStyle = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function EllipsisMeasure(props) {
  const {
    enableMeasure,
    width,
    text,
    children,
    rows,
    expanded,
    miscDeps,
    onEllipsis
  } = props;
  const nodeList = React112.useMemo(() => toArray(text), [text]);
  const nodeLen = React112.useMemo(() => getNodesLen(nodeList), [text]);
  const fullContent = React112.useMemo(() => children(nodeList, false), [text]);
  const [ellipsisCutIndex, setEllipsisCutIndex] = React112.useState(null);
  const cutMidRef = React112.useRef(null);
  const measureWhiteSpaceRef = React112.useRef(null);
  const needEllipsisRef = React112.useRef(null);
  const descRowsEllipsisRef = React112.useRef(null);
  const symbolRowEllipsisRef = React112.useRef(null);
  const [canEllipsis, setCanEllipsis] = React112.useState(false);
  const [needEllipsis, setNeedEllipsis] = React112.useState(STATUS_MEASURE_NONE);
  const [ellipsisHeight, setEllipsisHeight] = React112.useState(0);
  const [parentWhiteSpace, setParentWhiteSpace] = React112.useState(null);
  useLayoutEffect_default(() => {
    if (enableMeasure && width && nodeLen) {
      setNeedEllipsis(STATUS_MEASURE_PREPARE);
    } else {
      setNeedEllipsis(STATUS_MEASURE_NONE);
    }
  }, [width, text, rows, enableMeasure, nodeList]);
  useLayoutEffect_default(() => {
    var _a, _b, _c, _d;
    if (needEllipsis === STATUS_MEASURE_PREPARE) {
      setNeedEllipsis(STATUS_MEASURE_START);
      const nextWhiteSpace = measureWhiteSpaceRef.current && getComputedStyle(measureWhiteSpaceRef.current).whiteSpace;
      setParentWhiteSpace(nextWhiteSpace);
    } else if (needEllipsis === STATUS_MEASURE_START) {
      const isOverflow = !!((_a = needEllipsisRef.current) == null ? void 0 : _a.isExceed());
      setNeedEllipsis(isOverflow ? STATUS_MEASURE_NEED_ELLIPSIS : STATUS_MEASURE_NO_NEED_ELLIPSIS);
      setEllipsisCutIndex(isOverflow ? [0, nodeLen] : null);
      setCanEllipsis(isOverflow);
      const baseRowsEllipsisHeight = ((_b = needEllipsisRef.current) == null ? void 0 : _b.getHeight()) || 0;
      const descRowsEllipsisHeight = rows === 1 ? 0 : ((_c = descRowsEllipsisRef.current) == null ? void 0 : _c.getHeight()) || 0;
      const symbolRowEllipsisHeight = ((_d = symbolRowEllipsisRef.current) == null ? void 0 : _d.getHeight()) || 0;
      const maxRowsHeight = Math.max(
        baseRowsEllipsisHeight,
        // height of rows with ellipsis
        descRowsEllipsisHeight + symbolRowEllipsisHeight
      );
      setEllipsisHeight(maxRowsHeight + 1);
      onEllipsis(isOverflow);
    }
  }, [needEllipsis]);
  const cutMidIndex = ellipsisCutIndex ? Math.ceil((ellipsisCutIndex[0] + ellipsisCutIndex[1]) / 2) : 0;
  useLayoutEffect_default(() => {
    var _a;
    const [minIndex, maxIndex] = ellipsisCutIndex || [0, 0];
    if (minIndex !== maxIndex) {
      const midHeight = ((_a = cutMidRef.current) == null ? void 0 : _a.getHeight()) || 0;
      const isOverflow = midHeight > ellipsisHeight;
      let targetMidIndex = cutMidIndex;
      if (maxIndex - minIndex === 1) {
        targetMidIndex = isOverflow ? minIndex : maxIndex;
      }
      setEllipsisCutIndex(isOverflow ? [minIndex, targetMidIndex] : [targetMidIndex, maxIndex]);
    }
  }, [ellipsisCutIndex, cutMidIndex]);
  const finalContent = React112.useMemo(() => {
    if (!enableMeasure) {
      return children(nodeList, false);
    }
    if (needEllipsis !== STATUS_MEASURE_NEED_ELLIPSIS || !ellipsisCutIndex || ellipsisCutIndex[0] !== ellipsisCutIndex[1]) {
      const content = children(nodeList, false);
      if ([STATUS_MEASURE_NO_NEED_ELLIPSIS, STATUS_MEASURE_NONE].includes(needEllipsis)) {
        return content;
      }
      return React112.createElement("span", {
        style: {
          ...lineClipStyle,
          WebkitLineClamp: rows
        }
      }, content);
    }
    return children(expanded ? nodeList : sliceNodes(nodeList, ellipsisCutIndex[0]), canEllipsis);
  }, [expanded, needEllipsis, ellipsisCutIndex, nodeList].concat(_toConsumableArray(miscDeps)));
  const measureStyle = {
    width,
    margin: 0,
    padding: 0,
    whiteSpace: parentWhiteSpace === "nowrap" ? "normal" : "inherit"
  };
  return React112.createElement(React112.Fragment, null, finalContent, needEllipsis === STATUS_MEASURE_START && React112.createElement(React112.Fragment, null, React112.createElement(MeasureText, {
    style: {
      ...measureStyle,
      ...lineClipStyle,
      WebkitLineClamp: rows
    },
    ref: needEllipsisRef
  }, fullContent), React112.createElement(MeasureText, {
    style: {
      ...measureStyle,
      ...lineClipStyle,
      WebkitLineClamp: rows - 1
    },
    ref: descRowsEllipsisRef
  }, fullContent), React112.createElement(MeasureText, {
    style: {
      ...measureStyle,
      ...lineClipStyle,
      WebkitLineClamp: 1
    },
    ref: symbolRowEllipsisRef
  }, children([], true))), needEllipsis === STATUS_MEASURE_NEED_ELLIPSIS && ellipsisCutIndex && ellipsisCutIndex[0] !== ellipsisCutIndex[1] && React112.createElement(MeasureText, {
    style: {
      ...measureStyle,
      top: 400
    },
    ref: cutMidRef
  }, children(sliceNodes(nodeList, cutMidIndex), true)), needEllipsis === STATUS_MEASURE_PREPARE && React112.createElement("span", {
    style: {
      whiteSpace: "inherit"
    },
    ref: measureWhiteSpaceRef
  }));
}

// node_modules/antd/es/typography/Base/EllipsisTooltip.js
var React113 = __toESM(require_react());
var EllipsisTooltip = ({
  enableEllipsis,
  isEllipsis,
  children,
  tooltipProps
}) => {
  if (!(tooltipProps == null ? void 0 : tooltipProps.title) || !enableEllipsis) {
    return children;
  }
  return React113.createElement(tooltip_default, {
    open: isEllipsis ? void 0 : false,
    ...tooltipProps
  }, children);
};
if (true) {
  EllipsisTooltip.displayName = "EllipsisTooltip";
}
var EllipsisTooltip_default = EllipsisTooltip;

// node_modules/antd/es/typography/Base/index.js
function wrapperDecorations({
  mark,
  code,
  underline,
  delete: del,
  strong,
  keyboard,
  italic
}, content) {
  let currentContent = content;
  function wrap(tag, needed) {
    if (!needed) {
      return;
    }
    currentContent = React114.createElement(tag, {}, currentContent);
  }
  wrap("strong", strong);
  wrap("u", underline);
  wrap("del", del);
  wrap("code", code);
  wrap("mark", mark);
  wrap("kbd", keyboard);
  wrap("i", italic);
  return currentContent;
}
var ELLIPSIS_STR = "...";
var DECORATION_PROPS = ["delete", "mark", "code", "underline", "strong", "keyboard", "italic"];
var Base = React114.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style: style2,
    type: type5,
    disabled,
    children,
    ellipsis,
    editable,
    copyable,
    component,
    title,
    ...restProps
  } = props;
  const {
    getPrefixCls,
    direction
  } = React114.useContext(ConfigContext);
  const [textLocale] = useLocale_default("Text");
  const typographyRef = React114.useRef(null);
  const editIconRef = React114.useRef(null);
  const prefixCls = getPrefixCls("typography", customizePrefixCls);
  const textProps = omit(restProps, DECORATION_PROPS);
  const [enableEdit, editConfig] = useMergedConfig(editable);
  const [editing, setEditing] = useControlledState(false, editConfig.editing);
  const {
    triggerType = ["icon"]
  } = editConfig;
  const triggerEdit = (edit) => {
    var _a;
    if (edit) {
      (_a = editConfig.onStart) == null ? void 0 : _a.call(editConfig);
    }
    setEditing(edit);
  };
  const prevEditing = usePrevious_default(editing);
  useLayoutEffect_default(() => {
    var _a;
    if (!editing && prevEditing) {
      (_a = editIconRef.current) == null ? void 0 : _a.focus();
    }
  }, [editing]);
  const onEditClick = (e) => {
    e == null ? void 0 : e.preventDefault();
    triggerEdit(true);
  };
  const onEditChange = (value) => {
    var _a;
    (_a = editConfig.onChange) == null ? void 0 : _a.call(editConfig, value);
    triggerEdit(false);
  };
  const onEditCancel = () => {
    var _a;
    (_a = editConfig.onCancel) == null ? void 0 : _a.call(editConfig);
    triggerEdit(false);
  };
  const [enableCopy, copyConfig] = useMergedConfig(copyable);
  const {
    copied,
    copyLoading,
    onClick: onCopyClick
  } = useCopyClick_default({
    copyConfig,
    children
  });
  const [isLineClampSupport, setIsLineClampSupport] = React114.useState(false);
  const [isTextOverflowSupport, setIsTextOverflowSupport] = React114.useState(false);
  const [isJsEllipsis, setIsJsEllipsis] = React114.useState(false);
  const [isNativeEllipsis, setIsNativeEllipsis] = React114.useState(false);
  const [isNativeVisible, setIsNativeVisible] = React114.useState(true);
  const [enableEllipsis, ellipsisConfig] = useMergedConfig(ellipsis, {
    expandable: false,
    symbol: (isExpanded) => isExpanded ? textLocale == null ? void 0 : textLocale.collapse : textLocale == null ? void 0 : textLocale.expand
  });
  const [expanded, setExpanded] = useControlledState(ellipsisConfig.defaultExpanded || false, ellipsisConfig.expanded);
  const mergedEnableEllipsis = enableEllipsis && (!expanded || ellipsisConfig.expandable === "collapsible");
  const {
    rows = 1
  } = ellipsisConfig;
  const needMeasureEllipsis = React114.useMemo(() => (
    // Disable ellipsis
    mergedEnableEllipsis && // Provide suffix
    (ellipsisConfig.suffix !== void 0 || ellipsisConfig.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    ellipsisConfig.expandable || enableEdit || enableCopy)
  ), [mergedEnableEllipsis, ellipsisConfig, enableEdit, enableCopy]);
  useLayoutEffect_default(() => {
    if (enableEllipsis && !needMeasureEllipsis) {
      setIsLineClampSupport(isStyleSupport("webkitLineClamp"));
      setIsTextOverflowSupport(isStyleSupport("textOverflow"));
    }
  }, [needMeasureEllipsis, enableEllipsis]);
  const [cssEllipsis, setCssEllipsis] = React114.useState(mergedEnableEllipsis);
  const canUseCssEllipsis = React114.useMemo(() => {
    if (needMeasureEllipsis) {
      return false;
    }
    if (rows === 1) {
      return isTextOverflowSupport;
    }
    return isLineClampSupport;
  }, [needMeasureEllipsis, isTextOverflowSupport, isLineClampSupport]);
  useLayoutEffect_default(() => {
    setCssEllipsis(canUseCssEllipsis && mergedEnableEllipsis);
  }, [canUseCssEllipsis, mergedEnableEllipsis]);
  const isMergedEllipsis = mergedEnableEllipsis && (cssEllipsis ? isNativeEllipsis : isJsEllipsis);
  const cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
  const cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis;
  const onExpandClick = (e, info) => {
    var _a;
    setExpanded(info.expanded);
    (_a = ellipsisConfig.onExpand) == null ? void 0 : _a.call(ellipsisConfig, e, info);
  };
  const [ellipsisWidth, setEllipsisWidth] = React114.useState(0);
  const onResize2 = ({
    offsetWidth
  }) => {
    setEllipsisWidth(offsetWidth);
  };
  const onJsEllipsis = (jsEllipsis) => {
    var _a;
    setIsJsEllipsis(jsEllipsis);
    if (isJsEllipsis !== jsEllipsis) {
      (_a = ellipsisConfig.onEllipsis) == null ? void 0 : _a.call(ellipsisConfig, jsEllipsis);
    }
  };
  React114.useEffect(() => {
    const textEle = typographyRef.current;
    if (enableEllipsis && cssEllipsis && textEle) {
      const currentEllipsis = isEleEllipsis(textEle);
      if (isNativeEllipsis !== currentEllipsis) {
        setIsNativeEllipsis(currentEllipsis);
      }
    }
  }, [enableEllipsis, cssEllipsis, children, cssLineClamp, isNativeVisible, ellipsisWidth]);
  React114.useEffect(() => {
    const textEle = typographyRef.current;
    if (typeof IntersectionObserver === "undefined" || !textEle || !cssEllipsis || !mergedEnableEllipsis) {
      return;
    }
    const observer2 = new IntersectionObserver(() => {
      setIsNativeVisible(!!textEle.offsetParent);
    });
    observer2.observe(textEle);
    return () => {
      observer2.disconnect();
    };
  }, [cssEllipsis, mergedEnableEllipsis]);
  const tooltipProps = useTooltipProps_default(ellipsisConfig.tooltip, editConfig.text, children);
  const topAriaLabel = React114.useMemo(() => {
    if (!enableEllipsis || cssEllipsis) {
      return void 0;
    }
    return [editConfig.text, children, title, tooltipProps.title].find(isValidText);
  }, [enableEllipsis, cssEllipsis, title, tooltipProps.title, isMergedEllipsis]);
  if (editing) {
    return React114.createElement(Editable_default, {
      value: editConfig.text ?? (typeof children === "string" ? children : ""),
      onSave: onEditChange,
      onCancel: onEditCancel,
      onEnd: editConfig.onEnd,
      prefixCls,
      className,
      style: style2,
      direction,
      component,
      maxLength: editConfig.maxLength,
      autoSize: editConfig.autoSize,
      enterIcon: editConfig.enterIcon
    });
  }
  const renderExpand = () => {
    const {
      expandable,
      symbol
    } = ellipsisConfig;
    return expandable ? React114.createElement("button", {
      type: "button",
      key: "expand",
      className: `${prefixCls}-${expanded ? "collapse" : "expand"}`,
      onClick: (e) => onExpandClick(e, {
        expanded: !expanded
      }),
      "aria-label": expanded ? textLocale.collapse : textLocale == null ? void 0 : textLocale.expand
    }, typeof symbol === "function" ? symbol(expanded) : symbol) : null;
  };
  const renderEdit = () => {
    if (!enableEdit) {
      return;
    }
    const {
      icon,
      tooltip,
      tabIndex
    } = editConfig;
    const editTitle = toArray(tooltip)[0] || (textLocale == null ? void 0 : textLocale.edit);
    const ariaLabel = typeof editTitle === "string" ? editTitle : "";
    return triggerType.includes("icon") ? React114.createElement(tooltip_default, {
      key: "edit",
      title: tooltip === false ? "" : editTitle
    }, React114.createElement("button", {
      type: "button",
      ref: editIconRef,
      className: `${prefixCls}-edit`,
      onClick: onEditClick,
      "aria-label": ariaLabel,
      tabIndex
    }, icon || React114.createElement(EditOutlined_default2, {
      role: "button"
    }))) : null;
  };
  const renderCopy = () => {
    if (!enableCopy) {
      return null;
    }
    return React114.createElement(CopyBtn_default, {
      key: "copy",
      ...copyConfig,
      prefixCls,
      copied,
      locale: textLocale,
      onCopy: onCopyClick,
      loading: copyLoading,
      iconOnly: !isNonNullable_default(children)
    });
  };
  const renderOperations = (canEllipsis) => [canEllipsis && renderExpand(), renderEdit(), renderCopy()];
  const renderEllipsis = (canEllipsis) => [canEllipsis && !expanded && React114.createElement("span", {
    "aria-hidden": true,
    key: "ellipsis"
  }, ELLIPSIS_STR), ellipsisConfig.suffix, renderOperations(canEllipsis)];
  return React114.createElement(es_default, {
    onResize: onResize2,
    disabled: !mergedEnableEllipsis
  }, (resizeRef) => React114.createElement(EllipsisTooltip_default, {
    tooltipProps,
    enableEllipsis: mergedEnableEllipsis,
    isEllipsis: isMergedEllipsis
  }, React114.createElement(Typography_default, {
    className: clsx({
      [`${prefixCls}-${type5}`]: type5,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-ellipsis`]: enableEllipsis,
      [`${prefixCls}-ellipsis-single-line`]: cssTextOverflow,
      [`${prefixCls}-ellipsis-multiple-line`]: cssLineClamp,
      [`${prefixCls}-link`]: component === "a"
    }, className),
    prefixCls: customizePrefixCls,
    style: {
      ...style2,
      WebkitLineClamp: cssLineClamp ? rows : void 0
    },
    component,
    ref: composeRef(resizeRef, typographyRef, ref),
    direction,
    onClick: triggerType.includes("text") ? onEditClick : void 0,
    "aria-label": topAriaLabel == null ? void 0 : topAriaLabel.toString(),
    title,
    ...textProps
  }, React114.createElement(EllipsisMeasure, {
    enableMeasure: mergedEnableEllipsis && !cssEllipsis,
    text: children,
    rows,
    width: ellipsisWidth,
    onEllipsis: onJsEllipsis,
    expanded,
    miscDeps: [copied, expanded, copyLoading, enableEdit, enableCopy, textLocale].concat(_toConsumableArray(DECORATION_PROPS.map((key) => props[key])))
  }, (node, canEllipsis) => wrapperDecorations(props, React114.createElement(React114.Fragment, null, node.length > 0 && canEllipsis && !expanded && topAriaLabel ? React114.createElement("span", {
    key: "show-content",
    "aria-hidden": true
  }, node) : node, renderEllipsis(canEllipsis)))))));
});
var Base_default = Base;

// node_modules/antd/es/typography/Paragraph.js
var Paragraph = React115.forwardRef((props, ref) => {
  const {
    children,
    ...restProps
  } = props;
  return React115.createElement(Base_default, {
    ref,
    ...restProps,
    component: "div"
  }, children);
});
var Paragraph_default = Paragraph;

export {
  FastColor,
  generate,
  presetPrimaryColors,
  blue,
  canUseDom,
  contains,
  warning,
  noteOnce,
  warning_default,
  AntdIcon_default,
  toArray,
  getDOM,
  useMemo,
  fillRef,
  composeRef,
  useComposeRef,
  supportRef,
  supportNodeRef,
  getNodeRef,
  useEvent_default,
  useLayoutUpdateEffect,
  useLayoutEffect_default,
  useState_default,
  useControlledState,
  get,
  set,
  merge,
  omit,
  es_default,
  isNonNullable_default,
  canUseDocElement,
  isEqual_default,
  createTheme,
  unit,
  getComputedToken,
  Keyframes_default,
  devUseWarning,
  warning_default2,
  validateMessagesContext_default,
  en_US_default,
  en_US_default4 as en_US_default2,
  en_US_default5 as en_US_default3,
  en_US_default6 as en_US_default4,
  getConfirmLocale,
  useLocale_default,
  defaultPresetColors,
  seed_default,
  PresetColors,
  genColorMapToken,
  genControlHeight_default,
  getLineHeight,
  genFontMapToken_default,
  derivative,
  theme_default,
  defaultConfig,
  DesignTokenContext,
  getScrollBarSize,
  getTargetScrollBarSize,
  getId,
  useId_default,
  es_default2,
  raf_default,
  CSSMotionList_default,
  es_default3,
  isVisible_default,
  es_default4,
  isFragment2 as isFragment,
  replaceElement,
  cloneElement5 as cloneElement,
  defaultPrefixCls,
  ConfigContext,
  useComponentConfig,
  DisabledContextProvider,
  DisabledContext_default,
  SizeContext_default,
  merge2,
  version_default2 as version_default,
  getAlphaColor_default,
  formatToken,
  useToken,
  textEllipsis,
  resetComponent,
  resetIcon,
  clearFix,
  genFocusOutline,
  genFocusStyle,
  operationUnit,
  genStyleHooks,
  genComponentStyleHook,
  genSubStyleComponent,
  genCssVar,
  genPresetColor,
  warnContext,
  globalConfig,
  config_provider_default,
  Popup_default2 as Popup_default,
  FieldContext_default,
  ListContext_default,
  Field_default,
  List_default,
  useForm_default,
  useWatch_default,
  es_default7 as es_default5,
  FormContext2 as FormContext,
  NoStyleItemContext,
  FormProvider2 as FormProvider,
  FormItemPrefixContext,
  FormItemInputContext,
  NoFormStyle,
  VariantContext,
  CloseOutlined_default2 as CloseOutlined_default,
  pickAttrs,
  extendsObject_default,
  pickClosable,
  computeClosable,
  useClosable,
  useForceUpdate,
  normalizeMaskConfig,
  useMergedMask,
  mergeClassNames,
  mergeStyles,
  resolveStyleOrClass,
  useMergeSemantic,
  useMultipleSelect,
  useOrientation,
  usePatchElement,
  useProxyImperativeHandle,
  useSyncState2 as useSyncState,
  zindexContext_default,
  CONTAINER_MAX_OFFSET,
  useZIndex,
  useSize_default,
  useCompactItemContext,
  Compact_default,
  ContextIsolator_default,
  getTransitionName2 as getTransitionName,
  motion_default,
  getArrowToken,
  genRoundedArrow,
  MAX_VERTICAL_CONTENT_RADIUS,
  getArrowOffsetToken,
  placementArrow_default,
  getPlacements,
  useCSSVarCls_default,
  useMergedArrow_default,
  collapse_default,
  initFadeMotion,
  initMoveMotion,
  slideUpIn,
  slideUpOut,
  slideDownIn,
  slideDownOut,
  initSlideMotion,
  zoomIn,
  initZoomMotion,
  isPresetColor,
  isPresetStatusColor,
  Color,
  ColorBlock_default,
  es_default8 as es_default6,
  toHexFormat,
  AggregationColor,
  generateColor2 as generateColor,
  getRoundNumber2 as getRoundNumber,
  getColorAlpha,
  genAlphaColor,
  getGradientPercentColor,
  tooltip_default,
  KeyCode_default,
  BaseInput_default,
  getFocusNodeList,
  triggerFocus,
  useLockFocus,
  es_default10 as es_default7,
  CloseCircleFilled_default2 as CloseCircleFilled_default,
  getAllowClear_default,
  getStatusClassNames,
  getMergedStatus,
  useVariants_default,
  useRemovePasswordTimeout,
  genCompactItemStyle,
  initInputToken,
  initComponentToken,
  genDisabledStyle,
  genBaseOutlinedStyle,
  genOutlinedStyle,
  genBorderlessStyle,
  genFilledStyle,
  genUnderlinedStyle,
  genPlaceholderStyle,
  genInputLargeStyle,
  genInputSmallStyle,
  genBasicInputStyle,
  style_default2 as style_default,
  Input_default2 as Input_default,
  TextArea_default2 as TextArea_default,
  toList_default,
  Typography_default,
  CheckOutlined_default2 as CheckOutlined_default,
  LoadingOutlined_default2 as LoadingOutlined_default,
  Base_default,
  Paragraph_default
};
//# sourceMappingURL=chunk-ZPOHBFYK.js.map
