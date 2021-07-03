module.exports = {
  dest: './docs',
  base: '/dart_mars_docs/',
  markdown: {
    lineNumbers: true
  },
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
          { text: '首页', link: '/zh/' },
          { text: '起步', link: '/zh/guide/' }
        ],
        sidebar: {
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
          { text: '起步', link: '/zh/guide/' },
          { text: 'GitHub', link: 'https://github.com/tangpanqing/dart_mars' }
        ],
        sidebar: [
          {
            title: '基础',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/zh/guide/',
              '/zh/guide/install',
            ]
          },
          {
            title: '使用',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/zh/use/',
              '/zh/use/env',
              '/zh/use/route',
              '/zh/use/controller',
              '/zh/use/request',
              '/zh/use/response',
              '/zh/use/verify',
              '/zh/use/uploadAndDownload',
              '/zh/use/cache',
              '/zh/use/messageQueue',
              '/zh/use/deploy',
              '/zh/use/cmd',
              '/zh/use/log',
            ]
          },
          {
            title: '数据库和模型',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/zh/db/',
              '/zh/db/curd',
              '/zh/db/link',
              '/zh/db/condition',
              '/zh/db/trans',
            ]
          },
          {
            title: '更多',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/zh/more/',
            ]
          },
        ]
      }
    }
  }
}