import type { GatsbyConfig } from "gatsby";

const config0 = require('./config0.js');

const pathPrefix = config0.pathPrefix === '/' ? '' : config0.pathPrefix;

const config: GatsbyConfig = {
  //siteMetadata: {
  //  title: `staticweb_v0.7`,
  //  siteUrl: `https://www.yourdomain.tld`
  //},
  siteMetadata: {
    title: config0.siteTitle,
    siteUrl: config0.siteUrl,
    siteUrlNoSlash: config0.siteUrl,
    siteDescription: config0.siteDescription,
    siteLogo: config0.siteLogo,
    social: {
      twitter: `@venehindustrial`,
    },
    rssMetadata: {
      site_url: config0.siteUrl + pathPrefix,
      feed_url: config0.siteUrl + pathPrefix + config0.siteRss,
      title: config0.siteTitle,
      description: config0.siteDescription,
      image_url: `${config0.siteUrl + pathPrefix}/icons/icon-512x512.png`,
      author: config0.userName,
      copyright: config0.copyright,
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-postcss", "gatsby-plugin-image", //"gatsby-plugin-sitemap", 
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GATSBY_GA_TRACKING_ID || "", // GA4 measurement ID from environment
        ].filter(Boolean),                         // Remove empty strings
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/admin/**"],
        },
      },
    },
    {
      // Integration of MailChimp Suscribe Form
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://site.us5.list-manage.com/subscribe/post?u=dfd1358ee4109a606db3c7059&id=d643a76f58&f_id=005199e1f0', // string; add your MC list endpoint here; see instructions below
        timeout: 4500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
      __key: "pages"
    },
    {
      //resolve: 'gatsby-plugin-sitemap',
      //options: {
      //  output: `/seo-sitemap.xml`,
      //  exclude: [`/tags`, `/tags/*`, `/success`],
      //  createLinkInHead: 'true',
      //},

      resolve: 'gatsby-plugin-sitemap',
      options: {
        // Output file name (will be available at yoursite.com/sitemap-index.xml)
        output: '/seo-sitemap.xml',
    
        // Exclude specific pages from sitemap
        excludes: [
          `/tags`,
          `/tags/*`,
          `/success`,
          `/404`,
          `/404.html`,
          `/dev-404-page`,
          `/admin`,
          `/admin/*`,
          `/preview`,
          `/preview/*`,
          `/drafts`,
          `/drafts/*`,
        ],
    
        // Query for getting all pages
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            allMarkdownRemark(filter: {frontmatter: {templateKey: {ne: null}}}) {
              nodes {
                fields {
                  slug
                }
                frontmatter {
                  date
                  templateKey
                  title
                }
              }
            }
          }
        `,
    
        // Custom function to resolve pages
        //resolvePages: ({
        //  allSitePage: { nodes: allPages },
        //  allMarkdownRemark: { nodes: allMarkdownPages },
        //}) => {
          // Get static pages
        // const staticPages = allPages.map((page: { path: any; }) => ({
        //    path: page.path,
        //    changefreq: 'monthly',
        //    priority: 0.7,
        //    lastmod: new Date().toISOString().split('T')[0],
        //  }));

          // Get blog/article pages with more detailed info
        //  const blogPages = allMarkdownPages
        //    .filter((page: { frontmatter: { templateKey: string; }; }) => page.frontmatter.templateKey === 'article-page')
        //    .map((page: { fields: { slug: any; }; frontmatter: { date: any; }; }) => ({
        //      path: page.fields.slug,
        //      changefreq: 'weekly',
        //      priority: 0.8,
        //      lastmod: page.frontmatter.date || new Date().toISOString().split('T')[0],
        //    }));

          // Combine all pages
        //  return [...staticPages, ...blogPages];
        //},
    
        // Custom serialize function for fine-grained control
        //serialize: ({ path, changefreq, priority, lastmod }) => ({
        //  url: path,
        //  changefreq: changefreq || 'monthly',
        //  priority: priority || 0.5,
        //  lastmod: lastmod || new Date().toISOString().split('T')[0],
        //}),
    
        // Create link in HTML head
        createLinkInHead: true,
    
        // Additional options
        entryLimit: 45000, // Max entries per sitemap file
    
        // Custom pages with specific priorities
        //additionalSitemaps: [
        //  {
        //    name: 'important-pages',
        //    pages: [
        //      {
        //        path: '/',
        //        changefreq: 'daily',
        //        priority: 1.0,
        //      },
        //      {
        //        path: '/about',
        //        changefreq: 'monthly',
        //        priority: 0.9,
        //      },
        //      {
        //        path: '/services',
        //        changefreq: 'monthly',
        //        priority: 0.9,
        //      },
        //      {
        //        path: '/contact',
        //        changefreq: 'monthly',
        //        priority: 0.8,
        //      },
        //      {
        //        path: '/pricing',
        //        changefreq: 'weekly',
        //        priority: 0.8,
        //      },
        //    ],
        //  },
        //  ],
        },
    },
    //{
    //  resolve: 'gatsby-plugin-manifest',
    //  options: {
    //    "icon": "src/images/icon.png"
    //  }
    //},
     "gatsby-plugin-mdx", 
     "gatsby-plugin-sharp", 
     "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
         sassOptions: {
              indentedSyntax: true, // New way
              includePaths: ["node_modules"],
            },
        //indentedSyntax: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config0.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config0.siteTitle,
        short_name: config0.siteTitleAlt,
        start_url: '/index.html',
        background_color: config0.backgroundColor,
        theme_color: config0.themeColor,
        display: 'standalone',
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/*`, `/about`, `/pricing`, `/contact`, `/services`, `/`],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup (ref: { query: { site: { siteMetadata: { rssMetadata: any; }; }; allMarkdownRemark: any; }; }) {
          const ret = ref.query.site.siteMetadata.rssMetadata
          ret.allMarkdownRemark = ref.query.allMarkdownRemark
          ret.generator = config0.siteTitle
          return ret
        },
        query: `
                {
                  site {
                    siteMetadata {
                      rssMetadata {
                        site_url
                        feed_url
                        title
                        description
                        image_url
                        author
                        copyright
                      }
                    }
                  }
                }
              `,
        feeds: [
          {
            serialize (ctx: { query: { site: { siteMetadata: { rssMetadata: any; }; }; allMarkdownRemark: { edges: any[]; }; }; }) {
              const rssMetadata = ctx.query.site.siteMetadata.rssMetadata
              return ctx.query.allMarkdownRemark.edges
                .filter(
                  edge => edge.node.frontmatter.templateKey === 'article-page',
                )
                .map(edge => ({
                  categories: edge.node.frontmatter.tags,
                  date: edge.node.frontmatter.date,
                  title: edge.node.frontmatter.title,
                  image: edge.node.frontmatter.cover,
                  description: edge.node.excerpt,
                  author: rssMetadata.author,
                  url: rssMetadata.site_url + edge.node.fields.slug,
                  guid: rssMetadata.site_url + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }))
            },
            query: `
                    {
                      allMarkdownRemark(
                        limit: 1000,
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        edges {
                          node {
                            excerpt(pruneLength: 400)
                            html
                            id
                            fields { slug }
                            frontmatter {
                              title
                              templateKey
                              cover {
                                publicURL
                              }
                              date(formatString: "MMMM DD, YYYY")
                              tags
                            }
                          }
                        }
                      }
                    }
                  `,
            output: config0.siteRss,
            title: config0.siteTitle,
          },
        ],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`, `author`, `slug`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: (node: { frontmatter: { title: any; }; }) => node.frontmatter.title,
            author: (node: { frontmatter: { author: any; }; }) => node.frontmatter.author,
            tags: (node: { frontmatter: { tags: any; }; }) => node.frontmatter.tags,
            slug: (node: { fields: { slug: any; }; }) => node.fields.slug,
            templateKey: (node: { frontmatter: { templateKey: any; }; }) => node.frontmatter.templateKey,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        stylesPath: `${__dirname}/src/assets/sass/styles.sass`,
        enableIdentityWidget: true,
        htmlTitle: `Gatsby Starter Business Content Manager`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: false,
        headers: {
          '/*.js': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/*.css': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/sw.js': [
            'cache-control: public, max-age=0, must-revalidate',
          ],
          '/*': [
            `X-Frame-Options: DENY`,
            `X-XSS-Protection: 1; mode=block`,
            `X-Content-Type-Options: nosniff`,
            `Referrer-Policy: no-referrer-when-downgrade`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-Q7RLSS82XP', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: 'GTM-5CRPQG5', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: '4662066810513276', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        tikTokPixel: {
          pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-tiktok-pixel', // default
        },
        hotjar: {
          hjid: 'YOUR_HOTJAR_ID',
          hjsv: 'YOUR_HOTJAR_SNIPPET_VERSION',
          cookieName: 'gatsby-gdpr-hotjar', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },  
    //{
    //  resolve: 'gatsby-source-filesystem',
    //  options: {
    //    "name": "images",
    //    "path": "./src/images/"
    //  },
    //  __key: "images"
    //}, 
    //{
    //  resolve: 'gatsby-source-filesystem',
    //  options: {
    //    "name": "pages",
    //    "path": "./src/pages/"
    //  },
    //  __key: "pages"
    //}
  ]
};

export default config;
