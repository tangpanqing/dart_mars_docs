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
            title: '基础',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/zh/guide/',
              '/zh/guide/install',
              '/zh/guide/proce',
              '/zh/guide/stuck'
            ]
          },
          {
            title: '进阶',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/zh/next/',
              '/zh/next/env',
              '/zh/next/route',
              '/zh/next/controller',
              '/zh/next/request',
              '/zh/next/response',
              '/zh/next/db',
              '/zh/next/model',
              '/zh/next/verify',
            ]
          },
          {
            title: '高级',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/zh/adv/',
            ]
          },
          {
            title: '命令行',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/zh/cmd/',
            ]
          },
          {
            title: '更多',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
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