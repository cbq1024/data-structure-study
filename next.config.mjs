import nextra from 'nextra';

/**
 * @type {import('next').NextConfig}
 */
const assetPrefix = "/data-structure-study";

const nextConfig = {
    output: 'export',
    assetPrefix,
    basePath: assetPrefix,
    images: {
        loader: 'custom',
        loaderFile: './image-loader.ts',
    },
    // Optional: Change the output directory `out` -> `dist`
    // distDir: "build"
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
});

export default {
    ...withNextra(),
    ...nextConfig,
};
