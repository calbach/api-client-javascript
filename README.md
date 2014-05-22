api-client-javascript
=====================

****
###Important note: Currently, the variant APIs are still being tested and are not yet 
available to everyone. See [the docs](http://google-genomics.readthedocs.org/en/latest/auth_requirements.html#available-apis) for more details.
****


## Getting started

`index.html` is currently the only code file in this repository. You can open
that file up in your browser directly, but the javascript APIs won't work unless
the HTML is hosted somewhere. (The Bootstrap css won't load from a `file://` prefix either)

To run a simple HTTP server locally, you can use python:
```
cd api-client-javascript
python -m SimpleHTTPServer 8000
```

This will start a local server at `http://localhost:8000`.

To get data from the API, you will also need to use a real Client ID.

* First apply for access to the Genomics API by following the instructions at
  https://developers.google.com/genomics/

* Then create a project in the
  [Google Developers Console](https://console.developers.google.com>)
  or select an existing one.

* On the **APIs & auth** tab, select APIs and turn the Genomics API to ON

* On the **Credentials** tab, click **Create new Client ID** under
  the OAuth section.

* Set **Application type** to **Web application**, and change
  the **Authorized javascript origins** to `http://localhost:8000`

* Click the **Create Client ID** button

* From the newly created **Client ID for web application**, copy the `Client ID`
  value into the `clientId` variable inside `index.html`.
  The clientId line that used to look like this:

  `var clientId = 'your-client-id-goes-here';`

  should now be more like this:

  `var clientId = '12345.apps.googleusercontent.com';`

* Save the index.html file, reload the `http://localhost:8000` page, and
  all of the API calls should work.


Note: If you want to run the code on any other domain, make sure you update the
javascript origins on your Client ID to include that new domain.


## Code layout

There is only one file: `index.html`.

It uses [Bootstrap](getbootstrap.com), [jQuery](http://jquery.com/), and
[Google's javascript client library](https://developers.google.com/api-client-library/javascript/).

The file contains some simple html construction based on the `genePanels` json variable.
It then uses the [Genomics API](http://developers.google.com/genomics) 
to search variants and lookup genotype information for a callset.

The `Authorization handlers` at the very bottom of the file would be the
easiest to reuse in a different javascript integration.


## Project status

### Goals

* Provide an example of how to use the javascript client library.
* Demonstrate how the variant APIs can be used to get callset data.

### Current status

Code needs some cleanup, but not much else is planned at this time.
