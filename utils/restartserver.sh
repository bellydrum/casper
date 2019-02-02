#!/bin/bash

PID="$(lsof -t -i :3000)"

if [ $PID ]
then
    echo "Killing process $PID at port :3000."
	kill $PID
	~/development/casper/utils/restartserver.sh
else
    echo "Restarting server. Please wait while the source code compiles..."
	~/development/casper/node_modules/.bin/babel ~/development/casper/src -d ~/development/casper/dist
    wait
    echo "Server now listening on port 3000!"
    node ~/development/casper/dist/server.js > /dev/null &
fi
