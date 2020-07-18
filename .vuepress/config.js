module.exports = {
    base: '/',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            {'Home':'/'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],

            '/bar/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],

            // fallback
            '/': [
                '',        /* / */
                'contact', /* /contact.html */
                'about'    /* /about.html */
            ]
        }
    }
}