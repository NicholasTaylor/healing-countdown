# healing-countdown

**Live Demo:** [http://nicholastaylor.org/demos/healing-countdown/](http://nicholastaylor.org/demos/healing-countdown/)

This is just a simple countdown clock I built when I broke my hand in 2019. Recently, I refactored it into a React/Redux single page app.

# Install

```
git clone git@github.com:NicholasTaylor/healing-countdown.git
cd healing-countdown
npm install
```

# Config Setup

You need to do a little manual configuration at first. Just cd to the constants directory and change fonts-SAMPLE.js to fonts.js:
`cd src/constants && mv config-SAMPLE.js config.js`

If you want to use webfonts, just get the URI of the webfont CSS. Open the config.js file you just created. The file should be a simple JS object:

```
export const Config = {
	fontCSS: '',
	loadingMessage: 'Right Hand Loading',
	startDate: '01/01/20 00:00:00',
	endDate: '12/31/20 23:59:59'
}
```

A quick rundown of what these properties do:

## fontCSS
Controls where the app grabs its webfonts from. This is where you should paste your URL.

## loadingMessage
Whatever you want to have appear in the top center of the app.

## startDate
In mm/dd/yy hh:mm:ss format. Gives the start date/time of the countdown. Helps calculate the percentage.

## endDate
In mm/dd/yy hh:mm:ss format. Gives the end date/time of the countdown. Helps calculate the percentage.

## Changing Fonts in the App

In my implementation, I only used Proxima Nova. If you want to change this, open `src/styles/App.scss`. It's the `html, body` block at the very beginning:

```
html, body {
    background: linear-gradient(315deg, #383C5F, #B27266, #FDC58D);
    font-size: 100%;
    color: white;
    font-family: proxima-nova, 'helvetica neue', helvetica, arial, sans-serif;
    width: 100%;
    height: 100%;
  }
```

Replace the fonts with those of your choosing in both blocks and save.


# Testing, Building, Etc.

Now, you should be good to launch the app. All the typical React NPM commands apply:
* `npm start` – Starts the app in dev mode
* `npm test` – Starts the app in interactive watch mode
* `npm run build`  – Generates an optimized production build for you to upload to your site and run