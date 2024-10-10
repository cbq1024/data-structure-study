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
        unoptimized: true // mandatory, otherwise won't export
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
