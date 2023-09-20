import { ComponentProps } from "react";

export type FlexDirection = "column" | "row";
export type Reverse = boolean;
export type Wrap = "wrap" | "reverse";
export type GapProps =
  | number
  | {
    x?: number;
    y?: number;
  };
export type Grow = boolean;
export type Shrink = boolean;

export interface flexDirProps {
  flex: FlexDirection;
  reverse?: Reverse;
}

export type Contents = "normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch"
export type Items = "start" | "end" | "center" | "stretch"
export type Self = "auto" | "start" | "end" | "center" | "stretch"

export interface Justify {
  content?: Contents;
  item?: Items;
  self?: Self;
}

export interface Align {
  content?: Contents | "baseline";
  item?: Items | "baseline";
  self?: Self | "baseline";
}

export interface Place {
  content?: Contents | "baseline";
  item?: Items | "baseline";
  self?: Self;
}

export interface FlexProps {
  children: ComponentProps<"div">["children"]
  className?: ComponentProps<"div">["className"]
  flexDirection?: FlexDirection;
  reverse?: Reverse;
  gap?: GapProps;
  wrap?: Wrap;
  grow?: Grow;
  shrink?: Shrink;
  justify?: Justify;
  align?: Align;
  place?: Place;
}
