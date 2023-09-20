import { Align, flexDirProps, GapProps, Grow, Justify, Place, Shrink, Wrap } from "./types";

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
  if (wrap == "wrap") return "flex-wrap";
  if (wrap == "reverse") return "flex-wrap-reverse";
  return "flex-nowrap";
}

export function growHandler(grow?: Grow) {
  return grow ? "grow" : "grow-0"
}

export function shrinkHandler(shrink?: Shrink) {
  return shrink ? "shrink" : "shrink-0"
}

export function justifyHandler(props?: Justify) {
  let data = [];
  if (props?.content) data.push(`justify-${props?.content}`);
  if (props?.item) data.push(`justify-item-${props?.item}`);
  if (props?.self) data.push(`justify-self-${props?.self}`);
  return data.join(' ');
}

export function alignHandler(props?: Align) {
  let data = [];
  if (props?.content) data.push(`content-${props?.content}`);
  if (props?.item) data.push(`items-${props?.item}`);
  if (props?.self) data.push(`self-${props?.self}`);
  return data.join(' ');
}

export function placeHandler(props?: Place) {
  let data = [];
  if (props?.content) data.push(`place-content-${props?.content}`);
  if (props?.item) data.push(`place-items-${props?.item}`);
  if (props?.self) data.push(`place-self-${props?.self}`);
  return data.join(' ');
}

