import nextra from 'nextra';
import path from 'node:path'

/**
 * @type {import('next').NextConfig}
 */
const debug = false
const assetPrefix = debug ? "" : "/data-structure-study"
const sep = path.sep === '/' ? '/' : '\\\\'

const ALLOWED_SVG_REGEX = new RegExp(`components${sep}icons${sep}.+\\.svg$`)

const nextConfig = {
    output: 'export',
    assetPrefix,
    basePath: assetPrefix,
    /*    images: {
            unoptimized: true // mandatory, otherwise won't export
        }*/
    images: {
        loader: 'custom',
        loaderFile: './image-loader.ts',
    },
    // Optional: Change the output directory `out` -> `dist`
    // distDir: "build"
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
});

export default {
    ...withNextra({
        webpack(config) {
            const fileLoaderRule = config.module.rules.find(rule =>
                rule.test?.test?.('.svg')
            )
            fileLoaderRule.exclude = ALLOWED_SVG_REGEX

            config.module.rules.push({
                test: ALLOWED_SVG_REGEX,
                use: ['@svgr/webpack']
            })
            return config
        },
        experimental: {
            optimizePackageImports: ['@components/icons', '@components/utils/shadow']
        }
    }),
    ...nextConfig,
};
