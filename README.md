# adancarrasco_com

## How to use this Personal Website Template?

* [Getting started](#getting-started)
* [TODO](#todo)

## Getting started

Run `npm install` to install the needed dependencies.

There are four JSON files which you'll need to update to see reflected the changes with your information.

* `personalDetails.json` - The personal details such as About, Profile pic, name, email, etc.
* `skills.json` - Your skills listed in an array of objects.
* `experience.json` - Fill this with your work experience information: working periods, company names, description, location, company website, etc.
* `projects.json` - If you have any projects you can fill this and those will be listed as in the template, otherwise they won't be shown. Here you can also add additional information you'll like to show in each project page.

Every JSON has defined keys where you need to paste your information.

## TODO

* Make it optional to fetch the data form a Firebase project.
* Define variables in a theme.scss to customize fonts and colors.
* If any of the JSON files are not defined just don't render the section

<!-- ### Moment.js locales are missing

If you use a [Moment.js](https://momentjs.com/), you might notice that only the English locale is available by default. This is because the locale files are large, and you probably only need a subset of [all the locales provided by Moment.js](https://momentjs.com/#multiple-locale-support).

To add a specific Moment.js locale to your bundle, you need to import it explicitly.<br>
For example:

```js
import moment from 'moment';
import 'moment/locale/fr';
```

If import multiple locales this way, you can later switch between them by calling `moment.locale()` with the locale name:

```js
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/es';

// ...

moment.locale('fr');
```
 -->
