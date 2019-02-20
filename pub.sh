#!/bin/bash

SOURCE="/Users/johnwargo/dev/azure-notification-hubs/ionic-3-push-sample"
DEST="/Users/johnwargo/dev/public-projects/azure-notification-hubs-ionic3-sample"

echo Copying files to pub folder
# cp -a -v . "$DEST"
cp ./* "$DEST/"
cp -r ./resources "$DEST/resources"
cp -r ./screenshots "$DEST/screenshots"
cp -r ./src "$DEST/src"
cp -r ./www "$DEST/www"

echo Replacing config files
cp -v "$SOURCE/config/config.ts" "$DEST/src/app/"

cd "$DEST"
echo Updating Git
updateStr="Updated "
updateStr+=$(date)
updateStr+=" "
updateStr+=$(time)
git add -A :/
git commit -m "${updateStr}"
git push
cd "$SOURCE"

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome https://github.com/jwargo/azure-notification-hubs-ionic3-sample