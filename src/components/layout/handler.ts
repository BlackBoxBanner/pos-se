import { Align, flexDirProps, GapProps, Grow, Justify, Margin, Padding, Place, Shrink, Transition, Wrap } from "./types";

export function flexDir({ flex, reverse }: flexDirProps) {
  if (flex == "column") return reverse ? "flex-col-reverse" : "flex-col"

  if (flex == "row") return reverse ? "flex-row-reverse" : "flex-row"
}

export function gapHandle(gap?: GapProps) {
  if (!gap) return "";
  if (typeof gap === "number") return `gap-${gap.toString()}`;

  let data = [];
  if (gap.x) data.push(`gap-x-${gap.x.toString()}`);
  if (gap.y) data.push(`gap-y-${gap.y.toString()}`);
  return data.join("");
}

export function wrapHandler(wrap?: Wrap) {
  if (wrap == undefined) return "";
  if (wrap == "wrap") return "flex-wrap";
  if (wrap == "reverse") return "flex-wrap-reverse";
  return "flex-nowrap";
}

export function growHandler(grow?: Grow) {
  if (grow == undefined) return "";
  return grow ? "grow" : "grow-0"
}

export function shrinkHandler(shrink?: Shrink) {
  return shrink ? "shrink" : "shrink-0"
}

export function justifyHandler(props?: Justify) {
  if (!props) return ""
  const { content, item, self } = props
  let data = [];
  if (content) data.push(`justify-${content}`);
  if (item) data.push(`justify-item-${item}`);
  if (self) data.push(`justify-self-${self}`);
  return data.join(' ');
}

export function alignHandler(props?: Align) {
  if (!props) return ""
  const { content, item, self } = props
  let data = [];
  if (content) data.push(`content-${content}`);
  if (item) data.push(`items-${item}`);
  if (self) data.push(`self-${self}`);
  return data.join(' ');
}

export function placeHandler(props?: Place) {
  if (!props) return ""
  const { content, item, self } = props
  let data = [];
  if (content) data.push(`place-content-${content}`);
  if (item) data.push(`place-items-${item}`);
  if (self) data.push(`place-self-${self}`);
  return data.join(' ');
}

export function transitionHandler(props?: Transition) {
  if (!props) return ""

  let data = []
  const { duration, delay, timing, type } = props

  if (!type) return ""

  if (type == "transition") {
    data.push(`transition`)
  } else {
    data.push(`transition-${type}`)
  }
  if (timing) data.push(`${timing}`)
  if (duration) data.push(`duration-${duration.toString()}`)
  if (delay) data.push(`delay-${delay.toString()}`)

  return data.join(" ")
}

export function paddingHandler(props?: Padding) {
  if (!props) return ""
  if (typeof props === "number") return `p-${props.toString()}`

  const { bottom, left, right, top, x, y } = props
  let data = []
  if (x) data.push(`px-${x.toString()}`)
  if (y) data.push(`py-${y.toString()}`)
  if (top) data.push(`py-${top.toString()}`)
  if (bottom) data.push(`pb-${bottom.toString()}`)
  if (left) data.push(`pl-${left.toString()}`)
  if (right) data.push(`pr-${right.toString()}`)

  return data
}

export function marignHandler(props?: Margin) {
  if (!props) return ""
  if (typeof props === "number") return `p-${props.toString()}`

  const { bottom, left, right, top, x, y } = props
  let data = []
  if (x) data.push(`px-${x.toString()}`)
  if (y) data.push(`py-${y.toString()}`)
  if (top) data.push(`py-${top.toString()}`)
  if (bottom) data.push(`pb-${bottom.toString()}`)
  if (left) data.push(`pl-${left.toString()}`)
  if (right) data.push(`pr-${right.toString()}`)

  return data
}