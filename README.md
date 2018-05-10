# Barebone Chrome extension boilerplate

This is a Chrome extension boilerplate designed to only inject a single script to some targetted websites.

## Usage

To use it, run the following commands:

```bash
$ yarn # installs dependencies
$ yarn start # start webpack in watch mode
```

Then, go to `chrome://extensions`, click on "load unpacked extension" and select the `dist` folder. Now you're all set!

## Build

When you're ready to use it, run the following command:

```bash
$ yarn build
```

This will basically build the app and minify it.
