module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'DartMars',
      description: 'DartMars description',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'DartMars',
      description: 'DartMars 描述',
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
         
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        algolia: {},
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '起步', link: '/zh/guide/' }
        ],
        sidebar: [
          '/zh/guide/',
          '/zh/guide/install'
        ]
      }
    }
  }
}