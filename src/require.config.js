// // This file adds extra configuration for RequireJS in the
// // devserver. For external libs, such as @ngrx, that ship with
// // unamed AMD modules, RequireJS needs to be configured so that
// // it can load the approriate script from the server for the
// // external instead of having that script included in the bundle.
// //
// // For example, we configure RequireJS to load /store.umd.min.js
// // from the server when it encounters require('@ngrx/store').
// TODO: IS THIS THE RIGHT PATH?
// require.config({paths: {'@ionic-native/in-app-browser': 'ngx/index'}});
