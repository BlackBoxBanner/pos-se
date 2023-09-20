"use client";

import { twMerge } from "tailwind-merge";
import { FlexProps } from "./types";
import {
	flexDir,
	gapHandle,
	growHandler,
	shrinkHandler,
	wrapHandler,
	justifyHandler,
	alignHandler,
	placeHandler,
	transitionHandler,
	paddingHandler,
	marignHandler,
} from "./handler";

export default function Flex({
	children,
	className,
	flexDirection = "row",
	reverse = false,
	gap,
	wrap,
	grow,
	shrink,
	justify,
	align,
	place,
	transition,
	margin,
	padding,
	...params
}: FlexProps) {
	return (
		<div
			className={twMerge(
				"flex",
				flexDir({ flex: flexDirection, reverse }),
				gapHandle(gap),
				wrapHandler(wrap),
				growHandler(grow),
				shrinkHandler(shrink),
				justifyHandler(justify),
				alignHandler(align),
				placeHandler(place),
				transitionHandler(transition),
				paddingHandler(padding),
				marignHandler(margin),
				className
			)}
			{...params}
		>
			{children}
		</div>
	);
}
