import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [{ find: '@/', replacement: `${__dirname}/src/` }],
	},
	server: {
		proxy: {
			'/api/v1': {
				target: 'https://node-job-posting.vercel.app',
				changeOrigin: true,
			},
		},
	},
})
