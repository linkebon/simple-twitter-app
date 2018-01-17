Simple twitter app with scala 2.12.4, playframework 2.6.10, react 16.2.0 and redux 3.7.2
=
Example app how to use play framework, react and redux to fetch and display tweets.

Bootstrap 4 beta 3 doesn't support less so the css code is compiled an put inline instead of external css files.

This project have playframework as a backend and uses react and redux for frontend.
All js frontend code when bundeled is placed under ./public/js

The js files have to be included in a play view e.g.
index.scala.html
```
@()

@main("Simple twitter app") {
 <div>
 </div>
 <div id="reactView"></div>
 <script src="@routes.Assets.versioned("js/bundle_simpletwitterapp.js")"></script>
} 
```
Build
== 
npm needs to be installed globally and in path

universal dist
===
- ./build.sh

dev
==
start playserver with debug port 9999
1. /sbt run -jvm-debug 9999
2. cd frontend/react-redux-simple-twitter-app
3. npm install  
5. npm run devPlayServer
