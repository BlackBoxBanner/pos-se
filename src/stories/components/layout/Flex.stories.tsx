import type { Meta, StoryObj } from "@storybook/react";

import Logout from "@/components/button/logout";

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Logout> = {
	title: "Components/Logout",
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
	component: Logout,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Children of the component.",
		},
	},
	args: {
		children: "Logout",
	},
	render: (props) => {
		return <Logout>{props.children}</Logout>;
	},
};

export default meta;

export const Primary: Story = {
	args: {
		children: "Logout",
	},
};
