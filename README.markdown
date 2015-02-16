Single page web applications are awesome. Recently I used React/Flux to build a simple application to test if I can get SEO working without being a real pain. The application would display products based on a category. The user would select a category from a drop-down. Once a category has been selected a list of products in that category would display.

I wanted to have a client-side router. I chose [react-router](https://github.com/rackt/react-router). Selecting a category would push a url to the browser history. The user would be able to refresh the browser with the new url and have the contents of the page be SEO friendly.

## the challenge

On the server-side I needed the following:

1. Initialize the React application.
2. Set the state for the React components.
3. Render the React components to html.
4. Return the page that will be SEO friendly. Passing the initial state of the components.

On the client-side I needed the following:

1. Initialize the React application.
2. Set the state for the React components using the initial state passed from the server. 
3. Render the React components. If the components contain the same initial state from the server, React is smart enough to know not to re-render the components.

The initial state passed from the server would be JSON stored in a javascript variable.

``` js
<script type="text/javascript">
	window.App={"products:[{"id": 1, "name":"Led Zeppelin"},{"id": 2, "name":"Bob Marley"}]};
</script>
```

I used the [serializer-javascript](https://github.com/yahoo/serialize-javascript) module to create the JSON on the server.

The client-side will use the JSON data to re-create the components! Now the components will contain the same state as they did on the server-side and have all their event handlers working.

Check out the repo on github: [react-flux-routing-seo](https://github.com/schempy/react-flux-routing-seo)

## modules used

* [ReactJS](https://github.com/facebook/react)
* [Flux](https://github.com/facebook/flux)
* [react-router](https://github.com/rackt/react-router)
* [Ecstatic (serve static content)](https://github.com/jesusabdullah/node-ecstatic)
* [EJS (templating)](https://github.com/mde/ejs)
* [serializer-javascript](https://github.com/yahoo/serialize-javascript)
* [superagent](https://github.com/visionmedia/superagent)
* [routes](https://github.com/aaronblohowiak/routes.js)

## running the app
Install all the node modules

``` js
$ npm install
```

Start the development server. This will use browserify to build the javascript
and watchify to re-build the javascript on any changes.

``` js
$ npm run start-dev
```

To start the server without any javascript watching

``` js
$ npm start
```

Point your browser to http://localhost:5000

Checkout the package.json file for the npm scripts.

