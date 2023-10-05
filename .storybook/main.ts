import type { StorybookConfig } from '@storybook/nextjs'
import * as path from 'path'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {
				postCss: {
					implementation: require.resolve('postcss'),
				},
			},
		},
	],
	framework: {
		name: '@storybook/nextjs',
		options: {
			nextConfigPath: path.resolve(__dirname, '../next.config.js'),
		},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				// '@': path.resolve(__dirname, '../src/app'),
				// "@.": path.resolve(__dirname, '../src'),
				'@/components': path.resolve(__dirname, '../src/components'),
			}
		}
		return config
	},
}
export default config
