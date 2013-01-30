/**
 * Load locales from js files
 */
define(['localesjs/en', 'localesjs/fr', 'localesjs/dev'], function(en, fr, dev) {
    var lang = {}, under =  require("underscore");
    for(i=0;i<arguments.length;i++){
        under.extend(lang,arguments[i]);
    }
    return lang;
});