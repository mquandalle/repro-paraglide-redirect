With beta-26 I don't understand how to use `strategy: ['url', 'preferredLanguage'],`. I want the locale to always be included in the url and to take precedence over the preferredLanguage strategy (`https://mysite.com/en/path`, same for `de`), but if there is no locale in the url, then I want the user to be redirected to the preferredLanguage url. I have set my browser favorite language as `de` but I am always redirected to `en` (baseLocale) with the following config:

```js
paraglideVitePlugin({
    // [...]
    strategy: ['url', 'preferredLanguage'],
    urlPatterns: [
        {
            pattern: ':protocol://:domain(.*)::port?/:locale(en|de)?/:path(.*)?',
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
                en: { locale: 'en' },
                de: { locale: 'de' }
            }
        }
    ]
}),
```
