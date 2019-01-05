const fs = require('fs');

function getMdFiles(path) {
  const dir = fs.readdirSync('docs/'+ path);
  const dirFiles = dir.filter( elm => elm.match(new RegExp(`.*\.(${'md'})`, 'ig')));
  let files = []
  dirFiles.forEach(function(item) {
    files.push('/' + path + '/' + item.replace(/\.[^/.]+$/, ""))
  })
  return files
}


module.exports = {
  plugins: [
    '@vuepress/blog',
    '@vuepress/google-analytics',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/last-updated'
  ],

  title: 'Hakan Yalçınkaya',
  description: 'Hakan Yalçınkaya DevBlog',
  ga: 'UA-33596509-36',

  themeConfig: {
  	nav: [
  	{ text: 'Hakkımda', link: '/pages/about_me.html'},
  	{ text: 'İletişim', link: '/pages/contact.html'},
  	],
  	sidebar: [
    {
      title: 'Sayfalar',
      collapsable: false,
      children: [
          ['/', 'Ana Sayfa'],
          '/hello-world',
          '/pages/about_me',
          '/pages/contact',
        ]
      },
      {
        title: 'Python',
        collapsable: false,
        children: [
          '/python/python-ve-kod-yazma-sanati',
          '/python/statik-web-sitesi-olusturmak-icin-pelican',
        ]
      },
      {
        title: 'Django',
        collapsable: false,
        children: getMdFiles('django')
      },
      {
        title: 'JavaScript',
        collapsable: false,
        children: []
      },
      {
        title: 'YouTube',
        collapsable: false,
        children: getMdFiles('youtube')
      },
      {
        title: 'Araçlar',
        collapsable: false,
        children: [
          '/tools/flatuicolors',
          '/tools/makefile-kullanin',
          '/tools/markdown-ile-calismak',
          '/tools/neden-mac-kullaniyorum',
        ]
      }
  	]
  }
}
