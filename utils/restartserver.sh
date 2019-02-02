#!/bin/bash

PID="$(lsof -t -i :3000)"

if [ $PID ]
then
    echo "Killing process $PID at port :3000."
	kill $PID
	~/casper/utils/restartserver.sh
else
    echo "Restarting server. Please wait while the source code compiles..."
	~/casper/node_modules/.bin/babel ~/casper/src -d ~/casper/dist
    wait
    echo "Server now listening on port 3000!"
    node ~/casper/dist/server.js > /dev/null &
fi
