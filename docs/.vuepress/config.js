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
  ['Python', 'Python'],
  ['Django', 'Django'],
  // ['JavaScript', 'JavaScript'],
  ['YouTube', 'YouTube'],
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
  	sidebar: getSideBars(sideBarNames)
  }
}
