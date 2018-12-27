module.exports = {
  plugins: ['@vuepress/blog'],
  
  title: 'Hakan Yalçınkaya',
  description: 'Hakan Yalçınkaya DevBlog',
  
  themeConfig: {
  	nav: [
  	{ text: 'Hakkımda', link: './about_me.html'},
  	{ text: 'İletişim', link: './contact.html'},
  	], 
  	sidebar: [
    {
      title: 'Sayfalar',
      collapsable: false,
      children: [
          ['/', 'Ana Sayfa'],
          '/hello-world',
          '/about_me',
          '/contact',
        ]
      },
      {
        title: 'Python',
        collapsable: false,
        children: [
        'python-ve-kod-yazma-sanati',
        'statik-web-sitesi-olusturmak-icin-pelican',
        ]
      },
      {
        title: 'Django',
        collapsable: false,
        children: [
        ]
      },
      {
        title: 'JavaScript',
        collapsable: false,
        children: [
        ]
      },
      {
        title: 'Araçlar',
        collapsable: false,
        children: [
          '/makefile-kullanin',
          '/markdown-ile-calismak',
          '/neden-mac-kullaniyorum',
        ]
      }
  	]
  }
}

