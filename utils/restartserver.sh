#!/bin/bash

PID="$(lsof -t -i :3000)"

if [ $PID ]
then
    echo "Killing process $PID at port :3000."
	kill $PID
	./restartserver.sh
else
	echo "Restarting server."
	eval "$(node $PWD/../bin/www > /dev/null &)"
fi