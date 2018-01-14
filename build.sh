#!/usr/bin/env bash
cd frontend/react-redux-simple-twitter-app/
npm install
cd ../../
./sbt clean buildFrontends packageZipTarball