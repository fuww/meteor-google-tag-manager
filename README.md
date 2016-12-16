# Meteor Google Tag Manager Loader Package

## Install

```sh
meteor add fuww:google-tag-manager
```

## Usage

In the server code add:

```js
addGoogleTagManager('GTM-XXXX');
```

This will insert the Google Tag Manager script and the iframe to
the initial page source.
