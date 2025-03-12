With beta.30, the `getLocale` method called in the server always return the `preferredLanguage` without taking into account the `url` strategy.

Go to home page and change locale. Then go to `/lang-from-server` and you will see that the locale is not the one in the url but the browser preferredLanguage.
