#!/bin/bash
if [ ! -e .gitignore ] 
then
    touch .gitignore
    echo '.gitignore' >> .gitignore
    echo 'node_modules/*' >> .gitignore
    echo 'dist/*' >> .gitignore
fi
 
# install 
npm i