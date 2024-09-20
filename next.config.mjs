import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other Next.js config options here
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
});

export default withNextra(nextConfig);
