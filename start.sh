#!/bin/bash

echo "Deployment started..."

git pull origin master

source ~/.nvm/nvm.sh
nvm use 20

echo "Installing dependencies..."

yarn install

echo "Building..."

yarn build

rsync --delete -rav build /var/www/country-catalogue

echo "Deployment finished..."