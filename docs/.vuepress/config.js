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
        children: [
          '/django/django-admin-raw-fields',
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
          '/tools/makefile-kullanin',
          '/tools/markdown-ile-calismak',
          '/tools/neden-mac-kullaniyorum',
        ]
      }
  	]
  }
}

