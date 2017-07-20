This is repo for experimenting on Ractive Components and it's loaders.

RactiveLoad
=====
   Uses [ractive.load](https://github.com/ractivejs/ractive-load).

   This is a direct copy of example from this [documentation](https://github.com/ractivejs/component-spec/#available-loaders). To avoid problem below when using ractive-loader, use v0.7.2 ractive.js or get the ractive.js from the example [here](https://github.com/Rich-Harris/ractive-load-example). The latest version of ractive.js seems not compatible with ractive-load.js.
   
   Problem:

     ```
    Uncaught TypeError: e.Promise is not a constructor
    at ractive-load.min.js:1
    at m (ractive-load.min.js:1)
    at Function.R [as load] (ractive-load.min.js:1)
    at localhost/:10r
