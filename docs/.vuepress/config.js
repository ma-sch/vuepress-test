module.exports = {
    title: 'TestDocu',
    description: 'Test Documentation',
    base: `/vuepress-test${process.env.VERSION_PATH || '/'}`,
	themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'About me', link: 'https://google.com' },
        ]
    }
}