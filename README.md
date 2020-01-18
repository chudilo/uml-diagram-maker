Some details of development process (for denskope sake, master of C language).

virtualenv .venv --python=python3

source .venv/bin/activate

pip install django   
//pip install djangorestframework
pip install django-webpack-loader

django-admin startproject umlproject

python manage.py migrate //???

python manage.py runserver

python manage.py startapp umlmaker

//Almost latest Nodejs and npm. For LTS Release   
sudo apt-get install curl python-software-properties   
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt-get install nodejs

npm init

npm install --save-dev axios bootstrap-sass jquery node-sass sass-loader vue webpack webpack-cli  @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/runtime babel-loader babel-preset-es2015 babel-preset-stage-0 css-loader style-loader vue-loader vue-hot-reload-api vue-template-compiler webpack-bundle-tracker
