/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdPlugin, { Mode } from 'vite-plugin-markdown';

const mdPluginOptions = { mode: [Mode.HTML], markdown: body => body };

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), mdPlugin(mdPluginOptions)],
});
