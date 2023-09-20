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

export type TransitionTypes = "none" | "all" | "colors" | "opacity" | "transition" | "shadow" | "transform"
export type TransitionDuration = number
export type TransitionTiming = "ease-linear" | "ease-in" | "ease-out" | "ease-in-out"
export type TransitionDelay = number

export interface Transition {
  duration: TransitionDuration;
  type?: TransitionTypes;
  timing?: TransitionTiming
  delay?: TransitionDelay
}

export interface FullPadding {
  x: number;
  y: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export type Padding = number | FullPadding;

export interface FullMargin {
  x: number;
  y: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export type Margin = number | FullMargin

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
  transition?: Transition;
  padding?: Padding;
  margin?: Margin;
}
