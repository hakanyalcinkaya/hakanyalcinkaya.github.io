module.exports = {
  plugins: [
    '@vuepress/blog',
    '@vuepress/google-analytics'
  ],
  
  title: 'Hakan Yalçınkaya',
  description: 'Hakan Yalçınkaya DevBlog',
  ga: 'UA-33596509-36',
  
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
          '/django-admin-raw-fields',
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

