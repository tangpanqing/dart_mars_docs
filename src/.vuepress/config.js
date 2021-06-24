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
          {
            title: '基础',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/zh/guide/',
              '/zh/guide/install',
              '/zh/guide/update',
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
              '/zh/use/upload',
              '/zh/use/download',
              '/zh/use/cache',
              '/zh/use/messageQueue',
            ]
          },
          {
            title: '数据库和模型',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/zh/db/',
              '/zh/db/connection',
              '/zh/db/curd',
              '/zh/db/link',
            ]
          },
          {
            title: '命令行',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/zh/cmd/',
              '/zh/cmd/create',
              '/zh/cmd/serve',
              '/zh/cmd/compile',
            ]
          },
          {
            title: '部署',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/zh/deploy/',
              '/zh/deploy/withNothting',
              '/zh/deploy/withNginx',
            ]
          },
          {
            title: '更多',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/zh/more/',
              '/zh/more/contact',
            ]
          },
        ]
      }
    }
  }
}