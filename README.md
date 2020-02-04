# healing-countdown

**Live Demo:** [http://nicholastaylor.org/demos/healing-countdown/](http://nicholastaylor.org/demos/healing-countdown/)

This is just a simple countdown clock I built when I broke my hand in 2019. Recently, I refactored it into a React/Redux single page app.

# Initial Install

This assumes basic familiarity with:
* Command-line shell (ex. Apple's Terminal app)
* An IDE (ex. Sublime Text, PhpStorm)
* NPM
* HTML, CSS, Javascript (React and Redux, specifically)
* A webfont provider (ex. Adobe Fonts, Google Fonts)

After downloading and unzipping the zip off GitHub, open your shell and cd over to the unzipped directory. In the root of the unzipped directory, simply run `npm install` to generate node_modules and grab all your dependencies.

# Config Setup

You're most of the way. Now we just have to configure the font file. From the root of this project folder go to the constants directory and change fonts-SAMPLE.js to fonts.js:
`cd src/constants && mv config-SAMPLE.js config.js`

Now, if you have certain webfonts you want to use on your implementation, go to the webfont provider of your choice and build your font package. These providers typically give you a URL to put into the `<link rel="stylesheet">` tag. Copy that URL to your clipboard. warm up the IDE of your choice and open this config.js file. The file should be a simple JS object:

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

In my implementation, I used the fonts Futura Condensed and Unibody 8. If you use different fonts, there is an extra step here. Simply go to src/App.css in your IDE. You're looking to change 2 CSS blocks.

The first one controls most of the font styling for the app:

```
h1, h2, h3, h4, h5, h6 {
    font-family: futura-pt-condensed, helvetica, arial, sans-serif;
    font-weight: 500; 
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    line-height: 1em;
}
```

The second controls the percentage indicator in the loading bar:


```
#currentProgress p {
    font-size: 1.25rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 0;
    margin: 0;
    color: white;
    font-family: unibody-8-new, helvetica, arial, sans-serif;
    font-weight: 400;
}
```

Replace the fonts with those of your choosing in both blocks and save.


# Testing, Building, Etc.

Now, you should be good to launch the app. All the typical React NPM commands apply:
* `npm start` – Starts the app in dev mode
* `npm test` – Starts the app in interactive watch mode
* `npm run build`  – Generates an optimized production build for you to upload to your site and run

Have fun!
-Nicholas Taylor
