#! /bin/sh

# kill any processes that might be lingering on the port
if ! [ -z "$(lsof -t -i :3000)" ]; then
    echo "Killing process at port 3000..."
    kill $(lsof -t -i :3000)
else
    echo "No process needed to be interrupted."
fi

# compile the source code into the distribution repository
~/development/casper/node_modules/.bin/babel ~/development/casper/src/ -d ~/development/casper/dist

# start running server.js, mute the output, and run in the background
echo "App is now running on port 3000!"
node ~/development/casper/dist/server.js > /dev/null&
