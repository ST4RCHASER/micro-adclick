#!/bin/bash
#
# Software installer for micro-adclick
#
# @author: ST4RCHASER <underscore@starchaser.me>
# @license: GNU v3
# @date: July 20, 2021
# @version: 1.1
##
if [ "$EUID" -ne 0 ]
  then echo "Please run as root or sudo"
  exit
fi
echo 'Update using git...'
git reset --hard HEAD
git pull
echo 'Installing nodejs...'
sudo apt-get install -y nodejs
echo 'Installing npm...'
sudo apt-get install -y npm
echo 'Installing yarn...'
sudo npm install --global yarn
echo 'Upgradeing nodejs...'
sudo npm install -g n
sudo n stable
echo 'Installing chromium-browser...'
sudo apt install -y chromium-browser
echo 'Settingup permission...'
chmod 777 -R *
echo 'Installing dependencies...'
yarn
echo 'Building script'
yarn build
echo 'Script finished!'
echo 'Try "yarn dev" to run micro-autoad'