import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
	return new ImageResponse(
		(
			// max witdth and height is 2 rem
			<div
				style={{
					background: "blue",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius:"3rem"
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						background: "red",
						width: "2rem",
						height: "0.25rem",
					}}
				></div>
				<div
					style={{
						position: "absolute",
						top: "0.25rem",
						left: "0",
						background: "white",
						width: "2rem",
						height: "0.25rem",
					}}
				></div>
				<div
					style={{
						position: "absolute",
						top: "1.5rem",
						left: "0",
						background: "white",
						width: "2rem",
						height: "0.25rem",
					}}
				></div>
				<div
					style={{
						position: "absolute",
						top: "1.75rem",
						left: "0",
						background: "red",
						width: "2rem",
						height: "0.25rem",
					}}
				></div>
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported icons size metadata
			// config to also set the ImageResponse's width and height.
			...size,
		}
	);
}
