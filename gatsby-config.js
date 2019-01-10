module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Villa Giuseppe & Figli S.r.l.',
        short_name: 'VGEFSrl',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#577a91',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
