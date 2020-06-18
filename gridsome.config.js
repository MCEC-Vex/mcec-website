// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Moorpark College Engineering Club',
    siteDescription: 'A simple portfolio theme for Gridsome powered by Tailwind CSS v1',
    siteUrl: 'https://mcec.netlify.app',
    plugins: [
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                purgeConfig: {
                    content: [
                        './src/**/*.vue',
                        './src/**/*.js',
                        './src/**/*.jsx',
                        './src/**/*.html',
                        './src/**/*.pug',
                        './src/**/*.md',
                        './docs/**/*.md',
                        './blog/**/*.md'
                    ],
                    whitelist: [
                        'body',
                        'html',
                        'img',
                        'a',
                        'g-image',
                        'g-image--lazy',
                        'g-image--loaded',
                        'active'
                    ],
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
                }
            }
        },
        {
            use: 'gridsome-plugin-rss',
            options: {
                contentTypeName: 'Post',
                feedOptions: {
                    title: 'Gridsome Portfolio Starter Blog',
                    feed_url: 'https://mcec.netlify.app/rss.xml',
                    site_url: 'https://mcec.netlify.app/'
                },
                feedItemOptions: node => ({
                    title: node.title,
                    description: node.summary,
                    url: 'https://mcec.netlify.app' + node.path,
                    author: 'Moorpark College Engineering Club',
                    date: node.date
                }),
                output: {
                    dir: './static',
                    name: 'rss.xml'
                }
            }
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                cacheTime: 600000 // default
            }
        }
    ],
    templates: {
    
    },
    transformers: {
    
    }
};
