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

let sideBar = [{
  title: 'Sayfalar',
  collapsable: false,
  children: [
      ['/', 'Ana Sayfa'],
      '/hello-world',
      '/pages/about_me',
      '/pages/contact',
    ]
}]

const sideBarNames = [
    ['General', 'Genel'],
    ['Python', 'Python'],
    ['Django', 'Django'],
    ['javascript-pages', 'JavaScript'],
    ['YouTube', 'YouTube'],
    ['Linux', 'Linux'],
    ['Tools', 'Araçlar']
]

function getSideBars(names) {
  let sideBarList = {}
  names.forEach(function(item) {
    sideBar.push({
      title: item[1],
      collapsable: false,
      children: getMdFiles(item[0].toLowerCase())
    })
  })
  return sideBar
}

module.exports = {
  plugins: [
    '@vuepress/google-analytics',
    '@vuepress/last-updated'
  ],

  head: [
    ['link', { rel: 'icon', href: '/hakan-yalcinkaya-logo.png' }]
  ],

  title: 'Hakan Yalçınkaya',
  description: 'Hakan Yalçınkaya DevBlog',
  ga: 'UA-33596509-36',

  themeConfig: {
  	nav: [
  	    { text: 'Hakkımda', link: '/pages/about_me.html'},
  	    { text: 'İletişim', link: '/pages/contact.html'},
        { text: 'LinkedIn', link: 'https://www.linkedin.com/in/hakanyalcinkaya'},
        { text: 'GitHub', link: 'https://github.com/hakanyalcinkaya/'},
        { text: 'Medium', link: 'https://medium.com/@hakanyalcinkaya'},

  	],
  	sidebar: getSideBars(sideBarNames),
    logo: "/hakan-yalcinkaya-logo.png"
  }
}
