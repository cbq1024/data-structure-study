export default {
    index: {
        title: 'Home 👀',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true,
        }
    },
    '-': {
        type: 'separator'
    },
    demo: '案例 😛',
    '--': {
        type: 'separator'
    },
    company: {
        title: '联系我 🐉',
        type: 'menu',
        items: {
            about: {
                title: 'github',
                href: 'https://github.com/cbq1024'
            },
            contact: {
                title: 'email',
                href: 'mailto:caobq1024@gmai.com'
            }
        }
    }
}